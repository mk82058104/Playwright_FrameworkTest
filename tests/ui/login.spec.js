import {test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage.js'   
import { HomePage } from '../../pages/HomePage.js'
import{getTestData} from '../../utils/dataReader.js'
import{fillInput,click} from '../../utils/uiHelpers.js'
import{assertText,assertUrl,assertVisible} from '../../utils/assertHelpers.js';
import{getEnv} from '../../utils/envReaders.js'


test('Valdiate Login Page',async({page})=>{
    const baseUrl=getEnv('BASE_URL')
    const loginData=getTestData('login')

    await page.goto(baseUrl)

    const loginPage=new LoginPage(page);
    const homePage=new HomePage(page)
    await click(loginPage.loginLink)
    
    await page.waitForTimeout(3000)
    await fillInput(loginPage.userName,loginData.username)
    await fillInput(loginPage.userPassword,loginData.password)
    await click(loginPage.loinBtn)
    await assertVisible(homePage.homescreen)

})