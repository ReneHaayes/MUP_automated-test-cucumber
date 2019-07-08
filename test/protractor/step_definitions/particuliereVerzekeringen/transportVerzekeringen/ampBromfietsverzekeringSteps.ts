import { VehicleElements } from './../../../pageobjects/generic/vehicleElements';
import { GetUrlUnive } from './../../../pageobjects/generic/getUrlUnive';
import {Then, When} from 'cucumber';
import {GenericMethods} from '../../../pageobjects/generic/genericMethods';
import {MopedElements} from '../../../pageobjects/particuliereVerzekeringen/transportVerzekeringen/mopedElements';
import { browser } from 'protractor';
import { GenericElements } from '../../../pageobjects/generic/genericElements';
import { verzekeringPaginasEnum } from '../../../pageobjects/enum/genericEnum';

const genericMethods: GenericMethods = new GenericMethods();
const genericElements: GenericElements = new GenericElements();
const mopedElements: MopedElements = new MopedElements();
const getUrlUnive: GetUrlUnive = new GetUrlUnive();
const vehicleElements: VehicleElements = new VehicleElements();

    When(/^I press the button premie berekenen on the amp bromfietsverzekering page$/, async () => {
        await genericMethods.waitForElementIsVisible(mopedElements.ampBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(mopedElements.ampBerekenUwPremieButtonClickElement);
    });

    Then(/^Verify elements on premie berekenen amp bromfiets page is shown$/, async () => {
        try {
            await genericMethods.clickOnCookie(genericElements.cookieClickElement);
        } catch (e) {

        }
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.waitForElementIsVisible(vehicleElements.licensePlateInputElement, browser.getPageTimeout);
    });
