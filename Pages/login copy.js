exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.Submit_button = page.getByRole('button', { name: 'Login' })

    }
    async GotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async entersername(username) {
        await this.username_textbox.fill(username)
    }
    async enterpassword(password) {
        await this.password_textbox.fill(password)
    }

    async submitusercredentials() {
        await this.Submit_button.click()
    }

}


