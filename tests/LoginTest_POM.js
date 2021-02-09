const {chromium} = require ('playwright')
const assert = require('assert')
const MainPage = require("../pages/MainPage").MainPage

describe('AmazonTR Web UI Test POM - Test Hive',function(){
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
    })

    afterEach(async () => {
        await page.close()
    })

    it('should signup for Amazon', async() =>{
        const mainPage = new MainPage(page);
        await mainPage.navigate('http://amazon.com.tr/')
        await mainPage.login('Test Hive', 'sbx64476@zwoho.com', 'password123')
    })

})