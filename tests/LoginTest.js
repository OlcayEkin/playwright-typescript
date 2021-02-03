const {chromium} = require ('playwright')
const assert = require('assert')
const MainPage = require("../pages/MainPage").MainPage

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
        const mainPage = new MainPage(page);
        await mainPage.navigate('http://amazon.com.tr/')
    })

    afterEach(async () => {
        const mainPage = new MainPage(page);
        await mainPage.page.close()
    })

    it('should signup for Amazon', async() =>{
        const mainPage = new MainPage(page);
        await mainPage.login(page,'Test Hive', 'sbs64476@zwoho.com', 'password123')
    })

})