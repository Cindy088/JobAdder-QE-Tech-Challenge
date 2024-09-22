import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

export class BaseTest {
  // Reusable login function
  async login(loginPage: LoginPage, username: string, password: string) {
    await loginPage.navigate();
    await loginPage.login(username, password);
  }

  // Reusable function to add multiple items to the cart
  async addItemsToCart(productPage: ProductPage, items: string[]) {
    for (const item of items) {
      await productPage.addItemToCart(item);
    }
  }

  // Reusable function to verify if cart badge count matches the expected value
  async verifyCartBadge(productPage: ProductPage, expectedCount: number) {
    const cartBadgeCount = await productPage.getCartBadgeCount();
    if (cartBadgeCount !== expectedCount) {
      throw new Error(
        `Expected ${expectedCount} items in the cart but found ${cartBadgeCount}.`
      );
    }
    return true;
  }
}
