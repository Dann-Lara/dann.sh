// ============================================
// SCROLL CONTROLLER
// Smooth section-based scroll (inspired by d2c-lifescience.com)
// ============================================

import anime from 'https://esm.sh/animejs@3.2.1?bundle';
import { BackgroundEngine } from './backgroundEngine.js';
import { TransitionManager } from './transitionManager.js';

export const ScrollController = {
    currentIndex: 0,
    isAnimating: false,
    sections: [],
    sectionConfigs: [],
    debugMode: false,

    // Event listener references for cleanup
    wheelListener: null,
    keyListener: null,
    touchStartListener: null,
    touchEndListener: null,

    // Scroll accumulation
    scrollAccumulator: 0,
    scrollThreshold: 40,
    scrollTimeout: null,
    lastScrollTime: 0,
    scrollCooldown: 400,

    init(configs) {
        // Always cleanup first (handles lang change re-renders)
        this.cleanup();

        window.ScrollController = this;
        this.sectionConfigs = configs;
        this.sections = document.querySelectorAll('.section-view');
        this.currentIndex = 0;

        this.setupWheelScroll();
        this.setupKeyboardNav();
        this.setupDotNavigation();
        this.setupTouchScroll();

        // console.log(`✅ ScrollController: ${this.sections.length} sections registered`);
    },

    cleanup() {
        if (this.wheelListener) {
            window.removeEventListener('wheel', this.wheelListener);
            this.wheelListener = null;
        }
        if (this.keyListener) {
            window.removeEventListener('keydown', this.keyListener);
            this.keyListener = null;
        }
        if (this.touchStartListener) {
            window.removeEventListener('touchstart', this.touchStartListener);
            this.touchStartListener = null;
        }
        if (this.touchEndListener) {
            window.removeEventListener('touchend', this.touchEndListener);
            this.touchEndListener = null;
        }

        this.currentIndex = 0;
        this.isAnimating = false;
        this.scrollAccumulator = 0;
    },

    // ==========================================
    // WHEEL SCROLL
    // ==========================================
    setupWheelScroll() {
        let wheelTimeout = null;

        this.wheelListener = (e) => {
            e.preventDefault();

            const now = Date.now();
            if (this.isAnimating || now - this.lastScrollTime < this.scrollCooldown) return;

            this.scrollAccumulator += e.deltaY;

            if (wheelTimeout) clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => { this.scrollAccumulator = 0; }, 150);

            if (Math.abs(this.scrollAccumulator) >= this.scrollThreshold) {
                const direction = this.scrollAccumulator > 0 ? 1 : -1;
                this.navigateToSection(this.currentIndex + direction);
                this.scrollAccumulator = 0;
                this.lastScrollTime = now;
            }
        };

        window.addEventListener('wheel', this.wheelListener, { passive: false });
    },

    // ==========================================
    // KEYBOARD NAVIGATION
    // ==========================================
    setupKeyboardNav() {
        this.keyListener = (e) => {
            if (this.isAnimating) return;

            let targetIndex = this.currentIndex;

            switch (e.key) {
                case 'ArrowDown': case 'PageDown': case ' ':
                    e.preventDefault(); targetIndex++; break;
                case 'ArrowUp': case 'PageUp':
                    e.preventDefault(); targetIndex--; break;
                case 'Home':
                    e.preventDefault(); targetIndex = 0; break;
                case 'End':
                    e.preventDefault(); targetIndex = this.sections.length - 1; break;
                default: return;
            }

            this.navigateToSection(targetIndex);
        };

        window.addEventListener('keydown', this.keyListener);
    },

    // ==========================================
    // DOT NAVIGATION
    // ==========================================
    setupDotNavigation() {
        document.querySelectorAll('.scroll-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isAnimating && index !== this.currentIndex) {
                    this.navigateToSection(index);
                }
            });

            dot.addEventListener('mouseenter', () => {
                if (index !== this.currentIndex) {
                    dot.style.opacity = '0.5';
                    dot.style.transform = 'scale(1.1)';
                }
            });

            dot.addEventListener('mouseleave', () => {
                if (index !== this.currentIndex) {
                    dot.style.opacity = '0.2';
                    dot.style.transform = 'scale(1)';
                }
            });
        });
    },

    // ==========================================
    // TOUCH SCROLL
    // ==========================================
    setupTouchScroll() {
        let touchStartY = 0;

        this.touchStartListener = (e) => {
            touchStartY = e.changedTouches[0].screenY;
        };

        this.touchEndListener = (e) => {
            if (this.isAnimating) return;
            const deltaY = touchStartY - e.changedTouches[0].screenY;
            if (Math.abs(deltaY) > 50) {
                this.navigateToSection(this.currentIndex + (deltaY > 0 ? 1 : -1));
            }
        };

        window.addEventListener('touchstart', this.touchStartListener, { passive: true });
        window.addEventListener('touchend', this.touchEndListener, { passive: true });
    },

    // ==========================================
    // NAVIGATE BY SECTION ID (for navbar/footer)
    // ==========================================
    navigateTo(sectionId) {
        const index = Array.from(this.sections).findIndex(s => s.id === sectionId);
        if (index !== -1) this.navigateToSection(index);
    },

    // ==========================================
    // NAVIGATE TO SECTION
    // ==========================================
    navigateToSection(targetIndex) {
        if (targetIndex < 0 || targetIndex >= this.sections.length) return;
        if (targetIndex === this.currentIndex) return;

        if (this.debugMode) console.log(`📍 Navigate: ${this.currentIndex} → ${targetIndex}`);

        const direction = targetIndex > this.currentIndex ? 1 : -1;
        const currentSection = this.sections[this.currentIndex];
        const nextSection = this.sections[targetIndex];

        this.isAnimating = true;

        BackgroundEngine.updateStage(targetIndex);

        TransitionManager.transition({
            currentSection,
            nextSection,
            currentIndex: this.currentIndex,
            nextIndex: targetIndex,
            direction,
            config: this.sectionConfigs[targetIndex],
            onComplete: () => this.completeTransition(currentSection, nextSection, targetIndex)
        });

        this.updateScrollIndicator(targetIndex);
    },

    // ==========================================
    // COMPLETE TRANSITION
    // ==========================================
    completeTransition(currentSection, nextSection, targetIndex) {
        currentSection.classList.remove('active');
        currentSection.classList.add('pointer-events-none');

        nextSection.classList.add('active');
        nextSection.classList.remove('pointer-events-none');

        currentSection.style.transform = '';
        currentSection.style.opacity = '';
        currentSection.style.filter = '';

        nextSection.style.transform = '';
        nextSection.style.filter = '';

        this.currentIndex = targetIndex;
        this.isAnimating = false;

        if (this.debugMode) console.log(`✅ Transition complete: Section ${targetIndex}`);
    },

    // ==========================================
    // UPDATE SCROLL INDICATOR
    // ==========================================
    updateScrollIndicator(index) {
        document.querySelectorAll('.scroll-dot').forEach((dot, i) => {
            if (i === index) {
                anime({ targets: dot, scale: [1, 1.4, 1.25], opacity: [0.2, 1], duration: 600, easing: 'easeOutElastic(1, 0.6)' });
            } else {
                anime({ targets: dot, scale: 1, opacity: 0.2, duration: 400, easing: 'easeOutQuad' });
            }
        });
    }
};