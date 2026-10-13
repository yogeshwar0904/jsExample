import { test, expect } from '@playwright/test';

test(
  'Test-casename',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-735' },
    tag: ['@QADENCE_TC_ID:TC-735'],
  },
  async ({ page }) => {


    await test.step.skip('#01 - Disabled - Verify that text \'reya\' is present on the page', async () => {
      await expect(page.getByText("reya", { exact: true })).toBeVisible();
    });

    await test.step.skip('#02 - Disabled - Click the \'Book Now →\' button', async () => {
      await page.getByRole("button", { name: "Book Now →", exact: true }).click();
    });

    await test.step.skip('#03 - Disabled - Verify the page URL is \'https://my-stage.reya.net/consumer\'', async () => {
      await expect(page.getByLabel("Drag to reposition toolbar")).toBeVisible();
    });

  }
);

