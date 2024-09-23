import { Page } from '@playwright/test';

export const getByDataTest = (page: Page, testId: string) => {
  return page.locator(`[data-test="${testId}"]`);
};
