import { test, expect } from "@playwright/test";
import * as path from "path";

const uri = `file:${path.join(__dirname, "../examples/popup.html")}`;

test.beforeEach(async ({ page }) => {
  await page.route("**/highlight.min.js", (route) => {
    route.abort();
  });
});

test("has title", async ({ page }) => {
  await page.goto(uri);
  await page.setViewportSize({ width: 1960, height: 1080 });
  await expect(page).toHaveTitle(/popup/);
});

test("has dates available", async ({ page }) => {
  await page.goto(uri);
  // Open the modal
  await page.locator("#basicExample").first().click();

  // Click on book now button
  await page.locator('[aria-label="Book now"]').first().click();
  await page.waitForSelector(".calendar__date:not([disabled])");

  let availableDates = await page.$$eval(
    ".calendar__date:not([disabled])",
    (el) => el.map((btn) => btn.textContent?.trim())
  );

  console.log("Available dates", availableDates);
  expect(availableDates.length).toBeGreaterThan(0);
});
