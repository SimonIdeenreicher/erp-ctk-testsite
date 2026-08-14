import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

page.on('console', (msg) => { if (msg.type() === 'error' || msg.type() === 'warning') console.log('[console.' + msg.type() + ']', msg.text()); });
page.on('pageerror', (err) => console.log('[pageerror]', err.message));
page.on('response', (res) => {
  if (res.url().includes('forminit.com/f/')) {
    console.log('[forminit response]', res.status(), res.url());
    res.text().then((t) => console.log('[forminit body]', t.slice(0, 500))).catch(() => {});
  }
});

await page.goto('http://localhost:4322/', { waitUntil: 'networkidle' });

await page.fill('#name', 'Test Nutzer');
await page.fill('#company', 'Testfirma GmbH');
await page.fill('#email', 'test@example.com');
await page.fill('#message', 'Testnachricht zur Formular-Integrationspruefung.');

await page.click('#contact-form-submit');
await page.waitForTimeout(4000);

const statusText = await page.textContent('#contact-form-status');
console.log('FINAL STATUS TEXT:', statusText);

await browser.close();
