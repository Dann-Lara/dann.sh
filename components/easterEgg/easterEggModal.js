// src/components/easterEgg/easterEggModal.js
// Orquestador principal — construcción del modal + secuencia de fases.

import { injectSVG } from '../../utils/svgloader.js';
import { PHASES } from './easterEggPhases.js';
import { MODAL_STYLES } from './easterEggStyles.js';
import { getThemeTokens } from './easterEggTheme.js';
import { buildPhases } from './easterEggLayouts.js';

const BASE_PATH = 'assets/img/';

// ─── Strings UI (sin pasar por el sistema t() para no contaminar cli.json) ──
const UI = {
    en: { title: 'EXEC_LIFE_LOOP.sh — visualizer', live: 'LIVE', status: 'STATUS', phase: 'PHASE', init: 'INIT' },
    es: { title: 'EXEC_LIFE_LOOP.sh — visualizador', live: 'EN VIVO', status: 'ESTADO', phase: 'FASE', init: 'INICIO' },
};

// ─── Construcción del modal ───────────────────────────────────────────────────

function buildModal() {
    const tk = getThemeTokens();
    const lang = localStorage.getItem('lang') || 'es';         // 'en' | 'es' — función del sistema i18n
    const ui = UI[lang] ?? UI.en;

    return `
    <div id="easter-egg-overlay"
         class="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl p-2 md:p-4"
         style="opacity:0;transition:opacity 0.5s ease;background:${tk.overlayBg}">

        <div class="relative w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col"
             style="background:${tk.modalBg};border:1px solid ${tk.modalBorder};box-shadow:${tk.modalShadow};max-height: 90vh;">

            <div id="phase-glow" class="absolute inset-0 pointer-events-none" style="opacity:${tk.glowOpacity}"></div>

            <div class="relative z-30 flex items-center justify-between px-4 py-3 flex-shrink-0"
                 style="background:${tk.titlebarBg};border-bottom:1px solid ${tk.titlebarBorder};backdrop-filter:blur(8px)">
                <div class="flex gap-2">
                    <button id="close-easter-egg"
                            class="w-3 h-3 rounded-full cursor-pointer transition-all hover:brightness-125"
                            style="background:#FF5F56;box-shadow:0 0 8px #FF5F5666"></button>
                    <div class="w-3 h-3 rounded-full" style="background:#FFBD2E;box-shadow:0 0 8px #FFBD2E44"></div>
                    <div class="w-3 h-3 rounded-full" style="background:#27C93F;box-shadow:0 0 8px #27C93F44"></div>
                </div>
                <span class="font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.35em] uppercase truncate px-2"
                      style="color:${tk.titleColor}">${ui.title}</span>
                <div class="flex gap-1 items-center flex-shrink-0">
                    <span class="w-1 h-1 rounded-full animate-pulse" style="background:#22c55e"></span>
                    <span class="font-mono text-[8px] tracking-widest hidden xs:block" style="color:${tk.liveColor}">${ui.live}</span>
                </div>
            </div>

            <div id="story-viewport"
                 class="relative flex items-center justify-center overflow-hidden scanlines flex-grow"
                 style="height: clamp(280px, 60vh, 420px); background:${tk.viewportBg}">
                
                <div class="absolute inset-0 flex items-center justify-center scale-[0.7] sm:scale-90 md:scale-100 transition-transform">
                    ${buildPhases(PHASES)}
                </div>

                <div class="absolute inset-0 pointer-events-none"
                     style="opacity:${tk.gridOpacity};
                            background-image:linear-gradient(rgba(56,189,248,1) 1px,transparent 1px),
                                             linear-gradient(90deg,rgba(56,189,248,1) 1px,transparent 1px);
                            background-size: clamp(24px, 5vw, 48px) clamp(24px, 5vw, 48px)"></div>
                
                <div class="absolute top-3 left-3 w-4 h-4 pointer-events-none border-t border-l border-sky-500/30"></div>
                <div class="absolute top-3 right-3 w-4 h-4 pointer-events-none border-t border-r border-sky-500/30"></div>
                <div class="absolute bottom-3 left-3 w-4 h-4 pointer-events-none border-b border-l border-sky-500/30"></div>
                <div class="absolute bottom-3 right-3 w-4 h-4 pointer-events-none border-b border-r border-sky-500/30"></div>
            </div>

            <div class="relative z-30 flex flex-col sm:flex-row justify-between items-center px-5 py-3 gap-2 sm:gap-0 flex-shrink-0"
                 style="background:${tk.statusBg};border-top:1px solid ${tk.statusBorder}">
                <div class="flex gap-3 md:gap-5 font-mono text-[8px] md:text-[9px] tracking-widest uppercase"
                     style="color:${tk.statusTextColor}">
                    <span class="truncate">${ui.status}:&nbsp;<span id="current-task" style="color:${tk.accent}">${ui.init}</span></span>
                    <span class="hidden xs:inline" style="opacity:0.25">|</span>
                    <span class="whitespace-nowrap">${ui.phase}:&nbsp;<span id="phase-counter" style="color:${tk.accent}">0/${PHASES.length}</span></span>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <div class="w-full sm:w-16 h-[2px] rounded-full overflow-hidden" style="background:${tk.barTrack}">
                        <div id="phase-bar" class="h-full rounded-full" style="width:0%;background:${tk.accent};transition:width 0.4s ease"></div>
                    </div>
                    <span class="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style="background:#22c55e"></span>
                </div>
            </div>
        </div>

        <style>${MODAL_STYLES}</style>
    </div>`;
}

// ─── Secuenciador de fases ────────────────────────────────────────────────────

function startSequence(lang) {
    let current = 0;

    const tick = () => {
        // Ocultar fase anterior
        const prevEl = document.getElementById(`phase-${(current === 0 ? PHASES.length : current) - 1}`);
        if (prevEl) {
            prevEl.classList.replace('fade-in', 'fade-out');
            setTimeout(() => { prevEl.style.display = 'none'; prevEl.classList.remove('fade-out'); }, 450);
        }

        const el = document.getElementById(`phase-${current}`);
        if (!el) return;

        el.style.display = 'flex';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        }));

        const phase = PHASES[current];

        document.getElementById('current-task').innerText  = phase.task[lang] ?? phase.task.en;
        document.getElementById('phase-counter').innerText = `${current + 1}/${PHASES.length}`;
        document.getElementById('phase-bar').style.width   = `${((current + 1) / PHASES.length) * 100}%`;
        document.getElementById('phase-glow').style.background =
            `radial-gradient(ellipse 80% 60% at 50% 50%,${phase.glow}18 0%,transparent 70%)`;

        current = (current + 1) % PHASES.length;
        setTimeout(tick, phase.delay ?? 2400);
    };

    setTimeout(tick, 400);
}

// ─── Entry point ──────────────────────────────────────────────────────────────

export function openEasterEgg() {
    const lang  = localStorage.getItem('lang') || 'es'; ;

    document.body.insertAdjacentHTML('beforeend', buildModal());

    const overlay = document.getElementById('easter-egg-overlay');
    requestAnimationFrame(() => { overlay.style.opacity = '1'; });

    // Precarga SVGs en paralelo
    PHASES.forEach(({ svgs }) =>
        svgs.forEach(({ id, file, cls }) => injectSVG(id, `${BASE_PATH}${file}`, cls))
    );

    startSequence(lang);

    // Cierre
    const close = () => { overlay.style.opacity = '0'; setTimeout(() => overlay.remove(), 500); };
    document.getElementById('close-easter-egg').onclick = e => { e.stopPropagation(); close(); };
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
}