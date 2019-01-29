import {browser} from 'protractor';
import {AutoVerzekeringElements} from "./autoVerzekeringElements";
import {GenericMethods} from "../generic/genericMethods";
import {GenericElements} from "../generic/genericElements";
import {CarWithLicensePlate} from "../car/carWithLicensePlate";
import {yesNo} from "../enum/enum";

let genericMethods: GenericMethods = new GenericMethods();
let genericElements: GenericElements = new GenericElements();
let autoVerzekeringElements: AutoVerzekeringElements = new AutoVerzekeringElements();

let carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();

export class AutoVerzekeringMethods {

  async enterLicensePlate(licensePlate: string) {
    await genericMethods.waitForElementIsVisible(autoVerzekeringElements.licensePlateElement, browser.getPageTimeout);
    await genericMethods.typeText(autoVerzekeringElements.licensePlateElement, licensePlate);
    await browser.sleep(500);
    await genericMethods.clickOnTAB(autoVerzekeringElements.licensePlateElement);
    await genericMethods.waitForElementIsVisibleWithXpath(autoVerzekeringElements.brandElementXpath + '[contains(text(),"' + carWithLicensePlate.getCarBrandName(licensePlate) + '")]', browser.getPageTimeout);
  }

  async selectYearlyMileage(yearlyMileage: string) {
    if (yearlyMileage === 'tot12000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYearTot12000km);
    } else if (yearlyMileage === '12000tot20000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYear12000tot20000);
    } else if (yearlyMileage === '20000tot25000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYear20000tot25000);
    } else if (yearlyMileage === '25000tot35000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYear25000tot35000);
    } else if (yearlyMileage === 'meerDan25000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.driveInYearElement, autoVerzekeringElements.driveInYearMeerDan25000);
    } else {
      throw new Error('The input you have entered selectYearlyMileage: "" ' + yearlyMileage + ' "" is not recognized as a command');
    }
  }

  async selectIfYouAlreadyHaveACarAtUnive(alreadyMember: string) {
    await genericMethods.waitForElementIsVisible(autoVerzekeringElements.alreadyInsuredCarTrue, browser.getPageTimeout);
    if (alreadyMember === yesNo.YES) {
      await genericMethods.clickOnElement(autoVerzekeringElements.alreadyInsuredCarTrue)
    } else if (alreadyMember === yesNo.NO) {
      await genericMethods.clickOnElement(autoVerzekeringElements.alreadyInsuredCarFalse)
    } else {
      throw new Error('The input you have entered: "" ' + alreadyMember + ' "" is not recognized as a command');
    }
  }

  async selectCarAcc(carAcc: string) {
    if (carAcc === 'autoAccTm1000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.autoAccElement, autoVerzekeringElements.autoAccTm1000);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarCarAcc1000 + '")]', browser.getPageTimeout);
    } else if (carAcc === 'autoAccTm5000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.autoAccElement, autoVerzekeringElements.autoAccTm5000);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarCarAcc5000 + '")]', browser.getPageTimeout);
    } else if (carAcc === 'autoAccTm10000') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.autoAccElement, autoVerzekeringElements.autoAccTm10000);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarCarAcc10000 + '")]', browser.getPageTimeout);
    } else {
      throw new Error('The input you have entered selectCarAcc: "" ' + carAcc + ' "" is not recognized as a command');
    }
  }

  async selectOwnRisk(ownRisk: string) {
    if (ownRisk === 'geenEigenRisico') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRiskGeenEigenRisico);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarGeenEigenRisico + '")]', browser.getPageTimeout);
    } else if (ownRisk === 'ownRisk100') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk100);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarOwnRisk100 + '")]', browser.getPageTimeout);
    } else if (ownRisk === 'ownRisk250') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk250);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarOwnRisk250 + '")]', browser.getPageTimeout);
    } else if (ownRisk === 'ownRisk500') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.ownRiskElement, autoVerzekeringElements.ownRisk500);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarOwnRisk500 + '")]', browser.getPageTimeout);
    } else {
      throw new Error('The input you have entered selectOwnRisk: "" ' + ownRisk + ' "" is not recognized as a command');
    }
  }

  async clickOnBasisDekking(basisDekking: string) {
    if (basisDekking === 'wa') {
      await genericMethods.clickOnElement(autoVerzekeringElements.waElement);
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWa + '")]', browser.getPageTimeout);
    } else if (basisDekking === 'waPlus') {
      await genericMethods.clickOnElement(autoVerzekeringElements.waPlusElement);
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarWaPlus + '")]', browser.getPageTimeout);
    } else if (basisDekking === 'allRisk') {
      await genericMethods.clickOnElement(autoVerzekeringElements.allRiskElement);
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarAllRisk + '")]', browser.getPageTimeout);
    } else {
      throw new Error('The input you have entered clickOnBasisDekking: "" ' + basisDekking + ' "" is not recognized as a command');
    }
  }

  async clickOnAanvullendeOpties(aanvullendeOpties: string) {
    if (aanvullendeOpties === 'Inzittendenverzekering') {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElements.inzittendenVerzekering);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarInzittendenVerzekering + '")]', browser.getPageTimeout);
    } else if (aanvullendeOpties === 'pechHulpNl') {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpNl);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
    } else if (aanvullendeOpties === 'pechHulpAbroad') {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpNl);
      await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpAbroad);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
    } else if (aanvullendeOpties === 'pechHulpAbroadAndNl') {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpNl);
      await genericMethods.clickOnElement(autoVerzekeringElements.pechHulpAbroadAndNl);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarPechHulp + '")]', browser.getPageTimeout);
    } else if (aanvullendeOpties === 'rechtsHulpVerkeer') {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElements.rechtsHulpVerkeer);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarRechtsHulpVerkeer + '")]', browser.getPageTimeout);
    } else if (aanvullendeOpties === 'eigenKeuzeSchadeHerstelBedrijf') {
      await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
      await genericMethods.clickOnElement(autoVerzekeringElements.eigenKeuzeSchadeHerstelBedrijf);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarHerstelBedrijf + '")]', browser.getPageTimeout);
    } else {
      throw new Error('The input you have entered clickOnAanvullendeOpties: "" ' + aanvullendeOpties + ' "" is not recognized as a command');
    }
  }

  async selectTotalPremie(totalPremie: string) {
    if (totalPremie === 'monthly') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.totalPremieSelectionElement, autoVerzekeringElements.totalPremieSelectionMonth);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarTotalPremieMonthly + '")]', browser.getPageTimeout);
    } else if (totalPremie === 'annual') {
      await genericMethods.selectInDropdown(autoVerzekeringElements.totalPremieSelectionElement, autoVerzekeringElements.totalPremieSelectionAnnual);
      await genericMethods.waitForElementIsPresentWithXpath(autoVerzekeringElements.sideBarElement + '[contains(text(),"' + autoVerzekeringElements.sideBarTotalPremieAnnual + '")]', browser.getPageTimeout);
    } else {
      throw new Error('The input you have entered selectTotalPremie: "" ' + totalPremie + ' "" is not recognized as a command');
    }
  }
}
