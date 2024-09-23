import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { itemsToAdd } from '../data/items-to-add';
import { BaseTest, getByDataTest } from '../utils';
import { USER_NAME, PASSWORD } from '../constants';

test.describe('SauceDemo Cart Tests', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  let checkoutPage: CheckoutPage;
  const baseTest = new BaseTest();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);

    await baseTest.login(loginPage, USER_NAME, PASSWORD);
    await baseTest.addItemsToCart(productPage, itemsToAdd);
    await productPage.navigateToCart();
  });

  test('Verify items in the cart', async ({ page }) => {
    const asserts = itemsToAdd.map((item) => {
      return expect(getByDataTest(page, `remove-${item}`)).toBeVisible();
    });

    await Promise.all(asserts);
  });
});
