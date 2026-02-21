import { t } from '../utils/i18n.js';
import { AppConfig } from '../config.js';

// ============================================
// FOOTER FRAGMENTS (Optimized for Mobile)
// ============================================

const FooterBrand = () => `
    <div class="space-y-6">
        <div class="font-headline text-[clamp(1.5rem,5vw,2rem)] font-bold tracking-tighter uppercase text-slate-900 dark:text-white flex items-center gap-2">
            <span class="text-sky-600 dark:text-sky-400 opacity-60">&gt;_</span> DANN<span class="text-sky-600 dark:text-sky-400 font-code">.</span>SH
        </div>
        <p class="text-[10px] md:text-[11px] font-code font-light text-slate-500 dark:text-slate-400 leading-relaxed max-w-[280px]">
            ${t('footer.description')}
        </p>
    </div>
`;

const FooterNav = (navLinks) => `
    <div class="space-y-6 md:space-y-8">
        <p class="text-[10px] md:text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest opacity-80 border-b border-sky-500/10 pb-2 md:border-0 md:pb-0">
            ${t('footer.nav_title')}
        </p>
        <ul class="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-4 text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-slate-900 dark:text-white font-code">
            ${navLinks.map(link => `
                <li>
                    <a href="#${link.id}" class="footer-nav-link hover:text-sky-600 dark:hover:text-sky-400 transition-all flex items-center gap-2 group" data-section-id="${link.id}">
                        <span class="hidden md:block w-0 group-hover:w-3 h-[1px] bg-sky-600 dark:bg-sky-400 transition-all"></span>
                        ${t(link.key)}
                    </a>
                </li>
            `).join('')}
        </ul>
    </div>
`;

const FooterConnect = () => `
    <div class="space-y-6 md:space-y-8">
        <p class="text-[10px] md:text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest opacity-80 border-b border-sky-500/10 pb-2 md:border-0 md:pb-0">
            ${t('footer.conn_title')}
        </p>
        <div class="flex flex-col gap-6 md:gap-8">
            <a href="mailto:${AppConfig.contact.emailDisplay}" class="text-[10px] md:text-xs font-code hover:text-sky-600 dark:hover:text-sky-400 text-slate-900 dark:text-white underline underline-offset-4 tracking-tighter w-fit break-all">
                ${AppConfig.contact.emailDisplay}
            </a>

            <div class="space-y-4">
                <p class="text-[8px] md:text-[9px] font-code uppercase tracking-widest opacity-50 text-slate-900 dark:text-white">Social Connect</p>
                <div class="flex flex-wrap gap-5 text-slate-600/40 dark:text-slate-400/40">
                    ${AppConfig.social.map(social => `
                        <a href="${social.url}" target="_blank" rel="noopener noreferrer"
                           class="hover:text-sky-600 dark:hover:text-sky-400 transition-all transform hover:scale-110"
                           title="${social.name}">
                            <i class="${social.icon} text-lg md:text-xl"></i>
                        </a>
                    `).join('')}
                </div>
            </div>

            <div class="space-y-4">
                <p class="text-[8px] md:text-[9px] font-code uppercase tracking-widest opacity-50 text-slate-900 dark:text-white">Downloads [CV]</p>
                <div class="flex flex-wrap gap-4">
                    ${AppConfig.cv.map(cv => `
                        <div class="relative group">
                            <a href="${cv.path}" download title="${cv.name}"
                               class="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 border border-slate-200 dark:border-white/10 rounded-lg text-slate-400 hover:text-red-500 hover:border-red-500/50 transition-all">
                                <i class="fa-solid fa-file-pdf text-xs md:text-sm"></i>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
`;

const FooterStatus = () => `
    <div class="space-y-6 md:space-y-8">
        <p class="text-[10px] md:text-xs font-code font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest opacity-80 border-b border-sky-500/10 pb-2 md:border-0 md:pb-0">
            ${t('footer.stat_title')}
        </p>
        <div class="flex items-start gap-3">
            <div class="mt-1 w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <div class="text-[9px] md:text-[10px] font-code leading-relaxed">
                <p class="text-slate-900 dark:text-white font-bold tracking-tight">${t('footer.status_msg')}</p>
                <p class="opacity-60 uppercase tracking-[0.1em] text-slate-600 dark:text-slate-400">${t('footer.location')}</p>
                <p class="opacity-40 italic mt-2">v2.0.26_build</p>
            </div>
        </div>
    </div>
`;

const FooterBottom = () => `
    <div class="mt-auto pt-8 md:pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div class="text-[8px] md:text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.4em] font-code">
            &copy; ${new Date().getFullYear()} DANN LARA <span class="mx-1 md:mx-2 opacity-40">|</span> ${t('footer.rights')}
        </div>
        <div class="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold text-slate-600/40 dark:text-slate-400/40 font-code group">
            ${t('footer.arch_by')} <span class="text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">DANN.LARA</span>
        </div>
    </div>
`;

// ============================================
// MAIN COMPONENT
// ============================================
export function Footer() {
    const navLinks = [
        { id: 'dashboard',      key: 'navbar.dashboard' },
        { id: 'mastery',        key: 'navbar.mastery' },
        { id: 'projects-intro', key: 'navbar.projects' },
        { id: 'ai-lab-intro',   key: 'navbar.ai_lab' },
        { id: 'leadership',     key: 'navbar.leadership' },
        { id: 'social-hub',    key: 'navbar.contact' }
    ];

    return `
    <footer class="w-full min-h-screen md:min-h-svh relative bg-white dark:bg-slate-950 transition-colors duration-700 overflow-hidden flex flex-col">
        
        <div class="absolute bottom-0 left-0 md:-bottom-10 md:-left-10 text-[clamp(6rem,30vw,20rem)] font-headline font-black opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none text-slate-900 dark:text-white uppercase tracking-tighter z-0 leading-none">
            DANN.sh
        </div>

        <div class="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10 flex-grow flex flex-col justify-center">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-16 my-auto">
                ${FooterBrand()}
                <div class="md:border-l md:border-slate-200/10 md:pl-12">${FooterNav(navLinks)}</div>
                <div class="md:border-l md:border-slate-200/10 md:pl-12">${FooterConnect()}</div>
                <div class="md:border-l md:border-slate-200/10 md:pl-12">${FooterStatus()}</div>
            </div>

            <div class="mt-auto">
                ${FooterBottom()}
            </div>
        </div>
    </footer>`;
}

export function initFooter() {
    document.querySelectorAll('.footer-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section-id');
            if (!sectionId) return;

            if (window.ScrollController?.navigateTo) {
                window.ScrollController.navigateTo(sectionId);
            } else {
                const target = document.getElementById(sectionId);
                if (target) {
                    const offset = 80; // Compensar navbar
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}