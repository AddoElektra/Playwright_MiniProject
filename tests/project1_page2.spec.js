const { test, expect } = require('@playwright/test');

test('title', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle(/Online Shopping site in India: Shop Online for .* - Amazon.in/);
  });

  test('search', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('input[name="field-keywords"]').fill('iPhone15');
    await page.locator('input[type="submit"]').click();
  
    // Wait for the page to finish loading
    let retries = 3;
while (retries > 0) {
  try {
    await page.waitForLoadState('networkidle2', { timeout: 30000 });
    break;
  } catch (error) {
    retries--;
    console.log(`Retry ${retries}...`);
  }
}
    })

test('login', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('span[class="nav-line-2 "]').click();
  await page.locator('input[type="email"]').fill('your-email@example.com');
  
  await page.locator('input[aria-labelledby="continue-announce"]').click();
  //await expect(page).toHaveURL(/\/gp\/yourstore\/home/);
});

test('prime', async ({ page }) => {
  await page.goto('https://www.amazon.in/amazonprime');
  page.waitForLoadState('domcontentloaded');
  const image=page.locator('img[alt="Prime logo"]');
  await expect(image).toBeVisible();
  expect(page.getByRole('heading', { name: 'Welcome to Prime' })).toContainText('Welcome to Prime');
});

test('fresh cart', async ({ page }) => {
  await page.goto('https://www.amazon.in/fmc/storefront?almBrandId=ctnow');
  page.waitForLoadState('domcontentloaded');
  await page.locator('text="Add to Cart"').first().click();
  //await expect(page).toHaveTitle('a# Go to Cart');
});