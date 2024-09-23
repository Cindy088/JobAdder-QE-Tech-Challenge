import { Page, expect } from '@playwright/test';
import { getByDataTest } from '../utils';

export class CheckoutPage {
  constructor(public page: Page) {}

  async verifyItemInCart(item: string) {
    return expect(getByDataTest(this.page, `remove-${item}`)).toBeVisible();
  }
}
