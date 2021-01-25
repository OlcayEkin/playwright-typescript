const {chromium} = require ('playwright')
const assert = require('assert')

describe('Amazon Web TR UI PoC', function() {
    let browser, page
    before(async () => {
        //headless : true => headless mode
        //no parameter => headless mode
        browser = await chromium.launch({headless : false})
    })
    after(async () => {
        await browser.close();
    })

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('https://www.amazon.com.tr/')
    })

    afterEach(async () => {
        await page.close()
    })

    it('should signup for Amazon', async() =>{
        const loginBtn =  await page.$('#nav-link-accountList-nav-line-1')
        await loginBtn.hover();
        await page.click('[rel=nofollow].nav-a')
        await page.waitForSelector('#ap_use_email')
        await page.click('#ap_use_email')
    })

})