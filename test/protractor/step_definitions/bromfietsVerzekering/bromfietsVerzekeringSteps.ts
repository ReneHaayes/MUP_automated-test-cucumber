import {When} from "cucumber";
import {browser} from "protractor";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {BromfietsVerzekeringElements} from "../../pageobjects/bromfietsVerzekering/bromfietsVerzekeringElements";
import {MopedWithLicensePlate} from "../../pageobjects/verhicles/mopedWithLicensePlate";
import {BromfietsVerzekeringMethods} from "../../pageobjects/bromfietsVerzekering/bromfietsVerzekeringMethods";

let genericMethods: GenericMethods = new GenericMethods();
let bromfietsVerzekeringElements: BromfietsVerzekeringElements = new BromfietsVerzekeringElements();
let bromfietsVerzekeringMethods: BromfietsVerzekeringMethods = new BromfietsVerzekeringMethods();
let mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();

When(/^I enter step one page of bromfiets verzekering for persona (.*) with license plate (.*)$/, async (persona: string, licensePlate: string) => {
  await bromfietsVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoBrandNameElement, mopedWithLicensePlate.getMopedBrandName(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoModelElement, mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoConstructionYearElement, mopedWithLicensePlate.getMopedConstructionYear(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoVersionElement, mopedWithLicensePlate.getMopedVersion(licensePlate));


  console.log(persona);
  await browser.sleep(10000);
});
