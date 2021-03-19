import {
  genericMethods,
  zakelijkAansprakelijkheidsVerzekeringElements,
  zzpGoedBeterBestElements,
} from '@support';
import {genericEnum,
  toolsEnum
} from '@enum';
import {browser
} from 'protractor';

export class ZakelijkAansprakelijkheidsVerzekeringMethods {

  async selectTools(input: string) {
    switch (input) {
      case toolsEnum.VAARTUIGEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsVaartuigenSelectElement);
        break;
      }
      case toolsEnum.HEISTELLINGEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsHeistellingenSelectElement);
        break;
      }
      case toolsEnum.LOCOMOTIEVEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsLocomotievenSelectElement);
        break;
      }
      case toolsEnum.HIJSKRANEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsHijskranenSelectElement);
        break;
      }
      case toolsEnum.LIFTEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsLiftenSelectElement);
        break;
      }
      case toolsEnum.BOKKEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsBokkenSelectElement);
        break;
      }
      case toolsEnum.LAADBRUGGEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsLaadbruggenSelectElement);
        break;
      }
      case toolsEnum.SMALSPOOR: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsSmalspoorSelectElement);
        break;
      }
      case toolsEnum.OVERIG: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsOverigSelectElement);
        break;
      }
      case toolsEnum.GEEN: {
        await genericMethods.selectInDropdown(zakelijkAansprakelijkheidsVerzekeringElements.toolsSelectElement, zakelijkAansprakelijkheidsVerzekeringElements.toolsGeenSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  async workOutsideNetherlands(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.outsideNetherlandsNoClickElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsideNetherlandsYesClickElement);

        // geleend van ZZP pakket
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.workMainlyAbroadYesElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.countriesBeLuxDuElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.countriesOtherInEuropeElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.countriesOutsideEuropeElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationWorkAbroadElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsideNetherlandsNoClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async clientInSpecificSector(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.clientsInFollowingSectorsNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.clientsInFollowingSectorsYesElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.clientsInFollowingSectorsNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async demolishBuildings(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.demolishBuildingsNoClickElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.demolishBuildingsYesClickElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.demolishBuildingsNoClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async outsourceToZzp(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.outsourceToZzpNoClickElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsourceToZzpYesClickElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.outsourceToZzpNoClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async workWithAsbestos(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.workingWithAsbestNoClickElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workingWithAsbestYesClickElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workingWithAsbestNoClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async putUpScaffolding(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.scaffoldingNoClickElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.scaffoldingYesClickElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.scaffoldingNoClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async useSpecificEquipment(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.useSpecificEquipmentDuringWorkNoClickElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.useSpecificEquipmentDuringWorkYesClickElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.useSpecificEquipmentDuringWorkNoClickElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async workOnlyInPrivateSector(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.workOnlyInPrivateSectorNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workOnlyInPrivateSectorYesElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.workOnlyInPrivateSectorNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async heavyConstructionWork(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.heavyConstructionWorkNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.heavyConstructionWorkYesElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.heavyConstructionWorkNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async riskFreeThreeYearsPrior(input: string) {
    await genericMethods.waitForElementIsVisible(zakelijkAansprakelijkheidsVerzekeringElements.additionalRiskThreeYearsPriorNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.additionalRiskThreeYearsPriorYesElement);
        // tekst veld uitleg
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zakelijkAansprakelijkheidsVerzekeringElements.additionalRiskThreeYearsPriorNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
