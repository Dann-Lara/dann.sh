// ============================================
// CONFIGURACIÓN DE VARIABLES DE ENTORNO
// ============================================

export const AppConfig = {
    contact: {
        email: 'dkubdannspc@gmail.com',
        emailDisplay: 'dkubdannspc@gmail.com'
    },
    // CV: Google Drive direct download. Upload PDF → Right-click → Get link → Anyone with link.
    // URL format: https://drive.google.com/file/d/FILE_ID/view — use the FILE_ID part only.
    cv: [
        {
            id: 'ai',
            name: 'CV AI INTEGRATED SYSTEMS ENGINEERING',
            nameShort: 'AI',
            path: 'https://drive.google.com/uc?export=download&id=13ESJRnJoEjjCPE4MbgzpvOtlMb88Wd84'
        },
        {
            id: 'dev',
            name: 'CV ENTERPRISE SYSTEMS ENGINEER',
            nameShort: 'Dev',
            path: 'https://drive.google.com/uc?export=download&id=1DmuQxWGjp1Epg-xAos3mxUQqygHIcjvu'
        },
        {
            id: 'ai_es',
            name: 'CV AI INTEGRATED SYSTEMS ENGINEERING ES',
            nameShort: 'AI ES',
            path: 'https://drive.google.com/uc?export=download&id=1diEGBkEw1hRWGkk1amiwJCJqXm1TPy'
        },
        {
            id: 'dev_es',
            name: 'CV ENTERPRISE SYSTEMS ENGINEER ES',
            nameShort: 'Dev ES',
            path: 'https://drive.google.com/uc?export=download&id=1qvg63p_eTrg_58TCas-YwlxNZMmLf9in'
        }
    ],
    social: [
        {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/daniel-alejandro-lara-bartolo/',
            icon: 'fa-brands fa-linkedin',
            description: 'Open LinkedIn profile'
        },
        {
            id: 'github',
            name: 'GitHub',
            url: 'https://github.com/Dann-Lara',
            icon: 'fa-brands fa-github',
            description: 'Open GitHub profile'
        },
        {
            id: 'hackerrank',
            name: 'Hackerrank',
            url: 'https://www.hackerrank.com/profile/codeDann',
            icon: 'fa-solid fa-code',
            description: 'Open CodePen profile'
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            url: 'https://wa.me/7221818972',
            icon: 'fa-brands fa-whatsapp',
            description: 'Open WhatsApp chat'
        },
        {
            id: 'discord',
            name: 'Discord',
            url: 'https://discord.com/users/dannlara',
            icon: 'fa-brands fa-discord',
            description: 'Open Discord profile'
        }
    ],
    cli: {
        easterEgg: {
            command: 'dann',
            description: '???'
        },
        clear: {
            command: 'clear',
            description: 'Reset console'
        }
    }
};
