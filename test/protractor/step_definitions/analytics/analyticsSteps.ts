import {Then, When} from "cucumber";
import {analyticsGenericElements, genericMethods, schadeServiceElements} from "@support";
import {anaEnumLocation, anaEnumObjectName, anaEnumSearchObject} from "@enum";

Then(/^Verify that the correct paginanaam (.*) is show for page$/, async (ana: string) => {
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.PAGINA_NAAM)), ana);
});

When(/^Clicked on the first search element for the city (.*)$/, async (city: string) => {
  await genericMethods.typeTextShadowRoot(schadeServiceElements.placeOrZipcodeInputElement, city);
  await genericMethods.clickOnElementShadowRoot(schadeServiceElements.submitButtonClickElement);
  await genericMethods.clickOnElementShadowRootHideElements(schadeServiceElements.getTitleForLocationTextElement('1'));
});

Then(/^Verify that the correct knop interactie anlytics is shown for page schadeservice$/, async () => {
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.SECOND, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.PAGINA_NAAM)), analyticsGenericElements.anaSchadeServiceFirstPaginaNaam);
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.THIRTH, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.PAGINA_NAAM)), analyticsGenericElements.anaSchadeServiceSecondPaginaNaam);
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.KNOP_INTERACTIE,
    anaEnumSearchObject.KNOP_INTERACTIE_TYPE)), analyticsGenericElements.anaSchadeServiceKnopInteractieType);
});

Then(/^Verify that the correct knop interactie anlytics is shown for page winkelzoeker$/, async () => {
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.SECOND, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.PAGINA_NAAM)), analyticsGenericElements.anaWinkelZoekerFirstPaginaNaam);
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.THIRTH, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.PAGINA_NAAM)), analyticsGenericElements.anaWinkelZoekerSecondPaginaNaam);
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.KNOP_INTERACTIE,
    anaEnumSearchObject.KNOP_INTERACTIE_TYPE)), analyticsGenericElements.anaWinkelZoekerKnopInteractieType);
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.KNOP_INTERACTIE,
    anaEnumSearchObject.KNOP_INTERACTIE_NAAM)), analyticsGenericElements.anaWinkelZoekerKnopInteractieNaam);
});
