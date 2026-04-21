import { expect, Page } from "@playwright/test";
import { ButtonsModel } from "../../pageModels/ButtonsModel";
import { NavigationModel } from "../../pageModels/Navigation";

export class ButtonsSteps {
  page: Page;
  buttons: ButtonsModel;

  async setupTest(page: Page) {
    // Initialize page
    this.page = page;

    // Initialize page model
    this.buttons = new ButtonsModel(page);
    const navigation = new NavigationModel(page);

    // Navigate to buttons page
    await page.goto("https://www.qa-practice.com/");
    await navigation.ddSingleUiElements.click();
    await navigation.navButtons.click();
    await expect(page.locator("h1")).toHaveText("Buttons");
  }

  async clickSimpleButton() {
    // Click simple button
    await this.buttons.buttonSimple.click();
  }

  async verifyButtonClicked() {
    // Verify button clicked
    await expect(this.buttons.textSubmitted).toHaveText("Submitted");
  }

  async clickCustomButton() {
    // Click custom button
    await this.buttons.tabLooksLikeAButton.click();
    await this.buttons.buttonSimple.click();
  }

  async verifyButtonDisabled() {
    // Verify button disabled
    await this.buttons.tabDisabled.click();
    await expect(this.buttons.buttonDisabled).toHaveAttribute("disabled");
  }

  async enableButtonAndClick() {
    // Enable button and click button
    await this.buttons.ddSelectState.click();
    await this.buttons.ddSelectState.selectOption("enabled")
    await expect(this.buttons.buttonDisabled).toHaveAttribute("enabled", "true");
    await this.buttons.buttonDisabled.click();
  }
}
