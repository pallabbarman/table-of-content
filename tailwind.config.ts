import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            white: 'var(--white)',
            black: 'var(--black)',
            gray: 'var(--gray)',
            sky: 'var(--sky)',
        },
        extend: {},
    },
    plugins: [],
} satisfies Config;
