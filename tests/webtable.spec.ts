import {test,expect} from '@playwright/test'
import { allowedNodeEnvironmentFlags } from 'process';
import { fromPromise } from 'rxjs/internal-compatibility';

test('webtable', async ({page}) => {
    await page.goto("https://letcode.in/table");
    await expect (page.locator("#shopping")).toBeVisible();

    const row = await page.locator("#shopping tbody tr").count();
    console.log(`The number of rows in the table is : ${row}`);
    await expect (row).toBe(4);

    const column = await page.locator("#shopping thead tr th").count();
    console.log(`The number of columns in the table is: ${column}`);
    await expect (column).toBe(2);

    // validating the itemname

    const itemName = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(1)").textContent();
    await expect(itemName).toBe('Apple');
    console.log(`Item name is: ${itemName}`);

    const colName = await page.locator("#shopping th:nth-child(2)").textContent();
    await expect(colName).toBe("Price");
    console.log(`The column name is : ${colName}`);

    const itemPrice = await page.locator("#shopping tbody tr:nth-child(4) td:nth-child(2)").textContent();
    await expect(itemPrice).toBe("480");
    console.log(`The item price of corn is: ${itemPrice}`);

})

test('handling table', async ({page}) => {
    await page.goto("https://trytestingthis.netlify.app/");
    await expect (page.locator(".main")).toBeVisible();
    await expect(page.getByText("This is your Sample Table:")).toHaveText("This is your Sample Table:");

    const colName1 = await page.locator(".main tbody th:nth-child(1)").textContent();
    await expect (colName1).toBe("Firstname");
    console.log(`The name of first column in the table is: ${colName1}`);

    const FirstnameOfM = await page.locator(".main tbody tr:nth-child(2) td:nth-child(1)").textContent();
    await expect (FirstnameOfM).toBe("Monika");
    console.log(`The first name of M is: ${FirstnameOfM}`);

    const monikaOccupation = await page.locator(".main tbody tr:nth-child(2) td:nth-child(5)").textContent();
    await expect (monikaOccupation).toBe("Chef");
    console.log(`The occupation of Monika is: ${monikaOccupation}`);

    const nameOfFourthCol = await page.locator(".main tbody tr:nth-child(1) th:nth-child(4)").textContent();
    await expect(nameOfFourthCol).toBe("Age");
    console.log(`The name of the fourth column is: ${nameOfFourthCol}`);
    await page.waitForTimeout(5000);
})

