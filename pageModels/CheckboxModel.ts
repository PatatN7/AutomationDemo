import { Locator, Page } from "@playwright/test";

export class CheckboxModel {
  readonly page: Page;

  // Checkbox
  readonly checkboxSingle: Locator;
  readonly checkboxOne: Locator;
  readonly checkboxTwo: Locator;
  readonly checkboxThree: Locator;

  // Button
  readonly buttonSubmit: Locator;

  // Text
  readonly textResult: Locator;

  // Tab
  readonly tabCheckboxes: Locator;

  constructor(page: Page) {
    this.page = page;

    // Checkbox
    this.checkboxSingle = page.locator("input#id_checkbox_0");
    this.checkboxOne = page.locator("input#id_checkboxes_0");
    this.checkboxTwo = page.locator("input#id_checkboxes_1");
    this.checkboxThree = page.locator("input#id_checkboxes_2");

    // Button
    this.buttonSubmit = page.locator("input#submit-id-submit");

    // Text
    this.textResult = page.locator("div#result");

    // Tab
    this.tabCheckboxes = page.locator("a[href='/elements/checkbox/mult_checkbox']");
  }
}
