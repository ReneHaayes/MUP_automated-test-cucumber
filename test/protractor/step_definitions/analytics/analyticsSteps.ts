import {Then} from "cucumber";
import {analyticsGenericElements, genericMethods} from "@support";
import {anaEnumLocation, anaEnumObjectName, anaEnumSearchObject} from "@enum";

Then(/^Verify that the correct paginanaam (.*) is show for page$/, async (ana: string) => {
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.advEventHistory(anaEnumLocation.FIRST, anaEnumObjectName.PAGEVIEW,
    anaEnumSearchObject.PAGINA_NAAM)), ana);
});
