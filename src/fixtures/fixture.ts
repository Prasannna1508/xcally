import { test as base } from '@playwright/test';
import { TelephonesPage } from '../pages/telephones/telephonePage';
import { LoginPage } from '../pages/loginPage';
import {CommonPage} from '../pages/commonPage'

type MyPages = {
  app: {
    login: LoginPage;
    telephones: TelephonesPage;
    common:CommonPage;
  };
};

export const test = base.extend<MyPages>({
  app: async ({ page }, use) => {

    const app = {
      login: new LoginPage(page),
      telephones: new TelephonesPage(page),
      common: new TelephonesPage(page),

    };

    await use(app);
  }
});

export { expect } from '@playwright/test';
