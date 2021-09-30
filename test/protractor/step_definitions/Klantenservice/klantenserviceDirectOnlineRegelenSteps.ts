import {Then, When} from 'cucumber';
import {genericMethods, klantenserviceDirectOnlineRegelenElements, loginPageElements} from '@support';


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
      await genericMethods.verifyUrlContainsIgnoreCase('zorgverzekering/declareren');
      break;
    }
    case 'Persoonlijke gegevens wijzigen': {
      await genericMethods.verifyUrlContainsIgnoreCase('mijnunive/mijn-gegevens');
      break;
    }
    case 'Verzekeringen inzien of wijzigen': {
      await genericMethods.verifyUrlContainsIgnoreCase('mijnunive/polisoverzicht');
      break;
    }
    case 'Verzekering opzeggen': {
      await genericMethods.verifyUrlContainsIgnoreCase('opzeggen');
      break;
    }
    case 'Verhuizing doorgeven': {
      await genericMethods.verifyUrlContainsIgnoreCase('verhuizingdoorgeven');
      break;
    }
    default: {
      throw new Error('The input: "" ' + tile + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
});
