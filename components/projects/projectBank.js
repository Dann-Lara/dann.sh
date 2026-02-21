import { t } from '../../utils/i18n.js';
import anime from 'https://cdn.skypack.dev/animejs@3.2.1';

export function ProjectBank() {
    const tags = ['AI Governance', 'Secure Orchestration', 'Prompt Versioning', 'Regulated Environment'];
    
    // Lógica de acordeón exclusiva para mobile
    window.toggleBankDetail = (el) => {
        if (window.innerWidth >= 1024) return;
        const parent = el.closest('.details-container-bank');
        const allItems = parent.querySelectorAll('.detail-item-bank');
        const isOpen = el.classList.contains('is-expanded');
        allItems.forEach(item => item.classList.remove('is-expanded'));
        if (!isOpen) el.classList.add('is-expanded');
    };

    setTimeout(() => {
        // 1. DATA FLOW: Partículas de datos entrando al embudo (TUS VALORES ORIGINALES)
        anime({
            targets: '.data-stream',
            translateX: [-100, 150],
            opacity: [0, 1, 0],
            easing: 'linear',
            duration: 2000,
            delay: anime.stagger(400),
            loop: true
        });

        // 2. HUMAN FILTER: El anillo central de supervisión
        anime({
            targets: '.human-lens',
            rotate: '1turn',
            duration: 10000,
            easing: 'linear',
            loop: true
        });

        // 3. INSIGHTS: Conocimiento que emerge después del filtro
        anime({
            targets: '.insight-bubble',
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            translateX: [0, 50],
            translateY: () => anime.random(-40, 40),
            duration: 3000,
            delay: anime.stagger(1000),
            easing: 'easeOutCubic',
            loop: true
        });
    }, 100);

    return `
    <div class="w-full min-h-screen flex items-center py-20 transition-colors duration-500 relative overflow-hidden">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full relative z-10">
            
            <div class="visual-wrapper order-1 lg:order-2 flex items-center justify-center relative">
                <div class="relative aspect-square w-full lg:max-w-none flex items-center justify-center overflow-hidden lg:bg-white lg:dark:bg-slate-900 lg:border lg:border-slate-200 lg:dark:border-sky-500/20 lg:rounded-xl lg:shadow-2xl">
                    
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/10 dark:from-sky-500/15 via-transparent to-transparent"></div>
                    
                    <div class="absolute left-10 flex flex-col gap-8 opacity-40">
                        <div class="data-stream w-12 h-1 bg-sky-400 rounded-full"></div>
                        <div class="data-stream w-16 h-1 bg-sky-500 rounded-full"></div>
                        <div class="data-stream w-10 h-1 bg-sky-300 rounded-full"></div>
                    </div>

                    <div class="relative z-10 flex items-center justify-center">
                        <div class="human-lens absolute w-48 h-48 border-2 border-dashed border-sky-500/20 dark:border-sky-500/30 rounded-full"></div>
                        
                        <div class="w-32 h-32 bg-white dark:bg-slate-950 border-2 border-sky-500 dark:border-sky-400 rounded-3xl flex flex-col items-center justify-center shadow-2xl relative">
                            <i class="fa-solid fa-user-shield text-3xl text-sky-600 dark:text-sky-400 mb-2"></i>
                            <span class="font-code text-[8px] tracking-tighter text-sky-500 dark:text-sky-400 uppercase font-bold">${t('projects.bank_human_ai')}</span>
                            <div class="absolute inset-0 bg-sky-500/5 dark:bg-sky-500/10 animate-pulse rounded-3xl"></div>
                        </div>
                    </div>

                    <div class="absolute right-12 h-64 w-32 flex flex-col justify-center items-start gap-12">
                        <div class="insight-bubble p-2 bg-sky-500 text-white rounded-md shadow-lg"><i class="fa-solid fa-brain text-xs"></i></div>
                        <div class="insight-bubble p-2 bg-green-500 text-white rounded-md shadow-lg"><i class="fa-solid fa-check-double text-xs"></i></div>
                        <div class="insight-bubble p-2 bg-sky-600 text-white rounded-md shadow-lg"><i class="fa-solid fa-database text-xs"></i></div>
                    </div>

                    <div class="absolute bottom-8 left-8 hidden lg:block font-code text-[12px] tracking-widest text-sky-800 dark:text-sky-400 bg-white/80 dark:bg-slate-950/60 p-3 backdrop-blur-md border border-sky-200/50 dark:border-sky-500/20 rounded-sm">
                        <span class="block opacity-70">${t('projects.bank_status')}</span>
                        <span class="block font-bold mt-1 uppercase italic underline decoration-sky-500/50 tracking-tighter">● ${t('projects.bank_log')}</span>
                    </div>

                    <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sky-500/30"></div>
                    <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sky-500/30"></div>
                </div>
            </div>

            <div class="space-y-8 order-2 lg:order-1 details-container-bank">
                <div class="space-y-3">
                    <span class="text-sky-600 dark:text-sky-400 font-code text-[clamp(0.7rem,2vw,0.875rem)] tracking-[0.3em] uppercase block">Project_02</span>
                    <h3 class="text-[clamp(1.8rem,9vw,3.5rem)] md:text-5xl font-headline font-black italic uppercase leading-none text-slate-900 dark:text-white tracking-tighter">
                        ${t('projects.bank_title')}
                    </h3>
                    <div class="flex flex-wrap gap-2 pt-4">
                        ${tags.map(tag => `<span class="px-3 py-1 border border-sky-500/20 dark:border-sky-500/30 text-[10px] font-code text-sky-600 dark:text-sky-300 uppercase bg-sky-50/50 dark:bg-slate-900/50">${tag}</span>`).join('')}
                    </div>
                </div>

                <div class="space-y-6">
                    <div onclick="toggleBankDetail(this)" class="detail-item-bank group cursor-pointer lg:cursor-default">
                        <h4 class="text-xs font-code font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between lg:block">
                            <span>// ${t('projects.challenge')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden transition-transform arrow"></i>
                        </h4>
                        <div class="content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <p class="text-slate-600 dark:text-slate-400 font-code text-sm leading-relaxed border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-2">
                                ${t('projects.bank_desc')}
                            </p>
                        </div>
                    </div>

                    <div onclick="toggleBankDetail(this)" class="detail-item-bank group cursor-pointer lg:cursor-default">
                        <h4 class="text-xs font-code font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between lg:block">
                            <span>// ${t('projects.solution')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden transition-transform arrow"></i>
                        </h4>
                        <div class="content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <p class="text-slate-700 dark:text-slate-200 font-code text-base leading-relaxed">${t('projects.bank_sol')}</p>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 backdrop-blur-md relative overflow-hidden group">
                        <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                        <h4 class="text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-2">${t('projects.result')}</h4>
                        <p class="text-slate-900 dark:text-white font-headline italic font-bold text-lg relative z-10">${t('projects.bank_res')}</p>
                    </div>
                </div>
            </div>
        </div>

        <style>
            @media (max-width: 1023px) {
                .visual-wrapper {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    opacity: 0.15;
                    pointer-events: none;
                    transform: scale(1.2);
                }
                .detail-item-bank.is-expanded .content {
                    max-height: 500px;
                    opacity: 1;
                    margin-top: 1rem;
                }
                .detail-item-bank.is-expanded .arrow { transform: rotate(180deg); color: #0ea5e9; }
            }
        </style>
    </div>
    `;
}