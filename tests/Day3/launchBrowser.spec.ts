import  { test } from "@playwright/test";

test("Opening the browser", async ({ page }) => {
  await page.goto("https://Google.com");
  await page.waitForTimeout(5000);
});
