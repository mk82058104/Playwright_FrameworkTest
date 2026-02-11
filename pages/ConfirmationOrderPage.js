export class ConfirmationOrderPage{
    constructor(page){
        this.page=page 
        this.computingAndInternetBook=
        page.
        locator("//a[@class='product-name'][normalize-space()='Computing and Internet']")
        this.fictionBook=
        page.locator("//a[@class='product-name'][normalize-space()='Fiction']")
        this.confirmBtn=page.locator("//input[@value='Confirm']")
        this.orderSuccessfulMsg=page.locator("//strong[normalize-space()='Your order has been successfully processed!']")
        this.orderNumber=page.locator("div[class='master-wrapper-main'] li:nth-child(1)")
        this.continueBtnOrderConfirmation=page.locator("//input[@value='Continue']")

    }
}
