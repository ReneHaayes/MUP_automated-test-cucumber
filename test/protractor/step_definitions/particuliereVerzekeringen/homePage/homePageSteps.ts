import {Then, When} from "cucumber";
import {hmPageMethods} from "../../../support";


When(/^I press the button (.*) on the homepage$/, async (button: string) => {
  await hmPageMethods.clickButtonHomePageAndGoToPremieBerekenen(button)
});

When(/^I press the button (.*) on the business homepage$/, async (button: string) => {
  await hmPageMethods.clickButtonBusinessHomePageAndGoToPremieBerekenen(button)
});

When(/^I press the button (.*) on the menu page$/, async (button: string) => {
  await hmPageMethods.clickMenuButtonAndGoToProductPage(button)
});

When(/^I press the button (.*) on the menu business page$/, async (button: string) => {
  await hmPageMethods.clickBusinessMenuButtonAndGoToProductPage(button)
});

Then(/^Verify element on premie berekenen page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnPremieBerekenenPage(page);
});

Then(/^Verify element on premie berekenen business page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnPremieBerekenenBusinessPage(page);
});

Then(/^Verify element on product page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnProductPage(page);
});

Then(/^Verify element on business product page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnBusinessProductPage(page);
});

When(/^I press the button (.*) on the klantenservice page$/, async (button: string) => {
  await hmPageMethods.clickMenuButtonAndGoToKlantservicePage(button)
});

When(/^I press the button (.*) on the klantenservice business page$/, async (button: string) => {
  await hmPageMethods.clickMenuButtonAndGoToBusinessKlantservicePage(button)
});

Then(/^Verify element on klantenservice page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnKlantenservicePage(page);
});

Then(/^Verify element on klantenservice business page for (.*) is shown$/, async (page: string) => {
  await hmPageMethods.verifyElementIsShownOnBusinessKlantenservicePage(page);
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
