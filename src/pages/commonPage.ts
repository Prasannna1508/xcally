import { expect, Page ,Locator} from '@playwright/test';

export class CommonPage {
  protected readonly page: Page;
    private  addButton;
    private ellipsisButton;
    private searchBox;
    private editButton;
    private confirmButton;
    private deleteIcon;
    private creationHeaderTitle;
    private confirmDeleteButton;

    constructor( page:Page)
     {
            this.page = page;

        this.addButton = page.locator('#table_button_add')
        this.ellipsisButton =page.locator('.pi-ellipsis-v"]')
        this.searchBox =page.locator('#table_global_search')
        this.editButton = page.locator('.pi-pencil')
        this.deleteIcon = page.locator('.pi-trash')
        this.confirmButton = page.locator('#button_modal_confirm');
        this.creationHeaderTitle = page.locator("//div[contains(@class,'p-dialog-header')]//span[normalize-space()='Add']")
        this.confirmDeleteButton = page.locator('.p-confirm-delete')

     }

     getLeftMenu(menuName: string): Locator {
     return this.page.locator(
      `//span[normalize-space()='${menuName}']/following-sibling::i[contains(@class,'icon-chevron-right')]`
    );
  }

   getMenuItem(menuItem : string) :Locator{
     return this.page.locator(
     `//span[@class='p-menuitem-text ng-star-inserted' and normalize-space()='${menuItem}']`

    )
   }

   getHeaderTitle(headerTitle : string):Locator{
      return this.page.locator(`//div[@class='fuse-vertical-navigation-item-title']/span[normalize-space()='${headerTitle}']`

      )
   }

  async clickOnLeftMenu(menuName: string) {
    await this.getLeftMenu(menuName).click();
  }

  //  async clickOnMenuItem(menuItem : string) {
  //   await this.getMenuItem(menuItem).click();
  //    }

  async clickOnMenuItem(itemText: string) {
    await this.page.locator("span.title", { hasText: itemText }).click(); 
}
    

    async verifyToastMessage(expectedMessage: string) {
     const toast = this.page.locator("//div[contains(@class,'p-toast-summary')]");
     //await expect(toast).toContainText(expectedMessage);
     await expect(toast).toHaveText(expectedMessage);
    }

    async clickOnAddButton(){
      await this.addButton.click();
    }

    async clickonEllipsisButton(){
      await this.ellipsisButton.click();
    }

    async entertheSearhValue(value :string){
      await this.searchBox.fill(value)
    }

    async clickonEditButton(){
      await this.editButton.click();
    }
     async clickOnDeleteButton(){
          await this.page.getByRole('button', { name: 'Delete' }).first().click();

     }

     async verifyAddFormTitle() {
         await expect(this.creationHeaderTitle).toBeVisible();
     }

     async clickOnConfirmButton(){
        await this.confirmButton.click()
     }

    async clickOnDelleteIcon(){
      await this.deleteIcon.click();
    }

    async VerifyConfirmDeletionToastMessage(){
       const confirmMsg = this.page.getByText('Are you sure you want to delete the item?');
       await expect(confirmMsg).toBeVisible();
    }


  }