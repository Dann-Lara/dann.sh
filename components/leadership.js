import { t } from '../utils/i18n.js';

export function Leadership() {
    // Lógica para expandir la cita en mobile
    window.toggleLeadershipQuote = (el) => {
        if (window.innerWidth >= 1024) return;
        el.classList.toggle('is-expanded');
    };

    return `
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 px-6 max-w-7xl mx-auto transition-colors duration-500 overflow-hidden">
        
        <div class="space-y-8 order-2 lg:order-1">
            <div class="space-y-3">
                <span class="text-sky-600 dark:text-sky-400 font-code text-[clamp(0.7rem,2vw,0.875rem)] tracking-[0.3em] uppercase block">
                    ${t('leadership.subtitle')}
                </span>
                
                <h2 class="text-[clamp(1.3rem,7vw,4.4rem)] font-headline font-black italic uppercase text-slate-900 dark:text-white leading-[0.9] tracking-tighter break-words">
                    ${t('leadership.title')}
                </h2>
            </div>
            
            <div class="space-y-6">
                <div>
                    <p class="text-slate-600 dark:text-slate-400 font-code text-[clamp(0.8rem,3vw,0.875rem)] leading-relaxed border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-3">
                        ${t('leadership.body')}
                    </p>
                </div>
            </div>
        </div>

        <div onclick="toggleLeadershipQuote(this)" class="leadership-quote-card order-1 lg:order-2 relative p-6 md:p-8 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 backdrop-blur-md overflow-hidden group cursor-pointer lg:cursor-default shadow-xl">
            <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
            
            <div class="flex items-center justify-between mb-4 lg:mb-6">
                <i class="fa-solid fa-quote-left text-3xl md:text-4xl text-sky-600 dark:text-sky-400 opacity-20 relative z-10"></i>
                <i class="fa-solid fa-chevron-down lg:hidden text-sky-500/30 transition-transform arrow"></i>
            </div>

            <div class="quote-content max-h-[4.5rem] lg:max-h-none opacity-80 lg:opacity-100 overflow-hidden transition-all duration-500 relative z-10">
                <p class="text-[clamp(1.1rem,4.5vw,1.5rem)] font-headline font-bold italic text-slate-900 dark:text-white leading-relaxed">
                    "${t('leadership.quote')}"
                </p>
            </div>
            
            <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sky-500/10"></div>
            <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sky-500/10"></div>
        </div>

        <style>
            @media (max-width: 1023px) {
                .leadership-quote-card.is-expanded .quote-content {
                    max-height: 500px;
                    opacity: 1;
                }
                .leadership-quote-card.is-expanded .arrow {
                    transform: rotate(180deg);
                    color: #0ea5e9;
                }
                /* Efecto de degradado para indicar que hay más texto cuando está cerrado */
                .leadership-quote-card:not(.is-expanded) .quote-content::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 40px;
                    background: linear-gradient(transparent, rgba(240, 249, 255, 0.9));
                }
                .dark .leadership-quote-card:not(.is-expanded) .quote-content::after {
                    background: linear-gradient(transparent, rgba(15, 23, 42, 0.9));
                }
            }
        </style>
    </div>
    `;
}