import {test,expect} from '@playwright/test'

test('normal mouse click', async ({page}) =>{
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
  await expect (page.locator("#click_type")).not.toBeVisible();
  // normal mouse click
  await page.locator("#click_area").click();
  await page.click("#click_area");
  await expect (page.locator("#click_type")).toHaveText("Click");
  await page.waitForTimeout(5000); 
}
)

test('right click', async ({page}) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
     // to right click 
  await page.locator("#click_area").click({button : 'right'});
  await expect (page.locator("#click_type")).toHaveText("Right-Click");
  await page.waitForTimeout(5000); 
})


test('double click', async ({page}) => {
  await page.goto("https://play1.automationcamp.ir/mouse_events.html");
// to double click
await page.locator("#click_area").dblclick();
await expect (page.locator("#click_type")).toHaveText("Double-Click");
await page.waitForTimeout(5000);
})

test('mouse hover', async ({page}) => {
await page.goto("https://play1.automationcamp.ir/mouse_events.html");
     // to hover over
await page.locator(".dropbtn").hover();
await page.locator("#dd_javascript").click();
await expect (page.locator("#hover_validate")).toHaveText("JavaScript");
await page.waitForTimeout(5000);
})

test('drag and drop', async ({page}) => {
 await page.goto("https://play1.automationcamp.ir/mouse_events.html");
 // to drag and drop
 await page.dragAndDrop("#drag_source","#drop_target");
 await expect (page.locator(".bg-danger.text-light.shadow")).toHaveText("Drop is successful!");
 await page.waitForTimeout(5000);

})

test('mouse scroll', async ({page}) => {
 await page.goto("https://play1.automationcamp.ir/mouse_events.html");
 // to scroll down
 await page.mouse.wheel(0,500);
 await page.waitForTimeout(5000);

})
test.only('mouse actions', async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");
    await page.locator(".text").getByText("Text Box").click();
    await page.locator('.text').getByText("Buttons").click();
    await page.getByRole('button', { name: 'Click Me', exact:true }).click();
    await expect (page.locator("#dynamicClickMessage")).toHaveText("You have done a dynamic click");

    await page.locator('#rightClickBtn').getByText("Right Click Me").click({button : 'right'});
    await expect (page.locator("#rightClickMessage")).toHaveText("You have done a right click");

    await page.locator("#doubleClickBtn").getByText("Double Click Me").dblclick();
    await expect (page.locator("#doubleClickMessage")).toHaveText("You have done a double click");

    await page.waitForTimeout(5000);
});
