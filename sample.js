const pw = require('playwright');

(async () => {
  const browser = await pw.chromium.launch(); // or 'chromium', 'firefox'
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.example.com/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
