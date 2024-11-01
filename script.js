             //Radha Swami Ji
             const puppeteer = require('puppeteer')

             const fs = require('fs');
             const { type } = require('os');
             
             console.log('before');
             
             let page;
             
             let email =Chhaya_bramnhotra_
             
             let password = 'Yamini@1717'
             
             let browserlaunch = puppeteer.launch(
                 {
                     // by default website not visible if we assign false then it will visible
                     headless: false,
                     // when chromium open through the puppeteer then it will open in half size but i we write start maximized then it will open om fullscreen
                     args: ['--start-maximized'],
                     // by default width and height set by puppeteer but if we assign null then ..
                     defaultViewport: null
                 }
             )
             browserlaunch.then(function (browserInstance) {
                 // by using newPage we will move on then next page
                 browser = browserInstance;
                 let newtabBrowser = browserInstance.newPage()
                 return newtabBrowser;
             }).then(function (newtab) {
                 page = newtab;
                 //goto used for moving the given link
                 let browseropen = page.goto("https://www.instagram.com/accounts/login/")
                 return browseropen;
                 //input[tabindex='1'][maxlength='128']
             }).then(function () {
                 return waiting = page.waitForSelector("input[name='username']")
             }).then(function () {
                 let clickonuse = page.click("input[name='username']")
                 return clickonuse
             }).then(function () {
                 let typemail = page.type("input[name='username']", email, { delay: 50 })
                 return typemail
             }).then(function () {
                 let wait = page.waitForSelector("input[name='password']")
                 return wait
             }).then(function () {
                 return clickpas = page.click('input[name="password"]')
             }).then(function () {
                 let passtype = page.type('input[name="password"]', password, { delay: 50 })
                 return passtype
             }).then(function () {
             
                 let login = page.click("button[type='submit']")
                 return login
             }).then(function () {
                 return waitings = page.waitForSelector('input[aria-label="Search Input"]')
             }).then(function () {
                 return clicksearch = page.click('input[aria-label="Search Input"]')
             }).then(function () {
                 let searchguru = page.type('input[aria-label="Search Input"]', 'gurucharansingh.rajput', { delay: 50 })
                 return searchguru;
             }).then(function () {
                 return page.waitFor(8000);
             }).then(function () {
                 // let clickguru=page.click("div[id='f20826a1f93cab4']")    
                 let clickguru = page.waitForSelector('a[href="/gurucharansingh.rajput/"]')
                 return clickguru
                 //return 0;
             }).then(function () {
                     // let clickguru=page.click("div[id='f20826a1f93cab4']")    
                     let clickguru = page.click('a[href="/gurucharansingh.rajput/"]')
                     return clickguru
                     //return 0;
             })
             .then(function () {
                    
                 let clicklovew=page.waitForSelector("a[href='/p/CHAO_2ClnMX/']")
                 return clicklovew
              }).then(function () {
                    
                 let clicklove=page.click("a[href='/p/CHAO_2ClnMX/']")
                 return clicklove
             }).then(function()
             {
                 let waitlove=page.waitForSelector("span[class='fr66n']")  
                 return waitlove
             }).then(function()
              {
                  let clicklovee=page.click("span[class='fr66n']",{delay:100})
                  return clicklovee
              }).then(function()
              {
                  let commentwait=page.waitForSelector("span[class='_15y0l']")
                  return commentwait
              }).then(function()
              {
                  let clickoncomment=page.click("span[class='_15y0l']",{delay:100})
                  return clickoncomment
              }).then(function()
              {
                  let waittypecomment=page.waitForSelector("textarea[data-testid='post-comment-text-area']")
                  return waittypecomment
              })
             //  .then(function()
             //  {
             //     let waittypecomment=page.click("textarea[class='PUqUI Ypffh']")
             //     return waittypecomment
             // })
             .then(function()
             {
                  let typecoomment=page.type("textarea[data-testid='post-comment-text-area']",`Very nice Pic Guru Keep Growing and keep Hustling`,{delay:100})
                  return typecoomment     
              })
              .then(function()
              {
                  let postcommentwait=page.waitForSelector("button[data-testid='post-comment-input-button']")
                  return postcommentwait
              }).then(function()
              {
                  let clickpost=page.click("button[data-testid='post-comment-input-button']")
                  return clickpost
              }).then(function()
              {
                  console.log('Satguru');
              })
