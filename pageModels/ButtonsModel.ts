import { Locator, Page } from "@playwright/test";

export class ButtonsModel {
  readonly page: Page;

  // Button
  readonly buttonSimple: Locator;
  readonly buttonCustom: Locator;
  readonly buttonDisabled: Locator;

  // Text
  readonly textSubmitted: Locator;

  // Dropdown
  readonly ddSelectState: Locator;

  // Tab
  readonly tabLooksLikeAButton: Locator;
  readonly tabDisabled: Locator;

  constructor(page: Page) {
    this.page = page;

    // Button
    this.buttonSimple = page.locator("input#submit-id-submit");

    // Text
    this.textSubmitted = page.locator("p#result-text");
    this.buttonCustom = page.locator("a.a-button");
    this.buttonDisabled = page.locator("input#submit-id-submit");

    // Dropdown
    this.ddSelectState = page.locator("select#id_select_state");

    // Tab
    this.tabLooksLikeAButton = page.locator("a[href='/elements/button/like_a_button']");
    this.tabDisabled = page.locator("a[href='/elements/button/disabled']");
  }
}
