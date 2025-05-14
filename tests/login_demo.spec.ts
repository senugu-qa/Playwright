import{test,expect} from '@playwright/test'

test('login_demo', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await expect(page).toHaveTitle(/OrangeHRM/)
    await page.locator('//p[@class="oxd-userdropdown-name"]').click();
    await page.locator('text=Logout').click();
    // await expect(page).toHaveURL(/https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
   await expect (page.locator('text=Login')).toHaveCount(1); 
   // await page.pause();
 
    



    

})
