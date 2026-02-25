import { test, expect } from '../../fixtures/fixture';
import { getTelephoneCreationDetails } from '../../data/staticData';

import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Apply storage state BEFORE tests
test.use({ storageState: 'storageState.json' });

test('Telephone Creation', async ({ page, app }) => {

  const telephoneData = getTelephoneCreationDetails();

  await page.goto(process.env.BASE_URL!);

  await app.telephones.clickOnTheStaffsOnLeftMenu();
  await app.telephones.clickOnTelephones();
  await app.telephones.verifyTelephonesPageIsDisplayed();
  await app.common.clickOnAddButton();
  await app.telephones.createTelephone(telephoneData);
  await app.common.verifyToastMessage("Creat");

});
