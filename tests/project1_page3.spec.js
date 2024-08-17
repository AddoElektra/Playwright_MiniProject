const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.fill('input[name="email"]', 'username');
  await page.fill('input[name="pass"]', 'password');
  await page.click('button[name="login"]');
  //await expect(page).toHaveURL('https://www.facebook.com/');
});

test('hotel destination', async (page) => {
  await page.goto('https://www.easemytrip.com/hotels/');
  page.waitForLoadState('networkidle');
  await page.locator('a[class="close_o_pp"]').click();
  page.locator('input[name="txtCity"]').fill('Kolkata');
});

