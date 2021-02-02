

import {Then} from 'cucumber';
import {reisVerzekeringMethods, widgetsParticulierMethods} from '@support';

// Annuleringsverzekering
Then(/^I check if the gezinssamenstelling (.*) is selected on the next page$/, async (household: string) => {
  await widgetsParticulierMethods.checkHouseholdSelectedOnStepOne(household);
});

// Bootverzekering
Then(/^I check if the type of boat: (.*) is selected on the next page$/, async (boat: string) => {
  await widgetsParticulierMethods.checkBoatSelectedOnStepOne(boat);
});

// bromfiets
Then(/^The bromfiets (.*) data (.*) appear$/, async (licensePlate: string,  willWont: string) => {
  await widgetsParticulierMethods.checkMopedSelectedOnStepOne(willWont, licensePlate);
});

// camper
Then(/^The camper (.*) data (.*) appear$/, async (licensePlate: string,  willWont: string) => {
  await widgetsParticulierMethods.checkMobileHomeSelectedOnStepOne(willWont, licensePlate);
});


// caravan
Then(/^I check if the type of caravan: (.*) is selected on the next page$/, async (caravan: string) => {
  await widgetsParticulierMethods.checkCaravanSelectedOnStepOne(caravan);
});

// fiets
Then(/^I check if the type of bicycle: (.*) is selected on the next page$/, async (bicycle: string) => {
  await widgetsParticulierMethods.checkBicycleSelectedOnStepOne(bicycle);
});

// auto
// zie auto

// motor
Then(/^The motorcycle (.*) data (.*) appear$/, async (licensePlate: string,  willWont: string) => {
  await widgetsParticulierMethods.checkMotorcycleSelectedOnStepOne(willWont, licensePlate);
});

// rechtsbijstand
Then(/^I check if the rechtsbijstandverzekering shows the correct (.*) on the next page$/, async (familyMembers: string) => {
  await widgetsParticulierMethods.checkRbvSelectedOnStepOne(familyMembers);
});


// Doorlopende Reisverzekering
Then(/^I check if the (.*) I have selected are present on the next page$/, async (familyMembers: string) => {
  await reisVerzekeringMethods.checkFamilyMemberCheckedOnStepOne(familyMembers);
});


// Scootmobiel
Then(/^I check if the type of scootmobiel: (.*) is selected on the next page$/, async (mobilityScooter: string) => {
  await widgetsParticulierMethods.checkMobilityScooterSelectedOnStepOne(mobilityScooter);
});

