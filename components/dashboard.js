import { t } from '../utils/i18n.js';

export function Dashboard() {
    const metrics = [
        { val: "Zero", label: "Downtime", desc: t('dashboard.m1_txt') },
        { val: "AI", label: "Human-in-the-Loop", desc: t('dashboard.m2_txt') },
        { val: "Risk", label: "Isolation", desc: t('dashboard.m3_txt') },
        { val: "v2 ➔ v18", label: "Enterprise Migration", desc: t('dashboard.m4_txt') }
    ];

    // Lógica Singleton: Cierra otras y abre la actual
    window.handleMetricToggle = (el) => {
        if (window.innerWidth >= 768) return; // Solo en mobile
        const allCards = document.querySelectorAll('.metric-card');
        const isExpanded = el.classList.contains('is-expanded');
        allCards.forEach(card => card.classList.remove('is-expanded'));
        if (!isExpanded) el.classList.add('is-expanded');
    };

    const metricsHTML = metrics.map(m => `
        <div onclick="handleMetricToggle(this)" 
             class="metric-card group p-5 border border-sky-200/50 dark:border-sky-400/10 bg-white/5 dark:bg-slate-900/40 backdrop-blur-sm transition-all duration-300 cursor-pointer md:cursor-default">
            
            <div class="flex flex-wrap items-baseline gap-x-2 mb-1">
                <span class="text-3xl sm:text-4xl font-headline font-black text-sky-600 dark:text-sky-400 italic leading-none">
                    ${m.val}
                </span>
            </div>
            
            <div class="text-[10px] font-code uppercase tracking-[0.2em] text-slate-900 dark:text-sky-200/50 mb-3">
                ${m.label}
            </div>

            <div class="expandable-content transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:opacity-100">
                <p class="text-xs sm:text-sm font-code leading-relaxed text-slate-600 dark:text-slate-400 border-t border-sky-500/10 pt-3">
                    ${m.desc}
                </p>
            </div>
        </div>
    `).join('');

    return `
    <div class="relative w-full min-h-svh pt-32 pb-12 md:pt-40 md:pb-24 min-h-svh flex flex-col justify-center">
        <div class="mb-10 md:mb-16">
            <h2 class="text-4xl sm:text-6xl md:text-8xl font-headline font-black italic uppercase leading-[0.8] text-slate-900 dark:text-white tracking-tighter">
                ${t('dashboard.title')}<br/>
                <span class="text-sky-600 dark:text-sky-400 drop-shadow-sm">${t('dashboard.subtitle')}</span>
            </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            ${metricsHTML}
        </div>

        <style>
            /* Mobile: Oculto por defecto */
            @media (max-width: 767px) {
                .expandable-content {
                    max-height: 0;
                    opacity: 0;
                }
                /* Cuando se activa la clase is-expanded */
                .metric-card.is-expanded .expandable-content {
                    max-height: 200px; /* Ajuste para que quepa el texto */
                    opacity: 1;
                    margin-top: 4px;
                }
                /* Feedback visual de que está abierto */
                .metric-card.is-expanded {
                    border-color: rgba(56, 189, 248, 0.5);
                    background-color: rgba(15, 23, 42, 0.6);
                }
            }
        </style>
    </div>`;
}