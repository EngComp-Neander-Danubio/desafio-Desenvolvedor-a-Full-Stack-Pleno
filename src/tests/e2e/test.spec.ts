import { test as t, expect } from '@playwright/test';

t('Loadind of car datas', async ({ page }) => {
    const response = await page.goto(
        `https://develop-back-rota.rota361.com.br/recruitment`,
    );
    expect(response).toBeDefined();
    expect(response?.status()).toBe(200);
});
