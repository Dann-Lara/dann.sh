// ============================================
// TRANSITION MANAGER - Professional Transitions
// Inspired by modern minimalist sites
// ============================================

import anime from 'https://cdn.skypack.dev/animejs@3.2.1';

export const TransitionManager = {
    
    transition(params) {
        const { currentSection, nextSection, currentIndex, nextIndex, direction, config, onComplete } = params;
        
        // Prepare sections
        nextSection.style.visibility = 'visible';
        nextSection.style.zIndex = '15';
        currentSection.style.zIndex = '10';
        
        // Choose transition based on section type
        const transitionType = this.getTransitionType(config);
        
        const timeline = anime.timeline({
            duration: 1200,
            easing: 'cubicBezier(0.76, 0, 0.24, 1)', // Custom smooth easing
            complete: () => {
                if (onComplete) onComplete();
            }
        });
        
        // Execute appropriate transition
        switch(transitionType) {
            case 'reveal':
                this.revealTransition(timeline, currentSection, nextSection, direction);
                break;
            case 'dissolve':
                this.dissolveTransition(timeline, currentSection, nextSection);
                break;
            case 'slide':
                this.slideTransition(timeline, currentSection, nextSection, direction);
                break;
            default:
                this.dissolveTransition(timeline, currentSection, nextSection);
        }
        
        // Subtle background shift
        this.animateBackground(timeline, nextIndex);
    },
    
    getTransitionType(config) {
        // Hero and Projects: Reveal (dramatic)
        if (config.id === 'hero' || config.id.includes('project')) {
            return 'reveal';
        }
        
        // AI sections: Dissolve (smooth)
        if (config.id.includes('ai-')) {
            return 'dissolve';
        }
        
        // Everything else: Slide (elegant)
        return 'slide';
    },
    
    // ==========================================
    // REVEAL - Curtain-like reveal
    // ==========================================
    revealTransition(timeline, current, next, direction) {
        const yOffset = direction > 0 ? 30 : -30;
        
        timeline
            .add({
                targets: current,
                opacity: [1, 0],
                translateY: [0, -yOffset],
                scale: [1, 0.95],
                duration: 700,
                easing: 'easeInCubic'
            })
            .add({
                targets: next,
                opacity: [0, 1],
                translateY: [yOffset, 0],
                scale: [1.05, 1],
                duration: 800,
                easing: 'easeOutCubic'
            }, 400); // Overlap
    },
    
    // ==========================================
    // DISSOLVE - Fade with blur
    // ==========================================
    dissolveTransition(timeline, current, next) {
        timeline
            .add({
                targets: current,
                opacity: [1, 0],
                filter: ['blur(0px)', 'blur(8px)'],
                duration: 600,
                easing: 'easeInQuad'
            })
            .add({
                targets: next,
                opacity: [0, 1],
                filter: ['blur(8px)', 'blur(0px)'],
                duration: 700,
                easing: 'easeOutQuad'
            }, 300);
    },
    
    // ==========================================
    // SLIDE - Smooth slide with fade
    // ==========================================
    slideTransition(timeline, current, next, direction) {
        const slideAmount = 50;
        const slideDir = direction > 0 ? -slideAmount : slideAmount;
        
        timeline
            .add({
                targets: current,
                opacity: [1, 0],
                translateY: [0, slideDir],
                duration: 600,
                easing: 'easeInQuad'
            })
            .add({
                targets: next,
                opacity: [0, 1],
                translateY: [-slideDir, 0],
                duration: 700,
                easing: 'easeOutQuad'
            }, 250);
    },
    
    // ==========================================
    // BACKGROUND
    // ==========================================
    animateBackground(timeline, nextIndex) {
        const totalSections = 16;
        const bgOpacity = nextIndex === totalSections - 1 ? 0.5 : 0.4;
        
        timeline.add({
            targets: '#canvas-bg',
            opacity: bgOpacity,
            duration: 1000,
            easing: 'easeOutQuad'
        }, 0);
    }
};