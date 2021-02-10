import {When} from 'cucumber';
import {
  autoVerzekeringElements,
  genericElements,
  genericMethods,
  motorcycleElements,
  motorcycleMethods,
  nawElements,
  personaData
} from '@support';



When(/^I enter step one page for motorcycle with license plate (.*) with:$/, async (licensePlate: string, data) => {
  const dataTable = data.rowsHash();
  await motorcycleMethods.enterLicensePlate(licensePlate);
  await motorcycleMethods.clickNewOrSecondHandMotor('secondhand');
  await genericMethods.typeText(motorcycleElements.purchaseDateElement, dataTable.purchaseDate);
  await motorcycleMethods.clickAlarmSystem(dataTable.alarmSystem);
  await genericMethods.typeText(nawElements.hoofdbestuurderBirthdateElement, personaData.getPersonaBirthDate(dataTable.persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderBirthdateElement);
  await genericMethods.typeText(nawElements.hoofdbestuurderZipCodeElement, personaData.getPersonaZipcode(dataTable.persona));
  await genericMethods.clickOnTAB(nawElements.hoofdbestuurderZipCodeElement);
  await genericMethods.typeText(autoVerzekeringElements.damageFreeYearsElement, dataTable.damageFreeYears);
  await genericMethods.clickOnTAB(autoVerzekeringElements.damageFreeYearsElement);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of motorcycle with$/, async (data) => {
  const dataTable = data.rowsHash();
  await motorcycleMethods.clickOnBasisDekking(dataTable.basisDekking);
  await motorcycleMethods.selectAcc(dataTable.accessoires);
  await motorcycleMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of motorcycle with$/, async (data) => {
  const dataTable = data.rowsHash();
  await motorcycleMethods.clickKindOfInsurance(dataTable.kindOfInsurance);
  await motorcycleMethods.additionalDataVehicle(dataTable.licensePlate);
  await genericMethods.typeText(motorcycleElements.dateOfNameMopedElement, dataTable.dateOfName);
  await genericMethods.clickOnTAB(motorcycleElements.dateOfNameMopedElement);
  await genericMethods.typeText(motorcycleElements.meldCodeElement, dataTable.meldCode);
  await motorcycleMethods.clickMainDriver(dataTable.mainDriver);
  await motorcycleMethods.clickOwner(dataTable.owner);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of motorcycle$/, async (persona: string) => {
  await genericMethods.typeText(nawElements.yourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(nawElements.yourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(nawElements.yourDataLastNameElement, personaData.getPersonaLastName(persona));
  await genericMethods.clickYourDataGender(personaData.getPersonaGender(persona));
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
