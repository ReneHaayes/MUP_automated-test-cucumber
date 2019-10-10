import {When} from "cucumber";
import {
  boatWithName,
  bootVerzekeringElements,
  bootVerzekeringMethods,
  genericElements, genericMethods,
  nawElements, personaData
} from "../../../support";

When(/^I enter step one and click next on step two of bootverzekering with:$/, async (data) => {
  const dataTable = data.rowsHash();
  await bootVerzekeringMethods.selectTypeOfBoat(boatWithName.getBoatType(dataTable.boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatValueInputElement, boatWithName.getBoatValue(dataTable.boatName));
  await genericMethods.typeText(bootVerzekeringElements.purchaseDateInputElement, genericMethods.getDate('today'));
  await genericMethods.typeText(bootVerzekeringElements.lengthBoatInputElement, boatWithName.getBoatLength(dataTable.boatName));
  await genericMethods.clickOnElement(bootVerzekeringElements.boatIsNewClickElement);
  await genericMethods.clickOnElement(bootVerzekeringElements.followBoatNoClickElement);
  await genericMethods.clickOnElement(bootVerzekeringElements.trailerNoClickElement);
  await genericMethods.clickOnNextButton();
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of bootverzekering for boat (.*)$/, async (boatName: string) => {
  await genericMethods.typeText(bootVerzekeringElements.boatNameInputElement, boatWithName.getBoatName(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatBrandNameInputElement, boatWithName.getBoatBrandName(boatName));
  await genericMethods.typeText(bootVerzekeringElements.boatConstructionYearInputElement, boatWithName.getBoatConstructionYear(boatName));
  await bootVerzekeringMethods.selectMaterialBoat(boatWithName.getBoatMaterial(boatName));
  await genericMethods.clickOnElement(bootVerzekeringElements.engineTypeInsideClickElement);
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
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(nawElements.yourDataBirthdDayElement, personaData.getPersonaBirthDate(persona));
  // await genericMethods.typeText(nawElements.yourDataBirthPlaceElement, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(nawElements.yourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataZipCodeElement);
  await genericMethods.typeText(nawElements.yourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(nawElements.yourDataHouseNumberAdditionElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(nawElements.yourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await genericMethods.typeText(nawElements.yourDataEmailAddressElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
