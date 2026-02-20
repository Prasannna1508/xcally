import {test} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { getTestUser } from '../utils/testUser';




test('Login to xcally by using storgae state', async({page}) =>
{
     const user = getTestUser();

    const loginPage =new LoginPage(page)

    await loginPage.goto(process.env.BASE_URL as string)
      await loginPage.login(user.username, user.password);

 
    await loginPage.verifyDashBoardPageIsDisplayed()

});


