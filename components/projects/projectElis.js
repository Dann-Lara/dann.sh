import { t } from '../../utils/i18n.js';
import anime from 'https://esm.sh/animejs@3.2.1?bundle';

export function ProjectElis() {
    const tags = ['Legacy Modernization', 'Operational Visibility', 'Real-Time Systems', 'Risk Containment'];
    
    window.toggleProjectDetail = (el) => {
        if (window.innerWidth >= 1024) return;
        const parent = el.closest('.details-container');
        const allItems = parent.querySelectorAll('.detail-item');
        const isOpen = el.classList.contains('is-expanded');
        allItems.forEach(item => item.classList.remove('is-expanded'));
        if (!isOpen) el.classList.add('is-expanded');
    };

    setTimeout(() => {
        // RESTAURADO: Tu lógica original de animación exacta
        const icons = document.querySelectorAll('.logistic-icon');
        icons.forEach(el => {
            const startX = anime.random(-250, 250);
            const startY = anime.random(-250, 250);
            el.style.transform = `translateX(${startX}px) translateY(${startY}px)`;
        });

        anime({
            targets: '.logistic-icon',
            translateX: () => anime.random(-280, 280), 
            translateY: () => anime.random(-280, 280),
            scale: () => anime.random(1.2, 1.8), 
            opacity: [
                { value: 0, duration: 0 },
                { value: 0.5, duration: 1500 },
                { value: 0, duration: 1500, delay: 3000 }
            ],
            rotate: () => anime.random(-360, 360),
            duration: () => anime.random(8000, 12000),
            delay: anime.stagger(800),
            easing: 'linear',
            loop: true
        });
    
        anime({
            targets: '.radar-ping',
            scale: [0.8, 5],
            opacity: [0.5, 0],
            duration: 3000,
            easing: 'easeOutSine',
            loop: true
        });
    }, 100);

    return `
    <div class="w-full min-h-screen flex items-center py-20 transition-colors duration-500 relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full relative z-10">
            
            <div class="space-y-8 order-2 lg:order-1 details-container">
                <div class="space-y-3">
                    <span class="text-sky-600 dark:text-sky-400 font-code text-[clamp(0.7rem,2vw,0.875rem)] tracking-[0.3em] uppercase block">Project_01</span>
                    
                    <h3 class="text-[clamp(1.75rem,8vw,3.5rem)] md:text-5xl font-headline font-black italic uppercase leading-none text-slate-900 dark:text-white tracking-tighter">
                        ${t('projects.elis_title')}
                    </h3>

                    <div class="flex flex-wrap gap-2 pt-4">
                        ${tags.map(tag => `
                            <span class="px-3 py-1 border border-sky-500/20 dark:border-sky-500/30 text-[10px] font-code text-sky-600 dark:text-sky-300 uppercase bg-sky-50/50 dark:bg-slate-900/50">
                                ${tag}
                            </span>`).join('')}
                    </div>
                </div>

                <div class="space-y-6">
                    <div onclick="toggleProjectDetail(this)" class="detail-item group cursor-pointer lg:cursor-default">
                        <h4 class="text-xs font-code font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between lg:block">
                            <span>// ${t('projects.challenge')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden transition-transform arrow"></i>
                        </h4>
                        <div class="content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <p class="text-slate-600 dark:text-slate-400 font-code text-sm leading-relaxed border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-2">
                                ${t('projects.elis_desc')}
                            </p>
                        </div>
                    </div>

                    <div onclick="toggleProjectDetail(this)" class="detail-item group cursor-pointer lg:cursor-default">
                        <h4 class="text-xs font-code font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between lg:block">
                            <span>// ${t('projects.solution')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden transition-transform arrow"></i>
                        </h4>
                        <div class="content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <p class="text-slate-700 dark:text-slate-200 font-code text-base leading-relaxed">${t('projects.elis_sol')}</p>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 backdrop-blur-md relative overflow-hidden group">
                        <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                        <h4 class="text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-2">${t('projects.result')}</h4>
                        <p class="text-slate-900 dark:text-white font-headline italic font-bold text-lg relative z-10">${t('projects.elis_res')}</p>
                    </div>
                </div>
            </div>

            <div class="radar-wrapper order-1 lg:order-2 flex items-center justify-center relative">
                <div class="relative aspect-square w-full lg:max-w-none flex items-center justify-center overflow-hidden lg:bg-white dark:lg:bg-slate-900 lg:border lg:border-slate-200 dark:lg:border-sky-500/20 lg:rounded-xl lg:shadow-2xl lg:p-20">
                    
                    <div class="radar-ping absolute w-40 h-40 border-2 border-sky-400/30 dark:border-sky-500/30 rounded-full"></div>
                    <div class="radar-ping absolute w-40 h-40 border border-sky-400/10 dark:border-sky-500/10 rounded-full" style="animation-delay: 1.5s"></div>

                    <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <i class="logistic-icon fa-solid fa-ship absolute text-sky-500/40 dark:text-sky-400/40 text-6xl"></i>
                        <i class="logistic-icon fa-solid fa-plane absolute text-sky-400/40 dark:text-sky-300/40 text-5xl"></i>
                        <i class="logistic-icon fa-solid fa-boxes-stacked absolute text-sky-500/40 dark:text-sky-500/40 text-5xl"></i>
                        <i class="logistic-icon fa-solid fa-container-storage absolute text-sky-400/40 dark:text-sky-400/30 text-7xl"></i>
                        <i class="logistic-icon fa-solid fa-plane-departure absolute text-sky-500/40 dark:text-sky-300/40 text-5xl"></i>
                    </div>

                    <div class="relative z-10 w-44 h-44 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-50 dark:border-sky-500/20 flex items-center justify-center shadow-2xl transition-transform duration-700">
                        <i class="fa-solid fa-anchor text-8xl text-sky-600 dark:text-sky-400 group-hover:rotate-12 transition-transform duration-500 relative z-10"></i>
                    </div>

                    <div class="absolute bottom-8 left-8 hidden lg:block font-code text-[12px] tracking-widest text-sky-800 dark:text-sky-400 bg-white/80 dark:bg-slate-950/60 p-3 backdrop-blur-md border border-sky-200/50 dark:border-sky-500/20 rounded-sm">
                        <span class="block opacity-70">${t('projects.elis_status')}</span>
                        <span class="block font-bold mt-1 uppercase italic underline decoration-sky-500/50 tracking-tighter">● ${t('projects.elis_log')}</span>
                    </div>

                    <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sky-500/30"></div>
                    <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sky-500/30"></div>
                </div>
            </div>
        </div>

        <style>
            @media (max-width: 1023px) {
                .radar-wrapper {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    opacity: 0.1; /* Opacidad sutil como fondo */
                    pointer-events: none;
                    transform: scale(1.5); /* Para que los iconos cubran más área */
                }
                .detail-item.is-expanded .content {
                    max-height: 500px;
                    opacity: 1;
                    margin-top: 1rem;
                }
                .detail-item.is-expanded .arrow { transform: rotate(180deg); color: #0ea5e9; }
            }
        </style>
    </div>
    `;
}