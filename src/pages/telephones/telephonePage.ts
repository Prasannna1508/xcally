import { Page, Locator, expect } from '@playwright/test';
import { CommonPage } from '../commonPage';
//import { BasePage } from '../basePage';


export class TelephonesPage extends CommonPage{
  private accountName: Locator;
  private userName: Locator;
  private emialID: Locator;
  private password: Locator;
  private confirmPassword: Locator;
  private AddButton: Locator;
  private commonPage:CommonPage;

  constructor(  page: Page) {
    super(page)
    this.commonPage = new CommonPage(page);
    this.accountName = page.locator('[name="fullname"]');
    this.userName = page.locator('[name="name"]');
    this.emialID = page.locator('#textField_email');
    this.password = page.locator('//p-password[@inputid="password"]//input');
    this.confirmPassword = page.locator('//p-password[@inputid="confirmPassword"]//input');
    this.AddButton = page.locator('#button_modal_confirm');
   
  }

    async clickOnTheStaffsOnLeftMenu(){
        await this.commonPage.clickOnLeftMenu('Staff')
    }

    async clickOnTelephones(){
        await this.commonPage.clickOnMenuItem('Telephones')
    }

    async verifyTelephonesPageIsDisplayed(){
        await this.commonPage.getHeaderTitle('Telephones').isVisible();
    }

    async enterAccountName(accountName:string){
      await this.accountName.fill(accountName)
    }

    async enterUserName(userName:string){
      await this.userName.fill(userName)
    }

    async enterEmailID(emialID:string){
        await this.emialID.fill(emialID)
    }

    async enterPassword(password:string){
        await this.password.fill(password)
    }

    async enterConfirmPassword(confirmPasswordPassword:string){
        await this.confirmPassword.fill(confirmPasswordPassword)
    }
    
     async createTelephone(data: {accountName: string ,userName:string,email:string,password:string,confirmPassword:string}){
        await this.enterAccountName(data.accountName)
        await this.enterUserName(data.userName)
        await this.enterEmailID(data.email)
        await this.enterPassword(data.password)
        await this.enterConfirmPassword(data.confirmPassword)
        await this.AddButton.click()
     }


}
