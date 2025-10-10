import {test,expect} from '@playwright/test'
import { title } from 'process';

test.skip('inputBox', async ({page})=> {
    await page.goto("https://letcode.in/test");
    await page.getByText("  All in One  ").click();
    await page.locator("#firstname").fill("Test123");
    await page.locator("#lasttname").fill("Last123");
    await page.getByPlaceholder("Email input").fill("Test@gmail.com");
    await page.getByPlaceholder("Phone Number").fill("1234567890");
    await page.getByPlaceholder("Address Line-1").fill("test address1");
    await page.getByPlaceholder("Address Line-2").fill("test address2");
    await page.getByPlaceholder("State").fill("Antwerpen");
    await page.getByPlaceholder("Postal-Code").fill("2800");
    const dateOfBirth = page.locator("#Date");
    await dateOfBirth.fill("1995-07-31");
    await page.locator(".checkbox").click();
    await page.locator('.button.is-primary').click();
}) 

test('Radio button', async ({page})=>{
await page.goto("https://letcode.in/test");
await page.getByText(" Toggle ").click();
await expect (page).toHaveTitle("Radio Buttons | LetCode with Koushik");
await expect(page.getByText("Radio & Checkbox")).toHaveText("Radio & Checkbox");
await expect (page.locator("#going")).not.toBeChecked();
await expect (page.locator("#notG")).not.toBeChecked();
await expect (page.locator("#maybe")).toBeDisabled();

await page.locator("#going").check();
await expect (page.locator("#going")).toBeChecked();
})

test.only('fields', async ({page}) => {
    await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html");
    await expect (page).toHaveTitle("HTML Form Elements");
    await page.getByText("Basic HTML Form Example").isVisible();
        await page.locator("input[name='username']").fill("Dharsh");
        await page.locator("input[type='password']").fill("Test1234");
        await page.locator("textarea[name='comments']").clear();
        await page.locator("textarea[name='comments']").fill("Hey! you got this");
        await page.locator("input[value='cb1']").check();
        await expect(page.locator("input[value='cb3']")).toBeChecked();
        await page.locator("input[value='cb3']").uncheck();
        await page.locator("input[value='rd1']").check();
        await page.locator("input[value='rd2']").uncheck();

        await page.locator("select[name='multipleselect[]']").selectOption(["Selection Item 1", "Selection Item 2"]);  
        await page.locator("select[name='dropdown']").selectOption("Drop Down Item 6");
        await page.waitForTimeout(5000);
})