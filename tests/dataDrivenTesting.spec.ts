import {test,expect} from '@playwright/test'

test('dataDrivenTesting', async({page}) =>{
    await page.goto("https://www.saucedemo.com/");

    const credentials = [
        {userName:'standard_user', password: 'secret_sauce'},
        {userName:'locked_out_user', password: 'secret_sauce'},
        {userName:'problem_user', password: 'secret_sauce'}, 
        {userName: 'performance_glitch_user', password: 'secret_sauce'},
    ];

    for(const {userName,password} of credentials)
    {
        await page.goto("https://www.saucedemo.com/");
        console.log(`Testing with userName ${userName}, password ${password}`)
        await page.fill("#user-name",userName);
        await page.fill("#password", password);
        await page.click("#login-button");
        await page.waitForTimeout(1000);
    }
    if(await page.locator(".inventory_container").isVisible() )
    {
        await page.locator("#react-burger-menu-btn").click();
        await page.locator("#logout_sidebar_link").click();

    }
    else
    {
        console.log("Login failed");
    }
    await page.fill("#user-name",'');
    await page.fill("#password",'');
});