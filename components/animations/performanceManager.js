// Sistema de Monitoreo de Rendimiento y Calidad Adaptativa
export const PerformanceManager = {
    // Métricas de rendimiento
    fps: 60,
    frameCount: 0,
    lastTime: performance.now(),
    fpsHistory: [],
    memoryWarningThreshold: 0.85, // 85% de uso de memoria
    
    // Configuración de calidad
    qualityLevel: 'high', // 'low', 'medium', 'high', 'ultra'
    autoAdjust: true,
    
    // Capacidades del dispositivo
    deviceCapabilities: {
        cores: navigator.hardwareConcurrency || 4,
        memory: navigator.deviceMemory || 4, // GB
        connection: null,
        isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
        isLowEnd: false
    },
    
    // Configuraciones por nivel de calidad
    qualitySettings: {
        low: {
            particleCount: 40,
            floatingParticles: 10,
            neuralLines: 20,
            orbitalRings: 2,
            glowEnabled: false,
            animationDuration: 1500,
            useRequestAnimationFrame: false,
            updateInterval: 100, // ms
            maxFPS: 30
        },
        medium: {
            particleCount: 60,
            floatingParticles: 20,
            neuralLines: 30,
            orbitalRings: 3,
            glowEnabled: true,
            animationDuration: 2000,
            useRequestAnimationFrame: true,
            updateInterval: 50,
            maxFPS: 45
        },
        high: {
            particleCount: 80,
            floatingParticles: 30,
            neuralLines: 40,
            orbitalRings: 3,
            glowEnabled: true,
            animationDuration: 2500,
            useRequestAnimationFrame: true,
            updateInterval: 16,
            maxFPS: 60
        },
        ultra: {
            particleCount: 100,
            floatingParticles: 40,
            neuralLines: 50,
            orbitalRings: 4,
            glowEnabled: true,
            animationDuration: 3000,
            useRequestAnimationFrame: true,
            updateInterval: 16,
            maxFPS: 60
        }
    },
    
    init() {
        this.detectCapabilities();
        this.determineQualityLevel();
        this.startMonitoring();
        
        // console.log('🎮 Performance Manager initialized');
        // console.log('📊 Device Capabilities:', this.deviceCapabilities);
        // console.log('⚡ Quality Level:', this.qualityLevel);
        
        return this.getCurrentSettings();
    },
    
    detectCapabilities() {
        const caps = this.deviceCapabilities;
        
        // Detectar conexión
        if ('connection' in navigator) {
            caps.connection = navigator.connection.effectiveType;
        }
        
        // Detectar dispositivo de gama baja
        caps.isLowEnd = (
            caps.cores <= 2 ||
            caps.memory <= 2 ||
            caps.isMobile && caps.cores <= 4 ||
            caps.connection === 'slow-2g' ||
            caps.connection === '2g'
        );
        
        // Detectar GPU débil usando WebGL
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    caps.gpuInfo = renderer;
                    
                    // Lista de GPUs conocidas de gama baja
                    const lowEndGPUs = ['mali-400', 'mali-450', 'adreno 3', 'powervr sgx'];
                    caps.isLowEnd = caps.isLowEnd || lowEndGPUs.some(gpu => 
                        renderer.toLowerCase().includes(gpu)
                    );
                }
            }
        } catch (e) {
            console.warn('GPU detection failed:', e);
        }
    },
    
    determineQualityLevel() {
        const caps = this.deviceCapabilities;
        
        // Forzar bajo rendimiento si es un dispositivo limitado
        if (caps.isLowEnd) {
            this.qualityLevel = 'low';
            return;
        }
        
        // Dispositivos móviles de gama media
        if (caps.isMobile) {
            this.qualityLevel = caps.memory >= 6 ? 'high' : 'medium';
            return;
        }
        
        // Computadoras de escritorio
        if (caps.cores >= 8 && caps.memory >= 8) {
            this.qualityLevel = 'ultra';
        } else if (caps.cores >= 4 && caps.memory >= 4) {
            this.qualityLevel = 'high';
        } else {
            this.qualityLevel = 'medium';
        }
    },
    
    getCurrentSettings() {
        return this.qualitySettings[this.qualityLevel];
    },
    
    startMonitoring() {
        if (!this.autoAdjust) return;
        
        // Monitorear FPS
        this.monitorFPS();
        
        // Monitorear memoria cada 5 segundos
        setInterval(() => {
            this.checkMemory();
        }, 5000);
        
        // Escuchar cambios de visibilidad de página
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimations();
            } else {
                this.resumeAnimations();
            }
        });
    },
    
    monitorFPS() {
        const measure = () => {
            this.frameCount++;
            const currentTime = performance.now();
            const delta = currentTime - this.lastTime;
            
            if (delta >= 1000) {
                this.fps = Math.round((this.frameCount * 1000) / delta);
                this.fpsHistory.push(this.fps);
                
                // Mantener solo los últimos 10 valores
                if (this.fpsHistory.length > 10) {
                    this.fpsHistory.shift();
                }
                
                // Calcular FPS promedio
                const avgFPS = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
                
                // Ajustar calidad si FPS es consistentemente bajo
                if (avgFPS < 30 && this.qualityLevel !== 'low') {
                    this.downgradeQuality();
                } else if (avgFPS > 55 && this.qualityLevel !== 'ultra') {
                    // Solo mejorar si hay margen de rendimiento
                    this.upgradeQuality();
                }
                
                this.frameCount = 0;
                this.lastTime = currentTime;
            }
            
            requestAnimationFrame(measure);
        };
        
        requestAnimationFrame(measure);
    },
    
    checkMemory() {
        // Solo disponible en Chrome/Edge
        if (performance.memory) {
            const memoryUsage = performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit;
            
            // Si el uso de memoria es crítico, reducir calidad
            if (memoryUsage > this.memoryWarningThreshold) {
                console.warn('⚠️ High memory usage detected:', (memoryUsage * 100).toFixed(1) + '%');
                this.downgradeQuality();
                this.cleanupMemory();
            }
        }
    },
    
    downgradeQuality() {
        const levels = ['ultra', 'high', 'medium', 'low'];
        const currentIndex = levels.indexOf(this.qualityLevel);
        
        if (currentIndex < levels.length - 1) {
            this.qualityLevel = levels[currentIndex + 1];
            console.log('📉 Quality downgraded to:', this.qualityLevel);
            this.applyQualitySettings();
        }
    },
    
    upgradeQuality() {
        const levels = ['low', 'medium', 'high', 'ultra'];
        const currentIndex = levels.indexOf(this.qualityLevel);
        
        // Solo mejorar si el dispositivo no es de gama baja
        if (currentIndex < levels.length - 1 && !this.deviceCapabilities.isLowEnd) {
            this.qualityLevel = levels[currentIndex + 1];
            console.log('📈 Quality upgraded to:', this.qualityLevel);
            this.applyQualitySettings();
        }
    },
    
    applyQualitySettings() {
        // Disparar evento personalizado para que BackgroundEngine escuche
        window.dispatchEvent(new CustomEvent('qualityChanged', {
            detail: this.getCurrentSettings()
        }));
    },
    
    cleanupMemory() {
        // Forzar garbage collection si está disponible (solo en desarrollo)
        if (window.gc) {
            window.gc();
        }
        
        // Limpiar arrays de historial
        if (this.fpsHistory.length > 5) {
            this.fpsHistory = this.fpsHistory.slice(-5);
        }
    },
    
    pauseAnimations() {
        window.dispatchEvent(new CustomEvent('animationPause'));
    },
    
    resumeAnimations() {
        window.dispatchEvent(new CustomEvent('animationResume'));
    },
    
    // Método para obtener estadísticas en tiempo real
    getStats() {
        return {
            fps: this.fps,
            avgFPS: this.fpsHistory.length > 0 
                ? Math.round(this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length)
                : 0,
            quality: this.qualityLevel,
            memory: performance.memory ? {
                used: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB',
                total: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB',
                limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + ' MB',
                usage: ((performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100).toFixed(1) + '%'
            } : 'Not available',
            device: this.deviceCapabilities
        };
    },
    
    // Método para forzar un nivel de calidad manualmente
    setQuality(level) {
        if (this.qualitySettings[level]) {
            this.qualityLevel = level;
            this.autoAdjust = false; // Desactivar ajuste automático
            this.applyQualitySettings();
            console.log('🎨 Quality manually set to:', level);
        }
    },
    
    // Método para mostrar stats en pantalla (debug)
    showStats() {
        const statsDiv = document.createElement('div');
        statsDiv.id = 'performance-stats';
        statsDiv.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: #00f2ff;
            padding: 10px;
            font-family: monospace;
            font-size: 12px;
            z-index: 9999;
            border-radius: 4px;
            min-width: 200px;
        `;
        document.body.appendChild(statsDiv);
        
        setInterval(() => {
            const stats = this.getStats();
            statsDiv.innerHTML = `
                <div><strong>FPS:</strong> ${stats.fps} (avg: ${stats.avgFPS})</div>
                <div><strong>Quality:</strong> ${stats.quality}</div>
                ${stats.memory !== 'Not available' ? `
                    <div><strong>Memory:</strong> ${stats.memory.used} / ${stats.memory.limit}</div>
                    <div><strong>Usage:</strong> ${stats.memory.usage}</div>
                ` : ''}
                <div><strong>Cores:</strong> ${stats.device.cores}</div>
                <div><strong>RAM:</strong> ${stats.device.memory}GB</div>
                <div><strong>Device:</strong> ${stats.device.isMobile ? 'Mobile' : 'Desktop'}</div>
            `;
        }, 1000);
    }
};