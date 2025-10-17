import { TmplAstBoundEvent } from "@angular/compiler";
import { test, expect } from "@playwright/test";
import { count } from "console";
import { TbodyEditDeleteComponent } from "ng2-smart-table/lib/components/tbody/cells/edit-delete.component";
import { first } from "rxjs-compat/operator/first";

test("handson", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(5000);
});

test("Assertions", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  const userName = page.getByRole("textbox", { name: "Username" });
  await expect(userName).toBeEnabled();
  const password = page.getByRole("textbox", { name: "Password" });
  await expect(password).toBeEnabled();
  const login = page.getByRole("button", { name: "Login" });
  await expect(login).toBeVisible();
  await userName.fill("standard_user");
  await password.fill("secret_sauce");

  await expect(page.locator("#login_credentials h4")).toHaveText(
    "Accepted usernames are:"
  );
  await expect(page.locator(".login_password h4")).toContainText(
    "Password for all users:"
  );
  await login.click();
  await page.screenshot({
    path: "screenshots/after-login.png",
    fullPage: true,
  });
});

test("Amazon validations", async ({ page }) => {
  await page.goto("https://www.amazon.com.be/");
  await page.getByTitle("English").click();
  await page.locator("#sp-cc-rejectall-link").click();
  const SignIn = await page.getByRole("link", { name: "Hello, sign in" });
  await expect(SignIn).toBeVisible();

  const all = await page.getByRole("button", {
    name: "Open All Categories Menu",
  });
  await all.click();
  await page.waitForTimeout(2000);
  await expect(page.getByRole("link", { name: "Best Sellers" })).toBeVisible();
  await page.getByRole("link", { name: "Best Sellers" }).click();
  await page.screenshot({ path: "Screenshots/amazonBestSeller.png" });

  const bestSeller = await page.getByRole("heading", {
    name: "Amazon Best Sellers",
  });
  await expect(bestSeller).toBeVisible();

  const beauty = await page.getByRole("link", { name: "Beauty" });
  await beauty.click();
  await page.screenshot({ path: "Screenshots/amazon/beauty.png" });

  await expect(
    page.getByRole("heading", { name: "Best Sellers in Beauty" })
  ).toBeVisible();
  const premiumBeauty = await page.getByRole("link", {
    name: "Premium Beauty",
  });
  await premiumBeauty.click();

  await expect(page.getByRole("img", { name: "Premium Beauty" })).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Kerastase", exact: true })
  ).toBeVisible();

  await page.getByText("All Discounts").click();
  await page.locator("#searchDropdownBox").selectOption({ label: "Baby" });

  await expect(
    page.getByRole("link", { name: "0 items in shopping basket" })
  ).toBeVisible();
});

test("test validations", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/reference/input.html"
  );
  await expect(
    page.getByRole("heading", {
      name: "Input Elements - HTML Testing Reference",
    })
  ).toBeVisible();
  await expect(page.getByText("Basic Controls")).toBeVisible();
  await page.getByRole("checkbox", { name: "checkbox" }).check();
  await expect(page.getByText("Radio 1")).not.toBeChecked();
  await page.getByText("Radio 2").check();
  await expect(page.getByText("Text Controls")).toBeVisible();
  await page.getByRole("textbox", { name: "text" }).fill("Dharsh");
  await page.getByRole("searchbox", { name: "search" }).fill("Job");
  await page.getByRole("textbox", { name: "password" }).fill("password@30");
  await page.locator('input[type="email"]').fill("dharsh@gmail.com");
  await page.waitForTimeout(3000);
  await page.locator('input[type="url"]').fill("https://www.amazon.com.be/");
  await page.getByRole("textbox", { name: "tel" }).fill("01234567789");
  await expect(page.getByText("Number Controls")).toBeVisible();
  await page.getByRole("spinbutton", { name: "number" }).fill("22");
  await expect(page.getByText("Special Format Controls")).toBeVisible();
  await page.getByRole("button", { name: "submit" }).click();

  await page.waitForTimeout(3000);
});

test("let code- input form", async ({ page }) => {
  await page.goto("https://letcode.in/forms");
  await expect(page.getByRole("heading", { name: "Form" })).toBeVisible();
  await expect(page.getByText("First Name")).toBeVisible();
  await expect(page.getByText("Last Name")).toBeVisible();
  const firstname = await page.locator("#firstname");
  await expect(firstname).toBeEnabled();
  await firstname.fill("Dharshini");

  const lastname = await page.locator("#lasttname");
  await expect(lastname).toBeEnabled();
  await lastname.fill("Jeyachandran");

  const email = await page.getByRole("textbox", { name: "Email input" });
  await email.fill("hello@gmail.com");

  await page.getByRole("textbox", { name: "Phone Number" }).fill("01234567798");
  await page
    .getByRole("textbox", { name: "Address Line-1" })
    .fill("P Sherman,43 Wallaby Way");
  await page.getByRole("textbox", { name: "Address Line-2" }).fill("Sydney");
  await page.getByRole("textbox", { name: "State" }).fill("Sydneyy");
  await page.getByRole("textbox", { name: "Postal-Code" }).fill("7000");
  await page.locator("#Date").fill("1995-07-15");
  const gender = await page.locator("#gender");
  await expect(gender).toBeVisible();
  await page.getByRole("radio", { name: "female" }).click();
  await page.locator('input[type="checkbox"]').click();
  await page.getByRole("button", { name: "submit" }).click();
  await page.screenshot({ path: "Screenshots/letcodeform.png" });
  await page.waitForTimeout(3000);
});

test("radiobutton & checkbox", async ({ page }) => {
  await page.goto("https://letcode.in/radio");
  await expect(page).toHaveTitle("Radio Buttons | LetCode with Koushik");
  await expect(page.getByRole("img", { name: "letcode" })).toBeVisible();
  await expect(page.getByText("Select any one")).toBeVisible();
  await page.locator("#yes").check();
  await expect(page.locator("#no")).not.toBeChecked();
  await expect(
    page.getByText("Cofirm you can select only one radio button")
  ).toBeVisible();
  await page.locator('input[id="one"]').check();
  await expect(page.locator('input[id="two"]')).not.toBeChecked();
  await expect(page.getByText("Find the bug")).toBeVisible();
  await expect(page.locator("#nobug")).not.toBeChecked();
  const bug = await page.locator("#bug");
  await expect(bug).not.toBeChecked();
  await bug.check();
  await expect(bug).toBeChecked();
  await expect(page.getByText("Find which one is selected")).toBeVisible();
  await expect(page.getByRole("radio", { name: "foo" })).not.toBeChecked();
  await expect(page.locator("#notfoo")).toBeChecked();
  await expect(page.getByText("Confirm last field is disabled")).toBeVisible();
  await expect(page.locator('input[id="going"]')).not.toBeChecked();
  await expect(page.locator('input[id="notG"]')).not.toBeChecked();
  await expect(page.locator('input[id="maybe"]')).toBeDisabled();
  await expect(
    page.getByText("Find if the checkbox is selected?")
  ).toBeVisible();
  await expect(page.getByText("Remember me")).toBeChecked();
  await expect(page.getByText("Accept the T&C")).toBeVisible();
  await page.getByText("I agree to the").check();
});

test("buttons", async ({ page }) => {
  await page.goto("https://letcode.in/button");
  await expect(page.getByRole("img", { name: "letcode" })).toBeVisible();
  await expect(page.locator(".title.has-text-centered")).toBeVisible();
  await expect(page.getByRole("button", { name: "Goto Home" })).toBeVisible();
  await expect(page.getByText("Get the X & Y co-ordinates")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Find Location" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Disabled" })).toBeDisabled();
});

test.only("dropdown - validations", async ({ page }) => {
  await page.goto("https://letcode.in/dropdowns");
  await page.locator("#fruits").selectOption("Banana");
  await expect(page.getByText("You have selected Banana")).toBeVisible();
  await expect(page.getByText("Select your super hero's")).toBeVisible();
  await page.locator("#superheros").selectOption("Guardians of the Galaxy");
  await expect(page.getByText("You have selected Guardians of the Galaxy")).toBeVisible();
  const programmingLang = await page.getByText("Select the last programming language and print all the options");
  await expect(programmingLang).toBeVisible();
  const listOfProgramminglang = await page.locator("#lang").allTextContents();
  console.log(`The programming languages are: ${listOfProgramminglang}`);
  await expect (page.getByText("Select India using value & print the selected value")).toBeVisible();
  await page.locator("#country").selectOption("India");
  const country =  await page.locator("#country").selectOption("India");
  await page.waitForTimeout(3000);
});
