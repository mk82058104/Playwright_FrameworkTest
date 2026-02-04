import {expect} from '@playwright/test'

export async function assertContainsText(locator, expectedText) {
    await expect(locator).toContainText(expectedText);
}
export async function assertText(locator,expected) {
    await expect(locator).toHaveText(expected);
    
} 

export async function assertUrl(page,value){
    await expect(page).toHaveURL(new RegExp(value))
}

export async function assertVisible(locator){
    await expect(locator).toBeVisible();
}
