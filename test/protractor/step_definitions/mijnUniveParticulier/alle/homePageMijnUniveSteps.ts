import {Then,When} from "cucumber";
import {HmPageMijnUniveMethods} from '../../../pageobjects/generic/hmPageMijnUniveMethods';

let hmPageMijnUniveMethods: HmPageMijnUniveMethods = new HmPageMijnUniveMethods();

When(/^Customer press the button (.*) on the Mijn Unive homepage header$/, async (button: string) => {
  await hmPageMijnUniveMethods.clickHeaderAndGoToPage(button)
});

Then(/^Verify element on Mijn Unive header page for (.*) is shown$/, async (page: string) => {
  await hmPageMijnUniveMethods.verifyElementIsShownWhenClickedOnHeader(page);
});

When(/^Customer press the button (.*) on the Mijn Unive homepage footer$/, async (button: string) => {
  await hmPageMijnUniveMethods.clickFooterAndGoToPage(button)
});

Then(/^Verify element on Mijn Unive footer page for (.*) is shown$/, async (page: string) => {
  await hmPageMijnUniveMethods.verifyElementIsShownWhenClickedOnFooter(page);
});
