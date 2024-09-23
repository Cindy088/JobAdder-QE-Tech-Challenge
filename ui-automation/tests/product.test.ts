import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { itemsToAdd } from '../data/items-to-add';
import { BaseTest, getByDataTest } from '../utils';
import { USER_NAME, PASSWORD } from '../constants';

test.describe('SauceDemo Inventory Tests', () => {
  let loginPage: LoginPage;
  let productPage: ProductPage;
  const baseTest = new BaseTest();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    await baseTest.login(loginPage, USER_NAME, PASSWORD);
  });

  test('Verify all items are visible in inventory', async ({ page }) => {
    const itemVisibilityAssertions = itemsToAdd.map((item) => {
      return expect(getByDataTest(page, `add-to-cart-${item}`)).toBeVisible();
    });

    await Promise.all(itemVisibilityAssertions);
  });

  test('Verify cart badge shows zero when no items are added', async () => {
    const cartBadgeCount = await productPage.getCartBadgeCount();
    expect(cartBadgeCount).toBe(0); 
  });

  test('Add items to the cart and verify cart badge dynamically', async ({
    page,
  }) => {
    await baseTest.addItemsToCart(productPage, itemsToAdd);

    const cartBadgeCount = await productPage.getCartBadgeCount();

    expect(cartBadgeCount).toBe(itemsToAdd.length);
  });

  test('Remove items from the cart and verify the cart badge', async () => {
    await baseTest.addItemsToCart(productPage, itemsToAdd);
    await productPage.removeItemFromCart(itemsToAdd[0]);

    const cartBadgeCount = await productPage.getCartBadgeCount();

    expect(cartBadgeCount).toBe(itemsToAdd.length - 1);
  });
});
