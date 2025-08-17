// Selenium UI Test 1: Signup and Login Flow
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function signupLoginFlow() {
  let options = new chrome.Options();
  options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  const baseUrl = 'http://localhost:3000';

  try {
    // Navigate to signup
    await driver.get(baseUrl + '/signup');

    // Fill signup form
    const email = 'testuser' + Date.now() + '@example.com';
    await driver.findElement(By.css('input[placeholder="👤 Full Name"]')).sendKeys('Test User');
    await driver.findElement(By.css('input[placeholder="📧 Email Address"]')).sendKeys(email);
    await driver.findElement(By.css('input[placeholder="🔒 Create Password"]')).sendKeys('Password123');
    await driver.findElement(By.xpath("//button[contains(.,'Create Account')]")) .click();

    // Wait for redirect to login
    await driver.wait(until.urlContains('/login'), 5000);

    // Perform login
    await driver.findElement(By.css('input[placeholder="📧 Email Address"]')).sendKeys(email);
    await driver.findElement(By.css('input[placeholder="🔒 Password"]')).sendKeys('Password123');
    await driver.findElement(By.xpath("//button[contains(.,'Login')]")).click();

    // Wait for home
    await driver.wait(until.urlIs(baseUrl + '/'), 5000);
    console.log('Signup and login flow passed.');
  } catch (e) {
    console.error('Signup/Login test failed:', e);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
})();
