// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test("test", async ({ page }) => {
  await page.goto("/");
  const page1Promise = page.waitForEvent("popup");
  await page
    .getByRole("link", {
      name: "Docs -> Find in-depth information about Next.js features and API.",
    })
    .click();
  const page1 = await page1Promise;
});
