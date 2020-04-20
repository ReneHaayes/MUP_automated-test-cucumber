import {When, Given } from 'cucumber';
import { zorgAPIenMailMethods, genericMethods, loginPageElements } from '@support';
import { verzekeringPaginasEnum } from 'protractor/support/enum';

Given(/^Ik roep de aanvraagAPI aan GET$/, async() => {
    await zorgAPIenMailMethods.roepApiAanGet();
});

When(/^Ik roep de aanvraagAPI aan POST$/, async() => {
    await zorgAPIenMailMethods.roepApiAanPost();
});

When(/^I go to mailhog to see the aanvraag bevestiging mail$/, async() => {
    await genericMethods.goToPage(verzekeringPaginasEnum.MAILHOG);
    await genericMethods.verifyTextInElement(loginPageElements.mailtoHeaderTextElement, "T. Scenarioeen");
    await genericMethods.clickOnElement(loginPageElements.firstMessageClickElement);
});