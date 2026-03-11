import { test , expect } from "@playwright/test"
import path from "node:path"
test
test("Upload file using Event Listener filechooser", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    // step 1 : Establish the event which we are expecting to happen
    const chooser = page.waitForEvent("filechooser")
    // step 2 : Trigger the event using click
    page.locator("//div[@id='drag-drop-upload']").click()
    // step 3 : Resolve Promise by catching the event
    const catchEvent = await chooser
    // step 4 : Inject file from the directory
    await catchEvent.setFiles(path.join(__dirname, '../../uploadfile/1348495.png'))
    await page.waitForTimeout(5000)
    await expect(page.locator("(//div[@class='dz-filename']/span)[1]")).toHaveText(/1348495/)
})