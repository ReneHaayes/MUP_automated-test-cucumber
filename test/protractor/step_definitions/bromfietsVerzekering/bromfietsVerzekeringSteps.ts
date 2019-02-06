import {When} from "cucumber";
import {browser} from "protractor";
import {GenericMethods} from "../../pageobjects/generic/genericMethods";
import {BromfietsVerzekeringElements} from "../../pageobjects/bromfietsVerzekering/bromfietsVerzekeringElements";
import {MopedWithLicensePlate} from "../../pageobjects/verhicles/mopedWithLicensePlate";
import {BromfietsVerzekeringMethods} from "../../pageobjects/bromfietsVerzekering/bromfietsVerzekeringMethods";
import {PersonaData} from "../../pageobjects/persona/persona";

let genericMethods: GenericMethods = new GenericMethods();
let bromfietsVerzekeringElements: BromfietsVerzekeringElements = new BromfietsVerzekeringElements();
let bromfietsVerzekeringMethods: BromfietsVerzekeringMethods = new BromfietsVerzekeringMethods();
let mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();
let personaData: PersonaData = new PersonaData();

When(/^I enter step one page of bromfiets verzekering for persona (.*) with license plate (.*) and (.*) damage free years$/, async (persona: string,
                                                                                                                                    licensePlate: string, damageFreeYears: string) => {
  await bromfietsVerzekeringMethods.enterLicensePlate(licensePlate);
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoBrandNameElement, mopedWithLicensePlate.getMopedBrandName(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoModelElement, mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoConstructionYearElement, mopedWithLicensePlate.getMopedConstructionYear(licensePlate));
  await genericMethods.verifyTextInElement(bromfietsVerzekeringElements.licensePlateInfoVersionElement, mopedWithLicensePlate.getMopedVersion(licensePlate));
  await bromfietsVerzekeringMethods.selectKindOfVehicle(mopedWithLicensePlate.getMopedModel(licensePlate));
  await genericMethods.typeText(bromfietsVerzekeringElements.birthDateElement, personaData.getPersonaBirthday(persona))
  await genericMethods.typeText(bromfietsVerzekeringElements.zipCodeElement, personaData.getPersonaZipcode(persona))
  await genericMethods.typeText(bromfietsVerzekeringElements.damageFreeYearsElement, damageFreeYears);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step two page of bromfiets verzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await bromfietsVerzekeringMethods.clickOnBasisDekking(dataTable.basisDekking);
  await bromfietsVerzekeringMethods.clickOnAanvullendeOpties(dataTable.aanvullendeOpties);
  await bromfietsVerzekeringMethods.selectAcc(dataTable.accessoires);
  await bromfietsVerzekeringMethods.selectOwnRisk(dataTable.ownRisk);
  await genericMethods.clickOnNextButton();
});

When(/^I enter step three page of bromfiets verzekering with$/, async (data) => {
  const dataTable = data.rowsHash();
  await bromfietsVerzekeringMethods.clickKindOfInsurance(dataTable.kindOfInsurance);
  await genericMethods.typeText(bromfietsVerzekeringElements.dateOfNameMopedElement, dataTable.dateOfName);
  await genericMethods.clickOnTAB(bromfietsVerzekeringElements.dateOfNameMopedElement);
  await genericMethods.typeText(bromfietsVerzekeringElements.meldCodeElement, dataTable.meldCode);
  await genericMethods.typeText(bromfietsVerzekeringElements.purchasePriceElement, dataTable.purchasePrice);
  await bromfietsVerzekeringMethods.clickOnDamageFreeYearsOfDifferentCompany(dataTable.damageFreeYearsDifferentCompany);
  await bromfietsVerzekeringMethods.clickMainDriver(dataTable.mainDriver);
  await bromfietsVerzekeringMethods.clickOwner(dataTable.owner);
  await genericMethods.clickOnNextButton();
  await browser.sleep(10000);
});
