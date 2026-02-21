import { t } from '../utils/i18n.js';

export function Hero() {
    return `
    <div class="relative w-full min-h-svh flex items-center overflow-hidden pt-20">
        <div class="max-w-[1400px] mx-auto px-6 md:px-12 w-full z-10">
            <div class="max-w-4xl space-y-6 md:space-y-8">
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
                    <span class="text-sky-600 dark:text-sky-400 animate-pulse font-code text-[clamp(0.7rem,4vw,0.875rem)] tracking-[0.2em] sm:tracking-[0.3em] uppercase block whitespace-normal break-words max-w-full">
                        &gt;_ ${t('hero.super_headline')}
                    </span>

                    <div class="hidden sm:block h-[1px] flex-grow bg-sky-500/30 opacity-50"></div>
                </div>

                <h1 class="text-[clamp(2.2rem,10vw,5rem)] font-headline font-black italic uppercase leading-[0.9] text-slate-900 dark:text-white tracking-tighter">
                    ${t('hero.headline_part1')} 
                    <span class="text-sky-600 dark:text-sky-400 drop-shadow-rayo">${t('hero.headline_accent')}</span><br class="hidden sm:block"/>
                    ${t('hero.headline_part2')}
                </h1>

                <p class="text-[clamp(0.8rem,3vw,0.875rem)] font-code leading-relaxed max-w-2xl border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-2 text-slate-600 dark:text-slate-400">
                    ${t('hero.sub_headline')}
                </p>

                <div class="pt-4 md:pt-8 flex items-center gap-4 opacity-50 group select-none">
                    <div class="flex flex-col text-[clamp(0.5rem,2vw,0.6rem)] font-code tracking-[0.3em] uppercase italic text-slate-900 dark:text-white">
                        <span>${t('hero.scroll_label')}</span>
                        <span>${t('hero.initialize_label')}</span>
                    </div>
                    <div class="w-8 h-[1px] bg-slate-900 dark:bg-white group-hover:w-16 transition-all duration-500"></div>
                </div>
            </div>
        </div>

        <div class="absolute right-0 top-0 h-full w-16 md:w-24 border-l border-sky-500/20 dark:border-sky-500/30 hidden lg:flex flex-col justify-center items-center gap-12 text-[10px] font-code tracking-[1em] uppercase vertical-text opacity-20 pointer-events-none italic select-none text-slate-900 dark:text-white">
            ${t('hero.sidebar_text')}
        </div>
        
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/20 dark:to-slate-900/20 pointer-events-none"></div>

        <style>
            .vertical-text {
                writing-mode: vertical-rl;
                text-orientation: mixed;
            }
            /* Brillo sutil para el acento */
            .drop-shadow-rayo {
                filter: drop-shadow(0 0 15px rgba(14, 165, 233, 0.3));
            }
        </style>
    </div>
    `;
}

export function initHero() {
    console.log("Hero System Initialized...");
}