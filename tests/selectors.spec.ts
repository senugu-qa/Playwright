import{test, expect, defineConfig} from '@playwright/test'

// export default defineConfig({
//     timeout: 600000, // 60 seconds for all tests
//     use: {
//       actionTimeout: 60000, // 15 seconds for each action (e.g., page.goto)
//     },
//   });

test('Selectors Demo', async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    // await page.locator('id=user-name').click()
    await page.pause();
    // await page.locator('id=user-name').fill("standard_user")
    // await page.locator('id=password').click()
    // await page.locator('id=password').fill("secret_sauce")
    // css locator
    // await page.locator('#login-button').click()
    //Xpath
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('xpath=//input[@name="password"]').fill("secret_sauce")
    // await page.locator('//input[@id="login-button"]')
    // text
    // await page.locator('text=LOGIN').click();
    await page.locator(':has-text("LOGIN")').click();
    

})