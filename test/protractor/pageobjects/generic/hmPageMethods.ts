import {GenericMethods} from "./genericMethods";
import {HmPageElements} from "./hmPageElements";
import {homePageEnum} from "../enum/woonVerzekeringEnum";
import {AansprakelijkheidsVerzekerElements} from "../particulier/rechtVerzekeringen/aansprakelijkheidsVerzekerElements";
import {browser} from "protractor";
import {ReisVerzekeringElements} from "../particulier/vrijeTijdsVerzekeringen/reisVerzekeringElements";
import {ProductPageElements} from "./productPageElements";
import {GetUrlUnive} from "./getUrlUnive";
import {environmentUrl} from "../enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let hmPageElements: HmPageElements = new HmPageElements();
let aansprakelijkheidsVerzekerElements: AansprakelijkheidsVerzekerElements = new AansprakelijkheidsVerzekerElements();
let reisVerzekeringElements: ReisVerzekeringElements = new ReisVerzekeringElements();
let productPageElements: ProductPageElements = new ProductPageElements();
let getUrlUnive: GetUrlUnive = new GetUrlUnive();

export class HmPageMethods {

  async clickButtonHomePageAndGoToPremieBerekenen(input: string) {
    switch (input) {
      case homePageEnum.AANSPRAKELIJKHEIDSVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.homePageAansprakelijkheidsverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.berekenUwPremieAansprakelijkheidsVerzekeringClickButton);
        break;
      }
      case homePageEnum.ZORGVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.homePageZorgverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.berekenUwPremieZorgVerzekeringClickButton);
        break;
      }
      case homePageEnum.REISVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.homePageReisverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.berekenUwPremieReisVerzekeringClickButton);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickMenuButtonAndGoToProductPage(input: string) {
    switch (input) {
      case homePageEnum.AUTOVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
        await genericMethods.clickOnElement(hmPageElements.menuPageAutoverzekeringClickElement);
        break;
      }
      case homePageEnum.WOONVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
        await genericMethods.clickOnElement(hmPageElements.menuPageWoonverzekeringClickElement);
        break;
      }
      case homePageEnum.CARAVANVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
        await genericMethods.clickOnElement(hmPageElements.menuPageCaravanverzekeringClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickMenuButtonAndGoToKlantservicePage(input: string) {
    switch (input) {
      case homePageEnum.ZORGNOTA_DECLAREREN: {
        await genericMethods.clickOnElement(hmPageElements.menuPageKlantenserviceButtonClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarKlantenserviceButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarMijnUniveButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.bekijkAlleContactMogelijkhedenButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.menuPageZorgnotaDeclarerenClickElement);
        break;
      }
      case homePageEnum.VERZEKERING_WIJZIGEN: {
        await genericMethods.clickOnElement(hmPageElements.menuPageKlantenserviceButtonClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarKlantenserviceButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarMijnUniveButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.bekijkAlleContactMogelijkhedenButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringWijzigenClickElement);
        break;
      }
      case homePageEnum.UNIVE_ALARMCENTRALE: {
        await genericMethods.clickOnElement(hmPageElements.menuPageKlantenserviceButtonClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarKlantenserviceButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarMijnUniveButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.bekijkAlleContactMogelijkhedenButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.menuPageUniveAlarmcentraleClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickHeaderAndGoToPage(input: string) {
    switch (input) {
      case homePageEnum.ZOEKEN: {
        await genericMethods.clickOnElement(hmPageElements.headerZoekenInputElement);
        await genericMethods.typeText(hmPageElements.headerZoekenInputElement, homePageEnum.ZOEKEN);
        await genericMethods.clickOnElement(hmPageElements.zoekenPageButtonClickElement);
        break;
      }
      case homePageEnum.MIJN_UNIVE: {
        await genericMethods.clickOnElement(hmPageElements.headerMijnUniveClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.headerMijnUniveZorgClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.headerMijnUniveParticulierClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.headerMijnUniveZakelijkClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.headerMijnUniveParticulierClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickFooterAndGoToPage(input: string) {
    switch (input) {
      case homePageEnum.ZORGNOTA_DECLAREREN: {
        await genericMethods.clickOnElement(hmPageElements.footerZorgNotaDeclarenClickElement);
        break;
      }
      case homePageEnum.OVER_ONS: {
        await genericMethods.clickOnElement(hmPageElements.footerOverUniveClickElement);
        break;
      }
      case homePageEnum.ZIPCODE_PLACE: {
        await genericMethods.typeText(hmPageElements.footerZipcodeInputElement, 'zwolle');
        await genericMethods.clickOnElement(hmPageElements.footerZipcodeClickElement);
        break;
      }
      case homePageEnum.KLANTENSERVICE: {
        await genericMethods.clickOnElement(hmPageElements.footerKlantenServiceClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownWhenClickedOnFooter(input: string) {
    switch (input) {
      case homePageEnum.ZORGNOTA_DECLAREREN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.ZORGNOTA_DECLAREREN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.zorgNotaDeclarerenBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.zorgNotaDeclarerenTitleTextElement, hmPageElements.zorgNotaDeclarerenTitleText);
        break;
      }
      case homePageEnum.OVER_ONS: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.OVER_ONS);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.overUniveBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.overUniveTitleTextElement, hmPageElements.overUniveTitleText);
        break;
      }
      case homePageEnum.ZIPCODE_PLACE: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.ZIPCODE_PLACE);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyTextInElement(hmPageElements.zipcodePlaceTitleTextElement, hmPageElements.zipcodePlaceTitleText);
        break;
      }
      case homePageEnum.KLANTENSERVICE: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.KLANTENSERVICE);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.klantenServiceBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.klantenServiceTitleTextElement, hmPageElements.klantenServiceTitleText);
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
        await genericMethods.waitForElementIsVisible(hmPageElements.zoekenPageButtonInputElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.MIJN_UNIVE: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.MIJN_UNIVE);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveEmailInputElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUnivePasswordInputElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.mijnUniveLoginTitleTextElement, hmPageElements.mijnUniveLoginTitleText);
        await genericMethods.verifyUrlContains(url);
        break;
      }

      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownOnPremieBerekenenPage(input: string) {
    switch (input) {
      case homePageEnum.AANSPRAKELIJKHEIDSVERZEKERING: {
        const url: string = getUrlUnive.getUrlUnive(environmentUrl.AANSPRAKELIJKHEIDSVERZEKERING_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(aansprakelijkheidsVerzekerElements.familyCompositionOnePersonElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.ZORGVERZEKERING: {
        const url: string = getUrlUnive.getUrlUnive(environmentUrl.ZORGVERZEKERING);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.zorgPremieBerekenPageCheckElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.REISVERZEKERING: {
        const url: string = getUrlUnive.getUrlUnive(environmentUrl.DOORLOPENDEREISVERZEKERING);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(reisVerzekeringElements.whoToInsureMySelfClickElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownOnProductPage(input: string) {
    switch (input) {
      case homePageEnum.AUTOVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(environmentUrl.AUTOVERZEKERING_PRODUCT_PAGE_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(productPageElements.autoverzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(productPageElements.autoVerzekeringBreadcrumTextElement, homePageEnum.AUTOVERZEKERING);

        break;
      }
      case homePageEnum.WOONVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(environmentUrl.WOONVERZEKERING_PRODUCT_PAGE_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(productPageElements.woonverzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(productPageElements.woonVerzekeringBreadcrumTextElement, homePageEnum.WOONVERZEKERING);
        break;
      }
      case homePageEnum.CARAVANVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(environmentUrl.CARAVANVERZEKERING_PP);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyTextInElement(productPageElements.caravanVerzekeringBreadcrumTextElement, productPageElements.caravanVerzekeringTextToVerify);
        await genericMethods.verifyTextInElement(productPageElements.caravanVerzekeringH2Title, homePageEnum.CARAVANVERZEKERING);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownOnKlantenservicePage(input: string) {
    switch (input) {
      case homePageEnum.ZORGNOTA_DECLAREREN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.ZORGNOTA_DECLAREREN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.zorgNotaDeclarerenBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.zorgNotaDeclarerenTitleTextElement, hmPageElements.zorgNotaDeclarerenTitleText);
        break;
      }
      case homePageEnum.UNIVE_ALARMCENTRALE: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.UNIVE_ALARMCENTRALE);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.alarmCentraleBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.alarmCentraleTitleTextElement, hmPageElements.alarmCentraleTitleText);
        break;
      }
      case homePageEnum.VERZEKERING_WIJZIGEN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.VERZEKERING_WIJZIGEN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveEmailInputElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUnivePasswordInputElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.mijnUniveLoginTitleTextElement, hmPageElements.mijnUniveLoginTitleText);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
