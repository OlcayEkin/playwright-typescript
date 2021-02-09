const {chromium} = require ('playwright')
const assert = require('assert')
const MainPage = require("../pages/MainPage").MainPage

describe('Amazon Web TR UI PoC - TestHive', function() {
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
        await page.goto('http://amazon.com.tr/')
    })

    afterEach(async () => {
        await page.close()
    })

    it('should signup for Amazon', async() =>{
        await page.fill('#twotabsearchtextbox', 'televizyon')
        await page.click('#nav-search-submit-text')
        await page.waitForSelector('[dir=auto]')
        await assert.equal(await page.innerText('.a-color-state.a-text-bold'),'"televizyon"')
    })

})