export class PlaymentMethodPage{
    constructor(page){
        this.page=page
        this.cashOnDelivery=page.locator("//input[@id='paymentmethod_0']")
        this.contineBtnPaymentMethos=page.
        locator("//input[@class='button-1 payment-method-next-step-button']")
        
    }
}