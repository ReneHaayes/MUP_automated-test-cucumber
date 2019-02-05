import {browser} from "protractor";
import {
  additionalOption,
  hmPageWoonVerzekeringEnum,
  inhabited,
  kindStraw,
  superficiesAndContents,
  totalSurface,
  wallHouse
} from "../enum/woonVerzekeringEnum";
import {GenericMethods} from "../generic/genericMethods";
import {GenericElements} from "../generic/genericElements";
import {WoonVerzekeringElements} from "./woonVerzekeringElements";
import {genericEnum} from "../enum/genericEnum";
import {HmPageElements} from "../generic/hmPageElements";
import {PersonaData} from "../persona/persona";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let woonVerzekeringElements: WoonVerzekeringElements = new WoonVerzekeringElements();
let hmPageElements: HmPageElements = new HmPageElements();
let personaData: PersonaData = new PersonaData();


export class WoonVerzekeringMethods {


  async clickWallHouse(input: string) {
    switch (input) {
      case wallHouse.STONE: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseStoneElement);
        break;
      }
      case wallHouse.WOOD: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseWoodElement);
        break;
      }
      case wallHouse.DIFFERENT: {
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
      case totalSurface.SMALLER_THEN_80: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen80SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_100: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen100SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_120: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen120SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_140: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen140SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_160: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen160SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_180: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen180SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_200: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen200SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_250: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen250SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_300: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen300SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_350: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen350SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_400: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen400SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_450: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen450SelectElement);
        break;
      }
      case totalSurface.SMALLER_THEN_500: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen500SelectElement);
        break;
      }
      case totalSurface.BIGGER_THEN_500: {
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
        await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceBiggerThen500SelectElement);
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
        await genericMethods.typeText(hmPageElements.woonVerzekeringHouseNumberAddingElement, personaData.getPersonaHouseNumberAddition(persona));
        await genericMethods.clickOnElement(hmPageElements.woonVerzekeringButtonElement);
        break;
      }
      case hmPageWoonVerzekeringEnum.HMPAGE_NOT_FILLED: {
        await genericMethods.clickOnElement(hmPageElements.homePageWoonverzekeringElement);
        await genericMethods.clickOnElement(hmPageElements.woonVerzekeringButtonElement);
        break;
      }
      case hmPageWoonVerzekeringEnum.PPAGE_NOT_FILLED: {
        await genericMethods.clickOnElement(hmPageElements.woonVerzekeringButtonElement);
        break;
      }
      case hmPageWoonVerzekeringEnum.PPAGE_WOONVERZ_FILLED: {
        await genericMethods.typeText(hmPageElements.woonVerzekeringZipCodeElement, personaData.getPersonaZipcode(persona));
        await genericMethods.typeText(hmPageElements.woonVerzekeringHouseNumberElement, personaData.getPersonaHouseNumber(persona));
        await genericMethods.typeText(hmPageElements.woonVerzekeringHouseNumberAddingElement, personaData.getPersonaHouseNumberAddition(persona));
        await genericMethods.clickOnElement(hmPageElements.woonVerzekeringButtonElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async checkWoonVerzekeringPage(input: string) {
    switch (input) {
      case genericEnum.DO: {
        const assertionTekstDo: string = 'Uw woning betreft een Tussenwoning aan Zandweerdsweg 91 in DEVENTER';
        await genericMethods.verifyTextInElement(hmPageElements.woonVerzekeringCheckTekstStepTwoElement, assertionTekstDo);
        break;
      }
      case genericEnum.DONT: {
        const assertionTekstDont: string = 'Te verzekeren woning';
        await genericMethods.verifyTextInElement(hmPageElements.woonVerzekeringCheckTekstStepOneElement, assertionTekstDont);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
