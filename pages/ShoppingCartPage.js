export class ShoppingCartPage{
    constructor(page){
       this.page=page
        this.checkboxIagree=page.locator('#termsofservice');
        this.checkout=page.locator("//button[@id='checkout']");
        
    }
}