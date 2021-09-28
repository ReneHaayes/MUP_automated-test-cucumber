import {When, Then} from 'cucumber';
import {genericMethods, schadeBeslisboomElements, schadeServiceElements} from '@support';

// Auto Oldtimer Steps:

When(/^Customer clicks on button Vervoer$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.vervoerButtonElement);
});

When(/^Customer clicks on button Auto$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.autoButtonElement);
});

When(/^Customer clicks on button Hoe kan ik schade melden bij Unive$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.hoeKanIkSchadeMeldenButtonElement);
});

When(/^Customer clicks on button Hoe verloopt de schade afhandeling$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.hoeVerlooptDeSchadeAfhandelingButtonElement);
});


When(/^Customer clicks on button Wat kan ik nog na de uitbetaling$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.watKanIkNogNaDeUitbetalingButtonElement);
});

When(/^Customer clicks on button Mijn auto is gestolen$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.mijnAutoIsGeslotenButtonElement);
});

When(/^Customer clicks on button Inbraak in mijn auto$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.inbraakInMijnAutoButtonElement);
});

When(/^Customer navigates to ruitschade and fills in kenteken for dekkingscheck with (.*) and date (.*)$/, async (licensePlate: string, date: string) => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.vervoerButtonElement);
  await genericMethods.clickOnElement(schadeBeslisboomElements.autoButtonElement);
  await genericMethods.clickOnElement(schadeBeslisboomElements.ruitschadeButtonElement);
  await genericMethods.typeTextShadowRoot(schadeBeslisboomElements.licensePlateWidgetDekkingsCheckInputElement, licensePlate);
  await genericMethods.typeTextShadowRoot(schadeBeslisboomElements.dateDekkingsCheckInputElement, genericMethods.getDate(date));
  await genericMethods.clickOnElementShadowRoot(schadeBeslisboomElements.bekijkDekkingDekkingsCheckSubmitButtonClickElement);
});

Then(/^Verify button direct contact correctly appears$/, async () => {
  await genericMethods.waitForElementIsVisibleShadowRoot(schadeBeslisboomElements.directContactButtonClickElement, 10000);
});

When(/^Customer fills place or zipcode in input element (.*)$/, async (placeOrZipcode: string) => {
  await genericMethods.typeTextShadowRoot(schadeBeslisboomElements.zipcodeOrPlaceInputElement, placeOrZipcode);
  await genericMethods.clickOnElementShadowRoot(schadeBeslisboomElements.zoekSchadeHerstellerButtonClickElement);
});

Then(/^Verify that dekkingscheck correctly navigates to schadeservice and correctly fills in the place (.*)$/, async (placeOrZipcode: string) => {
  await genericMethods.verifyValueTextInElementShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, placeOrZipcode);
  await genericMethods.verifyUrlContains('schadeservice?type-of-damage=window&p=' + placeOrZipcode);

});

When(/^Customer clicks on button Ruitschade$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.ruitschadeButtonElement);
});

Then(/^Information text about Hoe kan ik schade melden bij Unive$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.schadeMeldenBijUniveText, 'Schade melden bij Univé', 9);
});

Then(/^Information text about Hoe verloopt de schade afhandeling is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.hoeVerlooptDeSchadeAfhandelingText, 'Hoe lang duurt de afhandeling van mijn schade', 9);
});

Then(/^information text about Wat kan ik nog na de uitbetaling is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.watKanIkNogNaDeUitbetalingText, 'Achteraf de schade zelf betalen', 9);
});

Then(/^information text about Mijn auto is gestolen is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.mijnAutoIsGestolenText, 'Wat te doen na diefstal van uw auto', 9);
});

Then(/^information text about Inbraak in mijn auto is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.inbraakInMijnAutoText, 'Wat te doen na een inbraak in uw auto', 9);
});

Then(/^information text about Ruitschade is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.ruitschadeText, 'Uw autoruit is beschadigd', 9);
});

Then(/^Information text about Wat te doen bij ruischade aan uw auto is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.ruitschadeText, 'Wat te doen bij ruitschade aan uw auto?', 9);
});

// Vrije tijd Steps:

When(/^Customer clicks on button Vrije Tijd$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.vrijeTijdButtonElement);
});

When(/^Customer clicks on button Reis$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.reisButtonElement);
});

When(/^Customer clicks on button Moet ik mijn schade wel of niet melden for Motor$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.moetIkMijnSchadeWelOfNietMeldenButtonElement);
});

Then(/^information text about Hulp nodig tijdens uw reis is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.hulpNodigTijdensUwReisText, 'Hulp nodig tijdens uw reis', 9);
});
// Bromfiets Scooter Scootmobiel steps

When(/^Customer clicks on button Moet ik mijn schade wel of niet melden for Bromfiets$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.moetIkMijnSchadeWelOfNietMeldenBromfietsButtonElement);
});

When(/^Customer clicks on button Bromfiets Scooter Scootmobiel$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.bromfietsButtonElement);
});

When(/^Customer clicks on button Aanrijding of Bromfiets$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.aanrijdingBromfietsButtonElement);
});

Then(/^information text about Moet ik mijn schade wel of niet melden for Bromfiets is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.moetIkMijnSchadeWelOfNietMeldenBromfietsText, 'De gevolgen van een schade voor uw premie', 9);
});

// Fiets E-bike steps

When(/^Customer clicks on button Fiets E-bike$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.fietsAndEBikeButtonElement);
});

When(/^Customer clicks on button Een aanrijding met mijn fiets$/, async () => {
  await genericMethods.clickOnElement(schadeBeslisboomElements.eenAanrijdingMetMijnFietsButtonElement);
});

Then(/^information text about Een aanrijding met mijn fiets is shown$/, async () => {
  await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.eenAanrijdingMetMijnFietsText, 'Een aanrijding met uw fiets', 9);
});

When(/^Customer selects veelgestelde vragen button$/, async () => {
  await genericMethods.verifyBreadcrumbOnPosition('Home', 1);
  await genericMethods.verifyBreadcrumbOnPosition('Autoverzekering', 2);
  await genericMethods.verifyBreadcrumbOnPosition('WA autoverzekering', 3);
  await genericMethods.clickOnElement(schadeBeslisboomElements.veelgesteldeVragenOverEenAutoverzekeringClickElement);
});

Then(/^verify the veelgestelde vragen page is shown$/, async () => {
  await genericMethods.verifyUrlContains('https://acc.unive.nl/autoverzekering/veelgesteldevragen');
});

