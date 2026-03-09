import { test, expect } from "@playwright/test";

test("Text input", async ({ page }) => {
  // Navigate to page
  await page.goto("https://www.qa-practice.com/");
  await page.locator("a[href='/elements/input/simple']").click();
  await expect(page.locator("h1")).toHaveText("Input field");

  // Test that field is required
  await page.locator("input#id_text_string").press("Enter");
  await page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
  await expect(page.locator("div#result")).not.toBeVisible();

  // Verify non-eglish letters validation
  await page.locator("input#id_text_string").fill("ØØ");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("input#id_text_string")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_text_string")).toHaveText(
    "Enter a valid string consisting of letters, numbers, underscores or hyphens.",
  );

  // Verify validation for text 1 character below the min requirement
  await page.locator("input#id_text_string").fill("1");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("input#id_text_string")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_text_string")).toHaveText("Please enter 2 or more characters");

  // Verify validation for text 1 character above the max requirement
  await page.locator("input#id_text_string").fill("This is a long stringggggg");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("input#id_text_string")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_text_string")).toHaveText("Please enter no more than 25 characters");
  await expect(page.locator("span#error_2_id_text_string")).toHaveText(
    "Enter a valid string consisting of letters, numbers, underscores or hyphens.",
  );

  // Verify min character length
  await page.locator("input#id_text_string").fill("12");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\n12");

  // Verify min character +1 length
  await page.locator("input#id_text_string").fill("123");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\n123");

  // Verify max character length
  await page.locator("input#id_text_string").fill("This is a long stringgggg");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("div#result"), { message: "Bug 001 - Spaces are not allowed" }).toHaveText(
    "Your input was:\n\nThis is a long stringgggg",
  );

  // Verify max character -1 length
  await page.locator("input#id_text_string").fill("This is a long stringggg");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\nThis is a long stringggg");
});
