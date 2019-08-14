import {Given, Then} from "cucumber";
import {GenericMethods} from "../../../pageobjects/generic/genericMethods";
import {SituatieGewijzigdElements} from "../../../pageobjects/mijnUniveParticulier/Klantenservice/SituatieGewijzigdElements";
import {SituatieGewijzigdMethods} from "../../../pageobjects/mijnUniveParticulier/Klantenservice/SituatieGewijzigdMethods";

let genericMethods: GenericMethods = new GenericMethods();
let situatieGewijzigdElements: SituatieGewijzigdElements = new SituatieGewijzigdElements();
let situatieGewijzigdMethods: SituatieGewijzigdMethods = new SituatieGewijzigdMethods();

Given(/^Customer clicks on situation (.*) to be changed$/, async (situatie: string) => {
  await genericMethods.clickOnElement(situatieGewijzigdElements.situatieGewijzigdClickElement(situatie));
});

Then(/^Verify header with text (.*) of situation is correcly shown$/, async (headerText: string) => {
  await situatieGewijzigdMethods.checkSituatieGewijzigdPage(headerText);
});
