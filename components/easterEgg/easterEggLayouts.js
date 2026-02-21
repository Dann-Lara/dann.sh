// src/components/easterEgg/easterEggLayouts.js
// Funciones puras de renderizado HTML para cada tipo de layout de fase.

function layoutSolo({ svgs, badge, badgeFloat, glow }) {
    const { id, cls, anim = '' } = svgs[0];

    const floatBadge = badge && badgeFloat ? `
        <div class="badge-float absolute -top-5 -right-5 w-10 h-10 rounded-full
                    flex items-center justify-center text-xl font-bold text-white shadow-lg"
             style="background:${glow};box-shadow:0 0 20px ${glow}99">
            ${badge}
        </div>` : '';

    const bottomBadge = badge && !badgeFloat ? `
        <span class="mt-5 font-code text-[11px] tracking-[0.35em] font-bold uppercase"
              style="color:${glow};text-shadow:0 0 12px ${glow}80">
            ${badge}
        </span>` : '';

    return `
        <div class="relative flex items-center justify-center">
            <div id="${id}" class="${anim} ${cls}" style="filter:drop-shadow(0 0 24px ${glow}55)"></div>
            ${floatBadge}
        </div>
        ${bottomBadge}`;
}

function layoutDuo({ svgs, glow }) {
    return `
        <div class="flex items-end gap-8">
            ${svgs.map(({ id, cls, anim = '', rotate = '' }) => `
                <div class="w-[210px] h-[180px] flex items-center justify-center ${rotate} ${anim}"
                     style="filter:drop-shadow(0 0 20px ${glow}55)">
                    <div id="${id}" class="${cls}"></div>
                </div>`).join('')}
        </div>`;
}

function layoutFramed({ svgs, badge, glow }) {
    const { id, cls, anim = '' } = svgs[0];
    const badgeHtml = badge ? `
        <span class="mt-5 font-code text-[10px] tracking-[0.4em] font-bold uppercase"
              style="color:${glow}99">
            ${badge}
        </span>` : '';
    return `
        <div class="relative group flex flex-col items-center">
            <div class="absolute -inset-8 rounded-2xl opacity-30 blur-2xl transition-all duration-1000 group-hover:opacity-50"
                 style="background:radial-gradient(ellipse at center,${glow} 0%,transparent 70%)"></div>
            <div class="relative p-5 rounded-2xl border backdrop-blur-sm"
                 style="border-color:${glow}30;background:${glow}08">
                <div id="${id}" class="${anim} ${cls}"
                     style="filter:drop-shadow(0 0 18px ${glow}44)"></div>
            </div>
        </div>
        ${badgeHtml}`;
}

export const LAYOUTS = { solo: layoutSolo, duo: layoutDuo, framed: layoutFramed };

// ─── Genera el HTML de todas las fases ───────────────────────────────────────

export function buildPhases(phases) {
    return phases.map((phase, i) => {
        const warpHtml = phase.warp ? `
            <div class="absolute inset-0 overflow-hidden pointer-events-none" style="opacity:0.18">
                <div class="warp-stream"></div>
                <div class="warp-stream s2"></div>
                <div class="warp-stream s3"></div>
            </div>` : '';

        const glowBg = `
            <div class="absolute inset-0 pointer-events-none transition-all duration-1000"
                 style="background:radial-gradient(ellipse 60% 50% at 50% 50%,${phase.glow}12 0%,transparent 70%)">
            </div>`;

        const inner = (LAYOUTS[phase.layout] || LAYOUTS.solo)(phase);

        return `
        <div id="phase-${i}" class="story-phase absolute inset-0 hidden flex-col items-center justify-center">
            ${glowBg}${warpHtml}${inner}
        </div>`;
    }).join('\n');
}