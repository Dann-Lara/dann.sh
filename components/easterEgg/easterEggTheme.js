// src/components/easterEgg/easterEggTheme.js
// Lee las variables CSS del sistema de diseño en tiempo de ejecución.
// No hay colores hardcodeados — todo viene de style.css / tailwind.config.js.

/**
 * Lee una variable CSS del :root y la devuelve como hsl(...).
 * Las variables están definidas como "H S% L%" sin el wrapper hsl().
 */
function cssVar(name) {
    return `hsl(${getComputedStyle(document.documentElement).getPropertyValue(name).trim()})`;
}

/**
 * Lee una variable CSS y devuelve hsl con opacidad personalizada.
 * @param {string} name   — nombre de la variable, ej: '--background'
 * @param {number} alpha  — opacidad entre 0 y 1
 */
function cssVarAlpha(name, alpha) {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return `hsl(${val} / ${alpha})`;
}

export function getThemeTokens() {
    return {
        // Overlay de fondo
        overlayBg: cssVarAlpha('--background', 0.75),

        // Cuerpo del modal
        modalBg: `linear-gradient(145deg, ${cssVar('--background')}, ${cssVar('--card')})`,
        modalBorder: cssVarAlpha('--border', 0.8),
        modalShadow: `0 0 0 1px ${cssVarAlpha('--border', 0.4)},
                        0 32px 80px ${cssVarAlpha('--background', 0.7)},
                        0 0 120px ${cssVarAlpha('--primary', 0.08)}`,

        // Titlebar
        titlebarBg: cssVarAlpha('--card', 0.9),
        titlebarBorder: cssVarAlpha('--border', 0.6),
        titleColor: cssVarAlpha('--muted-foreground', 0.8),
        liveColor: cssVarAlpha('--muted-foreground', 0.5),

        // Viewport
        viewportBg: `linear-gradient(180deg, ${cssVar('--background')} 0%, ${cssVar('--card')} 100%)`,
        gridOpacity: '0.06',

        // Status bar
        statusBg: cssVarAlpha('--card', 0.95),
        statusBorder: cssVarAlpha('--border', 0.5),
        statusTextColor: cssVarAlpha('--muted-foreground', 0.7),

        // Glow y acento — usa el primary del sistema de diseño
        glowOpacity: '0.2',
        accent: cssVar('--primary'),
        barTrack: cssVarAlpha('--primary', 0.15),
    };
}