import { Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();

    if (await this.page.locator('[data-test="error"]').isVisible()) {
      throw new Error('Login failed: Invalid credentials.');
    } else {
      await this.page.waitForURL('https://www.saucedemo.com/inventory.html', {
        timeout: 3000,
      });
    }
  }

  async verifyErrorMessage() {
    return this.page.locator('[data-test="error"]').textContent();
  }

  async getCurrentURL() {
    return this.page.url();
  }
}
