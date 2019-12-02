import {Then} from "cucumber";
import {analyticsGenericElements, genericMethods} from "@support";

Then(/^Verify that the correct paginanaam (.*) is show for page$/,async (ana: string) => {
  await genericMethods.verifyText(await genericMethods.getAnalyticsText(analyticsGenericElements.firstPageviewPaginaNaam), ana);
});
