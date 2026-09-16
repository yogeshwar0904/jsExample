import { test, expect } from '@playwright/test';

test(
  'Description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-734' },
    tag: ['@QADENCE_TC_ID:TC-734'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://my-stage.reya.net/', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

  }
);

