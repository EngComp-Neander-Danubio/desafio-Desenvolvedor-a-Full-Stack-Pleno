import { test as t, expect } from '@playwright/test';

t('Loadind of car datas', async ({ page }) => {
    const response = await page.goto(
        `https://develop-back-rota.rota361.com.br/recruitment`,
    );
    expect(response).toBeDefined();
    expect(response?.status()).toBe(200);
    //const json = await response?.json();
    //expect(json).toHaveProperty('cars');
    //expect(json.cars.length).toBeGreaterThan(0);
    //onst firstCar = await page.textContent('.id');
    //expect(firstCar).toContain('Fusca');
});
