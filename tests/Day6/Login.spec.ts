import { test, expect } from "@playwright/test";
import path from 'path';

// Ensure this path matches where you saved the file above
test.use({ storageState: "Helper/SFLogin.json" });

test("Creating Lead", async ({ page }) => {
    // This will now start already logged in
    await page.goto("http://leaftaps.com/crmsfa/control/myHomeMain");
    await page.locator("//a[contains(text(),'Leads')]").waitFor({ state: 'visible' });
await page.locator("//a[contains(text(),'Leads')]").click();

});
