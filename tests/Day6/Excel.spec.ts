import test from "@playwright/test";
import fs from 'fs'
import { parse } from 'csv-parse/sync';

const readValue:any[]=parse(fs.readFileSync("Helper/SFLogin.csv"),{
    columns:true,
    skip_empty_lines:true
})

for (let Login of readValue) {
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
