import { Page } from '@playwright/test';
import { getByDataTest } from '../utils';

export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await getByDataTest(this.page, 'username').fill(username);
    await getByDataTest(this.page, 'password').fill(password);
    await getByDataTest(this.page, 'login-button').click();
  }

  async verifyErrorMessage() {
    return this.page.locator('[data-test="error"]').textContent();
  }

  async getCurrentURL() {
    return this.page.url();
  }
}
