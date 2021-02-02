import {When} from 'cucumber';
import {
  companyData,
  genericMethods,
  widgetPageElements,
  widgetZakelijkElements,
} from '@support';
import {browser} from 'protractor';

// WHEN

// Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers)
When(/^I apply for aansprakelijkheidsverzekering and fill in the KVK number for (.*)$/, async function (company: string) {
  await genericMethods.typeTextShadowRoot(widgetZakelijkElements.kvkNumberAansprakelijkheidsVerzekeringWidgetInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElementShadowRoot(widgetPageElements.avpZakelijkWidgetBerekenUwPremieButton);
  browser.sleep(3000);
});

// rechtsbijstandverzekering ZZP
When(/^I apply for rechtsbijstandverzekering and fill in the KVK number for (.*)$/, async function (company: string) {
  await genericMethods.typeTextShadowRoot(widgetZakelijkElements.kvkNumberAansprakelijkheidsVerzekeringWidgetInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElementShadowRoot(widgetPageElements.avpZakelijkWidgetBerekenUwPremieButton);
});

// personenautoverzekering zakelijk


