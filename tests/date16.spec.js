/*const { test, expect } = require('@playwright/test');
const { mergeReports } = require('@skilbourn/playwright-report-summary');

// Test Case 1: Navigate to Google
test("navWeb", async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.screenshot({ path: 'google.png' });
});

// Test Case 2: Fill out a form
test("formFill", async ({ page }) => {
  await page.goto('https://phptravels.com/demo/');
  await page.fill('input[name="first_name"]', 'username');
  await page.fill('input[name="last_name"]', 'password');
  await page.click('button[id="demo"]');
});

// Test Case 3: Click on a button
test("btnclick", async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.click('button[type="submit"]');
});

// Test Case 4: Verify page title
test("title", async ({ page }) => {
  await page.goto('https://ultimateqa.com/');
  await page.waitForFunction('document.title === "Homepage - Ultimate QA"');
});

// Merge reports
test.afterAll(async () => {
    const testInfo = await test.info();
    const results = testInfo.outputs;
    const mergedReport = await mergeReports(results);
    console.log(mergedReport);
  });

  //shreding
test.afterAll(async () => {
  const testInfo = await test.info();
  const testResults = testInfo.outputs;

  const shards = 5; // number of shards
  const shardSize = Math.ceil(testResults.length / shards);

  let shardResults = new Array(shards).fill(null).map(() => []);

  testResults.forEach((result, index) => {
    const shardIndex = index % shards;
    shardResults[shardIndex].push(result);
  });

  const mergedReports = await Promise.all(
    shardResults.map((shard) => mergeReports(shard))
  );
  const finalReport = mergedReports.reduce((acc, report) => ({ ...acc, ...report }), {});
  console.log(finalReport);
});*/
