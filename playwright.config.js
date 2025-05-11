import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests/e2e',
    timeout: 30 * 1000,
    use: {
        baseURL: import.meta.env.VITE_API_URL,
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
});
