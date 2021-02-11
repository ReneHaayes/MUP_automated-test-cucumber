import {When} from 'cucumber';
import {
  reisVerzekeringMethods,
  widgetsParticulierMethods,
} from '@support';

// Annuleringsverzekering
When(/^I choose gezinssamenstelling: (.*) to insure$/, async (household: string) => {
  await widgetsParticulierMethods.selectHousehold(household);
});

// Bootverzekering
When(/^I choose the type of boat: (.*) to insure$/, async (boat: string) => {
  await widgetsParticulierMethods.selectBoat(boat);
});

// bromfiets
When(/^I enter the bromfiets (.*) and (.*) in the widget for bromfiets and press (.*)$/, async (licensePlate: string, zipCode: string,  button: string) => {
  await widgetsParticulierMethods.clickOnMopedButton(button, licensePlate, zipCode);
});

// camper
When(/^I enter the camper (.*) in the widget for camper and press (.*)$/, async (licensePlate: string,  button: string) => {
  await widgetsParticulierMethods.clickOnMobileHomeButton(button, licensePlate);
});

// caravan
When(/^I choose the type of caravan: (.*) to insure$/, async (caravan: string) => {
  await widgetsParticulierMethods.selectCaravan(caravan);
});

// fiets
When(/^I choose the type of bicycle: (.*) to insure$/, async (bicycle: string) => {
  await widgetsParticulierMethods.selectBicycle(bicycle);
});

// auto
When(/^I enter the personenauto (.*) and press (.*)$/, async (licensePlate: string, button: string) => {
  await widgetsParticulierMethods.clickOnPersonenautoLicensePlateButton(licensePlate, button);
});

// motor
When(/^I enter the motorcycle (.*) and (.*) in the widget for motorcycle and press (.*)$/, async (licensePlate: string,  zipCode: string,  button: string) => {
  await widgetsParticulierMethods.clickOnMotorcycleButton(button, licensePlate, zipCode);
});

// rechtsbijstand
When(/^I choose the te verzekeren gezinsleden: (.*) voor een rechtsbijstandverzekering$/, async (familyMembers: string) => {
  await widgetsParticulierMethods.selectRbv(familyMembers);
});

// Doorlopende Reisverzekering
When(/^I choose gezinsleden: (.*) to insure$/, async (familyMembers: string) => {
  await reisVerzekeringMethods.selectFamilyMembers(familyMembers);
});

// Scootmobiel
When(/^I choose the type of scootmobiel: (.*) to insure$/, async (mobilityScooter: string) => {
  await widgetsParticulierMethods.selectMobilityScooter(mobilityScooter);
});

