import { test, expect } from '@playwright/test';

test(
  'To download the reusable modle spec.ts file',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-736' },
    tag: ['@QADENCE_TC_ID:TC-736'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://www.saucedemo.com/', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('#02 - Click on the \'Username\' textbox', async () => {
      await page.getByRole("textbox", { name: "Username", exact: true }).click();
    });

    await test.step('#03 - Enter \'standard_user\' in the \'Username\' textbox', async () => {
      await page.getByRole("textbox", { name: "Username", exact: true }).fill('standard_user');
    });

    await test.step('#04 - Click on the \'Password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Password", exact: true }).click();
    });

    await test.step('#05 - Enter \'secret_sauce\' in the \'Password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Password", exact: true }).fill('secret_sauce');
    });

    await test.step('#06 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });

    await test.step('#07 - Click on the primary header in the header container', async () => {
      await page.locator('[data-test="header-container"]').locator('[data-test="primary-header"]').click();
    });

    await test.step('#08 - Click the \'Open Menu\' button', async () => {
      await page.getByRole("button", { name: "Open Menu", exact: true }).click();
    });

    await test.step('#09 - Click the \'All Items\' button', async () => {
      await page.getByRole("button", { name: "All Items", exact: true }).click();
    });

  }
);

