import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest-setup.js',
        include: [
            './src/tests/unit/**/*.spec.tsx',
            './src/tests/integration/**/*.spec.tsx',
        ],
        sequence: {
            concurrent: false,
        },
    },
});
