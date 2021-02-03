
class MainPage {
  constructor(page) {
    this.page = page;
  }
  async navigate(url) {
    await this.page.goto(url);
  }
  async login(page ,name, email, password) {
    const loginBtn =  await page.$('#nav-link-accountList-nav-line-1')
    await loginBtn.hover();
    await page.click('[rel=nofollow].nav-a')
    await page.click('#ap_use_email')
    await page.waitForSelector('[for=ap_email]')
    await page.fill('#ap_customer_name',name)
    await page.fill('#ap_email',email)
    await page.fill('#ap_password',password)
    await page.keyboard.press('Enter')
    await page.waitForSelector('#cvf-page-content')
  }
}
module.exports = { MainPage };