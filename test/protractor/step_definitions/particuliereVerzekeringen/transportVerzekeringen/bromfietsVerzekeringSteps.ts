import {When} from "cucumber";
import {
  genericElements, genericMethods, mopedMethods, mopedWithLicensePlate, nawElements, personaData, vehicleElements
} from "@support";

When(/^I enter step one page of moped for persona (.*) with license plate (.*) and (.*) damage free years$/, async (persona: string, licensePlate: string, damageFreeYears: string) => {
  await mopedMethods.enterLicensePlate(licensePlate);
  await genericMethods.verifyTextInElement(vehicleElements.licensePlateInfoBrandNameElement, mopedWithLicensePlate.getMopedBrandName(licensePlate));
  await genericMethods.verifyTextInElement(vehicleElements.licensePlateInfoModelElement, mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.verifyTextInElement(vehicleElements.licensePlateInfoConstructionYearElement, mopedWithLicensePlate.getMopedConstructionYear(licensePlate));
  await genericMethods.verifyTextInElement(vehicleElements.licensePlateInfoVersionElement, mopedWithLicensePlate.getMopedVersion(licensePlate));
  await mopedMethods.selectKindOfVehicle(mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.typeText(vehicleElements.birthDateElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(vehicleElements.zipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(vehicleElements.damageFreeYearsElement, damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of moped with$/, async (data) => {
  const dataTable = data.rowsHash();
  await mopedMethods.clickOnBasisDekking(dataTable.basisDekking);
  await mopedMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await mopedMethods.selectAcc(dataTable.accessoires);
  await mopedMethods.selectOwnRisk(dataTable.ownRisk);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of moped with$/, async (data) => {
  const dataTable = data.rowsHash();
  await mopedMethods.clickKindOfInsurance(dataTable.kindOfInsurance);
  await genericMethods.typeText(vehicleElements.dateOfNameMopedElement, dataTable.dateOfName);
  await genericMethods.clickOnTAB(vehicleElements.dateOfNameMopedElement);
  await genericMethods.typeText(vehicleElements.meldCodeElement, dataTable.meldCode);
  await genericMethods.typeText(vehicleElements.purchasePriceElement, dataTable.purchasePrice);
  await mopedMethods.clickOnDamageFreeYearsOfDifferentCompany(dataTable.damageFreeYearsDifferentCompany);
  await mopedMethods.clickMainDriver(dataTable.mainDriver);
  await mopedMethods.clickOwner(dataTable.owner);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of moped$/, async (persona: string) => {
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
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressElement);
  await genericMethods.typeText(nawElements.yourDataEmailAddressConfirmElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.clickOnTAB(nawElements.yourDataEmailAddressConfirmElement);
  await genericMethods.typeText(genericElements.accountNumberElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(genericElements.accountNumberElement);
  await genericMethods.clickOnElement(genericElements.authorizationUniveElement);
  await genericMethods.clickOnNextButton();
});
