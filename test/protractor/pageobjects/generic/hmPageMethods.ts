import {browser} from 'protractor';
import {
  aansprakelijkheidsVerzekerElements,
  aovZzpElements, autoVerzekeringElements, bedrijfsAutoVerzekeringElements,
  genericElements,
  genericMethods,
  getUrlUnive,
  hmPageElements,
  productPageElements,
  reisVerzekeringElements,
  situatieGewijzigdElements,
  zakelijkRechtsBijstandVerzekeringElements
} from '@support';
import {breadCrumbEnum, homePageEnum, verzekeringPaginasEnum, zakelijkHomePageEnum} from '@enum';

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
      case homePageEnum.WINKELS: {
        await genericMethods.clickOnElement(hmPageElements.homePageWinkelsButtonClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickMenuButtonAndGoToProductPage(input: string) {
    await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
    switch (input) {
      case homePageEnum.AUTOVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.menuPageAutoverzekeringClickElement);
        break;
      }
      case homePageEnum.WOONVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.menuPageWoonverzekeringClickElement);
        break;
      }
      case homePageEnum.CARAVANVERZEKERING: {
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
        await genericMethods.waitForElementIsVisible(hmPageElements.headerZoekenInputElement, browser.getPageTimeout);
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
      case homePageEnum.MIJN_UNIVE_ZAKELIJK: {
        await genericMethods.clickOnElement(hmPageElements.headerMijnUniveClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.headerMijnUniveZorgClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.headerMijnUniveParticulierClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.headerMijnUniveZakelijkClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.headerMijnUniveZakelijkClickElement);
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
      case homePageEnum.ONDERNEMERSSCAN: {
        await genericMethods.clickOnElement(hmPageElements.footerOndernemersScanClickElement);
        break;
      }
      case homePageEnum.KLANTENSERVICE_ZAKELIJK: {
        await genericMethods.verifyTextInElement(hmPageElements.footerKlantenServiceZakelijkTitleTextElement, hmPageElements.footerKlantenServiceZakelijkTitleText);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickButtonBusinessHomePageAndGoToPremieBerekenen(input: string) {
    switch (input) {
      case homePageEnum.BEDRIJFSAUTO: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessBedrijfsautoClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.homePageBusinessBedrijfsautoPremieBerekenenClickElement);
        break;
      }
      case homePageEnum.ZAKELIJKE_PERSONENAUTO: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessPersonenautoZakelijkClickElement);
        await genericMethods.clickOnElementShadowRoot(hmPageElements.homePageBusinessPersonenautoZakelijkPremieBerekenenClickElement);
        break;
      }
      case homePageEnum.ARBEIDSONGESCHIKTHEID: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessArbeidsongeschiktheidClickElement);
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessArbeidsongeschiktheidPremieBerekenenClickElement);
        break;
      }
      case homePageEnum.RECHTSBIJSTAND: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessRechtsbijstandClickElement);
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessRechtsbijstandPremieBerekenenClickElement);
        break;
      }
      case zakelijkHomePageEnum.AANSPRAKELIJKHEIDSVERZEKERING: {
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessAansprakelijkheidClickElement);
        await genericMethods.clickOnElement(hmPageElements.homePageBusinessAansprakelijkheidPremieBerekenenClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickBusinessMenuButtonAndGoToProductPage(input: string) {
    switch (input) {
      case homePageEnum.ZZP_ER: {
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
        await genericMethods.clickOnElement(hmPageElements.zakelijkMenuPageUniveZzpClickElement);
        break;
      }
      case homePageEnum.AGRARIER: {
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
        await genericMethods.clickOnElement(hmPageElements.zakelijkMenuPageUniveAgrarierClickElement);
        break;
      }
      case homePageEnum.GEBOUWEN: {
        await genericMethods.clickOnElement(hmPageElements.menuPageVerzekeringenButtonClickElement);
        await genericMethods.clickOnElement(hmPageElements.zakelijkMenuPageUniveGebouwenClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickMenuButtonAndGoToBusinessKlantservicePage(input: string) {
    switch (input) {
      case homePageEnum.AFSPRAAK_MAKEN_ZAKELIJK: {
        await genericMethods.clickOnElement(hmPageElements.menuPageKlantenserviceButtonClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarMijnUniveZakelijkButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarZakelijkKlantenserviceButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.zakelijkMenuPageKlantenserviceAfspraakMakenClickElement);
        break;
      }
      case homePageEnum.KLACHT_INDIENEN: {
        await genericMethods.clickOnElement(hmPageElements.menuPageKlantenserviceButtonClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarMijnUniveZakelijkButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarZakelijkKlantenserviceButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.zakelijkMenuPageKlantenserviceKlachtIndienenClickElement);
        break;
      }
      case homePageEnum.INLOGGEN: {
        await genericMethods.clickOnElement(hmPageElements.menuPageKlantenserviceButtonClickElement);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarMijnUniveZakelijkButtonClickElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.gaNaarZakelijkKlantenserviceButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(hmPageElements.zakelijkMenuPageKlantenserviceInloggenClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownOnBusinessKlantenservicePage(input: string) {
    switch (input) {
      case homePageEnum.AFSPRAAK_MAKEN_ZAKELIJK: {
        const url: string = getUrlUnive.getUrlUnive(homePageEnum.AFSPRAAK_MAKEN_ZAKELIJK);
        await genericMethods.verifyUrlContains(url);
        // await genericMethods.waitForElementIsVisible(hmPageElements.afspraakMakenBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.afspraakMakenH1TitleTextElement, hmPageElements.afspraakMakenTitleText);
        break;
      }
      case homePageEnum.KLACHT_INDIENEN: {
        const url: string = getUrlUnive.getUrlUnive(homePageEnum.KLACHT_INDIENEN);
        await genericMethods.verifyUrlContains(url);
        // await genericMethods.waitForElementIsVisible(hmPageElements.klachtIndienenBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.klachtIndienenH1TitleTextElement, hmPageElements.klachtIndienenH1TitleText);
        break;
      }
      case homePageEnum.INLOGGEN: {
        const url: string = getUrlUnive.getUrlUnive(homePageEnum.MIJN_UNIVE_ZAKELIJK);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveZakelijkUsernameInputElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveZakelijkPasswordInputElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveZakelijkSubmitButtonClickElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  async verifyElementIsShownOnBusinessProductPage(input: string) {
    switch (input) {
      case homePageEnum.ZZP_ER: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.ZZP_ER);
        await genericMethods.verifyUrlContains(url);
        // await genericMethods.waitForElementIsVisible(hmPageElements.zzpBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.zzpH2TextElement, hmPageElements.zzpH2Text);
        break;
      }
      case homePageEnum.AGRARIER: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.AGRARIER);
        await genericMethods.verifyUrlContains(url);
        // await genericMethods.waitForElementIsVisible(hmPageElements.agrariersBreadcrumbElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.agrarierH1TextElement, hmPageElements.agrarierH1Text);
        break;
      }
      case homePageEnum.GEBOUWEN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.GEBOUWEN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.GEBOUWENVERZEKERING, 3);
        await genericMethods.verifyTextInElement(hmPageElements.gebouwH2TextElement, hmPageElements.gebouwH2Text);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async verifyElementIsShownOnPremieBerekenenBusinessPage(input: string) {
    switch (input) {
      case homePageEnum.BEDRIJFSAUTO: {
        await genericMethods.verifyUrlContains(genericElements.bedrijfsAutoVerzekeringPp);
        await genericMethods.waitForElementIsVisible(bedrijfsAutoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.ZAKELIJKE_PERSONENAUTO: {
        await genericMethods.verifyUrlContains(genericElements.personenAutoVerzekeringZakelijk);
        await genericMethods.waitForElementIsVisible(autoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.ARBEIDSONGESCHIKTHEID: {
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.AOVZZP_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(aovZzpElements.sliderElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.RECHTSBIJSTAND: {
        await genericMethods.verifyUrlContains(genericElements.zakelijkRechtsBijstandVerzekeringPp);
        await genericMethods.waitForElementIsVisible(zakelijkRechtsBijstandVerzekeringElements.getCompanyDataButtonClickElement, browser.getPageTimeout);
        break;
      }
      case zakelijkHomePageEnum.AANSPRAKELIJKHEIDSVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING_PP);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyTextInElement(hmPageElements.zakelijkAansprakelijkheidsVerzekeringTextElement, hmPageElements.zakelijkAansprakelijkheidsVerzekeringText);
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
        // BREADCRUMBS css heeft andere naam op zorgpagina
        // await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        // await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ZORGVERZEKERING, 2);
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
        await genericMethods.verifyTextInElementShadowRoot(hmPageElements.zipcodePlaceTitleTextElement, hmPageElements.zipcodePlaceTitleText);
        await genericMethods.verifyTextInElementShadowRoot(hmPageElements.zipcodePlaceTableZwolleTextElement, 'Univé Zwolle');
        break;
      }
      case homePageEnum.KLANTENSERVICE: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.KLANTENSERVICE);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.KLANTENSERVICE, 2);
        await genericMethods.verifyTextInElement(hmPageElements.klantenServiceTitleTextElement, 'Waar kunnen we u mee helpen?');
        break;
      }
      case homePageEnum.ONDERNEMERSSCAN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.ONDERNEMERSSCAN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyTextInElement(hmPageElements.footerOndernemersScanH1TextElement, verzekeringPaginasEnum.ONDERNEMERSSCAN_TITLE);
        break;
      }
      case homePageEnum.KLANTENSERVICE_ZAKELIJK: {
        await genericMethods.verifyTextInElement(hmPageElements.footerKlantenServiceZakelijkTitleTextElement, hmPageElements.footerKlantenServiceZakelijkTitleText);
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
        const url: string = getUrlUnive.getUrlUnive(homePageEnum.ZOEKEN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.zoekenPageButtonInputElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.MIJN_UNIVE: {
        const url: string = getUrlUnive.getUrlUnive(homePageEnum.MIJN_UNIVE);
        await genericMethods.waitForElementIsPresent(hmPageElements.mijnUniveLoginTitleTextElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveEmailInputElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUnivePasswordInputElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.mijnUniveLoginTitleTextElement, hmPageElements.mijnUniveLoginTitleText);
        await genericMethods.verifyUrlContains(url);
        break;
      }
      case homePageEnum.MIJN_UNIVE_ZAKELIJK_HOMEPAGE: {
        const url: string = getUrlUnive.getUrlUnive(homePageEnum.MIJN_UNIVE_ZAKELIJK_HOMEPAGE);
        await genericMethods.waitForElementIsPresent(hmPageElements.mijnUniveZakelijkHomePageH4Text, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveZakelijkUsernameInputElement, browser.getPageTimeout);
        await genericMethods.waitForElementIsVisible(hmPageElements.mijnUniveZakelijkPasswordInputElement, browser.getPageTimeout);
        await genericMethods.verifyTextInElement(hmPageElements.mijnUniveLoginTitleTextElement, hmPageElements.mijnUniveLoginTitleText);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyTextInElement(hmPageElements.mijnUniveZakelijkHomePageH3TextElement, hmPageElements.mijnUniveZakelijkHomePageH4Text);
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
        const url: string = getUrlUnive.getUrlUnive(verzekeringPaginasEnum.AANSPRAKELIJKHEIDSVERZEKERING_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(aansprakelijkheidsVerzekerElements.familyCompositionOnePersonElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.ZORGVERZEKERING: {
        await browser.sleep(500);
        const url: string = getUrlUnive.getUrlUnive(verzekeringPaginasEnum.ZORGVERZEKERING);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(hmPageElements.zorgPremieBerekenPageCheckElement, browser.getPageTimeout);
        break;
      }
      case homePageEnum.REISVERZEKERING: {
        const url: string = getUrlUnive.getUrlUnive(verzekeringPaginasEnum.DOORLOPENDE_REISVERZEKERING);
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
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.AUTOVERZEKERING_PRODUCT_PAGE_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisibleShadowRoot(productPageElements.autoverzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.AUTOVERZEKERING_PAT, 2);

        break;
      }
      case homePageEnum.WOONVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.WOONVERZEKERING_PRODUCT_PAGE_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(productPageElements.woonverzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.WOONVERZEKERING_PAT, 2);
        break;
      }
      case homePageEnum.CARAVANVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.CARAVANVERZEKERING_PP);
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
        await genericMethods.clickOnTAB('[class="button button-primary"]');
        // BREADCRUMBS css heeft andere naam op zorgpagina
        // await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        // await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ZORGVERZEKERING, 2);
        await genericMethods.verifyTextInElement(hmPageElements.zorgNotaDeclarerenTitleTextElement, hmPageElements.zorgNotaDeclarerenTitleText);
        break;
      }
      case homePageEnum.UNIVE_ALARMCENTRALE: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.UNIVE_ALARMCENTRALE);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.KLANTENSERVICE, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ALARMCENTRALE, 3);
        await genericMethods.verifyTextInElement(hmPageElements.alarmCentraleTitleTextElement, hmPageElements.alarmCentraleTitleText);
        break;
      }
      case homePageEnum.VERZEKERING_WIJZIGEN: {
        const url: string = await getUrlUnive.getUrlUnive(homePageEnum.VERZEKERING_WIJZIGEN);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.KLANTENSERVICE, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.WIJZIGINGEN_DOORGEVEN, 3);
        await genericMethods.verifyTextInElementIgnoreCase(situatieGewijzigdElements.situatieGewijzigdHeaderElement, verzekeringPaginasEnum.WIJZIGINGEN_DOORGEVEN);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
