import {test,expect} from '@playwright/test'

test ('screenshot', async ({page}) => {
    await page.goto("https://www.amazon.com.be/");
    // await page.screenshot({path : 'Screenshots/amazon1.png'}); // takes screenshot of the visible page
    // await page.screenshot({path: 'Screenshots/amazonfullpage.png', fullPage: true}) // takes entire page screenshot

    await page.screenshot({path: `Screenshots/amazon - ${Date.now()}.png`});
})
