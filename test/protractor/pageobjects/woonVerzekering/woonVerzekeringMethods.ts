import {browser} from "protractor";
import {additionalOption, inhabited, kindStraw, superficiesAndContents, totalSurface, wallHouse} from "../enum/woonVerzekeringEnum";
import {GenericMethods} from "../generic/genericMethods";
import {GenericElements} from "../generic/genericElements";
import {WoonVerzekeringElements} from "./woonVerzekeringElements";
import {genericEnum} from "../enum/genericEnum";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let woonVerzekeringElements: WoonVerzekeringElements = new WoonVerzekeringElements();


export class WoonVerzekeringMethods {


  async clickWallHouse(input: string) {
    if (input === wallHouse.STONE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseStoneElement);
    } else if (input === wallHouse.WOOD) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseWoodElement);
    } else if (input === wallHouse.DIFFERENT) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.wallHouseDifferentElement);
    } else {
      throw new Error('The input you have entered clickWallHouse: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickStrawRoofing(input: string) {
    if (input === kindStraw.KUNSTRIET) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectKunstRietElement)
    } else if (input === kindStraw.SCHROEFDAK) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectRietenSchroefdakElement)
    } else if (input === kindStraw.TRADITIONEEL_NIET_ONDERSCHOTEN) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectTraditioneelNietOnderschotenElement)
    } else if (input === kindStraw.TRADITIONEEL_ONDERSCHOTEN) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectTraditioneelOnderschotenElement)
    } else if (input === genericEnum.UNKNOWN) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.strawRoofingSelectKindStrawElement, woonVerzekeringElements.strawRoofingSelectUnknownElement)
    } else if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.strawRoofingNoElement);
    } else {
      throw new Error('The input you have entered clickStrawRoofing: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickOutHouse(input: string) {
    if (input === totalSurface.SMALLER_THEN_80) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen80SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_100) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen100SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_120) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen120SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_140) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen140SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_160) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen160SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_180) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen180SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_200) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen200SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_250) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen250SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_300) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen300SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_350) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen350SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_400) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen400SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_450) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen450SelectElement);
    } else if (input === totalSurface.SMALLER_THEN_500) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceSmallerThen500SelectElement);
    } else if (input === totalSurface.BIGGER_THEN_500) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.outHouseTotalSurfaceSelectElement, woonVerzekeringElements.outHouseTotalSurfaceBiggerThen500SelectElement);
    } else if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.outHouseNoElement);
    } else {
      throw new Error('The input you have entered clickOutHouse: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickOwner(input: string) {
    if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.ownerHouseSelectElement, woonVerzekeringElements.ownerHouseSelectNoElement);
    } else if (input === genericEnum.TEMP) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.ownerHouseSelectElement, woonVerzekeringElements.ownerHouseSelectTempElement);
    } else if (input === genericEnum.TOTAL) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseYesElement);
      await genericMethods.selectInDropdown(woonVerzekeringElements.ownerHouseSelectElement, woonVerzekeringElements.ownerHouseSelectTotalElement);
    } else if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.ownerHouseNoElement);
    } else {
      throw new Error('The input you have entered clickOwner: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickAdditionalOption(input: string) {
    if (input === additionalOption.BUSINESS_USE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsBusinessUse);
    } else if (input === additionalOption.RECREATIONAL_USE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsRecreationUse);
    } else if (input === additionalOption.MONUMENT) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsMonument);
    } else if (input === additionalOption.CANAL) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsCanal);
    } else if (input === additionalOption.ROOM_USE) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.additionalOptionsRoomUse);
    } else {
      throw new Error('The input you have entered clickAdditionalOption: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickIfInhabited(input: string) {
    if (input === genericEnum.YES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.inhabitedYesElement);
    } else if (input === genericEnum.NO) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.inhabitedNoElement);
    } else if (input === inhabited.WITHIN_3_MONTHS) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.inhabitedWithinThreeMontsElement);
    } else {
      throw new Error('The input you have entered clickIfInhabited: "" ' + input + ' "" is not recognized as a command');
    }
  }

  async clickSuperficiesAndContents(input: string) {
    if (input === superficiesAndContents.SUPERFICIES_AND_CONTENTS) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.premieSuperficiesAndContentsElement);
    } else if (input === superficiesAndContents.CONTENTS) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.premieContentsElement);
    } else if (input === superficiesAndContents.SUPERFICIES) {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(woonVerzekeringElements.premieSuperficiesElement);
    } else {
      throw new Error('The input you have entered clickSuperficiesAndContents: "" ' + input + ' "" is not recognized as a command');
    }
  }

}
