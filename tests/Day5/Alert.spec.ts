import test from "@playwright/test";

test("Handling alert test", async ({ page }) => {

  page.on('dialog', async(alertType) => {
    console.log("Alert message is " + alertType.message());
    const typemessage = alertType.type();
    console.log(typemessage);

    if (typemessage === 'confirm') {
      await alertType.accept();
    }
    else if (typemessage === 'prompt') {
      await alertType.accept("DK");
    }
    else {
      await alertType.accept();
    }
  });

  await page.goto("https://www.leafground.com/alert.xhtml");

  await page.locator("(//span[text()='Show'])[2]").click();
  await page.waitForTimeout(5000);

  await page.locator("(//span[text()='Show'])[5]").click();
  await page.waitForTimeout(5000);

})