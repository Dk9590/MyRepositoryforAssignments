 import {test} from "@playwright/test";
 test("opening salesforce", async({page}) =>{
await page.goto("https://login.salesforce.com/?locale=in");
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025");
await page.locator(".button.r4.wide.primary").first().click();
await page.waitForTimeout(12000);

 const title = await page.title();

console.log(`Page title is: ${title}`);
await page.locator('[title="App Launcher"]').click();

 })