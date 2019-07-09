import {When, Then} from 'cucumber';
import {GenericMethods} from '../../../pageobjects/generic/genericMethods';
import {browser} from 'protractor';
import {ReisVerzekeringElements} from '../../../pageobjects/particuliereVerzekeringen/vrijeTijdsVerzekeringen/reisVerzekeringElements';
import { GenericElements } from '../../../pageobjects/generic/genericElements';
import {verzekeringPaginasEnum} from '../../../pageobjects/enum/genericEnum';
import {GetUrlUnive} from '../../../pageobjects/generic/getUrlUnive';

const genericMethods: GenericMethods = new GenericMethods();
const reisVerzekeringElements: ReisVerzekeringElements = new ReisVerzekeringElements();
const genericElements: GenericElements = new GenericElements;
const getUrlUnive: GetUrlUnive = new GetUrlUnive();


When (/^I press the button premie berekenen on the amp doorlopende reisverzekering page$/, async () => {
    await genericMethods.waitForElementIsVisible(reisVerzekeringElements.ampBerekenUwPremieButtonClickElement, browser.getPageTimeout);
    await genericMethods.clickOnElement(reisVerzekeringElements.ampBerekenUwPremieButtonClickElement);
});

Then(/^Verify if elements on premie berekenen amp doorlopende reisverzekering page are shown$/, async () => {
    try {
        await genericMethods.clickOnCookie(genericElements.cookieClickElement);
    } catch (e) {

    }
    const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING);
    await genericMethods.verifyUrlContains(url);
    await genericMethods.waitForElementIsVisible(reisVerzekeringElements.whoToInsureMySelfClickElement, browser.getPageTimeout);
});
