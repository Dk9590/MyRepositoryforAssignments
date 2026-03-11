import test from "@playwright/test";

 test("checking the salesforce login", async( {page} ) =>
 {
await page.goto("https://testleaf.my.salesforce.com/")
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com") // another way to use is #username 
await page.waitForTimeout(3000)
await page.locator("input.r4.wide.mb16.mt8.password").fill("TestLeaf@2025") //one direct way to use class 
// if its text('text=CRM/FSA').click
const getRememberText = page.locator("//label[contains(text(),'Remember me')]")
const text = getRememberText.textContent()
console.log("The remember me text is visible " +text) 
await page.waitForTimeout(3000)
await page.locator("//input[@id='rememberUn']").click() // checking the remember me option 
await page.waitForTimeout(3000)
await page.locator("//a[contains(text(),'Forgot')]").click(); // Partial text()
await page.locator("//input[@value='Cancel']").click();
//await a.press('Enter') if you want to use keyboard press then user enter
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com") // another way to use is #username 
await page.waitForTimeout(3000)
await page.locator("input.r4.wide.mb16.mt8.password").fill("TestLeaf@2025")
await page.waitForTimeout(3000)
await page.locator("//input[@id='Login']").click()
await page.waitForTimeout(5000)
 })