// ============================================
// MAIN.JS - Entry Point
// ============================================
import { Navbar, initNavbar } from './components/navbar.js';
import { Hero, initHero } from './components/hero.js';
import { Dashboard } from './components/dashboard.js';
import { StaffMastery } from './components/staffMastery.js';
import { ProjectsIntro } from './components/projects/projectsIntro.js';
import { ProjectElis } from './components/projects/projectElis.js';
import { ProjectBank } from './components/projects/projectBank.js';
import { ProjectNativas } from './components/projects/projectNativas.js';
import { AiLabIntro } from './components/aiLab/aiLabIntro.js';
import { AiRepoArchitect } from './components/aiLab/aiRepoArchitect.js';
import { AutomationFlows } from './components/aiLab/automationFlows.js';
import { Leadership } from './components/leadership.js';
import { TechStack } from './components/techStack.js';
import { SoftRadar } from './components/softRadar.js';
import { ContactCLI, initCLI } from './components/contactCLI.js';
import { SocialHub } from './components/socialHub.js';
import { Footer, initFooter } from './components/footer.js';
import { initI18n } from './utils/i18n.js';

// Animation systems
import { BackgroundEngine } from './components/animations/backgroundEngine.js';
import { PerformanceManager } from './components/animations/performanceManager.js';
import { ScrollController } from './components/animations/scrollController.js';
import { SectionRenderer } from './components/animations/sectionRenderer.js';

export const sectionConfigs = [
    { id: 'hero',              title: 'The Statement',  component: Hero,            type: 'full'   },
    { id: 'dashboard',         title: 'Impact Metrics', component: Dashboard,       type: 'flex'   },
    { id: 'mastery',           title: 'Staff Mastery',  component: StaffMastery,    type: 'flex'   },
    { id: 'projects-intro',    title: 'Projects',       component: ProjectsIntro,   type: 'flex'   },
    { id: 'project-elis',      title: 'Elis Eternity',  component: ProjectElis,     type: 'flex'   },
    { id: 'project-banco',     title: 'Fintech AI',     component: ProjectBank,     type: 'flex'   },
    { id: 'project-nativas',   title: 'Blockchain',     component: ProjectNativas,  type: 'flex'   },
    { id: 'ai-lab-intro',      title: 'Lab',            component: AiLabIntro,      type: 'flex'   },
    { id: 'ai-repo-architect', title: 'Repo Architect', component: AiRepoArchitect, type: 'flex'   },
    { id: 'automation-flows',  title: 'n8n Flows',      component: AutomationFlows, type: 'flex'   },
    { id: 'leadership',        title: 'Leadership',     component: Leadership,      type: 'flex'   },
    { id: 'tech-stack',        title: 'Arsenal',        component: TechStack,       type: 'flex'   },
    { id: 'soft-radar',        title: 'Radar',          component: SoftRadar,       type: 'flex'   },
    { id: 'contact-cli',       title: 'Terminal',       component: ContactCLI,      type: 'flex'   },
    { id: 'social-hub',        title: 'Social Hub',     component: SocialHub,       type: 'flex'   },
    { id: 'footer',            title: 'Contact',        component: Footer,          type: 'footer' }
];

function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        return;
    }

    // No hay preferencia → aleatorio
    const randomTheme = Math.random() > 0.5 ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', randomTheme === 'dark');
}

// ============================================
// APP INITIALIZATION
// ============================================
async function init() {

    initTheme();
    // 1. i18n
    await initI18n(localStorage.getItem('lang') || 'en');

    // 2. Cleanup scroll before re-rendering (critical for lang change)
    ScrollController.cleanup();

    // 3. Render
    const app = document.getElementById('app');
    app.innerHTML = SectionRenderer.render(sectionConfigs);

    // 4. Animation systems — only init BackgroundEngine once
    if (!window.__appInitialized) {
        BackgroundEngine.init();
        PerformanceManager.init();
        window.__appInitialized = true;
    }

    // 5. Re-init scroll (always, handles re-renders)
    ScrollController.init(sectionConfigs);

    // 6. Components
    initNavbar(init);
    if (typeof initHero === 'function') initHero();
    initCLI(init);
    initFooter();

    // 7. Dev tools (localhost only)
    if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
        enableDevTools();
    }

    // console.log('✅ App initialized');
}

// ============================================
// DEV TOOLS
// ============================================
function enableDevTools() {
    if (window.__devToolsInitialized) return;
    window.__devToolsInitialized = true;

    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'q') {
            const levels = ['low', 'medium', 'high', 'ultra'];
            const next = (levels.indexOf(PerformanceManager.qualityLevel) + 1) % levels.length;
            PerformanceManager.setQuality(levels[next]);
            console.log('🎨 Quality:', levels[next]);
        } else if (e.ctrlKey && e.key === 's') {
            const stats = document.getElementById('performance-stats');
            stats ? stats.remove() : PerformanceManager.showStats();
        } else if (e.ctrlKey && e.key === 'i') {
            console.table(PerformanceManager.getStats());
        } else if (e.ctrlKey && e.key === 'd') {
            ScrollController.debugMode = !ScrollController.debugMode;
            console.log('🐛 Debug mode:', ScrollController.debugMode);
        }
    });

    console.log(`
        🎮 Dev Tools:
        Ctrl+Q → Cycle quality
        Ctrl+S → Toggle stats
        Ctrl+I → Device info
        Ctrl+D → Debug scroll
            `);
    }

init();