import test from "@playwright/test";

test("Launching the Page", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("//input[@name='USERNAME'][1]").fill("DemoCsr2");
    await page.locator("//input[@name='PASSWORD']").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

   //appears AFTER login
    // Wait for the link to appear
await page.waitForSelector("text=CRM/SFA"); 

// Click the specific link
await page.locator("text=CRM/SFA").click(); 
// Save the state to a consistent path
    await page.context().storageState({ path: "Helper/SFLogin.json" });

});
