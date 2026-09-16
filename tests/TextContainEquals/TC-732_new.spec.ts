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

    await test.step('#02 - assert notVisible', async () => {
      await expect(page.getByText("Book a Service", { exact: true })).not.toBeVisible();
    });

    await test.step('#03 - assert visible', async () => {
      await expect(page.getByRole("listitem").filter({ hasText: "✓ No waiting room" })).toContainText('No');
    });

    await test.step('#04 - assert visible', async () => {
      await expect(page.getByText("in-home clinical services", { exact: true })).toBeVisible();
    });

    await test.step('#05 - click', async () => {
      await page.getByRole("button", { name: "Book Now →", exact: true }).click();
    });

    await test.step('#06 - assert visible', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).toBeVisible();
    });

    await test.step('#07 - assert hasValue', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).toBeVisible(); // TODO: add expected value
    });

    await test.step('#08 - assert count', async () => {
      await expect(page.getByText("At HomeWe come to you — lab and imaging at home", { exact: true })).toHaveCount(1);
    });

    await test.step('#09 - assert enabled', async () => {
      await expect(page.getByText("Book a Service", { exact: true })).toBeEnabled();
    });

    await test.step('#10 - click', async () => {
      await page.getByText("Service CenterCare available at select Chicago-area locationsComing Soon", { exact: true }).click();
    });

    await test.step('#11 - click', async () => {
      await page.getByText("Service CenterCare available at select Chicago-area locationsComing Soon", { exact: true }).click();
    });

    await test.step.skip('#12 - Disabled - assert step', async () => {
      await expect(page.getByText('Coming Soon', { exact: true })).toBeDisabled();
    });

    await test.step('#13 - click', async () => {
      await page.getByText("Service CenterCare available at select Chicago-area locationsComing Soon", { exact: true }).click();
    });

    await test.step('#14 - assert url', async () => {
      await expect(page).toHaveURL('https://my-stage.reya.net/consumer');
    });

    await test.step('#15 - assert title', async () => {
      await expect(page).toHaveTitle('Reya Consumer');
    });

    await test.step('#16 - assert hasAttribute', async () => {
      await expect(page.getByText("How & Where", { exact: true })).toHaveAttribute('style', ': rgb(255, 255, 255); font-family: Lora, serif; font-size: 22px; font-weight: 600; margin-top: 10px;');
    });

    await test.step('#17 - assert cssProperty', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).toHaveCSS('font-family', 'Lora, serif');
    });

  }
);

