import { t } from '../../utils/i18n.js';

export function AutomationFlows() {
    // Lógica para expandir tarjetas en mobile
    window.toggleFlowDetail = (el) => {
        if (window.innerWidth >= 768) return;
        el.classList.toggle('is-expanded');
    };

    return `
    <div class="w-full py-20 space-y-16 relative overflow-hidden transition-colors duration-500">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            <div onclick="toggleFlowDetail(this)" class="flow-card group p-6 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 hover:border-sky-500/40 transition-all relative overflow-hidden cursor-pointer md:cursor-default">
                <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                
                <div class="flex justify-between items-center md:items-start mb-4 md:mb-6 relative z-10">
                    <i class="fa-solid fa-robot text-2xl md:text-3xl text-sky-600 dark:text-sky-400 opacity-50 group-hover:opacity-100 transition-opacity"></i>
                    <div class="flex items-center gap-3">
                        <span class="font-code text-[9px] md:text-[10px] text-sky-600/60 dark:text-sky-400/40 uppercase tracking-widest">${t('aiLab.flow_a_status')}</span>
                        <i class="fa-solid fa-chevron-down md:hidden text-sky-500/30 transition-transform arrow"></i>
                    </div>
                </div>

                <h4 class="text-[clamp(1.1rem,4vw,1.25rem)] font-headline font-black uppercase italic mb-2 md:mb-4 text-slate-900 dark:text-white relative z-10 leading-tight">
                    ${t('aiLab.flow_a_title')}
                </h4>

                <div class="flow-content max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden transition-all duration-500">
                    <p class="text-sm font-code text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 pt-2 border-t border-sky-500/10 mt-2">
                        ${t('aiLab.flow_a_desc')}
                    </p>
                </div>
            </div>

            <div onclick="toggleFlowDetail(this)" class="flow-card group p-6 bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 hover:border-sky-500/40 transition-all relative overflow-hidden cursor-pointer md:cursor-default">
                <div class="absolute top-0 left-0 w-1 h-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                
                <div class="flex justify-between items-center md:items-start mb-4 md:mb-6 relative z-10">
                    <i class="fa-solid fa-newspaper text-2xl md:text-3xl text-sky-600 dark:text-sky-400 opacity-50 group-hover:opacity-100 transition-opacity"></i>
                    <div class="flex items-center gap-3">
                        <span class="font-code text-[9px] md:text-[10px] text-sky-600/60 dark:text-sky-400/40 uppercase tracking-widest">${t('aiLab.flow_b_status')}</span>
                        <i class="fa-solid fa-chevron-down md:hidden text-sky-500/30 transition-transform arrow"></i>
                    </div>
                </div>

                <h4 class="text-[clamp(1.1rem,4vw,1.25rem)] font-headline font-black uppercase italic mb-2 md:mb-4 text-slate-900 dark:text-white relative z-10 leading-tight">
                    ${t('aiLab.flow_b_title')}
                </h4>

                <div class="flow-content max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden transition-all duration-500">
                    <p class="text-sm font-code text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 pt-2 border-t border-sky-500/10 mt-2">
                        ${t('aiLab.flow_b_desc')}
                    </p>
                </div>
            </div>
        </div>

        <div class="pt-12 border-t border-sky-500/20 dark:border-sky-500/30 max-w-7xl mx-auto">
            <span class="text-[10px] font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em] mb-10 block text-center opacity-60">
                ${t('aiLab.stack_label')}
            </span>
            <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                
                <div class="flex flex-col items-center gap-3 group">
                    <span class="font-code text-[clamp(0.6rem,2vw,0.75rem)] text-slate-600 dark:text-slate-400 uppercase tracking-widest group-hover:text-sky-500 transition-colors">n8n / Zapier</span>
                    <div class="h-[1px] w-8 bg-sky-500/40"></div>
                </div>

                <div class="flex flex-col items-center gap-3 group">
                    <span class="font-code text-[clamp(0.6rem,2vw,0.75rem)] text-slate-600 dark:text-slate-400 uppercase tracking-widest group-hover:text-sky-500 transition-colors text-center">LLMs (GPT-4 / Gemini)</span>
                    <div class="h-[1px] w-8 bg-sky-500/40"></div>
                </div>

                <div class="flex flex-col items-center gap-3 group">
                    <span class="font-code text-[clamp(0.6rem,2vw,0.75rem)] text-slate-600 dark:text-slate-400 uppercase tracking-widest group-hover:text-sky-500 transition-colors text-center">Firebase / Vercel</span>
                    <div class="h-[1px] w-8 bg-sky-500/40"></div>
                </div>

            </div>
        </div>

        <style>
            @media (max-width: 767px) {
                .flow-card.is-expanded .flow-content {
                    max-height: 300px;
                    opacity: 1;
                    margin-top: 1rem;
                }
                .flow-card.is-expanded .arrow {
                    transform: rotate(180deg);
                    color: #0ea5e9;
                }
            }
        </style>
    </div>
    `;
}