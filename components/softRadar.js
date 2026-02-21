import { t } from '../utils/i18n.js';

export function SoftRadar() {
    const skills = [
        { key: 'problem', icon: 'fa-puzzle-piece' },
        { key: 'bilingual', icon: 'fa-language' },
        { key: 'refactor', icon: 'fa-recycle' },
        { key: 'product', icon: 'fa-briefcase' }
    ];

    return `
    <div class="w-full flex flex-col items-center py-20 px-6 max-w-7xl mx-auto transition-colors duration-500 overflow-hidden">
        
        <div class="space-y-2 mb-16 text-center">
            <h2 class="text-[clamp(2rem,10vw,4.5rem)] font-headline font-black italic uppercase leading-none text-slate-900 dark:text-white tracking-tighter">
                ${t('softRadar.radar_title')}
            </h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-8 w-full">
            ${skills.map(s => `
                <div class="flex flex-col items-center text-center space-y-4 group">
                    <div class="w-16 h-16 md:w-20 md:h-20 rounded-full border border-sky-500/20 dark:border-sky-500/30 flex items-center justify-center group-hover:bg-sky-50/50 dark:group-hover:bg-slate-900/50 group-hover:border-sky-500 dark:group-hover:border-sky-400 transition-all duration-500 relative">
                        <div class="absolute inset-0 rounded-full bg-sky-500/0 group-hover:bg-sky-500/5 animate-pulse"></div>
                        
                        <i class="fa-solid ${s.icon} text-xl md:text-2xl text-sky-600 dark:text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity relative z-10"></i>
                    </div>

                    <span class="font-code text-[clamp(0.65rem,3vw,0.85rem)] uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-900 dark:text-white font-bold leading-tight max-w-[140px] md:max-w-none break-words">
                        ${t('softRadar.' + s.key)}
                    </span>
                </div>
            `).join('')}
        </div>
    </div>
    `;
}