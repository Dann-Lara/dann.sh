// src/components/easterEgg/easterEggPhases.js
// Config declarativa de cada fase.
// Layouts: 'solo' | 'duo' | 'framed'

export const PHASES = [
    {
        label: 'TRANSIT_CAR',
        glow: '#38bdf8',
        task: { en: 'Highway', es: 'Autopista'},
        delay: 2800,
        warp: true,
        layout: 'solo',
        svgs: [{
            id: 'svg-car',
            file: 'car.svg',
            cls: 'w-[480px] h-[208px] text-sky-400',
            anim: 'car-vibration',
        }],
    },
    {
        label: 'TRANSIT_MOTO',
        glow: '#38bdf8',
        task: { en: 'Fast Lane', es: 'Carril rápido'},
        delay: 2800,
        warp: true,
        warpSlow: true,
        layout: 'solo',
        svgs: [{
            id: 'svg-moto',
            file: 'moto.svg',
            cls: 'w-[400px] h-[248px] text-sky-400',
            anim: 'car-vibration',
        }],
    },
    {
        label: 'TRANSIT_PICKUP',
        glow: '#38bdf8',
        task: { en: 'Off-road', es: 'Todoterreno'},
        delay: 2800,
        warp: true,
        layout: 'solo',
        svgs: [{
            id: 'svg-pickup',
            file: 'pickup.svg',
            cls: 'w-[490px] h-[185px] text-sky-400',
            anim: 'car-vibration',
        }],
    },
    {
        label: 'STRENGTH_SESSION',
        glow: '#38bdf8',
        task: { en: 'Lifting', es: 'Pesas'},
        layout: 'solo',
        badge: 'STRENGTH_LAB',
        svgs: [{
            id: 'svg-gym',
            file: 'gymSmith.svg',
            cls: 'w-[320px] h-[296px] text-sky-400',
            anim: 'anim-breathe',
        }],
    },
    {
        label: 'GAMING_HUB',
        glow: '#38bdf8',
        task: { en: 'Competitive', es: 'Competitivo'},
        layout: 'solo',
        badge: 'Station_Active',
        svgs: [{
            id: 'svg-setup',
            file: 'setup.svg',
            cls: 'w-[420px] h-[218px] text-sky-400',
            anim: 'anim-breathe',
        }],
    },
    {
        label: 'RHYTHM_SYNC',
        glow: '#38bdf8',
        task: { en: 'Congas', es: 'Congas'},
        layout: 'duo',
        svgs: [
            { id: 'svg-drums', file: 'drums.svg', cls: 'w-full h-full text-sky-400', anim: 'anim-breathe',rotate: '-rotate-6' },
            { id: 'svg-congas', file: 'congas.svg', cls: 'w-full h-full text-sky-400', anim: 'anim-breathe-delay', rotate: 'rotate-6' },
        ],
    },
    {
        label: 'STRING_ANALYSIS',
        glow: '#38bdf8',
        task: { en: 'Guitar', es: 'Guitarra'},
        layout: 'duo',
        svgs: [
            { id: 'svg-bass', file: 'bass.svg', cls: 'w-full h-full text-sky-400', anim: 'anim-breathe', rotate: '-rotate-6' },
            { id: 'svg-guitar', file: 'guitar.svg', cls: 'w-full h-full text-sky-400', anim: 'anim-breathe-delay', rotate: 'rotate-6'  },
        ],
    },
    {
        label: 'AI_CORE_MUSIC',
        glow: '#38bdf8',
        task: { en: 'Neural Sync', es: 'Sincronía neural' },
        layout: 'solo',
        badge: '♪',
        badgeFloat: true,
        svgs: [{
            id: 'svg-ai',
            file: 'ai.svg',
            cls: 'w-[380px] h-[269px] text-sky-400',
            anim: 'anim-breathe',
        }],
    },
];