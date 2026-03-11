import test, {chromium,webkit} from "@playwright/test";
import { channel } from "node:diagnostics_channel";

test("Launching multiple browser", async ( {page}) =>
{
    const edgeBrowser = await chromium.launch({headless:false,channel: 'msedge' })
    const newcontent = await edgeBrowser.newContext();
    const newPage = await newcontent.newPage();
    await newPage.goto("https://www.redbus.in/");
    await page.waitForTimeout(5000);

    const webKitBrowser = await webkit.launch({headless:false,channel:'WebKit'  })
    const content = await webKitBrowser.newContext();
    const webpage = await content.newPage();
    await webpage.goto("https://www.flipkart.com/");

    let edgenewPageTitle = await newPage.title()
    console.log(edgenewPageTitle);
    let edgeBrowserUrl = page.url()
    console.log(edgeBrowserUrl)
    let webKitPageTitle = await newPage.title()
    console.log(webKitPageTitle);
    let webBrowserUrl = page.url()
    console.log(webBrowserUrl)

})