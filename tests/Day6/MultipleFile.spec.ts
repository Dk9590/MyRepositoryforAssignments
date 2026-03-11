import test from "@playwright/test";
import dotenv from 'dotenv'
const value  = process.env.EnvFile || "SF_Login_QA"     //use OR  only the environment is not defined
dotenv.config({path:`Helper/${value}.env`}) // handling the dynamic value we use string literals which is 'backtick
//`Helper/${value}.env`

test(`the login data is Env`, async ({ page }) => {

 let url=process.env.SF_LoginUrl as string // getting it from the SF_Login_Dev as 
    let user=process.env.SF_UsernameDetails as string   // if this is number use as number 
    let pass=process.env.SF_PasswordDetails as string
await page.goto(url)
await page.locator("#username").fill(user)
await page.locator("#password").fill(pass)
await page.locator("#Login").click()
})