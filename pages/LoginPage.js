export class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink=page.getByRole('link', { name: 'Log in' })
        this.userName=page.locator("//input[@id='Email']")
        this.userPassword=page.getByRole('textbox', { name: 'Password:' })
        this.loinBtn=page.locator("input[value='Log in']")

    }
    async login(user,pass){
        await this.loginLink.click()
        await this.userName.fill(user)
        await this.userPassword.fill(pass)
        await this.loinBtn.click()

    }
}