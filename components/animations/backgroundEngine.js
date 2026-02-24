// ============================================
// BACKGROUND ENGINE - Simple & Visible
// ============================================

import anime from 'https://esm.sh/animejs@3.2.1?bundle';

export const BackgroundEngine = {
    isPaused: false,
    currentStage: 0,
    
    init() {
        
        const bgContainer = document.getElementById('canvas-bg');
        if (!bgContainer) {
            console.error('❌ #canvas-bg NOT FOUND');
            return;
        }
        bgContainer.style.opacity = '1';
        bgContainer.style.zIndex = '1';
        
        bgContainer.innerHTML = `
            <div style="position: absolute; inset: 0; pointer-events: none;">
                <!-- Visible diagonal lines -->
                <div class="line" style="position: absolute; width: 2px; height: 100%; left: 20%; top: 0; background: linear-gradient(to bottom, hsl(var(--primary)) 0%, transparent 100%); opacity: 0.3; transform: rotate(15deg);"></div>
                <div class="line" style="position: absolute; width: 2px; height: 100%; left: 50%; top: 0; background: linear-gradient(to bottom, hsl(var(--accent)) 0%, transparent 100%); opacity: 0.25; transform: rotate(-10deg);"></div>
                <div class="line" style="position: absolute; width: 2px; height: 100%; left: 80%; top: 0; background: linear-gradient(to bottom, hsl(var(--primary)) 0%, transparent 100%); opacity: 0.3; transform: rotate(12deg);"></div>
                
                <!-- Visible dots -->
                <div class="dot" style="position: absolute; width: 6px; height: 6px; border-radius: 50%; background: hsl(var(--accent)); opacity: 0.4; left: 25%; top: 30%;"></div>
                <div class="dot" style="position: absolute; width: 8px; height: 8px; border-radius: 50%; background: hsl(var(--primary)); opacity: 0.3; left: 60%; top: 50%;"></div>
                <div class="dot" style="position: absolute; width: 6px; height: 6px; border-radius: 50%; background: hsl(var(--accent)); opacity: 0.35; left: 40%; top: 70%;"></div>
                <div class="dot" style="position: absolute; width: 7px; height: 7px; border-radius: 50%; background: hsl(var(--primary)); opacity: 0.3; left: 75%; top: 40%;"></div>
                <div class="dot" style="position: absolute; width: 5px; height: 5px; border-radius: 50%; background: hsl(var(--accent)); opacity: 0.4; left: 15%; top: 60%;"></div>
            </div>
        `;
        
        // Animate
        setTimeout(() => {
            
            const lines = document.querySelectorAll('.line');
            const dots = document.querySelectorAll('.dot');
            
            console.log('Found', lines.length, 'lines and', dots.length, 'dots');
            
            // Animate lines
            lines.forEach((line, i) => {
                anime({
                    targets: line,
                    translateY: [0, 20, 0],
                    opacity: [0.2, 0.35, 0.2],
                    duration: 5000 + (i * 1000),
                    easing: 'easeInOutSine',
                    loop: true,
                    delay: i * 500
                });
            });
            
            // Animate dots
            dots.forEach((dot, i) => {
                anime({
                    targets: dot,
                    translateX: [0, anime.random(-15, 15), 0],
                    translateY: [0, anime.random(-15, 15), 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    duration: 4000 + (i * 400),
                    easing: 'easeInOutQuad',
                    loop: true,
                    delay: i * 300
                });
            });
            
        }, 200);
    },
    
    updateStage(index) {
        this.currentStage = index;
    },
    
    pauseAllAnimations() {
        this.isPaused = true;
        anime.running.forEach(a => a.pause());
    },
    
    resumeAllAnimations() {
        this.isPaused = false;
        anime.running.forEach(a => a.play());
    }
};