// @ts-ignore
import {Given, When} from 'cucumber';
import {browser} from "protractor";
import {ZzpFlexMethods} from "../../pageobjects/zzpFlex/zzpFlexMethods";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {PersonaData} from "../../pageobjects/persona/persona";
import {ZzpFlexElements} from "../../pageobjects/zzpFlex/zzpFlexElements";

let zzpFlexElements: ZzpFlexElements = new ZzpFlexElements();
let zzpFlexMethods: ZzpFlexMethods = new ZzpFlexMethods();
let genericMethods: GenericMethods = new GenericMethods();
let personaData: PersonaData = new PersonaData();


When(/^I enter step one page of zzpFlex with premie of (.*)$/, async (premie: string) => {
  await zzpFlexMethods.dragAndDropUwPremie(premie);
  await zzpFlexMethods.clickOnNextButton();
});

When(/^I enter step two page of zzpFlex for persona (.*)$/, async (persona: string) => {
  await genericMethods.typeText(zzpFlexElements.zzpYourDataInitialsElement, personaData.getPersonaInitials(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataPrefixElement, personaData.getPersonaPrefix(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYyourDataLastNameElement, personaData.getPersonaLastName(persona));
  await zzpFlexMethods.clickYourDataGender(personaData.getPersonaGender(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataBirthdate, personaData.getPersonaBirthday(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataBirthPlace, personaData.getPersonaBirthPlace(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataZipCodeElement, personaData.getPersonaZipcode(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataHouseNumberElement, personaData.getPersonaHouseNumber(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataHouseNumberAddingElement, personaData.getPersonaHouseNumberAddition(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataPhoneNumberElement, personaData.getPersonaPhoneNumber(persona));
  await zzpFlexMethods.selectYourDataSpecificIdentification(personaData.getPersonaSpecificIdentification(persona), persona);
  await genericMethods.typeText(zzpFlexElements.zzpYourDataBSNnumberElement, personaData.getPersonaBsn(persona));
  await genericMethods.typeText(zzpFlexElements.zzpYourDataEmailAddress, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(zzpFlexElements.zzpOtherDataProfessionElement, personaData.getPersonaProfession(persona));
  await genericMethods.typeText(zzpFlexElements.zzpOtherDataKvkNumberElement, personaData.getPersonaKvkNumber(persona));
  await zzpFlexMethods.selectYourDataDurationEntrepreneur(personaData.getPersonaDurationEntrepreneur(persona));
  await genericMethods.typeText(zzpFlexElements.zzpFlexAccountNumberDataElement, personaData.getPersonaAccountNumber(persona));
  await genericMethods.clickOnTAB(zzpFlexElements.zzpFlexAccountNumberDataElement);
  await genericMethods.clickOnElement(zzpFlexElements.zzpFlexPaymentAuthorizationElement);
  await zzpFlexMethods.clickOnNextButton();
  await browser.sleep(10000);
});
