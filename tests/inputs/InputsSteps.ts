import { expect, Page } from "@playwright/test";
import { InputsData } from "../../testData/InputsData";
import { InputsModel } from "../../pageModels/InputsModel";

export class InputsSteps {
  testData: InputsData;
  page: Page;
  inputs: InputsModel;

  async setupTest(page: Page) {
    // Initialize test data
    this.testData = new InputsData();

    // Initialize page
    this.page = page;

    // Initialize page models
    this.inputs = new InputsModel(page);

    // Navigate to page
    await page.goto("https://www.qa-practice.com/");
    await page.locator("a[href='/elements/input/simple']").click();
    await expect(page.locator("label[for='id_text_string']")).toHaveText("Text string*");
  }

  async inputFieldRequiredValidation() {
    // Test that field is required
    await this.inputs.inputText.press("Enter");
    await this.page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
    await expect(this.inputs.textResults).not.toBeVisible();
  }

  async verifyMinCharacterLength() {
    // Verify min character length
    await this.inputs.inputText.fill(this.testData.textMinCharacters);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.textMinCharacters);
  }

  async verifyMinCharacterLengthPlusOne() {
    // Verify min character length
    await this.inputs.inputText.fill(this.testData.textMinCharactersPlusOne);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.textMinCharactersPlusOne);
  }

  async verifyMaxCharacterLength() {
    // Verify max character length
    await this.inputs.inputText.fill(this.testData.textMaxCharacters);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.textResults, { message: "Bug 001 - Spaces should be allowed" }).toHaveText(
      "Your input was:\n\n" + this.testData.textMaxCharacters,
    );
  }

  async verifyMaxCharacterLengthMinusOne() {
    // Verify max character -1 length
    await this.inputs.inputText.fill(this.testData.textMaxCharactersMinusOne);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.textMaxCharactersMinusOne);
  }

  async verifyTextCombination() {
    // Verify combination of English letters, numbers, underscores or hyphens
    await this.inputs.inputText.fill(this.testData.textCharacterCombination);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.textCharacterCombination);
  }

  async verifyNonEnglishCharacter() {
    // Verify non-eglish letters validation
    await this.inputs.inputText.fill(this.testData.textNonEnglishCharacter);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.inputText).toContainClass("is-invalid");
    await expect(this.inputs.textInputError1).toHaveText("Enter a valid string consisting of letters, numbers, underscores or hyphens.");
  }

  async verifyMinCharacterLengthMinusOne() {
    // Verify min character -1 length
    await this.inputs.inputText.fill(this.testData.textMaxCharactersMinusOne);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.inputText).toContainClass("is-invalid");
    await expect(this.inputs.textInputError1).toHaveText("Please enter 2 or more characters");
  }

  async verifyMaxCharacterLengthPlusOne() {
    // Verify max character +1 length
    await this.inputs.inputText.fill(this.testData.textMaxCharactersPlusOne);
    await this.inputs.inputText.press("Enter");
    await expect(this.inputs.inputText).toContainClass("is-invalid");
    await expect(this.inputs.textInputError1).toHaveText("Please enter no more than 25 characters");
    await expect(this.inputs.textInputError2).toHaveText("Enter a valid string consisting of letters, numbers, underscores or hyphens.");
  }

  async emailFieldRequiredValidation() {
    // Test that field is required
    await this.inputs.navEmails.click();
    await expect(this.page.locator("label[for='id_email']")).toHaveText("Email*");
    await this.inputs.inputEmail.press("Enter");
    await this.page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
    await expect(this.inputs.textResults).not.toBeVisible();
  }

  async verifyValidEmail() {
    // Verify that valid email address is allowed
    await this.inputs.inputEmail.fill(this.testData.emailValid);
    await this.inputs.inputEmail.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.emailValid);
  }

  async verifyInvalidEmailValidation() {
    // Verify invalid email validation
    await this.inputs.inputEmail.fill(this.testData.emailNoDomains);
    await this.inputs.inputEmail.press("Enter");
    await expect(this.inputs.inputEmail).toContainClass("is-invalid");
    await expect(this.inputs.textEmailError1).toHaveText("Enter a valid email address.");
    await this.inputs.inputEmail.fill(this.testData.emailNoTld);
    await this.inputs.inputEmail.press("Enter");
    await expect(this.inputs.inputEmail).toContainClass("is-invalid");
    await expect(this.inputs.textEmailError1).toHaveText("Enter a valid email address.");
    await this.inputs.inputEmail.fill(this.testData.emailInvalidTld);
    await this.inputs.inputEmail.press("Enter");
    await expect(this.inputs.inputEmail).toContainClass("is-invalid");
    await expect(this.inputs.textEmailError1).toHaveText("Enter a valid email address.");
  }

  async verifyLocalHostEmail() {
    // Verify localhost is allowed as a domain
    await this.inputs.inputEmail.fill(this.testData.emailLocalHost);
    await this.inputs.inputEmail.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.emailLocalHost);
  }

  async passwordFieldRequiredValidation() {
    // Test that field is required
    await this.inputs.navPassword.click();
    await expect(this.page.locator("label[for='id_password']")).toHaveText("Password*");
    await this.inputs.inputPassword.press("Enter");
    await this.page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
    await expect(this.inputs.textResults).not.toBeVisible();
  }

  async verifyValidPassword() {
    // Verify valid password
    await this.inputs.inputPassword.fill(this.testData.passwordValid);
    await this.inputs.inputPassword.press("Enter");
    await expect(this.inputs.textResults).toHaveText("Your input was:\n\n" + this.testData.passwordValid);
  }

  async verifyPasswordMinLenghtMinusOne() {
    // Verify min character length -1
    await this.inputs.inputPassword.fill(this.testData.passwordMinCharactersMinusOne);
    await this.inputs.inputPassword.press("Enter");
    await expect(this.inputs.inputPassword).toContainClass("is-invalid");
    await expect(this.inputs.textPasswordError1).toHaveText("Low password complexity");
  }

  async verifyUpperCaseRequired() {
    // Verify at least one uppercase English letter
    await this.inputs.inputPassword.fill(this.testData.passwordNoUpper);
    await this.inputs.inputPassword.press("Enter");
    await expect(this.inputs.inputPassword).toContainClass("is-invalid");
    await expect(this.inputs.textPasswordError1).toHaveText("Low password complexity");
  }

  async verifyOneLowerCaseRequired() {
    // Verify at least one lowercase English letter
    await this.inputs.inputPassword.fill(this.testData.passwordNoLower);
    await this.inputs.inputPassword.press("Enter");
    await expect(this.inputs.inputPassword).toContainClass("is-invalid");
    await expect(this.inputs.textPasswordError1).toHaveText("Low password complexity");
  }

  async verifyOneDigitRequired() {
    // Verify at least one digit
    await this.inputs.inputPassword.fill(this.testData.passwordNoDigit);
    await this.inputs.inputPassword.press("Enter");
    await expect(this.inputs.inputPassword).toContainClass("is-invalid");
    await expect(this.inputs.textPasswordError1).toHaveText("Low password complexity");
  }

  async verifyOneSpecialCharacterRequired() {
    // Verify at least one special character
    await this.inputs.inputPassword.fill(this.testData.passwordNoSpecialCharacter);
    await this.inputs.inputPassword.press("Enter");
    await expect(this.inputs.inputPassword).toContainClass("is-invalid");
    await expect(this.inputs.textPasswordError1).toHaveText("Low password complexity");
  }
}
