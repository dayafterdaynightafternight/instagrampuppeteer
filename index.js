/* eslint-env browser */
const puppeteer = require('puppeteer');

let sessionCookies;

const credentials = {
    username: '###',
    password: '###'
};

async function likeByHashtag(hashtag) {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--window-size=1920, 1080'
        ]
    });

    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36');
    page.setViewport({
        height: 1080,
        width: 1920
    });

    if (sessionCookies) {
        await page.setCookie(...sessionCookies);
        await page.goto('https://instagram.com');
    } else {
        await page.goto('https://instagram.com/accounts/login');

        await page.waitFor(() => document.querySelectorAll('input').length);

        await page.type('[name=username]', credentials.username);
        await page.type('[name=password]', credentials.password);

        // better button targeting
        const linkHandler = await page.$x('//button[contains(text(), "Log in")]');
        await linkHandler[0].click();

        await page.evaluate(() => {
            document.querySelector('._5f5mN').click();
        });
    }

    // close the modal popup about installing instagram on mobile
    await page.evaluate(() => {
        if (document.querySelector('[role=dialog] button')) {
            document.querySelector('[role=dialog] button').click();
        }
    });

    await page.goto(`http://www.instagram.com/explore/tags/${hashtag}`);

    // set cookies
    sessionCookies = await page.cookies();
    await page.waitFor(1400000);
    await browser.close();
}

likeByHashtag();
