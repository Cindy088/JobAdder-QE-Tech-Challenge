import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(public page: Page) {}

  async verifyItemInCart(item: string) {
    return expect(
      this.page.locator(`[data-test="remove-${item}"]`)
    ).toBeVisible();
  }
}
