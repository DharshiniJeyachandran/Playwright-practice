import {test,expect} from '@playwright/test'

test('datepicker', async ({page}) => {
    await page.goto("https://letcode.in/calendar");
    await expect(page.locator(".title.has-text-centered")).toHaveText("Date Picker");
    await page.getByLabel("birthday").isVisible();

    const birthdayInput = await page.locator("#birthday");
    await expect(birthdayInput).toBeVisible();
    await birthdayInput.fill('1994-07-30');
     await expect (birthdayInput).toHaveValue('1994-07-30');
    await page.waitForTimeout(5000);
})

test.only('datepicker & dropdown', async ({page}) => {
    await page.goto("https://demoqa.com/date-picker");
    await page.locator(".col-md-3.col-sm-12", {hasText:'Select Date'}).isVisible();
    await page.locator("#datePickerMonthYearInput").click();
    await page.locator(".react-datepicker__month-select").selectOption("July");
    await page.locator(".react-datepicker__year-select").selectOption("1994");
    await page.getByLabel("Choose Saturday, July 30th, 1994").click();
    await expect(page.locator("#datePickerMonthYearInput")).toHaveValue("07/30/1994");
    await page.waitForTimeout(5000);

});