import { After, Before, setDefaultTimeout } from 'cucumber';
import { protractor } from 'protractor';
import { inspect } from "util";

setDefaultTimeout(90000);

Before(async function() {
  // alleen gebruiken wanneer een pagina geen angular heeft
  protractor.browser.waitForAngularEnabled(false);
  protractor.browser.manage().window().maximize();
});

After(async function(testCase: any) {
  if (testCase.result.status === 'failed') {
    return protractor.browser
      .manage()
      .logs()
      .get('browser')
      .then(browserLog => {
        logToHtmlReport(this, Buffer.from(inspect(browserLog)).toString('base64'));
      })
      .then(() => protractor.browser.takeScreenshot())
      .then(screenShot => logImageToHtmlReport(this, screenShot));
  }

});

export function logToHtmlReport(context: any, message: string) {
  context.attach(message);
}

export function logImageToHtmlReport(context: any, screenShot: string) {
  context.attach(screenShot, 'image/png');
}

// After(function(testCase: any) {
//   if (testCase.result.status === 'failed') {
//   }
// });
