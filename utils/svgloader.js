// src/utils/svgLoader.js
// Utilidad genérica para cargar SVGs externos e inyectarlos inline.
// Reutilizable en cualquier parte del proyecto.

const _cache = {};

/**
 * Fetch de un SVG externo → devuelve outerHTML listo para inyectar.
 * - Elimina width/height fijos (el tamaño lo controla CSS del contenedor)
 * - Fuerza currentColor en fill/stroke (el color lo controla text-{color} de Tailwind)
 *
 * @param {string} path  Ruta al .svg  ej: 'assets/img/car.svg'
 * @param {string} cls   Clases aplicadas al <svg>  ej: 'w-full h-full'
 * @returns {Promise<string>}
 */
export async function loadSVG(path, cls = '') {
    if (!_cache[path]) {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`[svgLoader] No se pudo cargar: ${path}`);
        _cache[path] = await res.text();
    }

    const doc = new DOMParser().parseFromString(_cache[path], 'image/svg+xml');
    const svg = doc.querySelector('svg');
    if (!svg) throw new Error(`[svgLoader] SVG inválido: ${path}`);

    svg.removeAttribute('width');
    svg.removeAttribute('height');
    if (cls) svg.setAttribute('class', cls);

    svg.querySelectorAll('[fill]:not([fill="none"])').forEach(el => el.setAttribute('fill', 'currentColor'));
    svg.querySelectorAll('[stroke]:not([stroke="none"])').forEach(el => el.setAttribute('stroke', 'currentColor'));

    return svg.outerHTML;
}

/**
 * Inyecta un SVG directamente en un elemento del DOM por su ID.
 *
 * @param {string} id    ID del contenedor
 * @param {string} path  Ruta al .svg
 * @param {string} cls   Clases aplicadas al <svg>
 */
export async function injectSVG(id, path, cls = '') {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        el.innerHTML = await loadSVG(path, cls);
    } catch (e) {
        console.error(e);
    }
}