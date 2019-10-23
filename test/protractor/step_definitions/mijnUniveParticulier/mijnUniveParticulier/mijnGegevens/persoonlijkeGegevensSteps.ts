import {browser} from "protractor";
import {When} from "cucumber";
import {genericMethods, personaData, persoonlijkeGegevensElements} from "@support";

When(/^(.*) changes personal details with:$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.verifyTextInElement(persoonlijkeGegevensElements.voorletterEnNaamTextElement,
    personaData.getPersonaInitials(persona) + ". " + personaData.getPersonaLastName(persona));
  await genericMethods.clickOnElement(persoonlijkeGegevensElements.editButtonClickElement);
  console.log(dataTable)
  await browser.sleep(5000);

});
