import {browser} from 'protractor';
import {mobileHomeVerzekeringElements, mobileHomeWithLicensePlate, genericMethods} from '@support';

export class MobileHomeVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(mobileHomeVerzekeringElements.licensePlateInputElement, browser.getPageTimeout);
    await genericMethods.typeText(mobileHomeVerzekeringElements.licensePlateInputElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(mobileHomeVerzekeringElements.licensePlateInputElement);
    await genericMethods.waitForElementIsVisibleWithXpath(mobileHomeVerzekeringElements.brandNameElementXpath +
      '[contains(text(),"' + mobileHomeWithLicensePlate.getMobileHomeBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }



}
