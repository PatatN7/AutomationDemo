import { Locator, Page } from "@playwright/test";

export class InputsModel {
  // Page
  readonly page: Page;

  // Input
  readonly inputText: Locator;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;

  // Text
  readonly textResults: Locator;
  readonly textInputError1: Locator;
  readonly textInputError2: Locator;
  readonly textEmailError1: Locator;
  readonly textPasswordError1: Locator;

  // Tab
  readonly tabEmails: Locator;
  readonly tabPassword: Locator;

  constructor(page: Page) {
    // Page
    this.page = page;

    // Input
    this.inputText = page.locator("input#id_text_string");
    this.inputEmail = page.locator("input#id_email");
    this.inputPassword = page.locator("input#id_password");

    // Text
    this.textResults = page.locator("div#result");
    this.textInputError1 = page.locator("span#error_1_id_text_string");
    this.textInputError2 = page.locator("span#error_2_id_text_string");
    this.textEmailError1 = page.locator("span#error_1_id_email");
    this.textPasswordError1 = page.locator("span#error_1_id_password");

    // Tab
    this.tabEmails = page.locator("a[href='/elements/input/email']");
    this.tabPassword = page.locator("a[href='/elements/input/passwd']");
  }
}
