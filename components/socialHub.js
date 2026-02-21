import { t } from '../utils/i18n.js';
import { AppConfig } from '../config.js';

export function SocialHub() {
    return `
    <div class="w-full py-12 border-t border-sky-500/10 dark:border-sky-500/20 mt-12 px-6 max-w-7xl mx-auto transition-all duration-500">
        <div class="flex flex-col gap-12">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center md:justify-start gap-4">
                ${AppConfig.cv.map(cv => `
                    <a href="${cv.path}" 
                       download 
                       class="group flex items-center gap-4 px-5 py-3 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-sky-500/50 transition-all duration-300 bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-sm overflow-hidden relative"
                       title="${cv.description}">
                        
                        <i class="fa-solid fa-file-pdf text-xl text-red-500/80 group-hover:scale-110 transition-transform"></i>
                        
                        <div class="flex flex-col items-start min-w-0">
                            <span class="text-[9px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest leading-none mb-1.5">
                                [${cv.nameShort}]
                            </span>
                            <span class="text-[clamp(0.7rem,2.5vw,0.8rem)] font-code text-slate-700 dark:text-slate-300 whitespace-nowrap truncate w-full">
                                ${cv.name}
                            </span>
                        </div>

                        <div class="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 rounded-full -mr-8 -mt-8 group-hover:bg-sky-500/10 transition-colors"></div>
                    </a>
                `).join('')}
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 pt-4">
                
                <div class="flex flex-col items-center md:items-start gap-3">
                    <div class="flex items-center gap-3 bg-slate-100 dark:bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/5">
                        <div class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span class="font-code text-[clamp(0.6rem,2vw,0.7rem)] uppercase tracking-[0.3em] text-slate-900 dark:text-white font-bold">
                            ${t('cli.status')}
                        </span>
                    </div>
                    <span class="text-[9px] font-code text-slate-500 dark:text-slate-500 uppercase tracking-widest opacity-60 text-center md:text-left">
                        &copy; ${new Date().getFullYear()} — ${t('footer.rights')}
                    </span>
                </div>

                <div class="flex gap-8 md:gap-6 items-center">
                    ${AppConfig.social.map(social => `
                        <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
                           class="text-[clamp(1.2rem,5vw,1.5rem)] text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all transform hover:-translate-y-1" 
                           title="${social.name}">
                            <i class="${social.icon}"></i>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
}