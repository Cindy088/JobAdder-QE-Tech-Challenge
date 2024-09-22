import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BaseTest } from '../utils/BaseTest';

test.describe.parallel('SauceDemo Login Tests', () => {
  let loginPage: LoginPage;
  const baseTest = new BaseTest();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Login with invalid username', async () => {
    try {
      await loginPage.login('invalid_user', 'secret_sauce');
    } catch (error) {
      const errorMsg = await loginPage.verifyErrorMessage();
      expect(errorMsg).toContain(
        'Epic sadface: Username and password do not match'
      );
    }
  });

  test('Login with invalid password', async () => {
    try {
      await loginPage.login('standard_user', 'invalid_password');
    } catch (error) {
      const errorMsg = await loginPage.verifyErrorMessage();
      expect(errorMsg).toContain(
        'Epic sadface: Username and password do not match'
      );
    }
  });

  test('Login with both invalid credentials', async () => {
    try {
      await loginPage.login('invalid_user', 'invalid_password');
    } catch (error) {
      const errorMsg = await loginPage.verifyErrorMessage();
      expect(errorMsg).toContain(
        'Epic sadface: Username and password do not match'
      );
    }
  });

  test('Login with valid credentials', async () => {
    await baseTest.login(loginPage, 'standard_user', 'secret_sauce');
    const currentURL = await loginPage.getCurrentURL();
    expect(currentURL).toBe('https://www.saucedemo.com/inventory.html');
  });
});
