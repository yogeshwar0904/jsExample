import { test, expect } from '@playwright/test';

test(
  'Disable API and UI step then download the spec.ts file',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-731' },
    tag: ['@QADENCE_TC_ID:TC-731'],
  },
  async ({ page, request }) => {


    await test.step('navigate', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

    await test.step('assert hasText', async () => {
      await expect(page.locator('div.Landing_wrap__z2YSE').locator('div.Landing_brand__IzWLL').getByText("reya")).toContainText('reya');
    });

    await test.step('assert notVisible', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).not.toBeVisible();
    });

//     await test.step('GET https://jsonplaceholder.typicode.com/posts?userId=1', async () => {
//       const apiResponse4 = await request.fetch('https://jsonplaceholder.typicode.com/posts?userId=1', {
//         method: 'GET',
//       });
//       expect(apiResponse4.status()).toBe(200);
//     });

    await test.step('assert hasText', async () => {
      await expect(page.getByText("Lab & Imaging at Home", { exact: true })).toContainText('Lab & Imaging at Home');
    });

    await test.step('click', async () => {
      await page.getByRole("button", { name: "Book Now →", exact: true }).click();
    });

//     await test.step('assert hasText', async () => {
//       await expect(page.getByText("How would you like your service?", { exact: true })).toContainText('How would you like your service?');
//     });

    await test.step('Retrieve all users', async () => {
      const apiResponse8 = await request.fetch('https://api.practicesoftwaretesting.com/users?page=0', {
        method: 'GET',
      });
      expect(apiResponse8.status()).toBe(401);
    });

  }
);

