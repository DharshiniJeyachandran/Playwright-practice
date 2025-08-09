import {test,expect} from '@playwright/test'

test('handling frames' , async ({page}) => {
await page.goto("https://testpages.eviltester.com/styled/frames/frames-test.html");
// page.frames() is used to get the no of frames present on a page
const noOfFrames =page.frames();
console.log(`No of frames present are : ${noOfFrames.length}`);
})