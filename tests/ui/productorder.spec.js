import {test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage.js'   
import { HomePage } from '../../pages/HomePage.js'
import {BookPage} from '.././../pages/BookPage.js'
//import {CheckOutPage} from '../../pages/CheckOutPage.js'
import { CheckOutPage } from '../../pages/CheckoutPage.js'
import { ConfirmationOrderPage } from '../../pages/ConfirmationOrderPage.js'
import { PlaymentMethodPage } from '../../pages/PaymentMethodPage.js'
import { PlaymentInformationPage } from '../../pages/PlaymentInformationPage.js'
import { ShoppingCartPage } from '../../pages/ShoppingCartPage.js'
import{getTestData,getRandomCountry,getRandomAddress,getRandomPhoneNumber} 
from '../../utils/dataReader.js'
//import{getRandomCountry} from '../../utils/dataReader.js'
import{fillInput,click, mouseOver,selectByValue} from '../../utils/uiHelpers.js'
import{assertText,assertUrl,assertVisible,assertToastAppearAndDisappear} 
from '../../utils/assertHelpers.js';
import{getEnv} from '../../utils/envReaders.js'
import{validateOrderNumberRegex} from '../../utils/regexHelper.js'

test('Valdiate order the Books',async({page})=>{
    const baseUrl=getEnv('BASE_URL')
    const loginData=getTestData('login')
    const bookData=getTestData('books')
    const addressData=getTestData('address')
    const paymentMode=getTestData('playmentInfo')
    const orderconfirmationData=getTestData('orderconfirmation')
   
    await page.goto(baseUrl)

    const loginPage=new LoginPage(page);
    const homePage=new HomePage(page)
    const bookPage=new BookPage(page)
    const shoppingCart=new ShoppingCartPage(page)
    const checkOutPage=new CheckOutPage(page)
    const playmentMehtodPage=new PlaymentMethodPage(page)
    const pamentInfomationPage=new PlaymentInformationPage(page)
    const confirmationOrderPage=new ConfirmationOrderPage(page)
    await click(loginPage.loginLink)
    
    await page.waitForTimeout(3000)
    await fillInput(loginPage.userName,loginData.username)
    await fillInput(loginPage.userPassword,loginData.password)
    await click(loginPage.loinBtn)
    await assertVisible(homePage.homescreen)

    await click(homePage.bookslinks)
    await page.waitForTimeout(3000)
    await click(bookPage.computingandinterbookaddtocartbtn)
    await page.waitForTimeout(2000)
    await click(bookPage.fictionbookaddtocart)
    await page.waitForTimeout(5000)
   // await assertContainsText(bookPage.confirmationMessageProductIsAdded,'The product has been added to your shopping cart')
   // await assertToastAppearAndDisappear(bookPage.confirmationMessageProductIsAdded,'The product has been added to your shopping cart')
    await mouseOver(bookPage.shoppingcart)
    await click(bookPage.addToCart)
    await click(shoppingCart.checkboxIagree)
    await click(shoppingCart.checkout)
    await selectByValue(checkOutPage.billingAddressDropdown,addressData.billing_address)
     const country = getRandomCountry();
    await selectByValue(checkOutPage.countryDropDown,country)
    //await selectByValue(checkOutPage.billingAddressDropdown,'New Address')
    const address = getRandomAddress();
    await fillInput(checkOutPage.city,address.city)
    await fillInput(checkOutPage.address1,address.addressLine1)
    await fillInput(checkOutPage.postalCode,address.pincode)

    const phonenumber=getRandomPhoneNumber();
    await fillInput(checkOutPage.phoneNumber,phonenumber)
    await click(checkOutPage.billingAdrContineBtn)
    await click(checkOutPage.storePickupCheckbox)
    await click(checkOutPage.shippingAdrContinueBtn)
    await click(playmentMehtodPage.contineBtnPaymentMethos)
    await assertText(pamentInfomationPage.payByCodText,paymentMode.payment_mode_by_cod)
    await click(pamentInfomationPage.continueBtnPaymentInfo)
    await page.mouse.wheel(0, 1000);
    await assertText
    (confirmationOrderPage.computingAndInternetBook,bookData.computing_and_Internet)
    await assertText
    (confirmationOrderPage.fictionBook,bookData.fiction)
    await page.waitForTimeout(1000)
    await click(confirmationOrderPage.confirmBtn)
    //await page.waitForTimeout(4000)
    await assertText
    (confirmationOrderPage.orderSuccessfulMsg,orderconfirmationData.order_confirmation_msg)
   // await page.waitForSelector(orderSuccessfulMsg)
    await validateOrderNumberRegex(confirmationOrderPage.orderNumber)
   //await page.waitForTimeout(2000)
})










//productorder.spec.js