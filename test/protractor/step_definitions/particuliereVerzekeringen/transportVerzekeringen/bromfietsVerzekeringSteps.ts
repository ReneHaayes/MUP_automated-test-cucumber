import {When} from 'cucumber';
import {
  genericElements,
  genericMethods,
  mopedElements,
  mopedMethods,
  mopedWithLicensePlate,
  nawElements,
  personaData,
  vehicleElements
} from '@support';
import {browser} from 'protractor';
import {basisDekkingEnum, vehicleKindEnum} from '@enum';

When(/^I enter step one page of moped for persona (.*) with license plate (.*) and (.*) damage free years$/, async (persona: string, licensePlate: string, damageFreeYears: string) => {
  await genericMethods.waitForElementIsVisible(genericElements.bannerPageElement, browser.getPageTimeout);
  await mopedMethods.enterLicensePlate(licensePlate);
  await genericMethods.waitForElementIsVisible(mopedElements.vehicleKindSelectElement, browser.getPageTimeout);
  await genericMethods.verifyTextInElement(mopedElements.mopedInfoBrandNameElement, mopedWithLicensePlate.getMopedBrandName(licensePlate));
  await genericMethods.verifyTextInElement(mopedElements.mopedInfoModelElement, mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.verifyTextInElement(mopedElements.mopedInfoConstructionYearElement, mopedWithLicensePlate.getMopedConstructionYear(licensePlate));
  await genericMethods.verifyTextInElement(mopedElements.mopedInfoVersionElement, mopedWithLicensePlate.getMopedVersion(licensePlate));
  await mopedMethods.selectKindOfVehicle(mopedWithLicensePlate.getMopedVehicleType(licensePlate));
  if (mopedWithLicensePlate.getMopedVehicleType(licensePlate) === vehicleKindEnum.HIGH_SPEED_BIKE) {
    genericMethods.clickOnElement(mopedElements.yesOtherInsurancesElement).then();
  } else {}
  await genericMethods.typeText(vehicleElements.birthDateElement, personaData.getPersonaBirthDate(persona));
  await genericMethods.typeText(vehicleElements.zipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(vehicleElements.damageFreeYearsElement, damageFreeYears);
  await genericMethods.clickOnNextButton();

});

When(/^I enter step two page of moped with (.*)$/, async (coverage: string, data) => {
  const dataTable = data.rowsHash();
  await mopedMethods.clickOnBasisDekking(coverage);
  await genericMethods.waitForElementClickable(vehicleElements.rechtsHulpVerkeerElement, browser.getPageTimeout);
  await mopedMethods.clickOnAanvullendeOpties('rechtsHulpVerkeer');
  await genericMethods.waitForElementClickable(vehicleElements.ongevallenVerzekeringElement, browser.getPageTimeout);
  await mopedMethods.clickOnAanvullendeOpties('Ongevallenverzekering');
  await genericMethods.waitForElementClickable(vehicleElements.pechHulpNlElement, browser.getPageTimeout);
  await mopedMethods.clickOnAanvullendeOpties('pechHulpNl');

  if ((coverage) === basisDekkingEnum.WA_PLUS) {
    await genericMethods.waitForElementClickable(vehicleElements.accElement, browser.getPageTimeout);
    await mopedMethods.selectAcc(dataTable.accessoires);
    await genericMethods.waitForElementClickable(vehicleElements.ownRiskElement, browser.getPageTimeout);
    await mopedMethods.selectOwnRisk(dataTable.ownRisk);
  } else if ((coverage) === basisDekkingEnum.ALL_RISK) {
    await genericMethods.waitForElementClickable(vehicleElements.aanschafWaardeRegelingElement, browser.getPageTimeout);
    await mopedMethods.clickOnAanvullendeOpties('aanschafwaarde regeling');
    await genericMethods.waitForElementClickable(vehicleElements.accElement, browser.getPageTimeout);
    await mopedMethods.selectAcc(dataTable.accessoires);
    await genericMethods.waitForElementClickable(vehicleElements.ownRiskElement, browser.getPageTimeout);
    await mopedMethods.selectOwnRisk(dataTable.ownRisk);
  } else {}
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of moped with (.*)$/, async (coverage: string, data) => {
  const dataTable = data.rowsHash();
  await mopedMethods.clickKindOfInsurance(dataTable.kindOfInsurance);
  await genericMethods.typeText(vehicleElements.dateOfNameMopedElement, genericMethods.getDate(dataTable.dateOfName));
  await genericMethods.clickOnTAB(vehicleElements.dateOfNameMopedElement);
  await genericMethods.typeText(vehicleElements.meldCodeElement, dataTable.meldCode);
  await mopedMethods.clickOnDamageFreeYearsOfDifferentCompany(dataTable.damageFreeYearsDifferentCompany);
  if ((coverage) === basisDekkingEnum.WA_PLUS) {
    await genericMethods.typeText(vehicleElements.purchasePriceElement, dataTable.purchasePrice);
  } else  if ((coverage) === basisDekkingEnum.ALL_RISK) {
    await genericMethods.typeText(vehicleElements.purchasePriceElement, dataTable.purchasePrice);
  } else {}
  await mopedMethods.clickMainDriver(dataTable.mainDriver);
  await mopedMethods.clickOwner(dataTable.owner);
  await genericMethods.clickOnNextButton();
});

When(/^I enter details of (.*) in step four page of moped$/, async (persona: string) => {
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
