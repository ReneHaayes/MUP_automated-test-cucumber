import {browser, by, element, protractor} from "protractor";
import {visualElements} from "@support";
import * as path from "path";
import * as blueharvest from "blue-harvest";

export class VisualMethods {

  async makeScreenshotAndVerifyWithBaseline(baseImage: string, addMask = '', width = 1920, height = 5000) {
    await protractor.browser.manage().window().setSize(width, height);
    await browser.sleep(2000);
    await this.addMaskToVerify(addMask);
    try {
      const basePath = path.join(__dirname, '../../', 'baseScreenshot/' + baseImage + '.png');
      const data = await browser.takeScreenshot();
      await blueharvest.compareScreenshot(data, basePath, '../test/target/');
    } catch (e) {
      throw new Error('The screenshot dont match see ./target folder for the differences between base image: ' + baseImage + ' || ' + e);
    }
    await protractor.browser.manage().window().maximize();
  }

  async makeScreenshotAndVerifyWithBaselineSetSize(baseImage: string, width: number, height: number, addMask = '') {
    await this.makeScreenshotAndVerifyWithBaseline(baseImage, addMask, width, height);
  }

  async addMaskForElement(input: string, zIndex = 99999, xOffset = -20, yOffset = -20, sizeMultiplier = 4) {
    const e = element(by.css(input));
    await blueharvest.addMask(e, 'black', zIndex, xOffset, yOffset, sizeMultiplier);
  }

  async addMaskToVerify(input: string) {
    switch (input) {
      case 'home': {
        await this.addMaskForElement(visualElements.scrollLeftBottomElement);
      }
    }
  }
}
