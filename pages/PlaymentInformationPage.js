export class PlaymentInformationPage{
      constructor(page){
        this.page=page;
        this.payByCodText=page.locator("//p[normalize-space()='You will pay by COD']")
        this.continueBtnPaymentInfo=page.
        locator("//input[@class='button-1 payment-info-next-step-button']")
        

      }
}