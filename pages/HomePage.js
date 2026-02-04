export class HomePage{
    constructor(page){
        this.page=page
        this.homescreen=page.locator('#nivo-slider').locator('a').nth(1)
        this.bookslinks=page.locator("//li[@class='inactive']//a[normalize-space()='Books']")
    }
}