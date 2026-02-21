import { t } from '../utils/i18n.js';

export function StaffMastery() {
    const pillars = [
        { title: t('staffMastery.p1_title'), desc: t('staffMastery.p1_desc'), icon: 'fa-microchip' },
        { title: t('staffMastery.p2_title'), desc: t('staffMastery.p2_desc'), icon: 'fa-box-open' },
        { title: t('staffMastery.p3_title'), desc: t('staffMastery.p3_desc'), icon: 'fa-brain' }
    ];

    window.togglePillarMastery = (el) => {
        if (window.innerWidth >= 1024) return;
        const all = document.querySelectorAll('.pillar-wrapper');
        const isOpen = el.classList.contains('is-expanded');
        all.forEach(item => item.classList.remove('is-expanded'));
        if (!isOpen) el.classList.add('is-expanded');
    };

    const pillarsHTML = pillars.map(p => `
        <div onclick="togglePillarMastery(this)" 
             class="pillar-wrapper space-y-6 cursor-pointer lg:cursor-default group transition-all duration-300">
            <div class="flex items-center gap-4">
                <i class="fa-solid ${p.icon} text-sky-600 dark:text-sky-400 text-xl opacity-50 transition-opacity group-hover:opacity-100"></i>
                <h3 class="text-[clamp(0.875rem,4vw,1rem)] font-headline font-bold uppercase italic leading-none text-slate-900 dark:text-white">
                    ${p.title}
                </h3>
                <span class="ml-auto text-sky-500/30 lg:hidden transition-transform duration-300 icon-chevron">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </span>
            </div>
            <div class="pillar-content-box max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="text-[clamp(0.75rem,3.5vw,0.875rem)] font-code leading-relaxed text-slate-600 dark:text-slate-400 border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-2">
                    ${p.desc}
                </p>
            </div>
        </div>
    `).join('');

    return `
    <div class="w-full max-w-7xl mx-auto pt-32 pb-12 md:pt-40 md:pb-24 min-h-svh flex flex-col justify-center">
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-20">
            ${pillarsHTML}
        </div>

        <div class="relative p-6 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 backdrop-blur-md overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
            
            <div class="max-w-4xl relative z-10">
                <span class="text-[clamp(0.65rem,2.5vw,0.75rem)] font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-[0.15em] sm:tracking-widest mb-3 block leading-tight">
                    ${t('staffMastery.label')}
                </span>
                
                <p class="text-[clamp(1.125rem,5vw,1.25rem)] font-headline font-bold italic text-slate-900 dark:text-white leading-snug relative z-10">
                    "${t('staffMastery.quote')}"
                </p>
            </div>
            
            <i class="fa-solid fa-quote-right absolute -right-4 -bottom-4 text-[clamp(6rem,20vw,12rem)] text-sky-500/5 dark:text-sky-400/5 pointer-events-none transition-transform group-hover:scale-110 duration-700"></i>
            
            <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sky-500/30"></div>
            <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sky-500/30"></div>
        </div>

        <style>
            @media (max-width: 1023px) {
                .pillar-wrapper.is-expanded .pillar-content-box {
                    max-height: 400px;
                    opacity: 1;
                    margin-top: 1rem;
                }
                .pillar-wrapper.is-expanded .icon-chevron {
                    transform: rotate(180deg);
                    color: #0ea5e9;
                }
            }
        </style>
    </div>`;
}