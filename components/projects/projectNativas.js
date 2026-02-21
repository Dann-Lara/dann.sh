import { t } from '../../utils/i18n.js';
import anime from 'https://cdn.skypack.dev/animejs@3.2.1';

export function ProjectNativas() {
    const tags = ['Core Decoupling', 'Platform Stabilization', 'Scalable Architecture', 'Transactional Integrity'];
    
    // Lógica de acordeón para optimizar espacio en mobile
    window.toggleNativasDetail = (el) => {
        if (window.innerWidth >= 1024) return;
        const parent = el.closest('.details-container-nativas');
        const allItems = parent.querySelectorAll('.detail-item-nativas');
        const isOpen = el.classList.contains('is-expanded');
        allItems.forEach(item => item.classList.remove('is-expanded'));
        if (!isOpen) el.classList.add('is-expanded');
    };

    setTimeout(() => {
        // TUS ANIMACIONES ORIGINALES (Sin cambios de lógica)
        anime.set('.forest-tree', { opacity: 0, scale: 0 });
        anime.set('.crypto-coin', { opacity: 0, translateY: 0 });

        const tl = anime.timeline({ loop: true });

        tl.add({
            targets: '.crypto-coin',
            translateY: [0, 220],
            scale: [1.2, 0.1],
            opacity: [
                { value: 1, duration: 400 },
                { value: 0, duration: 400, delay: 600 }
            ],
            rotate: '1turn',
            delay: anime.stagger(1000),
            duration: 1200,
            easing: 'easeInQuart'
        })
        .add({
            targets: '.forest-tree',
            scale: [0, 1.5, 1],
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(200), 
            duration: 1000,
            easing: 'easeOutElastic(1, .6)'
        }, "+=100")
        .add({
            targets: '.forest-tree',
            opacity: 0,
            scale: 0,
            duration: 800,
            easing: 'linear',
            delay: 3000 
        });
    }, 100);

    return `
    <div class="w-full min-h-screen flex items-center py-20 transition-colors duration-500 relative overflow-hidden">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full relative z-10">
            
            <div class="space-y-8 order-2 lg:order-1 details-container-nativas">
                <div class="space-y-3">
                    <span class="text-sky-600 dark:text-sky-400 font-code text-[clamp(0.7rem,2vw,0.875rem)] tracking-[0.3em] uppercase block">Project_03</span>
                    <h3 class="text-[clamp(1.5rem,8vw,3.5rem)] md:text-5xl font-headline font-black italic uppercase leading-[0.9] text-slate-900 dark:text-white tracking-tighter break-words overflow-visible">
                        ${t('projects.nativas_title')}
                    </h3>
                    <div class="flex flex-wrap gap-2 pt-4">
                        ${tags.map(tag => `<span class="px-3 py-1 border border-sky-500/20 dark:border-sky-500/30 text-[10px] font-code text-sky-600 dark:text-sky-300 uppercase bg-sky-50/50 dark:bg-slate-900/50">${tag}</span>`).join('')}
                    </div>
                </div>

                <div class="space-y-6">
                    <div onclick="toggleNativasDetail(this)" class="detail-item-nativas group cursor-pointer lg:cursor-default">
                        <h4 class="text-xs font-code font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between lg:block">
                            <span>// ${t('projects.challenge')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden transition-transform arrow"></i>
                        </h4>
                        <div class="content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <p class="text-slate-600 dark:text-slate-400 font-code text-sm leading-relaxed border-l-2 border-sky-500/40 pl-4 italic bg-slate-50 dark:bg-slate-900/30 py-2">
                                ${t('projects.nativas_desc')}
                            </p>
                        </div>
                    </div>

                    <div onclick="toggleNativasDetail(this)" class="detail-item-nativas group cursor-pointer lg:cursor-default">
                        <h4 class="text-xs font-code font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between lg:block">
                            <span>// ${t('projects.solution')}</span>
                            <i class="fa-solid fa-chevron-down lg:hidden transition-transform arrow"></i>
                        </h4>
                        <div class="content max-h-0 opacity-0 lg:max-h-none lg:opacity-100 overflow-hidden transition-all duration-500">
                            <p class="text-slate-700 dark:text-slate-200 font-code text-base leading-relaxed">${t('projects.nativas_sol')}</p>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 backdrop-blur-md relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                        <h4 class="text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-2">${t('projects.result')}</h4>
                        <p class="text-slate-900 dark:text-white font-headline italic font-bold text-lg relative z-10">${t('projects.nativas_res')}</p>
                    </div>
                </div>
            </div>

            <div class="visual-wrapper order-1 lg:order-2 flex items-center justify-center relative">
                <div class="relative aspect-square w-full lg:max-w-none flex items-center justify-center overflow-hidden lg:bg-white lg:dark:bg-slate-900 lg:border lg:border-slate-200 lg:dark:border-sky-500/20 lg:rounded-xl lg:shadow-2xl">
                    
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/10 dark:from-sky-500/15 via-transparent to-transparent"></div>
                    
                    <div class="absolute inset-0 flex justify-center pt-10 pointer-events-none">
                        <i class="crypto-coin fa-solid fa-circle-nodes text-7xl text-sky-500/40 dark:text-sky-400/40 absolute opacity-0"></i>
                        <i class="crypto-coin fa-solid fa-coins text-7xl text-sky-400/40 dark:text-sky-300/40 absolute opacity-0"></i>
                        <i class="crypto-coin fa-solid fa-compact-disc text-7xl text-sky-500/40 dark:text-sky-500/40 absolute opacity-0"></i>
                    </div>

                    <div class="absolute top-1/2 w-full h-[1px] bg-sky-400/20 dark:bg-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.3)]"></div>

                    <div class="absolute bottom-0 w-full h-1/2 p-10 pointer-events-none">
                        <div class="relative w-full h-full grid grid-cols-3 grid-rows-2 items-center justify-items-center">
                            <i class="forest-tree fa-solid fa-tree text-8xl text-sky-500/40 dark:text-sky-400/40 opacity-0"></i>
                            <i class="forest-tree fa-solid fa-seedling text-6xl text-sky-400/40 dark:text-sky-300/40 opacity-0"></i>
                            <i class="forest-tree fa-solid fa-tree text-7xl text-sky-500/40 dark:text-sky-500/40 opacity-0"></i>
                            <i class="forest-tree fa-solid fa-leaf text-6xl text-sky-400/40 dark:text-sky-400/30 opacity-0"></i>
                            <i class="forest-tree fa-solid fa-tree text-8xl text-sky-500/40 dark:text-sky-300/40 opacity-0"></i>
                            <i class="forest-tree fa-solid fa-seedling text-7xl text-sky-400/40 dark:text-sky-400/30 opacity-0"></i>
                        </div>
                    </div>

                    <div class="absolute bottom-8 left-8 hidden lg:block font-code text-[12px] tracking-widest text-sky-800 dark:text-sky-400 bg-white/80 dark:bg-slate-950/60 p-3 backdrop-blur-md border border-sky-200/50 dark:border-sky-500/20 rounded-sm">
                        <span class="block opacity-70">${t('projects.nativas_status')}</span>
                    </div>

                    <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sky-500/30"></div>
                    <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-sky-500/30"></div>
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
                    transform: scale(1.3);
                }
                .detail-item-nativas.is-expanded .content {
                    max-height: 500px;
                    opacity: 1;
                    margin-top: 1rem;
                }
                .detail-item-nativas.is-expanded .arrow { transform: rotate(180deg); color: #0ea5e9; }
            }
        </style>
    </div>
    `;
}