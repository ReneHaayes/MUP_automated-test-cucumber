import { When, Then } from 'cucumber';
import { GenericMethods } from '../../pageobjects/generic/genericMethods';
import { SchadeBeslisboomElements } from '../../pageobjects/Klantenservice/SchadeBeslisboomElements';

const genericMethods: GenericMethods = new GenericMethods();
const schadeBeslisboomElements: SchadeBeslisboomElements = new SchadeBeslisboomElements();

// Auto Oldtimer Steps:

When(/^Customer clicks on button Auto or Oldtimer$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.vervoerButtonElement);
});

When(/^Customer clicks on button Aanrijding$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.aanrijdingButtonElement);
});

When(/^Customer clicks on button Moet ik mijn schade wel of niet melden$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.moetIkSchadeMeldenButtonElement);
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

When(/^Customer clicks on button Ruitschade$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.ruitschadeButtonElement);
});

Then(/^Information text about Moet ik mijn schade wel of niet melden is shown$/, async () => {
    await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.gevolgenVanSchadeVoorPremieText, 'De gevolgen van een schade voor uw premie', 9);
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

// Motor Trike Quad Steps:

When(/^Customer clicks on button Motor Trike Quad$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.motorTrikeQuadButtonElement);
});

When(/^Customer clicks on button Aanrijding for Motor$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.aanrijdingMotorButtonElement);
});

When(/^Customer clicks on button Moet ik mijn schade wel of niet melden for Motor$/, async () => {
    await genericMethods.clickOnElement(schadeBeslisboomElements.moetIkMijnSchadeWelOfNietMeldenButtonElement);
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

Then(/^information text about Moet ik mijn schade wel of niet melden for Motor is shown$/, async () => {
    await genericMethods.verifyTextContainsInElement(schadeBeslisboomElements.moetIkMijnSchadeWelOfNietMeldenText, 'De gevolgen van een schade voor uw premie.', 9);
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
