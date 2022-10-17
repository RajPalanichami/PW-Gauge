const { expect, chromium } = require('@playwright/test');

class Playwright {
  async test() {
    const browser = await chromium.launch({
      channel: 'chrome',
      headless: false,
      // or 'msedge', 'chrome-beta', 'msedge-beta', 'msedge-dev', etc.
    });

    const page = await browser.newPage();

    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

    // Expect an element "to be visible".
    await expect(page.locator('text=Star').first()).toBeVisible();

    await page.click('text=Get Started');
    // Expect some text to be visible on the page.
    await expect(page.locator('text=Installation').first()).toBeVisible();

    await browser.close();
  }
}
module.exports = Playwright;
