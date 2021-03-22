import {When} from 'cucumber';
import {
  companyData,
  genericMethods,
    widgetsParticulierMethods,
  widgetZakelijkElements,
} from '@support';
import {browser
} from 'protractor';

// WHEN

// Bedrijfsaansprakelijkheidsverzekering (voor ZZP'ers)
When(/^I apply for aansprakelijkheidsverzekering and fill in the KVK number for (.*)$/, async function (company: string) {
  await genericMethods.typeTextShadowRoot(widgetZakelijkElements.kvkNumberAansprakelijkheidsVerzekeringWidgetInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElementShadowRoot(widgetZakelijkElements.kvkWidgetAansprakelijkheidsVerzekeringBerekenUwPremieButton);
  browser.sleep(3000);
});

// rechtsbijstandverzekering ZZP
When(/^I apply for rechtsbijstandverzekering and fill in the KVK number for (.*)$/, async function (company: string) {
  await genericMethods.typeTextShadowRoot(widgetZakelijkElements.kvkNumberRechtsbijstandVerzekeringWidgetInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElementShadowRoot(widgetZakelijkElements.kvkWidgetRechtsbijstandVerzekeringBerekenUwPremieButton);
});


// Eigen vervoer widget toevoegen
When(/^I apply for eigen vervoer verzekering and fill in the KVK number for (.*)$/, async function (company: string) {
  await genericMethods.typeTextShadowRoot(widgetZakelijkElements.kvkNumberEigenVervoerVerzekeringWidgetInputElement, companyData.getCompanyKvkNumber(company));
  await genericMethods.clickOnElementShadowRoot(widgetZakelijkElements.kvkWidgetEigenVervoerVerzekeringBerekenUwPremieButton);
});

// personenautoverzekering zakelijk
When(/^I enter the zakelijke personenauto (.*) and press (.*)$/, async (licensePlate: string, button: string) => {
  await widgetsParticulierMethods.clickOnAutoVerzekeringButton(licensePlate, button);
});
