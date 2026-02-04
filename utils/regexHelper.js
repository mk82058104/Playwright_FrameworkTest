import { expect } from '@playwright/test';

export async function validateOrderNumberRegex(locator) {
  await expect(locator).toHaveText(/Order number:\s*\d+/);
}