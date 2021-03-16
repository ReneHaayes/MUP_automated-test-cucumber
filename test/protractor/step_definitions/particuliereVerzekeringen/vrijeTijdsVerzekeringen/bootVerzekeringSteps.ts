import {When} from 'cucumber';
import {
  boatWithName,
  bootVerzekeringElements,
  bootVerzekeringMethods,
  genericElements,
  genericMethods,
  nawElements,
  personaData
} from '@support';
import {browser} from 'protractor';
import {typeBoatEnum} from '../../../pageobjects/enum/bootEnum';

When(/^I enter step one and click next on step two of bootverzekering with (.*)$/, async (boatName: string) => {
  await genericMethods.clickOnTAB(bootVerzekeringElements.typeOfBootSelectElement);
  await bootVerzekeringMethods.selectTypeOfBoat(boatWithName.getBoatType(boatName));
    if (boatWithName.getBoatType(boatName) === typeBoatEnum.MOTORBOOT) {
      genericMethods.clickOnElement(bootVerzekeringElements.boatHasCabin).then();
    } else if (boatWithName.getBoatType(boatName) === typeBoatEnum.ZEILBOOT) {
      genericMethods.clickOnElement(bootVerzekeringElements.boatHasCabin).then();
    } else { }
  await genericMethods.typeText(bootVerzekeringElements.boatValueInputElement, boatWithName.getBoatValue(boatName));
  await genericMethods.typeText(bootVerzekeringElements.purchaseDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(bootVerzekeringElements.lengthBoatInputElement, boatWithName.getBoatLength(boatName));
  await genericMethods.clickOnElement(bootVerzekeringElements.boatIsNewClickElement);
    if (boatWithName.getBoatType(boatName) === typeBoatEnum.SPEEDBOOT) {
      genericMethods.clickOnElement(bootVerzekeringElements.yesOtherInsurancesElement).then();
    } else if (boatWithName.getBoatType(boatName) === typeBoatEnum.CATAMARAN) {
      genericMethods.clickOnElement(bootVerzekeringElements.yesOtherInsurancesElement).then();
    } else {}
  await genericMethods.clickOnElement(bootVerzekeringElements.followBoatNoClickElement);
  await genericMethods.clickOnElement(bootVerzekeringElements.trailerNoClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.waitForElementIsPresent(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of bootverzekering for boat (.*)$/, async (boatName: string) => {
  await genericMethods.waitForElementIsPresent(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.typeText(bootVerzekeringElements.boatNameInputElement, boatWithName.getBoatName(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatBrandNameInputElement, boatWithName.getBoatBrandName(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatConstructionYearInputElement, boatWithName.getBoatConstructionYear(boatName));
  await bootVerzekeringMethods.selectMaterialBoat(boatWithName.getBoatMaterial(boatName));
  genericMethods.clickOnElement(bootVerzekeringElements.engineTypeInsideClickElement).then();
      if (boatWithName.getBoatType(boatName) === typeBoatEnum.SPEEDBOOT) {
        genericMethods.clickOnElement(bootVerzekeringElements.engineYesSelectElement).then();
      } else if (boatWithName.getBoatType(boatName) === typeBoatEnum.CATAMARAN) {
        genericMethods.clickOnElement(bootVerzekeringElements.engineYesSelectElement).then();
      } else { }
      if (boatWithName.getBoatType(boatName) === typeBoatEnum.MOTORBOOT) {
        genericMethods.clickOnElement(bootVerzekeringElements.engineTypeOutsideClickElement).then();
        await genericMethods.clickOnElement(bootVerzekeringElements.oneEngineSelectElement);
      } else { }
  await genericMethods.typeText(bootVerzekeringElements.boatMotorBrandnameInputElement, boatWithName.getBoatMotorBrandName(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatMotorNumberInputElement, boatWithName.getBoatMotorNumber(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatMotorConstructionYearInputElement, boatWithName.getBoatMotorConstructionYear(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatMotorPurchaseYearInputElement, boatWithName.getBoatMotorPurchaseYear(boatName));
  await bootVerzekeringMethods.selectFuelTypeBoat(boatWithName.getBoatFuelType(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatPowerInputElement, boatWithName.getBoatPower(boatName));
  await genericMethods.clickOnElement(bootVerzekeringElements.boatPowerPkClickElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of boot verzekering$/, async (persona: string) => {
  await genericMethods.waitForElementIsPresent(genericElements.bannerPageElement, browser.getPageTimeout);
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthDayElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.clickOnElement(nawElements.yourDataPhoneNumberElement);
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
