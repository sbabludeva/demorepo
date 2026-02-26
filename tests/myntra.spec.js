import {test} from '@playwright/test'
import sr from '../testdata/search.js'
import ab from '../testdata/addbag.js'
test("myntra",async ({browser}) => {
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.myntra.com/")
    let sbox=new sr(page)
    await sbox.searchbox.fill("facewash")
    await page.keyboard.press('Enter')

await sbox.pd.scrollIntoViewIfNeeded()
    let [wt]=await Promise.all([page.waitForEvent('popup'),
        
                                sbox.pd.click()])
    let addb=new ab(page)
    await addb.btn.click()
    await addb.abt.click()
    await addb.cart.click()
    await page.waitForTimeout(3000)
    
})


