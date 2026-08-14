import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

const errors = [];
const netLog = [];
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('response', (res) => {
  if (res.url().includes('forminit')) {
    netLog.push(`${res.status()} ${res.url()}`);
  }
});

await page.goto('http://localhost:4322/', { waitUntil: 'networkidle' });

await page.fill('#name', 'Test Nutzer');
await page.fill('#company', 'Testfirma GmbH');
await page.fill('#email', 'test@example.com');
await page.fill('#message', 'Dies ist eine Testnachricht zur Überprüfung der Formular-Integration.');

await page.click('#contact-form-submit');
await page.waitForTimeout(3000);

const statusText = await page.textContent('#contact-form-status');
console.log('STATUS TEXT:', statusText);
console.log('NETWORK LOG:', netLog.join('\n') || 'none');
console.log('CONSOLE ERRORS:', errors.join('\n') || 'none');

await page.screenshot({ path: '/tmp/form-result.png', clip: { x: 0, y: 0, width: 800, height: 900 } });

await browser.close();
