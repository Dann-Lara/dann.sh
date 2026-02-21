import { t } from '../../utils/i18n.js';

export function AiLabIntro() {
    return `
    <div class="w-full min-h-[70vh] lg:min-h-screen flex items-center py-20 relative transition-colors duration-500 overflow-hidden">
        
        <div class="w-full max-w-4xl mx-auto lg:mx-0 space-y-8 relative z-10 mt-12 lg:mt-0">
            
            <div class="space-y-2">
                <div class="flex items-center gap-3 opacity-70">
                    <div class="flex gap-1.5 flex-shrink-0">
                        <div class="w-2 h-2 rounded-full bg-sky-500/40 animate-pulse"></div>
                        <div class="w-2 h-2 rounded-full bg-sky-500/40 animate-pulse" style="animation-delay: 0.2s"></div>
                        <div class="w-2 h-2 rounded-full bg-sky-500/40 animate-pulse" style="animation-delay: 0.4s"></div>
                    </div>
                    <span class="text-sky-600 dark:text-sky-400 font-code text-[clamp(0.6rem,2vw,0.8rem)] tracking-[0.2em] md:tracking-[0.3em] uppercase block">
                        ${t('aiLab.system_init')}
                    </span>
                </div>
            </div>

            <div class="space-y-2">
                <h2 class="text-[clamp(1.3rem,7.5vw,4.5rem)] font-headline font-black italic uppercase leading-[0.9] text-slate-900 dark:text-white tracking-tighter break-words overflow-visible">
                    ${t('aiLab.intro_title')}
                </h2>
            </div>
            
            <div class="space-y-6 max-w-full">
                <div class="w-full">
                    <p class="text-slate-600 dark:text-slate-400 font-code text-[clamp(0.75rem,3vw,0.875rem)] leading-relaxed border-l-2 border-sky-500/40 pl-4 italic bg-slate-50/50 dark:bg-slate-900/30 py-3 pr-2">
                        ${t('aiLab.intro_sub')}
                    </p>
                </div>
            </div>

            <div class="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
                <div class="flex flex-col gap-1 font-code text-[9px] md:text-[10px] uppercase opacity-70 text-slate-600 dark:text-slate-400 flex-shrink-0">
                    <span>${t('aiLab.status_label')}</span>
                    <span>${t('aiLab.engine_label')}</span>
                </div>
                <div class="w-full h-[1px] bg-sky-500/20 dark:bg-sky-500/30 relative overflow-hidden">
                    <div class="absolute inset-0 bg-sky-500 dark:bg-sky-400 animate-loading-bar" style="width: 30%"></div>
                </div>
            </div>
        </div>

        <style>
            @keyframes loading-bar {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(400%); }
            }
            .animate-loading-bar {
                animation: loading-bar 4s infinite linear;
            }
            /* Forzamos que no haya cortes accidentales por CSS global */
            h2 {
                word-wrap: break-word;
                hyphens: auto;
            }
        </style>
    </div>
    `;
}