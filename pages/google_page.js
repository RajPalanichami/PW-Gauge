const { expect, chromium } = require('@playwright/test');

class Google {
  async test() {
    const browser = await chromium.launch({
      channel: 'chrome',
      headless: false,
      // or 'msedge', 'chrome-beta', 'msedge-beta', 'msedge-dev', etc.
    });
    const page = await browser.newPage();
    const url = 'https://www.google.com/';
    await page.goto(url);
    const pageTitle = await page.title();
    gauge.message(pageTitle);
    gauge.screenshot();
    // await expect(page).toHaveScreenshot();
    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle(/Google/);
    await browser.close();
  }
}
module.exports = Google;
