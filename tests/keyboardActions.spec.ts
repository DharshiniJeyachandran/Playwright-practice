import {test,expect} from '@playwright/test'

test('keyboard actions', async ({page}) => {
    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").focus();
    await page.keyboard.type("laptop");  // to type the text
    // await page.keyboard.press('Enter'); // to press enter
    await page.keyboard.press('Meta+A');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(5000);
})  