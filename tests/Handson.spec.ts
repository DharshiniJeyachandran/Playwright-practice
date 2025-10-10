import {test,expect} from '@playwright/test'

test('handson', async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', {name :'Login'}).click();
    await page.waitForTimeout(5000);
})

test.only('Assertions', async ({page}) => {
      await page.goto("https://www.saucedemo.com/");
      await expect(page).toHaveTitle("Swag Labs");
      await expect(page).toHaveURL("https://www.saucedemo.com/");
      const userName = page.getByRole('textbox', {name: 'Username'});
      await expect (userName).toBeEnabled();
      const password = page.getByRole('textbox', {name :'Password'});
      await expect(password).toBeEnabled();
      const login = page.getByRole('button', {name:'Login'});
      await expect (login).toBeVisible();
      await userName.fill("standard_user");
      await password.fill("secret_sauce");


    await expect(page.locator("#login_credentials h4")).toHaveText("Accepted usernames are:");
    await expect(page.locator(".login_password h4")).toContainText("Password for all users:");
       await login.click();
      await page.screenshot({ path: 'screenshots/after-login.png', fullPage: true });

})

