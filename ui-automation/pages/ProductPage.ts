import { Page } from '@playwright/test';

export class ProductPage {
  constructor(public page: Page) {}

  async verifyItemIsVisible(item: string) {
    return this.page.locator(`[data-test="add-to-cart-${item}"]`).isVisible();
  }

  async addItemToCart(item: string) {
    await this.page.locator(`[data-test="add-to-cart-${item}"]`).click();
  }

  async navigateToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async verifyLoginStatus() {
    return this.page.url().includes('inventory.html');
  }
}
