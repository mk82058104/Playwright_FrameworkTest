export class CheckOutPage{
    constructor(page){
        this.page=page;
        this.billingAddressDropdown=
        page.locator("//select[@id='billing-address-select']");
        this.countryDropDown=
        page.locator("//select[@id='BillingNewAddress_CountryId']")
        this.city=page.locator("//input[@id='BillingNewAddress_City']")
        this.address1=page.locator("//input[@id='BillingNewAddress_Address1']")
        this.postalCode=page.locator("//input[@id='BillingNewAddress_ZipPostalCode']")
        this.phoneNumber=page.locator("//input[@id='BillingNewAddress_PhoneNumber']")
        this.billingAdrContineBtn=page.locator("//input[@onclick='Billing.save()']")
        this.storePickupCheckbox=page.locator('#PickUpInStore')
        this.shippingAdrContinueBtn=page.locator("input[onclick='Shipping.save()']")

    }
}