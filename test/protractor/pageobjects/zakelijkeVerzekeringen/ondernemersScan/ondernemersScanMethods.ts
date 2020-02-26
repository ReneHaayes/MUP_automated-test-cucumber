import {ondernemersScanElements, genericMethods, genericElements} from '@support';
import {browser} from 'protractor';

export class OndernemersScanMethods {

  async clickOnStartScan() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisibleWithXpath(ondernemersScanElements.startScan, browser.getPageTimeout);
    await genericMethods.clickOnElementWithXpath(ondernemersScanElements.startScan);
  }

  questionOptionsSelectElement(option: string): string {
    return "//*[@class='question__options']//*[contains(text(),'"+option+"')]"
  }

  questionSelectElement(option: string): string {
    return "//*[@class='question__title']//*[contains(text(),'"+option+"')]"
  }

}
