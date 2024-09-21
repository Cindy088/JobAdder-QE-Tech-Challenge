import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(public page: Page) {}

  async verifyItemInCart(item: string) {
    return this.page.locator(`[data-test="remove-${item}"]`).isVisible();
  }

  async verifyLoginStatus() {
    return this.page.url().includes('cart.html');
  }
}
