import { expect, Page } from "@playwright/test";
import { NavigationModel } from "../../pageModels/Navigation";
import { CheckboxModel } from "../../pageModels/CheckboxModel";

export class CheckboxSteps {
  page: Page;
  checkbox: CheckboxModel;

  async setupTest(page: Page) {
    // Set page
    this.page = page;

    // Set page models
    this.checkbox = new CheckboxModel(page);
    const navigation = new NavigationModel(page);

    // Navigate to buttons page
    await page.goto("https://www.qa-practice.com/");
    await navigation.ddSingleUiElements.click();
    await navigation.navCheckbox.click();
    await expect(page.locator("h1")).toHaveText("Checkboxes");
  }

  async verifyCheckboxPage() {
    // Verify there is 1 checkbox
    expect((await this.page.locator("input[type='checkbox']").all()).length).toEqual(1);

    // Verify label
    await expect(this.page.locator("label[for='id_checkbox_0']")).toHaveText("Select me or not");
  }

  async checkboxDeselected() {
    // Submit with checkbox deselected
    await this.checkbox.buttonSubmit.click();

    // Verify results
    await expect(this.checkbox.textResult).not.toBeVisible();
  }

  async checkboxSelected() {
    // Submit with checkbox selected
    await this.checkbox.checkboxSingle.click();
    await this.checkbox.buttonSubmit.click();

    // Verify results
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\nselect me or not");
  }

  async verifyCheckboxesPage() {
    // Verify label
    await this.checkbox.tabCheckboxes.click();
    await expect(this.page.locator("label.form-label")).toHaveText("Checkboxes");

    // Verify there is 3 checkboxes
    expect((await this.page.locator("input[type='checkbox']").all()).length).toEqual(3);


    // Verify checkbox labels
    await expect(this.page.locator("label[for='id_checkboxes_0']")).toHaveText("One");
    await expect(this.page.locator("label[for='id_checkboxes_1']")).toHaveText("Two");
    await expect(this.page.locator("label[for='id_checkboxes_2']")).toHaveText("Three");
  }

  async checkboxesNoneSelected() {
    // Submit with checkbox deselected
    await this.checkbox.buttonSubmit.click();

    // Verify results
    await expect(this.checkbox.textResult).not.toBeVisible();
  }

  async singleCheckboxSelected() {
    // Submit with checkbox one selected
    await this.checkbox.checkboxOne.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\none");

    // Submit with checkbox two selected
    await this.checkbox.checkboxTwo.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\ntwo");

    // Submit with checkbox three selected
    await this.checkbox.checkboxThree.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\nthree");
  }

  async twoCheckboxesSelected() {
    // Submit with checkbox one and two selected
    await this.checkbox.checkboxOne.click();
    await this.checkbox.checkboxTwo.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\none, two");

    // Submit with checkbox two and three selected
    await this.checkbox.checkboxTwo.click();
    await this.checkbox.checkboxThree.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\ntwo, three");

    // Submit with checkbox one and three selected
    await this.checkbox.checkboxOne.click();
    await this.checkbox.checkboxThree.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\none, three");
  }

  async threeCheckboxesSelected() {
    // Submit with checkbox one, two and three selected
    await this.checkbox.checkboxOne.click();
    await this.checkbox.checkboxTwo.click();
    await this.checkbox.checkboxThree.click();
    await this.checkbox.buttonSubmit.click();
    await expect(this.checkbox.textResult).toHaveText("Selected checkboxes:\n\none, two, three");
  }
}
