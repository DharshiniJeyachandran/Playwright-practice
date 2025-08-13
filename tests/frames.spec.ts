import {test,expect} from '@playwright/test'

test('handling frames' , async ({page}) => {
await page.goto("https://testpages.eviltester.com/styled/frames/frames-test.html");
// page.frames() is used to get the no of frames present on a page
const noOfFrames =page.frames();
console.log(`No of frames present are : ${noOfFrames.length}`);

const frame1 = page.frameLocator('frame[name="left"]');
const bodyText = await frame1.locator('body').textContent();
await expect (bodyText).toContain("Left");

const frame2 = page.frameLocator('frame[name="middle"]');
const bodyText2 = await frame2.locator('body').textContent();
await expect (bodyText2).toContain("Middle");

const frame3 =page.frameLocator('frame[name="right"]');
const bodyText3 = await frame3.locator('body').textContent();
await expect (bodyText3).toContain("Right");
})


test('nested frames', async ({page}) =>{
    await page.goto("https://play1.automationcamp.ir/frames");
    const parentframe = page.frameLocator("#frame1");
    const childframe = parentframe.frameLocator("#frame2");
    await childframe.locator("#click_me_2").click();
    await page.waitForTimeout(5000);


})

test('nested frames2', async({page}) => {
   await page.goto("https://play1.automationcamp.ir/frames");
    const parentframe = page.frameLocator("#frame1");
    const childframe1 = parentframe.frameLocator("#frame3");
    const childframe2 = childframe1.frameLocator("#frame4");
    await childframe2.locator("#click_me_4").click();
    await page.waitForTimeout(5000);
})

test.only('nested frames3', async ({page}) => {
     await page.goto("https://play1.automationcamp.ir/frames");
     await expect (page.locator(".navbar-brand.abs")).toHaveText("The Playground");
    const parentframe = page.frameLocator("#frame1");
    await expect (parentframe.getByText("Switch to the frames above and click the buttons.")).toHaveText("Switch to the frames above and click the buttons.");
    await parentframe.locator("#click_me_1").click();
    await page.waitForTimeout(5000);
})