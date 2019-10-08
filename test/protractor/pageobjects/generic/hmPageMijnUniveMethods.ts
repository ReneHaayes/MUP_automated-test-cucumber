import {browser} from "protractor";
import {homePageEnum} from '../enum/woonVerzekeringEnum';
import {verzekeringPaginasEnum} from '../enum/genericEnum';
import {genericMethods, getUrlUnive, hmPageMijnUniveElements} from "../../support";

export class HmPageMijnUniveMethods {

  async clickHeaderAndGoToPage(input: string) {
    switch (input) {
      case homePageEnum.ZOEKEN: {
        await genericMethods.clickOnElement(hmPageMijnUniveElements.headerZoekenClickElement);
        await genericMethods.typeText(hmPageMijnUniveElements.headerZoekenInputElement, homePageEnum.ZOEKEN);
        await genericMethods.clickOnElement(hmPageMijnUniveElements.zoekenPageButtonClickElement);
        break;
      }
      case homePageEnum.MIJN_UNIVE: {
        await genericMethods.clickOnElement(hmPageMijnUniveElements.headerMijnUniveClickElement);
        break;
      }
      case verzekeringPaginasEnum.VERZEKERINGEN: {
        await genericMethods.clickOnElement(hmPageMijnUniveElements.headerVerzekeringenClickElement);
        break;
      }
      case homePageEnum.KLANTENSERVICE: {
        await genericMethods.clickOnElement(hmPageMijnUniveElements.headerKlantenserviceClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownWhenClickedOnHeader(input: string) {
    switch (input) {
      case homePageEnum.ZOEKEN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.ZOEKEN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageMijnUniveElements.zoekenPageButtonInputElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.MIJN_UNIVE: {
        await genericMethods.verifyTextInElement(hmPageMijnUniveElements.headerMijnUniveParticulierTitleTextElement, hmPageMijnUniveElements.headerMijnUniveParticulierTitleText);
        await genericMethods.verifyTextInElement(hmPageMijnUniveElements.headerMijnUniveZorgTitleTextElement, hmPageMijnUniveElements.headerMijnUniveZorgTitleText);
        await genericMethods.verifyTextInElement(hmPageMijnUniveElements.headerMijnUniveZakelijkTitleTextElement, hmPageMijnUniveElements.headerMijnUniveZakelijkTitleText);
        break;
      }
      case verzekeringPaginasEnum.VERZEKERINGEN: {
        await genericMethods.verifyTextInElement(hmPageMijnUniveElements.headerMijnUniveVerzekeringenTitleTextElement, hmPageMijnUniveElements.headerMijnUniveVerzekeringenTitleText);
        break;
      }
      case homePageEnum.KLANTENSERVICE: {
        await genericMethods.verifyTextInElement(hmPageMijnUniveElements.headerMijnUniveKlantenserviceTitleTextElement, hmPageMijnUniveElements.headerMijnUniveKlantenserviceTitleText);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickFooterAndGoToPage(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.BEKIJK_DE_VEEL_GESTELDE_VRAGEN: {
        await genericMethods.clickOnElement(hmPageMijnUniveElements.footerBekijkDeVeelGesteldeVragenClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownWhenClickedOnFooter(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.BEKIJK_DE_VEEL_GESTELDE_VRAGEN: {
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.BEKIJK_DE_VEEL_GESTELDE_VRAGEN);
        await genericMethods.verifyUrlIs(url);
        await genericMethods.verifyTextInElement(hmPageMijnUniveElements.footerBekijkDeVeelGesteldeVragenTextElement, hmPageMijnUniveElements.footerBekijkDeVeelGesteldeVragenTitleText);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }



}
