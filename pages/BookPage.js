export class BookPage{
    constructor(page){
        this.page=page
        this.computingandinterbookaddtocartbtn=
        page.locator("//div[@class='master-wrapper-content']//div[1]//div[1]//div[2]//div[3]//div[2]//input[1]")
        this.fictionbookaddtocart=
        page.locator("//div[@class='product-grid']//div[3]//div[1]//div[2]//div[3]//div[2]//input[1]")
        this.confirmationMessageProductIsAdded=page.locator('p:has-text("The product has been added to your shopping cart")')
        this.shoppingcart=page.locator('span:has-text("Shopping cart")');
        this.addToCart=page.locator('input.button-1.cart-button');
    }
}