import { test, expect } from "@playwright/test";

/*  This test is an example of a basic playwright test file
    In this file we do not make use of any page object models, a test data file or a steps file
*/

test("Text input", async ({ page }) => {
  // Navigate to page
  await page.goto("https://www.qa-practice.com/");
  await page.locator("a[href='/elements/input/simple']").click();
  await expect(page.locator("label[for='id_text_string']")).toHaveText("Text string*");

  // Test that field is required
  await page.locator("input#id_text_string").press("Enter");
  await page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
  await expect(page.locator("div#result")).not.toBeVisible();

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
  await expect(page.locator("div#result"), { message: "Bug 001 - Spaces should be allowed" }).toHaveText(
    "Your input was:\n\nThis is a long stringgggg",
  );

  // Verify max character -1 length
  await page.locator("input#id_text_string").fill("This is a long stringggg");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\nThis is a long stringggg");

  // Verify combination of English letters, numbers, underscores or hyphens
  await page.locator("input#id_text_string").fill("This_is-string1");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\nThis_is-string1");

  // Verify non-eglish letters validation
  await page.locator("input#id_text_string").fill("ØØ");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("input#id_text_string")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_text_string")).toHaveText(
    "Enter a valid string consisting of letters, numbers, underscores or hyphens.",
  );

  // Verify min character -1 length
  await page.locator("input#id_text_string").fill("1");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("input#id_text_string")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_text_string")).toHaveText("Please enter 2 or more characters");

  // Verify max character +1 length
  await page.locator("input#id_text_string").fill("This is a long stringggggg");
  await page.locator("input#id_text_string").press("Enter");
  await expect(page.locator("input#id_text_string")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_text_string")).toHaveText("Please enter no more than 25 characters");
  await expect(page.locator("span#error_2_id_text_string")).toHaveText(
    "Enter a valid string consisting of letters, numbers, underscores or hyphens.",
  );
});

test("Email field", async ({ page }) => {
  // Navigate to email field
  await page.goto("https://www.qa-practice.com/elements/input/simple");
  await page.locator("a[href='/elements/input/email']").click();
  await expect(page.locator("label[for='id_email']")).toHaveText("Email*");

  // Test that field is required
  await page.locator("input#id_email").press("Enter");
  await page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
  await expect(page.locator("div#result")).not.toBeVisible();

  // Verify that valid email address is allowed
  await page.locator("input#id_email").fill("a@a.com");
  await page.locator("input#id_email").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\na@a.com");

  // Verify invalid email validation
  await page.locator("input#id_email").fill("a");
  await page.locator("input#id_email").press("Enter");
  await expect(page.locator("input#id_email")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_email")).toHaveText("Enter a valid email address.");
  await page.locator("input#id_email").fill("a@a");
  await page.locator("input#id_email").press("Enter");
  await expect(page.locator("input#id_email")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_email")).toHaveText("Enter a valid email address.");
  await page.locator("input#id_email").fill("a@a.c");
  await page.locator("input#id_email").press("Enter");
  await expect(page.locator("input#id_email")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_email")).toHaveText("Enter a valid email address.");

  // Verify localhost is allowed as a domain
  await page.locator("input#id_email").fill("a@localhost");
  await page.locator("input#id_email").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\na@localhost");
});

test("Password field", async ({ page }) => {
  // Navigate to password field
  await page.goto("https://www.qa-practice.com/elements/input/simple");
  await page.locator("a[href='/elements/input/passwd']").click();
  await expect(page.locator("label[for='id_password']")).toHaveText("Password*");

  // Test that field is required
  await page.locator("input#id_password").press("Enter");
  await page.waitForTimeout(2000); // Manual wait as the tooltip can not be targeted for an assertion
  await expect(page.locator("div#result")).not.toBeVisible();

  // Verify valid password
  await page.locator("input#id_password").fill("ASd!@#12");
  await page.locator("input#id_password").press("Enter");
  await expect(page.locator("div#result")).toHaveText("Your input was:\n\nASd!@#12");

  // Verify min character length -1
  await page.locator("input#id_password").fill("ASd!@#1");
  await page.locator("input#id_password").press("Enter");
  await expect(page.locator("input#id_password")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_password")).toHaveText("Low password complexity");

  // Verify at least one uppercase English letter
  await page.locator("input#id_password").fill("asd!@#12");
  await page.locator("input#id_password").press("Enter");
  await expect(page.locator("input#id_password")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_password")).toHaveText("Low password complexity");

  // Verify at least one lowercase English letter
  await page.locator("input#id_password").fill("ASD!@#12");
  await page.locator("input#id_password").press("Enter");
  await expect(page.locator("input#id_password")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_password")).toHaveText("Low password complexity");

  // Verify at least one digit
  await page.locator("input#id_password").fill("ASd!@#as");
  await page.locator("input#id_password").press("Enter");
  await expect(page.locator("input#id_password")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_password")).toHaveText("Low password complexity");

  // Verify at least one special character
  await page.locator("input#id_password").fill("ASdASD12");
  await page.locator("input#id_password").press("Enter");
  await expect(page.locator("input#id_password")).toContainClass("is-invalid");
  await expect(page.locator("span#error_1_id_password")).toHaveText("Low password complexity");
});
