const { test, expect } = require('@playwright/test');


test('My Webpage Test', async ({ page }) => {
    await page.goto('file:///C:/Users/DELL/Downloads/Playwright/MyWebPage.html');
    await expect(page.locator('h1')).toHaveText('Welcome to My Web Page');
    await page.fill('input[type="text"]', 'username');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="search"]') ;
    await expect(page.locator('h3')).toHaveText('Visit Google'); 
        const link=page.locator('a[href="www.google.com"]');
        await expect(link).toBeVisible();
  });

 



