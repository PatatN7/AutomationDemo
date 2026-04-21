import { Locator, Page } from "@playwright/test";

export class NavigationModel {
  readonly page;

  // Dropdown
  readonly ddSingleUiElements: Locator;
  readonly ddForms: Locator;

  // Navigation
  readonly navInputs: Locator;
  readonly navButtons: Locator;
  readonly navCheckbox: Locator;
  readonly navSelect: Locator;
  readonly navNewTab: Locator;
  readonly navTextArea: Locator;
  readonly navAlerts: Locator;
  readonly navDragAndDrop: Locator;
  readonly navIFrames: Locator;
  readonly navPopUp: Locator;
  readonly navPracticeForm: Locator;

  constructor(page: Page) {
    this.page = page;

    // Dropdown
    this.ddSingleUiElements = page.locator("//a/span[text()='Single UI Elements']");
    this.ddForms = page.locator("//a/span[text()='Forms']");

    // Navigation
    this.navInputs = page.locator("a[href='/elements/input']");
    this.navButtons = page.locator("a[href='/elements/button']");
    this.navCheckbox = page.locator("a[href='/elements/checkbox']");
    this.navSelect = page.locator("a[href='/elements/select']");
    this.navNewTab = page.locator("a[href='/elements/new_tab']");
    this.navTextArea = page.locator("a[href='/elements/textarea']");
    this.navAlerts = page.locator("a[href='/elements/alert']");
    this.navDragAndDrop = page.locator("a[href='/elements/dragndrop']");
    this.navIFrames = page.locator("a[href='/elements/iframe/iframe_page']");
    this.navPopUp = page.locator("a[href='/elements/popup']");
    this.navPracticeForm = page.locator("a[href='/elements/practice-form']");
  }
}
