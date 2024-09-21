import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { Page } from '@playwright/test'; // Playwright's Page type for typing

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
}
