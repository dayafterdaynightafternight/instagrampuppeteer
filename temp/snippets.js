/* eslint-disable */

// await page.waitForSelector('input[placeholder=Search]');
// await page.evaluate(() => {
//     if (document.querySelector('input[placeholder=Search]')) {
//         const searchBox = document
//             .querySelector('input[placeholder=Search]')
//             .parentNode
//             .querySelector('[role=button]');

//         searchBox.click();
//     }
// });

// await page.keyboard.type(`#${searchTerm}`);
// await page.waitForSelector(`[href="/explore/tags/${searchTerm}/"]`);

// await page.evaluate(() => {
//     if (document.querySelectorAll(`[href="/explore/tags/${searchTerm}/"]`)) {
//         const firstEl = document.querySelectorAll(`[href="/explore/tags/${searchTerm}/"]`)[0];
//         firstEl.click();
//     }
// });

// await page.keyboard.type('#guitar');
// await page.waitForSelector('[href="/explore/tags/guitar/"]');

// await page.evaluate(() => {
//     if (document.querySelectorAll('[href="/explore/tags/guitar/"]')) {
//         const firstEl = document.querySelectorAll('[href="/explore/tags/guitar/"]')[0];
//         firstEl.click();
//     }
// });

// await page.evaluate(() => document.querySelector('[href="/accounts/activity/"]').click());
// set cookies

// await page.waitFor(() => document
//     .querySelector('[href="/accounts/activity/"]')
//     .parentNode
//     .querySelector('[role=dialog]')
//     .parentNode
//     .querySelectorAll('[role=button]').length);

// await page.evaluate(() => {
//     const targetedNodes = document
//         .querySelector('[href="/accounts/activity/"]')
//         .parentNode
//         .querySelector('[role=dialog]')
//         .parentNode
//         .querySelectorAll('[role=button]');

//     targetedNodes.forEach((el) => {
//         const button = el.querySelector('button');
//         if (!button) {
//             return;
//         }
//         const btnText = button.innerText;
//         if (btnText && btnText === 'Follow') {
//             button.click();
//         }
//     });
// });
