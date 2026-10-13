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
      await page.getByRole("textbox").click();
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

  }
);

