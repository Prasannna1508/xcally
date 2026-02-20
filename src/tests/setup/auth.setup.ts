import { test as setup } from '@playwright/test';

setup('Save login state', async ({ page }) => {
  await page.goto('https://venom.xcally.com', { waitUntil: 'networkidle' });

  //await page.locator('.switch-to-new-experience .md-bar').click();
  await page.getByRole('checkbox', { name: 'switch to new experience' })
  .click({ force: true });

  await page.locator('[name="username"]').fill('Real_Admin');
  await page.locator('p-password input').fill('password');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL('**/dashboards/general/voice', { timeout: 60000 });

  await page.context().storageState({
    path: 'storageState.json',
  });
});
