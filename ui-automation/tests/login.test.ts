import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BaseTest } from '../utils/BaseTest';
import { USER_NAME, PASSWORD } from '../constants';
import { getByDataTest } from '../utils';

test.describe.parallel('SauceDemo Login Tests', () => {
  let loginPage: LoginPage;
  const baseTest = new BaseTest();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Login with invalid username', async () => {
    await loginPage.login('invalid_user', PASSWORD);

    const errorMsg = await loginPage.verifyErrorMessage();

    expect(errorMsg).toContain(
      'Epic sadface: Username and password do not match'
    );
  });

  test('Login with invalid password', async () => {
    await loginPage.login(USER_NAME, 'invalid_password');

    const errorMsg = await loginPage.verifyErrorMessage();

    expect(errorMsg).toContain(
      'Epic sadface: Username and password do not match'
    );
  });

  test('Login with both invalid credentials', async () => {
    await loginPage.login('invalid_user', 'invalid_password');

    const errorMsg = await loginPage.verifyErrorMessage();

    expect(errorMsg).toContain(
      'Epic sadface: Username and password do not match'
    );
  });

  test('Login with valid credentials', async ({ page }) => {
    await baseTest.login(loginPage, USER_NAME, PASSWORD);

    await page.waitForURL('/inventory.html');

    await expect(getByDataTest(page, 'primary-header')).toBeVisible();
  });
});
