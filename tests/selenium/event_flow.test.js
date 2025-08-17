// Selenium UI Test 2: Event Creation Basic Flow
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function eventCreationFlow() {
  let options = new chrome.Options();
  options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  const baseUrl = 'http://localhost:3000';

  try {
    // Precondition: Use existing or new user
    const email = 'creator' + Date.now() + '@example.com';
    // Signup
    await driver.get(baseUrl + '/signup');
    await driver.findElement(By.css('input[placeholder="👤 Full Name"]')).sendKeys('Creator User');
    await driver.findElement(By.css('input[placeholder="📧 Email Address"]')).sendKeys(email);
    await driver.findElement(By.css('input[placeholder="🔒 Create Password"]')).sendKeys('Password123');
    await driver.findElement(By.xpath("//button[contains(.,'Create Account')]")).click();
    await driver.wait(until.urlContains('/login'), 5000);

    // Login
    await driver.findElement(By.css('input[placeholder="📧 Email Address"]')).sendKeys(email);
    await driver.findElement(By.css('input[placeholder="🔒 Password"]')).sendKeys('Password123');
    await driver.findElement(By.xpath("//button[contains(.,'Login')]")).click();
    await driver.wait(until.urlIs(baseUrl + '/'), 5000);

    // Scroll to event form
    const createButton = await driver.findElement(By.xpath("//button[contains(.,'Create New Event') and contains(@class,'btn-success')]") );
    await driver.executeScript("arguments[0].scrollIntoView();", createButton);

    // Fill event form
    const titleInput = await driver.findElement(By.css('input[placeholder="🎉 Event Title"]'));
    await titleInput.sendKeys('Selenium Test Event');
    const dateInput = await driver.findElement(By.css('input[type="datetime-local"]'));
    const futureDate = new Date(Date.now() + 3600 * 1000); // +1 hour
    const yyyy = futureDate.getFullYear();
    const mm = String(futureDate.getMonth() + 1).padStart(2,'0');
    const dd = String(futureDate.getDate()).padStart(2,'0');
    const hh = String(futureDate.getHours()).padStart(2,'0');
    const mi = String(futureDate.getMinutes()).padStart(2,'0');
    await dateInput.sendKeys(`${yyyy}-${mm}-${dd}T${hh}:${mi}`);
    await driver.findElement(By.css('input[placeholder="📍 Event Location"]')).sendKeys('Online');
    // Submit
    await driver.findElement(By.xpath("//button[contains(.,'Create Event')]")).click();

    // Expect reload (page may refresh), so wait for home again
    await driver.wait(until.urlIs(baseUrl + '/'), 5000);
    console.log('Event creation flow passed.');
  } catch (e) {
    console.error('Event creation test failed:', e);
    process.exitCode = 1;
  } finally {
    await driver.quit();
  }
})();
