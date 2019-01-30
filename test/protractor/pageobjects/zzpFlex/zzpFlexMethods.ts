import {browser, by, element, ElementFinder} from "protractor";
import {GenericMethods} from "../generic/genericMethods";
import {ZzpFlexElements} from "./zzpFlexElements";
import {zzpFlexUwpremie} from "../enum/zzpFlexEnum";
import {GenericElements} from "../generic/genericElements";

// @ts-ignore
let genericMethods: GenericMethods = new GenericMethods();
let zzpFlexElements: ZzpFlexElements = new ZzpFlexElements();
let genericElements: GenericElements = new GenericElements();


export class ZzpFlexMethods {

  async dragAndDropUwPremie(uwPremieInput: string) {
    const slider: ElementFinder = element(by.css(zzpFlexElements.sliderElement));
    await genericMethods.waitForElementIsVisible(zzpFlexElements.sliderElement, browser.getPageTimeout);
    if (uwPremieInput === zzpFlexUwpremie._25) {
      await browser.actions().dragAndDrop(slider, {x: 0, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._50) {
      await browser.actions().dragAndDrop(slider, {x: 58, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._75) {
      await browser.actions().dragAndDrop(slider, {x: 116, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._100) {
      await browser.actions().dragAndDrop(slider, {x: 174, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._125) {
      await browser.actions().dragAndDrop(slider, {x: 233, y: 0}).perform();
    } else if (uwPremieInput === zzpFlexUwpremie._150) {
      await browser.actions().dragAndDrop(slider, {x: 291, y: 0}).perform();
    } else {
      throw new Error('The input you have entered dragAndDropUwPremie: "" ' + uwPremieInput + ' "" is not recognized as a command');
    }
  }

  async clickOnNextButton() {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(zzpFlexElements.nextButton, browser.getPageTimeout);
    await genericMethods.clickOnElementWithClassName(zzpFlexElements.nextButton);
  }
}
