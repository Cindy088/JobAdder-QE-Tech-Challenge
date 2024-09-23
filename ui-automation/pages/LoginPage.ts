import { Page } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();

    // Wait for either the error message or the inventory page
    const errorVisible = await this.page
      .locator('[data-test="error"]')
      .isVisible({ timeout: 5000 })
      .catch(() => false); // Prevent breaking if error is not present

    // If error is visible, throw an error for invalid credentials
    if (errorVisible) {
      const errorMsg = await this.page
        .locator('[data-test="error"]')
        .textContent();
      throw new Error(`Login failed: ${errorMsg?.trim()}`);
    }

    // Wait for the inventory page to confirm login success
    await this.page.waitForURL('/inventory.html', {
      timeout: 5000,
    });
  }

  async verifyErrorMessage() {
    return this.page.locator('[data-test="error"]').textContent();
  }

  async getCurrentURL() {
    return this.page.url();
  }
}
