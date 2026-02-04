export async function fillInput(locator,value){
    await locator.fill(value)
}

export async function click(locator){
    await locator.click();
}

export async function mouseOver(locator) {
    await locator.hover();
}

export async function assertToastAppearAndDisappear(
    locator,
    expectedText,
    timeout = 5000
) {
    // 1️⃣ Verify toast appears with text
    await expect(locator).toBeVisible({ timeout });
    await expect(locator).toContainText(expectedText);

    // 2️⃣ Verify toast disappears
    await expect(locator).toBeHidden({ timeout });
}

export async function selectByValue(locator, value) {
    await locator.selectOption(value);
}

export async function selectByLabel(locator, label) {
    await locator.selectOption({ label });
}

export async function selectByIndex(locator, index) {
    await locator.selectOption({ index });
}