class HomePage {
  constructor(page) {
    this.page = page;
    this.profileBtn = page.locator('span.ng-scope').first();
    this.homeBtn = page.locator("[aria-label='Home']").first();
  }
}

module.exports = { HomePage };
