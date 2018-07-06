const puppeteer = require('puppeteer');
const credentials = require('./credentials');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      args: [
          '--window-size=1920, 1080'
      ]
  });
  const page = await browser.newPage();
  page.setViewport({
      height:1080,
      width:1920
  });
  await page.goto('https://instagram.com/accounts/login');

  await page.waitFor(() => document.querySelectorAll('input').length);

  await page.type('[name=username]', credentials.username);
  await page.type('[name=password]', credentials.password);

  await page.evaluate(() => {
      document.querySelector('._5f5mN').click();
  });

  await page.waitFor(14000);
  await browser.close();
})();