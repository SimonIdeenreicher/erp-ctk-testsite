import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

page.on('console', (msg) => console.log('[console.' + msg.type() + ']', msg.text()));
page.on('pageerror', (err) => console.log('[pageerror]', err.message));
page.on('requestfailed', (req) => console.log('[requestfailed]', req.url(), req.failure()?.errorText));
page.on('request', (req) => console.log('[request]', req.method(), req.url()));
page.on('response', (res) => console.log('[response]', res.status(), res.url()));

await page.goto('http://localhost:4322/', { waitUntil: 'networkidle' });

await page.fill('#name', 'Test Nutzer');
await page.fill('#company', 'Testfirma GmbH');
await page.fill('#email', 'test@example.com');
await page.fill('#message', 'Testnachricht.');

// Check the SDK is actually present on window
const sdkPresent = await page.evaluate(() => typeof window.forminit);
console.log('typeof window.forminit =', sdkPresent);
if (sdkPresent !== 'undefined') {
  const keys = await page.evaluate(() => Object.keys(window.forminit || {}));
  console.log('forminit keys:', keys);
}

await page.click('#contact-form-submit');
await page.waitForTimeout(3000);

const statusText = await page.textContent('#contact-form-status');
console.log('STATUS TEXT:', statusText);

await browser.close();
