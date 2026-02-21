import { t } from '../utils/i18n.js';

// ============================================
// NAVBAR FRAGMENTS
// ============================================

const NavDesktop = (sections, currentLang) => `
    <div class="flex gap-4 md:gap-10 items-center">
        <ul class="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground font-code">
            ${sections.map(section => `
                <li>
                    <a href="#${section.id}" class="nav-link hover:text-sky-600 dark:hover:text-sky-400 transition-all border-b border-transparent hover:border-sky-500 dark:hover:border-sky-400 pb-1" data-section-id="${section.id}">
                        ${t(section.key)}
                    </a>
                </li>
            `).join('')}
        </ul>

        <div class="flex items-center gap-4 border-l border-border pl-4 md:pl-10">
            <button id="theme-toggle" class="text-foreground p-2 hover:bg-accent rounded-md transition-colors">
                <i class="fa-solid fa-moon dark:hidden text-base"></i>
                <i class="fa-solid fa-bolt-lightning hidden dark:block text-sky-600 dark:text-sky-400 text-base animate-pulse"></i>
            </button>

            <div class="flex gap-3 text-[9px] font-bold tracking-widest font-code text-foreground italic uppercase">
                <button class="lang-btn ${currentLang === 'es' ? 'text-sky-600 dark:text-sky-400 underline underline-offset-8 decoration-2' : 'opacity-30 hover:opacity-100 transition-opacity'}" data-lang="es">ES</button>
                <button class="lang-btn ${currentLang === 'en' ? 'text-sky-600 dark:text-sky-400 underline underline-offset-8 decoration-2' : 'opacity-30 hover:opacity-100 transition-opacity'}" data-lang="en">EN</button>
            </div>

            <button id="menu-open" class="lg:hidden text-foreground ml-2">
                <i class="fa-solid fa-ellipsis-vertical text-xl hover:text-sky-600 dark:hover:text-sky-400 transition-colors"></i>
            </button>
        </div>
    </div>
`;

const NavMobile = (sections) => `
    <div id="mobile-menu" class="not-ready fixed inset-0 bg-background/95 backdrop-blur-2xl translate-y-full z-[150] flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]">
        <div class="flex justify-between items-center p-8 border-b border-border">
            <div class="font-headline text-sm tracking-widest uppercase text-slate-900 dark:text-white">Menu<span class="text-sky-600 dark:text-sky-400">.sys</span></div>
            <button id="menu-close" class="text-slate-900 dark:text-white p-2 hover:rotate-90 hover:text-sky-600 dark:hover:text-sky-400 transition-all">
                <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
        </div>

        <div class="flex-1 flex flex-col justify-center px-12">
            <ul class="flex flex-col gap-4 text-foreground">
                ${sections.map((section, idx) => `
                    <li>
                        <a href="#${section.id}" class="mobile-link nav-link group flex items-end gap-4 text-5xl md:text-8xl font-headline uppercase tracking-tighter" data-section-id="${section.id}">
                            <span class="text-xs font-code tracking-[0.5em] text-sky-600 dark:text-sky-400 opacity-20 group-hover:opacity-100 transition-opacity mb-4">0${idx + 1}</span>
                            <span class="group-hover:italic group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-all">${t(section.key)}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="p-12 border-t border-border flex justify-between items-end">
            <div class="text-[10px] uppercase tracking-widest opacity-40 text-slate-900 dark:text-white font-code leading-relaxed">
                Architectural <span class="text-sky-600 dark:text-sky-400 font-bold">Forge</span> <br> Engineering Studio
            </div>
            <div class="text-[10px] font-bold uppercase text-sky-600 dark:text-sky-400 tracking-widest">2026 ©</div>
        </div>
    </div>
`;

// ============================================
// MAIN COMPONENT
// ============================================
export function Navbar() {
    const currentLang = localStorage.getItem('lang') || 'es';
    const sections = [
        { id: 'dashboard',      key: 'navbar.dashboard' },
        { id: 'mastery',        key: 'navbar.mastery' },
        { id: 'projects-intro', key: 'navbar.projects' },
        { id: 'ai-lab-intro',   key: 'navbar.ai_lab' },
        { id: 'leadership',     key: 'navbar.leadership' },
        { id: 'social-hub',    key: 'navbar.contact' }
    ];

    return `
    <nav class="fixed w-full z-[100] border-b border-border bg-background/80 backdrop-blur-md transition-all duration-500">
        <div class="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
            <div class="font-headline text-lg font-bold tracking-tighter flex items-center gap-2 group cursor-pointer text-slate-900 dark:text-white">
                <span class="text-sky-600 dark:text-sky-400 px-2 py-1 rounded text-xs font-code transition-colors">
                    &gt;_ Dann.sh
                </span>
                <span class="hidden sm:block text-[10px] font-code opacity-50 uppercase tracking-widest ml-2 text-slate-600 dark:text-slate-400">
                    Software Architect & AI
                </span>
            </div>
            ${NavDesktop(sections, currentLang)}
        </div>
    </nav>
    ${NavMobile(sections)}
    `;
}

// ============================================
// INIT LOGIC
// ============================================
export function initNavbar(reRenderCallback) {
    const themeBtn    = document.getElementById('theme-toggle');
    const menuOpen    = document.getElementById('menu-open');
    const menuClose   = document.getElementById('menu-close');
    const mobileMenu  = document.getElementById('mobile-menu');
    const langBtns    = document.querySelectorAll('.lang-btn');
    const navLinks    = document.querySelectorAll('.nav-link');

    setTimeout(() => { mobileMenu?.classList.remove('not-ready'); }, 100);

    const toggleMenu = (open) => {
        mobileMenu?.classList.toggle('translate-y-full', !open);
        document.body.style.overflow = open ? 'hidden' : '';
    };

    // Navigate using the new navigateTo(id) API — works after re-renders
    const handleNavClick = (e) => {
        e.preventDefault();
        const sectionId = e.currentTarget.getAttribute('data-section-id');
        if (!sectionId) return;

        if (window.ScrollController?.navigateTo) {
            window.ScrollController.navigateTo(sectionId);
        } else {
            // Mobile fallback: native scroll to section
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu(false);
    };

    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    menuOpen?.addEventListener('click', () => toggleMenu(true));
    menuClose?.addEventListener('click', () => toggleMenu(false));

    langBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const newLang = btn.getAttribute('data-lang');
            localStorage.setItem('lang', newLang);
            if (reRenderCallback) await reRenderCallback();
        });
    });

    themeBtn?.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}