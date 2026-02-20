import { Page } from '@playwright/test';
import { BasePage } from '../basePage';
import { CommonPage } from './commonPage';

export class LoginPage extends BasePage {
  
  private usernameField: string;
  private passwordField: string;
  private dashBoardNewExperienceToggle: string;
  private loginNewExperienceToggle: string;
  private loginButton: string;

  constructor(page: Page) {
    super(page);

    this.usernameField = "[name='username']";
    this.passwordField = "p-password input";
    this.dashBoardNewExperienceToggle = "p-inputswitch .p-inputswitch-slider";
    this.loginNewExperienceToggle = ".switch-to-new-experience .md-bar";
    this.loginButton = '//button[@type="submit"]/span[text()="LOGIN"]';
  }

  async goto(URL :string) {
    await this.navigateTo(URL);
  }

  async enterUsername(username: string) {
    await this.fill(this.usernameField, username);
  }

  async enterPassword(password: string) {
    await this.fill(this.passwordField, password);
  }

  async clickLoginButton() {
    await this.click(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async clickOnNewExperienceToggle() {
    await this.click(this.loginNewExperienceToggle);
  }

  async verifyDashBoardPageIsDisplayed() {
    await this.verifyVisible(this.dashBoardNewExperienceToggle);
  }
}
