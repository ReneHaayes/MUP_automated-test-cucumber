import {Then, When} from "cucumber";
import {genericMethods, klantenserviceDirectOnlineRegelenElements, loginPageElements} from "@support";


When(/^Customer navigates to klantenservice and clicks on tile (.*) for direct online regelen$/, async (tile: string) => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.goToPage('klantenservice');
  await genericMethods.clickOnElement(klantenserviceDirectOnlineRegelenElements.directOnlineRegelenTileClickElement(tile));
});

Then(/^Verify the page is correctly loaded with url for tile (.*)$/, async (tile: string) => {
  switch (tile) {
    case 'Schade melden': {
      await genericMethods.verifyUrlContainsIgnoreCase('schade');
      break;
    }
    case 'Zorgnota declareren': {
      await genericMethods.verifyUrlContainsIgnoreCase('zorgkosten/declareren');
      break;
    }
    case 'Persoonsgegevens wijzigen': {
      await genericMethods.verifyUrlContainsIgnoreCase('mijnunive/mijn-gegevens');
      break;
    }
    case 'Verzekering wijzigen':
    case 'Verzekering inzien': {
      await genericMethods.verifyUrlContainsIgnoreCase('mijnunive/polisoverzicht');
      break;
    }
    case 'Mijn Univé': {
      await genericMethods.verifyUrlContainsIgnoreCase('mijnunive');
      break;
    }
    default: {
      throw new Error('The input: "" ' + tile + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
});
