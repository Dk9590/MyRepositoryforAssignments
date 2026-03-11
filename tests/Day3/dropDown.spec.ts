import test from "@playwright/test";

test("Checking the dropdownl",async({page})=>
{
// Go to the page
await page.goto("https://www.telerik.com/contact");

// Wait for the first dropdown to be visible
const dropdown1 = page.locator("#Dropdown-1");

// Click on the 4th option (index 3)
await dropdown1.locator("option").nth(3).click();

// Wait for the second dropdown to be enabled/visible
const dropdown2 = page.locator("#Dropdown-2");


// Click on the last option
const optionsCount = await dropdown2.locator("option").count();
await dropdown2.locator("option").nth(optionsCount - 1).click();


})