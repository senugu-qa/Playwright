import {test, expect, chromium} from '@playwright/test'

test('SlowMotion Demo', async() => {
    // Launch browser
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
     })
     // create a context for browser
     const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width:800, height: 600}
        }
     })
// Create a new page inside context.
const page = await context.newPage();
await page.goto('https://example.com');
// Dispose context once it's no longer needed.
await context.close();

})

