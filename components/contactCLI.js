import { t } from '../utils/i18n.js';
import { AppConfig } from '../config.js';
import { openEasterEgg } from './easterEgg/easterEggModal.js';

// Estado del historial para la sesión actual
let commandHistory = [];
let historyIndex = -1;

export function ContactCLI() {
    return `
    <div class="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-10 transition-all duration-500">
        <div class="bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-400/20 rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[400px] md:min-h-[550px]">
            
            <div class="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 border-b border-sky-500/20 dark:border-sky-500/30 flex items-center justify-between flex-shrink-0">
                <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span class="font-code text-[9px] md:text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
                    ${t('cli.console_title')} — bash
                </span>
            </div>

            <div id="terminal-body" class="p-4 md:p-8 font-code text-[12px] md:text-sm flex-grow overflow-y-auto flex flex-col gap-2 scroll-smooth bg-slate-50/20 dark:bg-transparent">
                <div class="text-sky-600 dark:text-sky-400 opacity-80 leading-relaxed">
                    ${t('cli.welcome')}
                </div>
                
                <div id="terminal-history" class="space-y-1.5 md:space-y-2"></div>
                
                <div class="flex gap-2 items-start text-sky-600 dark:text-sky-400 mt-2">
                    <span class="animate-pulse flex-shrink-0 font-bold">❯</span>
                    <input type="text" id="cli-input" 
                        class="bg-transparent border-none outline-none flex-grow text-slate-900 dark:text-white caret-sky-500 w-full" 
                        autofocus 
                        autocomplete="off" 
                        spellcheck="false"
                        inputmode="text">
                </div>
            </div>

            <div class="md:hidden px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border-t border-sky-500/10 text-[9px] font-code text-slate-400 uppercase tracking-widest flex justify-between">
                <span>[ENTER] SEND</span>
                <span>[HELP] CMDS</span>
            </div>
        </div>
    </div>
    `;
}

export function initCLI() {
    const input = document.getElementById('cli-input');
    const history = document.getElementById('terminal-history');
    const body = document.getElementById('terminal-body');

    if (!input) return;

    // Asegurar que el input siempre sea visible al escribir (Crucial para Mobile)
    const scrollToBottom = () => {
        body.scrollTop = body.scrollHeight;
    };

    body.addEventListener('click', () => input.focus());

    // Ajuste para teclado mobile: centrar el input cuando gana el foco
    input.addEventListener('focus', () => {
        setTimeout(scrollToBottom, 300);
    });

    input.addEventListener('keydown', (e) => {
        // Bloqueo de scroll global para evitar que la página se mueva al usar la CLI
        if ([' ', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.stopPropagation();
        }

        if (e.key === 'Enter') {
            const rawValue = input.value;
            const cmd = rawValue.trim().toLowerCase();
            
            if (cmd !== '') {
                const line = document.createElement('div');
                line.className = "flex gap-2 opacity-70";
                line.innerHTML = `<span class="text-sky-500/50 font-bold flex-shrink-0">❯</span> <span class="break-all">${rawValue}</span>`;
                history.appendChild(line);
                
                commandHistory.push(rawValue);
                historyIndex = commandHistory.length;
                
                processCommand(cmd, history);
            }

            input.value = '';
            setTimeout(scrollToBottom, 10);
        } 
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } 
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        }
    });
}

/**
 * Genera el contenido de ayuda con grid adaptable
 */
function generateHelpContent() {
    const commands = [];
    commands.push({ cmd: 'help', desc: t('cli.help_desc') });
    commands.push({ cmd: AppConfig.cli.clear.command, desc: t('cli.clear_desc') });
    commands.push({ cmd: 'contact --email', desc: t('cli.email_msg').split(':')[0] });

    AppConfig.cv.forEach(cv => {
        commands.push({ cmd: `get cv--${cv.id}`, desc: `CV (${cv.nameShort})` });
    });
    
    AppConfig.social.forEach(social => {
        commands.push({ cmd: `open --${social.id}`, desc: social.name });
    });

    commands.push({ cmd: AppConfig.cli.easterEgg.command, desc: '???' });
    
    // Grid: 1 col en mobile, 2 col en desktop
    return commands.map(c => `
        <div class="flex flex-col md:grid md:grid-cols-[140px,1fr] gap-x-4 border-b border-sky-500/5 md:border-0 py-1 md:py-0">
            <span class="text-sky-500 font-bold">${c.cmd}</span>
            <span class="text-slate-400 text-[10px] md:text-xs opacity-80">${c.desc}</span>
        </div>
    `).join('');
}

function processCommand(cmd, history) {
    const output = document.createElement('div');
    output.className = "pl-4 mb-2 border-l border-sky-500/20 ml-1.5 py-1";

    if (cmd === 'help') {
        output.innerHTML = `
            <div class="text-slate-600 dark:text-slate-400 flex flex-col gap-2 mt-2">
                ${generateHelpContent()}
            </div>`;
    }
    else if (cmd === AppConfig.cli.clear.command) {
        history.innerHTML = '';
        return;
    }
    else if (cmd === AppConfig.cli.easterEgg.command) {
        output.innerHTML = `<span class="text-sky-500 italic font-bold animate-pulse">${t('cli.easter_egg')}</span>`;
        setTimeout(() => {
            openEasterEgg();
        }, 600);
    }
    else if (cmd === 'contact --email') {
        output.innerHTML = `<span class="text-sky-600 dark:text-sky-400">${t('cli.email_msg')} <br class="md:hidden"> ${AppConfig.contact.email}</span>`;
        setTimeout(() => window.location.href = `mailto:${AppConfig.contact.email}`, 500);
    }
    else if (cmd.startsWith('get cv--')) {
        const id = cmd.replace('get cv--', '');
        const cv = AppConfig.cv.find(c => c.id === id);
        if (cv) {
            output.innerHTML = `<span class="text-sky-600 dark:text-sky-400">-> ${t('cli.downloading')} ${cv.name}...</span>`;
            window.open(cv.path, '_blank');
        } else {
            output.innerHTML = `<span class="text-red-400">[ERROR] CV ID NOT FOUND</span>`;
        }
    }
    else if (cmd.startsWith('open --')) {
        const id = cmd.replace('open --', '');
        const social = AppConfig.social.find(s => s.id === id);
        if (social) {
            output.innerHTML = `<span class="text-sky-600 dark:text-sky-400">-> ${t('cli.opening')} ${social.name}...</span>`;
            window.open(social.url, '_blank', 'noopener,noreferrer');
        } else {
            output.innerHTML = `<span class="text-red-400">[ERROR] SOCIAL ID NOT FOUND</span>`;
        }
    }
    else {
        output.innerHTML = `<span class="text-red-500/80 dark:text-red-400/80 font-bold">${t('cli.not_found')}</span>`;
    }
    
    history.appendChild(output);
}