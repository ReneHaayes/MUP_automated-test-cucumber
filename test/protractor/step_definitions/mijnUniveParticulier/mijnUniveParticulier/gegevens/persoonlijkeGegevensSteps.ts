import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {browser} from "protractor";
import {MijnUniveAccountElements} from "../../../../pageobjects/mijnUniveParticulier/mijnUniveAccount/mijnUniveAccountElements";
import {When} from "cucumber";
import {PersoonlijkeGegevensElements} from "../../../../pageobjects/mijnUniveParticulier/gegevens/persoonlijkeGegevensElements";
import {PersonaData} from "../../../../pageobjects/persona/persona";

let genericMethods: GenericMethods = new GenericMethods();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();
let persoonlijkeGegevensElements: PersoonlijkeGegevensElements = new PersoonlijkeGegevensElements();
let personaData: PersonaData = new PersonaData();

When(/^(.*) changes personal details with:$/, async (persona: string, data) => {
  const dataTable = data.rowsHash();
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.verifyTextInElement(persoonlijkeGegevensElements.voorletterEnNaamTextElement,
    personaData.getPersonaInitials(persona) + ". " + personaData.getPersonaLastName(persona));
  await genericMethods.clickOnElement(persoonlijkeGegevensElements.editButtonClickElement);
  console.log(dataTable)
  await browser.sleep(5000);

});
