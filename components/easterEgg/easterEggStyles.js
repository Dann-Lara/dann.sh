// src/components/easterEgg/easterEggStyles.js
// Todas las animaciones CSS del easter egg en un solo lugar.

export const MODAL_STYLES = `
    /* ── Transiciones de fase ── */
    .story-phase {
        opacity: 0;
        transform: scale(0.92) translateY(8px);
        transition: opacity 0.55s cubic-bezier(0.4,0,0.2,1),
                    transform 0.55s cubic-bezier(0.4,0,0.2,1);
    }
    .story-phase.fade-in {
        display: flex !important;
        opacity: 1 !important;
        transform: scale(1) translateY(0) !important;
    }
    .story-phase.fade-out {
        display: flex !important;
        opacity: 0 !important;
        transform: scale(1.04) translateY(-6px) !important;
        transition: opacity 0.4s ease-in, transform 0.4s ease-in !important;
    }

    /* ── Warp de velocidad ── */
    .warp-stream {
        position: absolute; top: 50%; left: -100%;
        width: 300%; height: 1px;
        background: linear-gradient(90deg, transparent 0%, #0ea5e9 40%, #fff 50%, #0ea5e9 60%, transparent 100%);
        animation: warpMove 0.18s linear infinite;
        border-radius: 1px;
    }
    .warp-stream.s2 { top: 38%; animation-duration: 0.28s; opacity: 0.6; }
    .warp-stream.s3 { top: 62%; animation-duration: 0.22s; opacity: 0.4; }
    @keyframes warpMove { from { left: -200%; } to { left: 100%; } }

    /* ── Vibración de vehículos ── */
    .car-vibration { animation: vib 0.08s linear infinite; }
    @keyframes vib {
        0%,100% { transform: translateY(0) rotate(0deg); }
        25%     { transform: translateY(-2px) rotate(0.3deg); }
        75%     { transform: translateY(1px) rotate(-0.3deg); }
    }

    /* ── Respiración suave (gym, setup, ai) ── */
    .anim-breathe       { animation: breathe 3.5s ease-in-out infinite; }
    .anim-breathe-delay { animation: breathe 3.5s ease-in-out infinite 0.8s; }
    @keyframes breathe {
        0%,100% { transform: scale(1);    opacity: 0.9; }
        50%     { transform: scale(1.04); opacity: 1;   }
    }

    /* ── Float (guitarras) ── */
    .animate-float       { animation: svgFloat 3.2s ease-in-out infinite; }
    .animate-float-delay { animation: svgFloat 3.2s ease-in-out infinite 0.6s; }
    @keyframes svgFloat {
        0%,100% { transform: translateY(0); }
        50%     { transform: translateY(-14px); }
    }

    /* ── Badge flotante ── */
    .badge-float { animation: badgeFloat 2s ease-in-out infinite; }
    @keyframes badgeFloat {
        0%,100% { transform: translate(0,0) scale(1); }
        50%     { transform: translate(2px,-4px) scale(1.1); }
    }

    /* ── Glow dinámico ── */
    #phase-glow { transition: background 0.9s ease; pointer-events: none; }

    /* ── Scanline retro ── */
    .scanlines {
        background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
        );
    }
`;