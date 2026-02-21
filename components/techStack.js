import { t } from '../utils/i18n.js';

export function TechStack() {
    const categories = [
        { name: t('techStack.frontend'), items: ['Angular', 'React/Next.js', 'Vue/Nuxt 3', 'RxJS', 'TypeScript', 'Tailwind'] },
        { name: t('techStack.ai'), items: ['n8n', 'Prompt Engineering', 'OpenAI API', 'Firebase'] },
        { name: t('techStack.backend'), items: ['Node.js', 'Express', 'PostgreSQL', 'WebSockets', 'Socket.io'] },
        { name: t('techStack.integration'), items: ['GIS', 'Stripe', 'Blockchain APIs'] }
    ];

    // Lógica para expandir categorías en mobile
    window.toggleTechCategory = (el) => {
        if (window.innerWidth >= 768) return;
        
        // Opcional: Cerrar otros antes de abrir el actual
        const allCards = document.querySelectorAll('.tech-card');
        const isOpen = el.classList.contains('is-expanded');
        
        allCards.forEach(card => card.classList.remove('is-expanded'));
        if (!isOpen) el.classList.add('is-expanded');
    };

    return `
    <div class="w-full py-20 max-w-7xl mx-auto transition-colors duration-500 overflow-hidden">
        
        <div class="space-y-2 mb-12 text-center">
            <h2 class="text-[clamp(2rem,10vw,4.5rem)] font-headline font-black italic uppercase leading-none text-slate-900 dark:text-white tracking-tighter">
                ${t('techStack.stack_title')}
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            ${categories.map(cat => `
                <div onclick="toggleTechCategory(this)" class="tech-card p-6 border border-sky-200 dark:border-sky-400/20 bg-sky-50/50 dark:bg-slate-900/50 hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all group cursor-pointer md:cursor-default relative overflow-hidden">
                    
                    <div class="flex items-center justify-between mb-0 md:mb-4">
                        <h4 class="text-[10px] md:text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity">
                            ${cat.name}
                        </h4>
                        <i class="fa-solid fa-chevron-down md:hidden text-sky-500/30 transition-transform arrow"></i>
                    </div>

                    <ul class="tech-list space-y-2 max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden transition-all duration-500 mt-0 md:mt-0">
                        ${cat.items.map(item => `
                            <li class="font-code text-sm text-slate-600 dark:text-slate-400 flex items-center gap-3 py-1 md:py-0">
                                <span class="w-1.5 h-[1px] bg-sky-500/40 dark:bg-sky-400/40 flex-shrink-0"></span> 
                                <span class="truncate">${item}</span>
                            </li>
                        `).join('')}
                    </ul>

                    <div class="absolute bottom-0 left-0 w-full h-[2px] bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-30"></div>
                </div>
            `).join('')}
        </div>

        <style>
            @media (max-width: 767px) {
                .tech-card.is-expanded {
                    background: rgba(14, 165, 233, 0.05);
                    border-color: rgba(14, 165, 233, 0.4);
                }
                .tech-card.is-expanded .tech-list {
                    max-height: 400px;
                    opacity: 1;
                    margin-top: 1.5rem;
                    padding-bottom: 0.5rem;
                }
                .tech-card.is-expanded .arrow {
                    transform: rotate(180deg);
                    color: #0ea5e9;
                }
                .dark .tech-card.is-expanded {
                    background: rgba(15, 23, 42, 0.8);
                }
            }
        </style>
    </div>
    `;
}