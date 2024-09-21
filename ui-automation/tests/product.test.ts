import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { itemsToAdd } from '../data/itemsToAdd';
import { BaseTest } from '../utils/BaseTest';

test.describe('SauceDemo Inventory Tests', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  const baseTest = new BaseTest();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);

    await baseTest.login(loginPage, 'standard_user', 'secret_sauce');
  });

  test('Verify all items are visible in inventory', async () => {
    for (const item of itemsToAdd) {
      const itemVisible = await productPage.verifyItemIsVisible(item);
      expect(itemVisible).toBeTruthy();
    }
  });

  test('Add items to the cart', async ({ page }) => {
    await baseTest.addItemsToCart(productPage, itemsToAdd);
    await productPage.navigateToCart();

    const currentURL = page.url();
    expect(currentURL).toBe('https://www.saucedemo.com/cart.html');
  });
});
