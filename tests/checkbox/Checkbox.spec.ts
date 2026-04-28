import test from "@playwright/test";
import { CheckboxSteps } from "./CheckboxSteps";

const steps = new CheckboxSteps();

test.describe("Checkbox", async () => {
  test.beforeEach("Setup test", async ({ page }) => {
    // Setup test
    await steps.setupTest(page);
  });

  test("Single checkbox", async () => {
    // Verify checkbox page
    await test.step("Verify checkbox page", async () => {
      await steps.verifyCheckboxPage();
    });

    // Submit when checkbox is deselected and verify result
    await test.step("Submit when checkbox is deselected and verify result", async () => {
      await steps.checkboxDeselected();
    });

    // Submit when checkbox is selected and verify result
    await test.step("Submit when checkbox is selected and verify result", async () => {
      await steps.checkboxSelected();
    });
  });

  test("Checkboxes", async () => {
    // Verify checkboxes page
    await test.step("Verify checkboxes page", async () => {
      await steps.verifyCheckboxesPage();
    });

    // Submit when no checkboxes is selected and verify result
    await test.step("Submit when no checkboxes is selected and verify result", async () => {
      await steps.checkboxesNoneSelected();
    });

    // Submit when only a single checkbox is selected and verify result
    await test.step("Submit when only a single checkbox is selected and verify result", async () => {
      await steps.singleCheckboxSelected();
    });

    // Submit when two checkboxes is selected and verify result
    await test.step("Submit when two checkboxes is selected and verify result", async () => {
      await steps.twoCheckboxesSelected();
    });

    // Submit when three checkboxes is selected and verify result
    await test.step("Submit when three checkboxes is selected and verify result", async () => {
      await steps.threeCheckboxesSelected();
    });
  });
});
