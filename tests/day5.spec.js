// @ts-check

/*const { test, expect } = require('@playwright/test');

test('filtering', async ({page}) => {

    await page.goto("https://www.myntra.com/personal-care");
  
    await page.getByRole("listitem")
  
      .filter({ hasText: 'Product 2' })
  
      .getByRole('button', {name: "Add to cart"})
  
      .click()
  
  });*/
  

 
  
  
  
  
  /*const { test, expect } = require('@playwright/test');

test('Filter and count products', async ({ page }) => {
  await page.goto('https://www.myntra.com/personal-care');

  
  const products = page.locator('div.product', { hasText: 'Product' });
  await expect(products).toHaveCount(3);

  
  const expensiveProducts = page.locator('div.product', { hasText: /\$[1-9][0-9]+/ }); 
  await expect(expensiveProducts).toHaveCount(2);
});*/