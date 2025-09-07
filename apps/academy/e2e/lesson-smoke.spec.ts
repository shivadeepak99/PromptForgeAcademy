import { test, expect } from '@playwright/test';

test('Lesson page smoke test', async ({ page }) => {
  await page.goto('/lesson/lesson-sample');
  await expect(page.getByText('Sample Lesson')).toBeVisible();
  await page.getByText('Forge It!').click();
  await expect(page.getByText(/Sample output/)).toBeVisible();
});
