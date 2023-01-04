// @ts-check
const { test, expect } = require("@playwright/test");

test("Check For Page Title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/St. Paul's Community Church/);
});
