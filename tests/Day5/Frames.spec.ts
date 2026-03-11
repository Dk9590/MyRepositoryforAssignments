import { test, expect } from "@playwright/test";

test("Click nested frame button with precise frameLocator", async ({ page }) => {
  await page.goto("https://www.leafground.com/frame.xhtml");

  const button = page
    .frameLocator("(//iframe)[3]")              // outer iframe - 3rd iframe on page
    .frameLocator("//iframe[@id='frame2']")    // inner iframe with id='frame2'
    .locator("#Click");                        // button inside nested frame

  await button.waitFor({ state: "visible", timeout: 30000 });
  await button.click();

  await expect(button).toHaveText("Hurray! You Clicked Me.", { timeout: 30000 });

  const message = await button.innerText();
  console.log("Message is: " + message);
});