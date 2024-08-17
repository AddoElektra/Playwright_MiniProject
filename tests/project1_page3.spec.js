const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.fill('input[name="email"]', 'username');
  await page.fill('input[name="pass"]', 'password');
  await page.click('button[name="login"]');
  //await expect(page).toHaveURL('https://www.facebook.com/');
});

test('logo', async ({page}) => {
  await page.goto('https://www.google.com/');
  const logo= page.locator('img[class="lnXdpd"]')
  await expect(logo).toBeVisible();
});

test('signin', async ({page}) => {
  await page.goto('https://www.google.com/');
  await page.locator('a[aria-label="Sign in"]').click();
});

test('image seach', async ({page}) => {
  await page.goto('https://www.google.com/');
  await page.locator('a[aria-label="Search for Images "]').click();
  //page.waitForLoadState('networkidle');
  const img= page.locator('img[alt="Google Images"]');
await expect(img).toBeVisible();
});

test('search', async ({page}) => {
  await page.goto('https://www.google.com/');
  await page.locator('textarea[aria-controls="Alh6id"]').fill('iPhone15');
await page.locator('input[class="gNO89b"]').first().click();
});