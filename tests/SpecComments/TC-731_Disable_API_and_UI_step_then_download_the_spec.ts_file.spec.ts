import { test, expect } from '@playwright/test';

test(
  'Disable API and UI step then download the spec.ts file',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-731' },
    tag: ['@QADENCE_TC_ID:TC-731'],
  },
  async ({ page, request }) => {


    await test.step('Navigate to https://my-stage.reya.net/', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

    await test.step('Verify that the \'reya\' brand text is displayed in the landing page header', async () => {
      await expect(page.locator('div.Landing_wrap__z2YSE').locator('div.Landing_brand__IzWLL').getByText("reya")).toContainText('reya');
    });

    await test.step('Verify that \'How would you like your service?\' text is not visible', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).not.toBeVisible();
    });

    await test.step('Make GET API request to https://jsonplaceholder.typicode.com/posts?userId=1 and verify response status is 200', async () => {
      const apiResponse4 = await request.fetch('https://jsonplaceholder.typicode.com/posts?userId=1', {
        method: 'GET',
      });
      expect(apiResponse4.status()).toBe(200);
    });

//     await test.step('Verify that \'Lab & Imaging at Home\' text is displayed', async () => {
//       await expect(page.getByText("Lab & Imaging at Home", { exact: true })).toContainText('Lab & Imaging at Home');
//     });

    await test.step('Click the \'Book Now →\' button', async () => {
      await page.getByRole("button", { name: "Book Now →", exact: true }).click();
    });

    await test.step('Verify that \'How would you like your service?\' text is now visible', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).toContainText('How would you like your service?');
    });

    await test.step('Verify that \'Terms of Use\' text is displayed', async () => {
      await expect(page.getByText("Terms of Use", { exact: true })).toContainText('Terms of Use');
    });

//     await test.step('Verify that \'Non-Discrimination Notice\' text is displayed', async () => {
//       await expect(page.getByText("Non-Discrimination Notice", { exact: true })).toContainText('Non-Discrimination Notice');
//     });

//     await test.step('Make GET API request to https://api.practicesoftwaretesting.com/users?page=0 and verify response status is 401', async () => {
//       const apiResponse10 = await request.fetch('https://api.practicesoftwaretesting.com/users?page=0', {
//         method: 'GET',
//       });
//       expect(apiResponse10.status()).toBe(401);
//     });

  }
);

