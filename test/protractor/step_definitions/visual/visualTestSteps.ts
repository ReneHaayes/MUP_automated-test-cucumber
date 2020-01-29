import {When} from "cucumber";
import * as blueharvest from 'blue-harvest';
import * as path from "path";
import {browser} from "protractor";
import {genericMethods} from "@support";


When(/^I test screenshots$/, async () => {
  const goldenPath = path.join(__dirname, '../../', `baseScreenshot/download.png`);
  await browser.sleep(20000);
  const data = await browser.takeScreenshot();
  await console.log('stap1');
  // await logImageToHtmlReport()
  const result = await blueharvest.compareScreenshot(data, goldenPath, './');
  console.log('stap2');
  // await browser.logImageToHtmlReport(this, result);
  await genericMethods.verifyScreenshot(result);
});
