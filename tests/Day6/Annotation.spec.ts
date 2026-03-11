import { test, expect } from '@playwright/test';

test.describe("Smoke testing", () => {
     test.describe.configure({mode:'default'})
    // This runs before EVERY test in this block
    test.beforeEach(async ({ page }) => {
        test.info().annotations.push(
            { type: 'Testing', description: "Smoke testing" },
            { type: 'author', description: 'Dinesh' }
        );
        
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill("DemoSalesManager");
        await page.locator(".inputLogin").last().fill("crmsfa");
        await page.locator(".decorativeSubmit").click();
    });

    test("Test Describe1", async ({ page }) => {
        // Use the text selector correctly
        await page.locator("text='CRM/SFA'").click();
        const pageTitle = await page.title();
        console.log(`Title 1: ${pageTitle}`);
    });

    test("Test Describe2", async ({ page }) => {
        await page.locator("text='CRM/SFA'").click();
        const pageTitle = await page.title();
        console.log(`Title 2: ${pageTitle}`);
    });

    test("Test Describe3", async ({ page }) => {
        await page.locator("text='CRM/SFA'").click();
        const pageTitle = await page.title();
        console.log(`Title 3: ${pageTitle}`);
    });
});
