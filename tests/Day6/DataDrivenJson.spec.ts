import test from '@playwright/test';
import LoginData from '../../Helper/Login.json';

// Use a loop to run multiple tests based on your JSON data
for (const Login of LoginData) {
  // Use backticks (`) for template literals to inject ${Login.TestID}
  test(`the login data is ${Login.TestID}`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("//input[@name='USERNAME']").first().fill(Login.Username);
    await page.locator("//input[@name='PASSWORD']").fill(Login.Password);
    await page.locator(".decorativeSubmit").click();

    // Wait and click
    await page.waitForSelector("text=CRM/SFA");
    await page.locator("text=CRM/SFA").click();
  });
}
