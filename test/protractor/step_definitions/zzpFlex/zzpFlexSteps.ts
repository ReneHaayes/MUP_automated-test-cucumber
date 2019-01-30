// @ts-ignore
import {Given, When} from 'cucumber';
import {browser} from "protractor";
import {ZzpFlexMethods} from "../../pageobjects/zzpFlex/zzpFlexMethods";
// import {GenericMethods} from "../../pageobjects/generic/genericMethods";

let zzpFlexMethods: ZzpFlexMethods = new ZzpFlexMethods();
// let genericMethods: GenericMethods = new GenericMethods();


When(/^I enter step one page of zzpFlex with premie of (.*)$/, async (premie: string) => {
  await zzpFlexMethods.dragAndDropUwPremie(premie);
  await zzpFlexMethods.clickOnNextButton();
  await browser.sleep(5000);

});

