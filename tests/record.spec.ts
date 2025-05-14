import { test, expect, devices, defineConfig } from '@playwright/test';

test('test2', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
 // await expect(page).toHaveTitle("saucedemo");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});


test.use({
  ...devices['iPhone 11'],
});

export default defineConfig({
    timeout: 60000, // 60 seconds for all tests
    use: {
      actionTimeout: 15000, // 15 seconds for each action (e.g., page.goto)
    },
  });

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-button"]').click();
});