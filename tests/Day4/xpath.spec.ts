import test from "@playwright/test";

test("Wrting the xpath",async({ page }) => {
    await page.goto("https://amazon.in");
    let amazonpage = await page.title();
    console.log("The page loaded is "+amazonpage);
    const a = page.locator("//input[@id='twotabsearchtextbox']");
    await a.fill("Iphone")
    await a.press('Enter')
    await page.locator("//span[contains(text(),'512 GB & above')]").click();
    await page.locator("//button[contains(text(),'Add to cart')]").first().click();

})