import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /* ===================== Navigation ===================== */

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async refreshPage(): Promise<void> {
    await this.page.reload();
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  async goForward(): Promise<void> {
    await this.page.goForward();
  }

  /* ===================== Basic Actions ===================== */

  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  async clearAndFill(selector: string, value: string): Promise<void> {
    const locator = this.page.locator(selector);
    await locator.clear();
    await locator.fill(value);
  }

  async type(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).type(value);
  }

  /* ===================== Dropdown Actions ===================== */

  // <select> dropdown
  async selectByVisibleText(selector: string, text: string): Promise<void> {
    await this.page.locator(selector).selectOption({ label: text });
  }

  async selectByValue(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).selectOption({ value });
  }

  async selectByIndex(selector: string, index: number): Promise<void> {
    await this.page.locator(selector).selectOption({ index });
  }

  /* ===================== Waits ===================== */

  async waitForVisibility(selector: string): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }

  async waitForHidden(selector: string): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'hidden' });
  }

  async waitForTimeout(time: number): Promise<void> {
    await this.page.waitForTimeout(time);
  }

  /* ===================== Get Text / Attribute ===================== */

  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).innerText();
  }

  async getInputValue(selector: string): Promise<string> {
    return await this.page.locator(selector).inputValue();
  }

  async getAttribute(selector: string, attribute: string): Promise<string | null> {
    return await this.page.locator(selector).getAttribute(attribute);
  }

  /* ===================== File Upload ===================== */

  async uploadFile(selector: string, filePath: string): Promise<void> {
    await this.page.locator(selector).setInputFiles(filePath);
  }

  /* ===================== Frames ===================== */

  async switchToFrame(frameNameOrUrl: string) {
    return this.page.frame(frameNameOrUrl);
  }

  /* ===================== Tabs / Windows ===================== */

  async switchToNewTab(): Promise<Page> {
    const newPage = await this.page.context().waitForEvent('page');
    await newPage.waitForLoadState();
    return newPage;
  }

  /* ===================== Alerts ===================== */

  async acceptAlert(): Promise<void> {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }

  async dismissAlert(): Promise<void> {
    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });
  }

  /* ===================== Mouse & Keyboard ===================== */

  async hover(selector: string): Promise<void> {
    await this.page.locator(selector).hover();
  }

  async pressKey(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  /* ===================== Scroll ===================== */

  async scrollIntoView(selector: string): Promise<void> {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  /* ===================== Assertions (Optional but Useful) ===================== */

  async verifyText(selector: string, expectedText: string): Promise<void> {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

  async verifyVisible(selector: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible();
  }
}
