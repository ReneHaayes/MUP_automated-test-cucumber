import {Then} from "cucumber";
import {genericMethods} from "@support";

Then(/^Verify that the correct paginanaam (.*) is show for page$/,async (ana: string) => {
  await genericMethods.verifyText(await genericMethods.getAnalyticsText('window.adv_event.history[0][1].paginanaam'), ana);
});
