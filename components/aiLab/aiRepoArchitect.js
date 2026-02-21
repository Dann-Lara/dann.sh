import { t } from '../../utils/i18n.js';
import anime from 'https://cdn.skypack.dev/animejs@3.2.1';

export function AiRepoArchitect() {
    const stack = ['Firebase Studio', 'OpenAI API', 'GenKit'];
    
    window.toggleMetricDetail = (el) => {
        if (window.innerWidth >= 1024) return;
        el.classList.toggle('is-expanded');
    };
    
    setTimeout(() => {
        const tl = anime.timeline({ loop: true });
        anime.set('.forest-tree', { opacity: 0, scale: 0 });

        tl
        .add({
            targets: ['.symbiosis-ai', '.symbiosis-human'],
            translateX: (el, i) => i === 0 ? [-80, 0] : [80, 0],
            opacity: [0, 1],
            scale: [0.6, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.epic-result',
            translateY: () => anime.random(-130, 130),
            translateX: () => anime.random(-130, 130),
            scale: [0, 1],
            opacity: [0, 1, 0],
            delay: anime.stagger(120),
            duration: 2000,
            easing: 'easeOutQuart'
        }, "-=400")
        .add({
            targets: ['.symbiosis-ai', '.symbiosis-human'],
            opacity: 0,
            duration: 500,
            delay: 1500
        });

        anime({
            targets: '.dna-bg',
            rotate: '1turn',
            duration: 20000,
            easing: 'linear',
            loop: true
        });
    }, 100);

    return `
        <div class="w-full min-h-svh flex items-center py-20 relative overflow-hidden transition-colors duration-500">
            
            <div class="absolute top-24 lg:top-20 right-0 lg:right-4 z-30 flex flex-col gap-0.5 text-right font-code text-[9px] md:text-[11px] tracking-[0.2em] text-sky-800 dark:text-sky-400 bg-white/80 dark:bg-slate-950/60 px-4 py-2.5 backdrop-blur-md border border-sky-200/50 dark:border-sky-500/20 rounded-sm shadow-xl shadow-sky-500/5">
                <span class="opacity-70 uppercase">${t('aiLab.repo_protocol')}</span>
                <span class="font-bold uppercase italic underline decoration-sky-500/50 decoration-2 underline-offset-2 whitespace-nowrap">● ${t('aiLab.repo_protocol_rev')}</span>
            </div>

            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 mt-12 lg:mt-0">
                
                <div class="lg:col-span-7 space-y-8 order-2 lg:order-1 details-container-repo">
                    <div class="space-y-3">
                        <span class="text-sky-600 dark:text-sky-400 font-code text-[clamp(0.6rem,2vw,0.875rem)] tracking-[0.3em] uppercase block">
                            ${t('aiLab.repo_tag')}
                        </span>
                        
                        <h3 class="text-[clamp(1.5rem,8vw,4.2rem)] font-headline font-black italic uppercase leading-[0.85] text-slate-900 dark:text-white tracking-tighter">
                            ${t('aiLab.repo_title')}
                        </h3>
                    </div>

                    <div class="space-y-6">
                        <p class="text-slate-600 dark:text-slate-400 font-code text-sm leading-relaxed border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-2">
                            ${t('aiLab.repo_desc')}
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2 pt-2">
                        ${stack.map(s => `
                            <span class="px-3 py-1 border border-sky-500/20 dark:border-sky-500/30 text-[10px] font-code text-sky-600 dark:text-sky-300 uppercase bg-sky-50/50 dark:bg-slate-900/50 whitespace-nowrap">
                                ${s}
                            </span>
                        `).join('')}
                    </div>

                    <div onclick="toggleMetricDetail(this)" class="metric-expandable p-6 bg-sky-50/90 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-400/20 backdrop-blur-md relative overflow-hidden cursor-pointer lg:cursor-default group">
                        <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                        
                        <div class="flex items-center justify-between lg:block">
                            <span class="text-[10px] font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest block">// ${t('aiLab.repo_efficiency')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden text-sky-500/40 transition-transform arrow"></i>
                        </div>

                        <div class="metric-content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <span class="text-[clamp(1.1rem,5vw,1.8rem)] font-headline font-bold text-slate-900 dark:text-white italic tabular-nums relative z-10 block mt-2">
                                ${t('aiLab.repo_metric')}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="visual-container lg:col-span-5 flex items-center justify-center relative min-h-[400px] lg:min-h-[450px] order-1 lg:order-2">
                    <div class="relative aspect-square w-full flex items-center justify-center overflow-hidden lg:bg-white lg:dark:bg-slate-900 lg:border lg:border-slate-200 lg:dark:border-sky-500/20 lg:rounded-xl lg:shadow-2xl">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/10 dark:from-sky-500/15 via-transparent to-transparent"></div>
                        
                        <div class="dna-bg absolute w-[350px] h-[350px] border border-dashed border-sky-500/20 dark:border-sky-500/30 rounded-full flex items-center justify-center">
                            <i class="fa-solid fa-dna text-sky-500/5 dark:text-sky-500/10 text-[280px] absolute"></i>
                        </div>

                        <div class="relative z-20 flex items-center justify-center gap-8">
                            <div class="symbiosis-human flex flex-col items-center">
                                <div class="p-4 bg-white dark:bg-slate-950 border border-sky-500/30 rounded-2xl shadow-xl">
                                    <i class="fa-solid fa-brain text-4xl text-sky-600 dark:text-sky-400"></i>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-1 opacity-40">
                                <div class="w-8 h-[1px] bg-sky-500"></div>
                            </div>
                            <div class="symbiosis-ai flex flex-col items-center">
                                <div class="p-4 bg-white dark:bg-slate-950 border border-sky-500/30 rounded-2xl shadow-xl">
                                    <i class="fa-solid fa-robot text-4xl text-sky-600 dark:text-sky-400"></i>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <i class="epic-result fa-solid fa-code text-sky-400/40 text-2xl absolute"></i>
                            <i class="epic-result fa-solid fa-microchip text-sky-500/40 text-3xl absolute"></i>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                @media (max-width: 1023px) {
                    .visual-container {
                        position: absolute;
                        inset: 0;
                        z-index: 0;
                        opacity: 0.12;
                        pointer-events: none;
                        transform: scale(1.2);
                    }
                    .metric-expandable.is-expanded .metric-content {
                        max-height: 200px;
                        opacity: 1;
                        margin-top: 10px;
                    }
                    .metric-expandable.is-expanded .arrow {
                        transform: rotate(180deg);
                        color: #0ea5e9;
                    }
                }
            </style>
        </div>
    `;
}