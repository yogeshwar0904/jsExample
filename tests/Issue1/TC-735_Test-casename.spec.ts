import { test, expect } from '@playwright/test';

test(
  'Test-casename',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-735' },
    tag: ['@QADENCE_TC_ID:TC-735'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://my-stage.reya.net/', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

    await test.step('#02 - Verify that text \'reya\' is present on the page', async () => {
      await expect(page.getByText("reya", { exact: true })).toContainText('reya');
    });

    await test.step('#03 - Click the \'Book Now →\' button', async () => {
      await page.getByRole("button", { name: "Book Now →", exact: true }).click();
    });

    await test.step('#04 - Verify the page URL is \'https://my-stage.reya.net/consumer\'', async () => {
      await expect(page).toHaveURL('https://my-stage.reya.net/consumer');
    });

  }
);

