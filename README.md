# Dann | Software Architect

> Personal portfolio for an Enterprise Modernization Architect · AI-Integrated Systems. Bilingual (EN/ES), dark/light theme, no build step.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vanilla JS](https://img.shields.io/badge/JS-Vanilla%20ES%20Modules-f7df1e?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## English

### About

**Dann** is a single-page portfolio website showcasing professional experience as a Software Architect focused on Enterprise Modernization and AI-Integrated Systems. It features impact metrics, projects (Elis, Fintech, Blockchain), AI Lab automation tools, leadership, tech stack, and contact via a terminal-style CLI interface.

### Features

| Feature | Description |
|---------|-------------|
| **i18n** | English and Spanish via `locales/en` and `locales/es` |
| **Theme** | Dark/light mode with random initial theme and manual toggle |
| **Sections** | Hero, Dashboard, Staff Mastery, Projects, AI Lab, Leadership, Tech Stack, Soft Radar, Contact CLI, Social Hub, Footer |
| **UI** | Tailwind CSS, Inter + Space Grotesk, Font Awesome, Anime.js animations |
| **Static** | Vanilla JS (ES modules), no bundler required |
| **Dev Tools** | Quality presets, performance stats, debug mode (localhost only) |

### Tech Stack

- **HTML5**, **CSS** (Tailwind via CDN), **JavaScript** (ES modules)
- [Tailwind CSS](https://tailwindcss.com), [Anime.js](https://animejs.com), [Font Awesome](https://fontawesome.com)
- Fonts: Google Fonts (Inter, Space Grotesk)

### Project Structure

```
dann/
├── index.html              # Entry HTML
├── main.js                 # App bootstrap, section configs, init
├── config.js               # Contact, CV, social links, CLI config
├── style.css               # Custom styles
├── tailwind.config.js      # Theme and color tokens
├── components/
│   ├── navbar.js           # Nav with lang/theme toggles
│   ├── hero.js             # Hero section
│   ├── dashboard.js        # Impact metrics
│   ├── staffMastery.js     # Skills
│   ├── projects/           # ProjectElis, ProjectBank, ProjectNativas
│   ├── aiLab/              # AiLabIntro, AiRepoArchitect, AutomationFlows
│   ├── leadership.js       # Leadership section
│   ├── techStack.js        # Tech arsenal
│   ├── softRadar.js        # Emerging tech radar
│   ├── contactCLI.js       # Terminal-style contact + easter egg
│   ├── socialHub.js        # Social links
│   ├── footer.js           # Footer, CV downloads
│   ├── easterEgg/          # Easter egg modal and phases
│   └── animations/         # BackgroundEngine, PerformanceManager, ScrollController, SectionRenderer
├── locales/
│   ├── en/                 # English JSON (hero, navbar, dashboard, etc.)
│   └── es/                 # Spanish JSON
├── utils/
│   ├── i18n.js             # Language loading and t()
│   └── svgloader.js        # SVG loading utility
└── assets/
    ├── img/                # Images, icons
    └── cv/                 # CV PDFs (AI/Dev, EN/ES)
```

### Getting Started

No build step. Use any static server:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

Then open `http://localhost:8000`. Language and theme are stored in `localStorage`.

**Dev shortcuts (localhost only):**

- `Ctrl+Q` — Cycle animation quality (low/medium/high/ultra)
- `Ctrl+S` — Toggle performance stats overlay
- `Ctrl+I` — Log device info to console
- `Ctrl+D` — Toggle scroll debug mode

### License

MIT — see [LICENSE](LICENSE).

### Changelog

See [CHANGELOG.md](CHANGELOG.md).

---

## Español

### Acerca de

**Dann** es un portafolio web de una sola página que presenta la experiencia profesional como Software Architect enfocado en Modernización Empresarial e IA Integrada. Incluye métricas de impacto, proyectos (Elis, Fintech, Blockchain), herramientas de automatización AI Lab, liderazgo, stack técnico y contacto vía interfaz estilo terminal CLI.

### Características

| Característica | Descripción |
|----------------|-------------|
| **i18n** | Inglés y español en `locales/en` y `locales/es` |
| **Tema** | Modo claro/oscuro con tema inicial aleatorio y cambio manual |
| **Secciones** | Hero, Dashboard, Staff Mastery, Proyectos, AI Lab, Leadership, Tech Stack, Soft Radar, Contact CLI, Social Hub, Pie |
| **UI** | Tailwind CSS, Inter + Space Grotesk, Font Awesome, animaciones Anime.js |
| **Estático** | JS vanilla (módulos ES), sin bundler |
| **Dev Tools** | Presets de calidad, estadísticas de rendimiento, modo debug (solo localhost) |

### Stack técnico

- **HTML5**, **CSS** (Tailwind vía CDN), **JavaScript** (módulos ES)
- [Tailwind CSS](https://tailwindcss.com), [Anime.js](https://animejs.com), [Font Awesome](https://fontawesome.com)
- Fuentes: Google Fonts (Inter, Space Grotesk)

### Estructura del proyecto

```
dann/
├── index.html              # HTML de entrada
├── main.js                 # Arranque de la app, config de secciones, init
├── config.js               # Contacto, CV, enlaces sociales, config CLI
├── style.css               # Estilos propios
├── tailwind.config.js      # Tema y tokens de color
├── components/
│   ├── navbar.js           # Nav con selectores idioma/tema
│   ├── hero.js             # Sección hero
│   ├── dashboard.js        # Métricas de impacto
│   ├── staffMastery.js     # Habilidades
│   ├── projects/           # ProjectElis, ProjectBank, ProjectNativas
│   ├── aiLab/              # AiLabIntro, AiRepoArchitect, AutomationFlows
│   ├── leadership.js       # Sección liderazgo
│   ├── techStack.js        # Arsenal tecnológico
│   ├── softRadar.js        # Radar de tecnologías emergentes
│   ├── contactCLI.js       # Contacto estilo terminal + easter egg
│   ├── socialHub.js        # Enlaces sociales
│   ├── footer.js           # Pie, descargas CV
│   ├── easterEgg/          # Modal y fases del easter egg
│   └── animations/         # BackgroundEngine, PerformanceManager, ScrollController, SectionRenderer
├── locales/
│   ├── en/                 # JSON en inglés
│   └── es/                 # JSON en español
├── utils/
│   ├── i18n.js             # Carga de idioma y t()
│   └── svgloader.js        # Utilidad de carga SVG
└── assets/
    ├── img/                # Imágenes, iconos
    └── cv/                 # PDFs de CV (AI/Dev, EN/ES)
```

### Ejecutar en local

No hay paso de build. Usa cualquier servidor estático:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

Luego abre `http://localhost:8000`. El idioma y el tema se guardan en `localStorage`.

**Atajos de desarrollo (solo localhost):**

- `Ctrl+Q` — Cambiar calidad de animación (low/medium/high/ultra)
- `Ctrl+S` — Mostrar/ocultar overlay de estadísticas de rendimiento
- `Ctrl+I` — Registrar info del dispositivo en consola
- `Ctrl+D` — Activar/desactivar modo debug de scroll

### Licencia

MIT — ver [LICENSE](LICENSE).

### Historial de cambios

Ver [CHANGELOG.md](CHANGELOG.md).
