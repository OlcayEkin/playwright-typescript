class MainPage {
  constructor(page) {
    this.page = page;
  }
  async navigate(url) {
    await this.page.goto(url);
  }
  async login(name, email, password) {
    const loginBtn =  await this.page.$('#nav-link-accountList-nav-line-1')
    await loginBtn.hover();
    await this.page.click('[rel=nofollow].nav-a')
    await this.page.click('#ap_use_email')
    await this.page.waitForSelector('[for=ap_email]')
    await this.page.fill('#ap_customer_name',name)
    await this.page.fill('#ap_email',email)
    await this.page.fill('#ap_password',password)
    await this.page.keyboard.press('Enter')
    await this.page.waitForSelector('#cvf-page-content')
  }
}
module.exports = { MainPage };