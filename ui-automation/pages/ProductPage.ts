import { Page } from '@playwright/test';

export class ProductPage {
  constructor(public page: Page) {}

  // Verifies if the item is visible in the inventory
  async verifyItemIsVisible(item: string) {
    return this.page.locator(`[data-test="add-to-cart-${item}"]`).isVisible();
  }

  // Adds an item to the cart
  async addItemToCart(item: string) {
    const isVisible = await this.verifyItemIsVisible(item);
    if (!isVisible) {
      throw new Error(`Item ${item} is not visible on the page.`);
    }
    await this.page.locator(`[data-test="add-to-cart-${item}"]`).click();
  }

  // Navigates to the cart page
  async navigateToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  // Retrieves the cart badge count or returns 0 if the badge doesn't exist
  async getCartBadgeCount() {
    const cartBadgeExists = await this.page
      .locator('[data-test="shopping-cart-badge"]')
      .isVisible();

    if (!cartBadgeExists) {
      return 0; // No items in cart
    }

    const cartBadge = await this.page
      .locator('[data-test="shopping-cart-badge"]')
      .textContent();

    return parseInt(cartBadge || '0', 10); // Returns the cart badge count
  }

  // Removes an item from the cart
  async removeItemFromCart(item: string) {
    const itemRemoveButton = this.page.locator(`[data-test="remove-${item}"]`);
    const isItemRemovable = await itemRemoveButton.isVisible();

    if (!isItemRemovable) {
      throw new Error(
        `Item ${item} is not removable (not visible in the cart).`
      );
    }

    await itemRemoveButton.click();
  }
}
