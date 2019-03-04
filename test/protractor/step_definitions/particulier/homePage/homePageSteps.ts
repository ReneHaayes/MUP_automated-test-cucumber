import {Then, When} from "cucumber";
import {HmPageMethods} from "../../../pageobjects/generic/hmPageMethods";

let hmPageMethods: HmPageMethods = new HmPageMethods();

When(/^I press the button (.*) on the homepage$/, async (button: string) => {
  await hmPageMethods.clickButtonHomePageAndGoToPremieBerekenen(button)
});

When(/^I press the button (.*) on the menu page$/, async (button: string) => {
  await hmPageMethods.clickMenuButtonAndGoToProductPage(button)
});

Then(/^Verify element on premie berekenen page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnPremieBerekenenPage(page);
});

Then(/^Verify element on product page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnProductPage(page);
});

When(/^I press the button (.*) on the klantenservice page$/, async (button: string) => {
  await hmPageMethods.clickMenuButtonAndGoToKlantservicePage(button)
});

Then(/^Verify element on klantenservice page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnKlantenservicePage(page);
});

When(/^I press the button (.*) on the header$/, async (button: string) => {
  await hmPageMethods.clickHeaderAndGoToPage(button)
});

Then(/^Verify element on header page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownWhenClickedOnHeader(page);
});

When(/^I press the button (.*) on the footer$/, async (button: string) => {
  await hmPageMethods.clickFooterAndGoToPage(button)
});

Then(/^Verify element on footer page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownWhenClickedOnFooter(page);
});
