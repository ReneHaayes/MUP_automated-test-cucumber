import {browser} from "protractor";
import {genericElements,
  genericMethods,
  hmPageElements,
  personaData,
  woonVerzekeringElements
} from "@support";
import {
  additionalOption,
  genericEnum,
  hmPageWoonVerzekeringEnum,
  inhabited,
  kindStraw,
  materialEnum, superficiesAndContents,
  totalSurface
} from "@enum";

export class WoonVerzekeringMethods {

  async clickWallHouse(input: string) {
    switch (input) {
      case materialEnum.STONE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseStoneElement);
        break;
      }
      case materialEnum.WOOD: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseWoodElement);
        break;
      }
      case materialEnum.DIFFERENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseDifferentElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickStrawRoofing(input: string) {
    switch (input) {
      case kindStraw.KUNSTRIET: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectKunstRietElement);
        break;
      }
      case kindStraw.SCHROEFDAK: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectRietenSchroefdakElement);
        break;
      }
      case kindStraw.TRADITIONEEL_NIET_ONDERSCHOTEN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectTraditioneelNietOnderschotenElement);
        break;
      }
      case kindStraw.TRADITIONEEL_ONDERSCHOTEN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectTraditioneelOnderschotenElement);
        break;
      }
      case genericEnum.UNKNOWN: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectUnknownElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOutHouse(input: string) {
    switch (input) {
      case totalSurface.SMALLER_THAN_80: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan80SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_100: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan100SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_120: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan120SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_140: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan140SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_160: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan160SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_180: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan180SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_200: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan200SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_250: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan250SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_300: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan300SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_350: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan350SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_400: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan400SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_450: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan450SelectElement);
        break;
      }
      case totalSurface.SMALLER_THAN_500: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerthan500SelectElement);
        break;
      }
      case totalSurface.BIGGER_THAN_500: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceBiggerthan500SelectElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for clickWallHouse is not recognized as a command');
      }
    }
  }

  async clickOwner(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.ownerHouseSelectElement, woonVerzekeringElements.ownerHouseSelectNoElement);
        break;
      }
      case genericEnum.TEMP: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.ownerHouseSelectElement, woonVerzekeringElements.ownerHouseSelectTempElement);
        break;
      }
      case genericEnum.TOTAL: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.ownerHouseSelectElement, woonVerzekeringElements.ownerHouseSelectTotalElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickAdditionalOption(input: string) {
    switch (input) {
      case additionalOption.BUSINESS_USE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsBusinessUse);
        break;
      }
      case additionalOption.RECREATIONAL_USE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsRecreationUse);
        break;
      }
      case additionalOption.MONUMENT: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsMonument);
        break;
      }
      case additionalOption.CANAL: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsCanal);
        break;
      }
      case additionalOption.ROOM_USE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsRoomUse);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickIfInhabited(input: string) {
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.inhabitedYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.inhabitedNoElement);
        break;
      }
      case inhabited.WITHIN_3_MONTHS: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.inhabitedWithinThreeMontsElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickSuperficiesAndContents(input: string) {
    switch (input) {
      case superficiesAndContents.SUPERFICIES_AND_CONTENTS: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.premieSuperficiesAndContentsElement);
        break;
      }
      case superficiesAndContents.CONTENTS: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.premieContentsElement);
        break;
      }
      case superficiesAndContents.SUPERFICIES: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.premieSuperficiesElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clickOnWoonverzekering(input: string, persona: string) {
    switch (input) {
      case hmPageWoonVerzekeringEnum.HMPAGE_WOONVERZEKERING_FILLED: {
        await genericMethods.clickOnElement(hmPageElements.homePageWoonverzekeringElement);
        await genericMethods.typeText(hmPageElements.woonVerzekeringZipCodeElement, personaData.getPersonaZipcode(persona));
        await genericMethods.typeText(hmPageElements.woonVerzekeringHouseNumberElement, personaData.getPersonaHouseNumber(persona));
        await genericMethods.clickOnElement(hmPageElements.woonVerzekeringButtonElement);
        break;
      }
      case hmPageWoonVerzekeringEnum.HMPAGE_NOT_FILLED: {
        await genericMethods.clickOnElement(hmPageElements.homePageWoonverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.woonVerzekeringButtonElement);
        break;
      }
      case hmPageWoonVerzekeringEnum.PPAGE_NOT_FILLED: {
        await genericMethods.clickOnElement(hmPageElements.woonWidgetButtonProductPageElement);
        break;
      }
      case hmPageWoonVerzekeringEnum.PPAGE_WOONVERZ_FILLED: {
        await genericMethods.typeText(hmPageElements.woonVerzekeringZipCodeElement, personaData.getPersonaZipcode(persona));
        await genericMethods.typeText(hmPageElements.woonVerzekeringHouseNumberElement, personaData.getPersonaHouseNumber(persona));
        await genericMethods.clickOnElement(hmPageElements.woonWidgetButtonProductPageElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkWoonVerzekeringPage(input: string) {
    switch (input) {
      case genericEnum.WILL: {
        const assertionTekstDo = 'Uw woning betreft een Tussenwoning aan Zandweerdsweg 91 in DEVENTER';
        await genericMethods.verifyTextInElement(hmPageElements.woonVerzekeringCheckTekstStepTwoElement, assertionTekstDo);
        break;
      }
      case genericEnum.WONT: {
        const assertionTekstDont = 'Te verzekeren woning';
        await genericMethods.verifyTextInElement(hmPageElements.woonVerzekeringCheckTekstStepOneElement, assertionTekstDont);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
