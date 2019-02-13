import {browser} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {BedrijfsAutoVerzekeringElements} from "./bedrijfsAutoVerzekeringElements";
import {BusinessCarWithLicensePlate} from "../vehicles/businessCarWithLicensePlate";
import {basisDekkingEnum, legalEnum, yearlyMileageEnum} from "../enum/autoVerzekeringEnum";
import {GenericElements} from "../generic/genericElements";
import {NawElements} from "../generic/nawElements";
// import {AutoVerzekeringElements} from "./autoVerzekeringElements";

let genericMethods: GenericMethods = new GenericMethods();
let bedrijfsAutoVerzekeringElements: BedrijfsAutoVerzekeringElements = new BedrijfsAutoVerzekeringElements();
let businessCarWithLicensePlate: BusinessCarWithLicensePlate = new BusinessCarWithLicensePlate();
let genericElements: GenericElements = new GenericElements();
let nawElements: NawElements = new NawElements();

// let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();

export class BedrijfsAutoVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(bedrijfsAutoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
    await genericMethods.typeText(bedrijfsAutoVerzekeringElements.licensePlateElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(bedrijfsAutoVerzekeringElements.licensePlateElement);
    await genericMethods.waitForElementIsVisibleWithXpath(bedrijfsAutoVerzekeringElements.brandElementXpath +
      '[contains(text(),"' + businessCarWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async clickOnYearlyMileage(input: string) {
    switch (input) {
      case yearlyMileageEnum.TOT_12000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileageTot12000Element);
        break;
      }
      case yearlyMileageEnum._12000_TOT_20000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileage12000tot20000Element);
        break;
      }
      case yearlyMileageEnum._20000_TOT_25000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileage20000tot25000Element);
        break;
      }
      case yearlyMileageEnum._25000_TOT_35000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileage25000tot35000Element);
        break;
      }
      case yearlyMileageEnum.MORE_THEN_35000: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.yearlyMileageMoreThen35000Element);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  //TODO: The sidebar in the premie page is not working correctly, when the sidebar is working again the commented rules can be uncommented.
  async clickOnBasisDekking(input: string) {
    switch (input) {
      case basisDekkingEnum.WA: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.waElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        // await genericMethods.waitForElementIsPresentWithXpath(
        //   bedrijfsAutoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.WA_PLUS: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.waPlusElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        // await genericMethods.waitForElementIsPresentWithXpath(
        //   bedrijfsAutoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
        break;
      }
      case basisDekkingEnum.ALL_RISK: {
        await genericMethods.clickOnElement(bedrijfsAutoVerzekeringElements.allRiskElement);
        await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
        // await genericMethods.waitForElementIsPresentWithXpath(
        //   bedrijfsAutoVerzekeringElements.sideBarElement + '[contains(text(),"' + bedrijfsAutoVerzekeringElements.sideBarAllRisk + '")]', browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectLegal(input: string) {
    switch (input) {
      case legalEnum.BUITENLANDS_RECHTSVORM: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalBuitenalandseRechtsvormSelectElement);
        break;
      }
      case legalEnum.BV: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalBVSelectElement);
        break;
      }
      case legalEnum.COW: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalCOWSelectElement);
        break;
      }
      case legalEnum.CV: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalCVSelectElement);
        break;
      }
      case legalEnum.EENMANSZAAK: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalEenmanszaakSelectElement);
        break;
      }
      case legalEnum.MAATSCHAP: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalMaatschapSelectElement);
        break;
      }
      case legalEnum.NV: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalNVSelectElement);
        break;
      }
      case legalEnum.STICHTING: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalStichtingSelectElement);
        break;
      }
      case legalEnum.VMVR: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalVMVRSelectElement);
        break;
      }
      case legalEnum.VOF: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalVOFSelectElement);
        break;
      }
      case legalEnum.VZVR: {
        await genericMethods.selectInDropdown(nawElements.companyDataLegalSelectElement, nawElements.companyDataLegalVZVRSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
