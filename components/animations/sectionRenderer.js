// ============================================
// SECTION RENDERER
// ============================================

import { Navbar } from '../navbar.js';

export const SectionRenderer = {

    render(sectionConfigs) {
        return `
            <div id="canvas-bg" class="fixed inset-0 pointer-events-none z-0 bg-background transition-colors duration-1000"></div>
    
            ${Navbar()}
    
            <main class="relative z-10 section-container h-screen w-full overflow-hidden">
                ${this.generateSections(sectionConfigs)}
            </main>
    
            ${this.generateScrollIndicator(sectionConfigs)}
        `;
    },
    generateSections(configs) {
        return configs.map((config, index) => {
            const innerContent = config.component();
            const isActive = index === 0 ? 'active' : 'opacity-0 pointer-events-none';
    
            if (config.id === 'hero') {
                return `
                    <div id="${config.id}" class="section-view ${isActive}" data-section-index="${index}">
                        ${innerContent}
                    </div>
                `;
            }
    
            if (config.type === 'flex') {
                return `
                    <section id="${config.id}" class="section-view ${isActive} flex items-center" data-section-index="${index}">
                        <div class="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
                            <span class="section-label text-xs font-code text-sky-600 dark:text-sky-400 opacity-50 uppercase tracking-[0.3em] mb-4 block">
                                ${String(index + 1).padStart(2, '0')} // ${config.title}
                            </span>
                            ${innerContent}
                        </div>
                    </section>
                `;
            }
    
            return `
                <section id="${config.id}" class="section-view ${isActive}" data-section-index="${index}">
                    ${innerContent}
                </section>
            `;
        }).join('');
    },
    generateScrollIndicator(configs) {
        const dots = configs.map((_, index) => `
            <div class="scroll-dot w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 transition-all duration-300 cursor-pointer ${index === 0 ? 'opacity-100 scale-125' : 'opacity-20 scale-100'}"
                 data-dot-index="${index}"
                 data-section-id="${configs[index].id}">
            </div>
        `).join('');

        return `
            <div id="scroll-indicator" class="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
                ${dots}
            </div>
        `;
    }
};