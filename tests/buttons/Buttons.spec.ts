import test from "@playwright/test";
import { ButtonsSteps } from "./ButtonsSteps";

const steps = new ButtonsSteps();

test.describe("Buttons", async () => {
  test.beforeEach("Setup test", async ({ page }) => {
    // Setup test
    await steps.setupTest(page);
  });

  test("Simple button", async () => {
    // Click simple button
    await test.step("Click simple button", async () => {
      await steps.clickSimpleButton();
    });

    // Verify simple button clicked
    await test.step("Verify simple button clicked", async () => {
      await steps.verifyButtonClicked();
    });
  });

  test("Looks like a button", async () => {
    // Click custom button
    await test.step("Click custom button", async () => {
      await steps.clickSimpleButton();
    });

    // Verify custom button clicked
    await test.step("Verify custom button clicked", async () => {
      await steps.verifyButtonClicked();
    });
  });

  test("Disabled", async () => {
    // Verify button disabled
    await test.step("Verify button disabled", async () => {
      await steps.verifyButtonDisabled();
    });

    // Enable button and click button
    await test.step("Enable button and click button", async () => {
      await steps.enableButtonAndClick();
    });

    // Verify enabled button clicked
    await test.step("Verify enabled button clicked", async () => {
      await steps.verifyButtonClicked();
    });
  });
});
