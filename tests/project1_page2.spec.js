const { test, expect } = require('@playwright/test');

test('title', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    const logo= page.locator('div[id="nav-logo"]');
    await expect(logo).toBeVisible();
  });

  test('search', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('input[name="field-keywords"]').fill('iPhone15');
    await page.locator('input[id="nav-search-submit-button"]').click();
    })

test('login', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('span[class="nav-line-2 "]').click();
  page.waitForLoadState('domcontentloaded');
  const img= page.locator('h1[class="a-size-medium-plus a-spacing-small"]');
  await expect(img).toBeVisible();
  await page.locator('input[type="email"]').fill('sayani.pramanik004@gmail.com');
  await page.locator('input[aria-labelledby="continue-announce"]').click();
  //await expect(page).toHaveURL(/\/gp\/yourstore\/home/);
});

test('prime', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForLoadState('domcontentloaded');
  await page.locator('a[id="nav-link-amazonprime"]').click();
  await page.waitForLoadState('domcontentloaded');
  const image = page.locator('img[alt="Prime logo"]');
  await image.waitFor({ state: 'visible' });
  await expect(image).toBeVisible();
  const title = page.locator('h1[class="a-spacing-base a-spacing-top-medium"]').first();
  await title.waitFor({ state: 'visible' });
  await expect(title).toContainText('Welcome to Prime');
  await page.locator('span[class="a-button-inner"]').click();
  //await page.waitForLoadState('networkidle');
});

test('filter', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.amazon.in/');
  await page.locator('a[data-csa-c-slot-id="nav_cs_5"]').click();
  await page.waitForLoadState('load');
  await page.locator('input[aria-labelledby="Prime Eligible"]').click();
  //await page.waitForLoadState('networkidle');
  //const title=page.locator('h2[class="a-size-medium-plus a-spacing-none a-color-base a-text-bold"]');
  //await expect(title).toContainText('Results');
});
