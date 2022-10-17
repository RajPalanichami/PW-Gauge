const Google = require('../pages/google_page');
const Playwright = require('../pages/playwright_page');

step('Navigate to google page', async () => {
  const g = new Google();
  await g.test();
});

step('Navigate to playwright page', async () => {
  const p = new Playwright();
  await p.test();
});
