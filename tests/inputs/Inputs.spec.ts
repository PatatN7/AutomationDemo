import { test, expect } from "@playwright/test";
import { InputsSteps } from "./InputsSteps";

const steps = new InputsSteps();

test.describe("Inputs", async () => {
  test.beforeEach("Setup test", async ({ page }) => {
    // Setup test
    await steps.setupTest(page);
  });

  test("Text input", async () => {
    // Test that field is required
    await test.step("Test that field is required", async () => {
      await steps.inputFieldRequiredValidation();
    });

    // Verify min character length
    await test.step("Verify min character length", async () => {
      await steps.verifyMinCharacterLength();
    });

    // Verify min character +1 length
    await test.step("Verify min character +1 length", async () => {
      await steps.verifyMinCharacterLengthPlusOne();
    });

    // Verify max character length
    await test.step("Verify max character length", async () => {
      await steps.verifyMaxCharacterLength();
    });

    // Verify max character -1 length
    await test.step("Verify max character -1 length", async () => {
      await steps.verifyMaxCharacterLengthMinusOne();
    });

    // Verify combination of English letters, numbers, underscores or hyphens
    await test.step("Verify combination of English letters, numbers, underscores or hyphens", async () => {
      await steps.verifyTextCombination();
    });

    // Verify non-eglish letters validation
    await test.step("Verify non-eglish letters validation", async () => {
      await steps.verifyNonEnglishCharacter();
    });

    // Verify min character -1 length
    await test.step("Verify min character -1 length", async () => {
      await steps.verifyMinCharacterLengthMinusOne();
    });

    // Verify max character +1 length
    await test.step("Verify max character +1 length", async () => {
      await steps.verifyMaxCharacterLengthPlusOne();
    });
  });

  test("Email field", async () => {
    // Test that field is required
    await test.step("Test that field is required", async () => {
      await steps.emailFieldRequiredValidation();
    });

    // Verify that valid email address is allowed
    await test.step("Verify that valid email address is allowed", async () => {
      await steps.verifyValidEmail();
    });

    // Verify invalid email validation
    await test.step("Verify invalid email validation", async () => {
      await steps.verifyInvalidEmailValidation();
    });

    // Verify localhost is allowed as a domain
    await test.step("Verify localhost is allowed as a domain", async () => {
      await steps.verifyLocalHostEmail();
    });
  });

  test("Password field", async () => {
    // Test that field is required
    await test.step("Test that field is required", async () => {
      await steps.passwordFieldRequiredValidation();
    });

    // Verify valid password
    await test.step("Verify valid password", async () => {
      await steps.verifyValidPassword();
    });

    // Verify min character length -1
    await test.step("Verify min character length -1", async () => {
      await steps.verifyPasswordMinLenghtMinusOne();
    });

    // Verify at least one uppercase English letter
    await test.step("Verify at least one uppercase English letter", async () => {
      await steps.verifyUpperCaseRequired();
    });

    // Verify at least one lowercase English letter
    await test.step("Verify at least one lowercase English letter", async () => {
      await steps.verifyOneLowerCaseRequired();
    });

    // Verify at least one digit
    await test.step("Verify at least one digit", async () => {
      await steps.verifyOneDigitRequired();
    });

    // Verify at least one special character
    await test.step("Verify at least one special character", async () => {
      await steps.verifyOneSpecialCharacterRequired();
    });
  });
});
