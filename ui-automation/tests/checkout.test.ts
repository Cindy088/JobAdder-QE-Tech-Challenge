import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { itemsToAdd } from '../data/items-to-add';
import { BaseTest } from '../utils/BaseTest';
import { username, password } from '../constants/index';

test.describe('SauceDemo Cart Tests', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  const baseTest = new BaseTest();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);

    await baseTest.login(loginPage, username, password);
    await baseTest.addItemsToCart(productPage, itemsToAdd);
    await productPage.navigateToCart();
  });

  test('Verify items in the cart', async ({ page }) => {
    const asserts = itemsToAdd.map((item) => {
      return expect(page.locator(`[data-test="remove-${item}"]`)).toBeVisible();
    });

    await Promise.all(asserts);
  });
});
