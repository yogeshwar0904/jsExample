import { test, expect } from '@playwright/test';

test(
  'new',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-732' },
    tag: ['@QADENCE_TC_ID:TC-732'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://my-stage.reya.net/', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

    await test.step('#02 - Verify that text element containing \'reya\' (exact match) contains the text \'reya\'', async () => {
      await expect(page.getByText("reya", { exact: true })).toContainText('reya');
    });

    await test.step('#03 - Verify that heading with name \'Lab & Imaging at Home\' has exact text \'Lab & Imaging at Home\'', async () => {
      await expect(page.getByRole("heading", { name: "Lab & Imaging at Home", exact: true })).toHaveText('Lab & Imaging at Home');
    });

  }
);

