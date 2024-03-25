import { test, expect, Page } from '@playwright/test'
import { Configuration, expectations } from './configuration'

// test.beforeEach(async({ page})=> {
//     await page.goto(Configuration.HOST)
// });

test.beforeEach(async ({ page }) => {
    await page.goto(Configuration.HOST + '/login');
    await page.locator('#login').fill(expectations.auth.login);
    await page.locator('#password').fill(expectations.auth.password)
    await page.locator('#submit-login').click();
});

test.describe('Cookbook pages should work correctly', () => {
    test('Main page should have title', async ({ page }) => {
        await page.goto(Configuration.HOST);
        await expect(page.locator('h1')).toHaveText(expectations.mainPage.header)
    });

    test('Articles list should show data', async ({page})=> {
        await page.goto(Configuration.HOST + '/articles');
        await expect(page.locator('h1')).toHaveText([
            expectations.articles.add
        ])
    })
    
    
    test('Articles item should show data', async ({page})=> {
        await page.goto(Configuration.HOST + expectations.articles.itemUrl);
        await expect(page.locator('h1')).toHaveText([
            expectations.articles.itemHeader
        ])
    })

    test('Add button should open the modal',async( {page})=>{
        await page.goto(Configuration.HOST + '/articles');
        const button = await page.locator('button').first();
        button.click();
        await expect(page.locator('id=edit').first()).toBeVisible();
    })

    test('Edit button should open modal', async({page})=>{
        await page.goto(Configuration.HOST + '/articles');
        const editButton = await page.locator('role=checkbox');
        editButton.first().click();
        await expect(page.locator('id=edit').first()).not.toBeHidden();
    })

    test('Article page should render the page', async({page})=>{
        await page.goto(Configuration.HOST + '/articles');
        const editButton = await page.locator('role=checkbox');
        editButton.first().click();
        await expect(page.locator('id=edit').first()).not.toBeHidden();
    })
    
    
});



