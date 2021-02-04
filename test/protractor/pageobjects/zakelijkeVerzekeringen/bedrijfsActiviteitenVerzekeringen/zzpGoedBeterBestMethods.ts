import {browser} from 'protractor';

import {
  genericMethods,
  personaData,
  companyData,
  zzpGoedBeterBestElements,
  zzpGoedBeterBestMethods,
   genericElements,
} from '@support';
import {gender,
  genericEnum,
  yearlyMileageEnum
} from '@enum';

export class ZzpGoedBeterBestMethods {

  // PAGE_1
  async enterKvkNumber(company: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.kvkNumberElement, browser.getPageTimeout);
    await genericMethods.typeText(zzpGoedBeterBestElements.kvkNumberElement, companyData.getCompanyKvkNumber(company));
    await browser.sleep(500);
    await genericMethods.clickOnTAB(zzpGoedBeterBestElements.kvkNumberElement);
    }

  async selectCompanyActivity(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.companyActivityCorrectYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.companyActivityCorrectYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.companyActivityCorrectNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasEmployees(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.employeesOnPayrollYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.employeesOnPayrollYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.employeesOnPayrollNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasCompanyCar(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.hasCompanyCarYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.companyActivityCorrectYesElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasCompanyCarYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasCompanyCarNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectHasInventoryOnOtherAdress(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.hasInventoryOnOtherAdressYesElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasInventoryOnOtherAdressYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasInventoryOnOtherAdressNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectMileage(input: string) {
    switch (input) {
      case yearlyMileageEnum.TOT_12000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileageBelow12000Element);
        break;
      }
      case yearlyMileageEnum.TUSSEN_12000_EN_20000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileage12000To20000Element);
        break;
      }
      case yearlyMileageEnum.TUSSEN_20000_EN_25000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileage20000To25000Element);
        break;
      }
      case yearlyMileageEnum.TUSSEN_25000_EN_35000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileage25000To35000Element);
        break;
      }
      case yearlyMileageEnum.MORE_THAN_35000: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.mileageAbove35000Element);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // PAGE_2
  async selectGoedBeterBest(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.bannerElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.GOED: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.goedElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
        browser.sleep(5000);  // wachten op API voor prijsberekening
        // zet rechtsbijstand aan als aanvullend
        await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.selectRechtsbijstandElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.selectRechtsbijstandElement);
        // zet rechtsbijstand terug uit als aanvullend
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.selectRechtsbijstandElement);
        break;
      }
      case genericEnum.BETER: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.beterElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
        browser.sleep(5000); // wachten op API voor prijsberekening
        // zet rechtsbijstand aan als aanvullend
        await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.selectRechtsbijstandElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.selectRechtsbijstandElement);
        // zet rechtsbijstand terug uit als aanvullend
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.selectRechtsbijstandElement);
        break;
      }
      case genericEnum.BEST: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.bestElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.nextButton);
        browser.sleep(5000); // wachten op API voor prijsberekening
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  // PAGE 3
  // zit in STEP 2

  // PAGE 4
  async selectCompanyCar(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.transferDate, browser.getPageTimeout);
    await genericMethods.typeText(zzpGoedBeterBestElements.transferDate, genericMethods.getDate('today'));
    await genericMethods.typeText(zzpGoedBeterBestElements.reportingCode, '0000');
    await zzpGoedBeterBestMethods.selectOwnerOfCar(input);
  }
        async selectOwnerOfCar(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.ownerNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.ownerYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.ownerNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectFireHazardousWork(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.fireHazardousWorkNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.fireHazardousWorkYesElement);
        await genericMethods.clickOnTAB(zzpGoedBeterBestElements.fireHazardousWorkYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.fireHazardousWorkNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectWorkMainlyAbroad(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.workMainlyAbroadNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.workMainlyAbroadYesElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.workMainlyAbroadYesElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.countriesBeLuxDuElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.countriesOtherInEuropeElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.countriesOutsideEuropeElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationWorkAbroadElement, 'test');
        break;
      }
      case genericEnum.NO: {
       await genericMethods.clickOnElement(zzpGoedBeterBestElements.workMainlyAbroadNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectWorkInSpecificSector(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.workInSpecificSectorNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.workInSpecificSectorYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.workInSpecificSectorNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDemolitionWork(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.demolitionWorkNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.demolitionWorkYesElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationDemolitionWorkElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.demolitionWorkNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectTakeOnContractsForZZPer(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.takeOnContractsForZZPerNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.takeOnContractsForZZPerYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.takeOnContractsForZZPerNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectWorkWithAsbestos(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.workWithAsbestosNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.workWithAsbestosYesElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationAsbestosElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.workWithAsbestosNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectBuildScaffolding(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.buildScaffoldingNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.buildScaffoldingYesElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationScaffoldingElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.buildScaffoldingNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectUseHeavyMaterials(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.useHeavyMaterialsNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.useHeavyMaterialsYesElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationHeavyMaterialsElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.useHeavyMaterialsNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectConflictsThreeYearsPrior(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.conflictsThreeYearsPriorNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.conflictsThreeYearsPriorYesElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationConflictsElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.conflictsThreeYearsPriorNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // LEGAL COUNCIL INSURANCE QUESTIONS
  async selectHasOtherActivities(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.hasOtherActivitiesNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasOtherActivitiesYesElement);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationOtherActivitiesElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.hasOtherActivitiesNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


// ALMOST INSURED PAGE
  async selectInsuranceHistoryZZP(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.insuranceHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.insuranceHistoryYesElement);
        browser.sleep(2000); // tijd om te laden
        await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.explanationInsuranceHistoryElement, browser.getPageTimeout);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationInsuranceHistoryElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.insuranceHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectCriminalHistoryZZP(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.criminalHistoryNoElement, browser.getPageTimeout);
    browser.sleep(500);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.criminalHistoryYesElement);
        await genericMethods.waitForElementIsVisible(genericElements.lightBoxClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(genericElements.lightBoxClickElement);
        browser.sleep(2000); // tijd om te laden
        await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.criminalHistoryYesElement, browser.getPageTimeout);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.criminalHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectPersonnelOnPayroll(input: string) {
    await genericMethods.waitForElementIsVisible(genericElements.criminalHistoryNoElement, browser.getPageTimeout);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryYesElement);
        await genericMethods.waitForElementIsVisible(genericElements.lightBoxClickElement, browser.getPageTimeout);
        await genericMethods.clickOnElement(genericElements.lightBoxClickElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(genericElements.criminalHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectDamageHistoryZZP(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.damageHistoryNoElement, browser.getPageTimeout);
    browser.sleep(500);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.damageHistoryYesElement);
        browser.sleep(2000); // tijd om te laden
        await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.explanationInsuranceHistoryElement, browser.getPageTimeout);
        await genericMethods.typeText(zzpGoedBeterBestElements.explanationDamageHistoryElement, 'test');
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.damageHistoryNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


  async selectLegalQuestionsZZP(input: string) {
    await genericMethods.waitForElementIsVisible(zzpGoedBeterBestElements.legalDamagesPastFiveYearsNoElement, browser.getPageTimeout);
    browser.sleep(500);
    switch (input) {
      case genericEnum.YES: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalDamagesPastFiveYearsYesElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalAnticipateAppealYesElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalChangeInDestinationPlanYesElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalMoreThanTenReceivablesYesElement);
        break;
      }
      case genericEnum.NO: {
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalDamagesPastFiveYearsNoElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalAnticipateAppealNoElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalChangeInDestinationPlanNoElement);
        await genericMethods.clickOnElement(zzpGoedBeterBestElements.legalMoreThanTenReceivablesNoElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  // Last page
  async verifyThankYouPageText(input: string) {
    switch (personaData.getPersonaGender(input)) {
      case gender.MALE: {
        await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.thankYouElement1, 'Beste heer ' + personaData.getPersonaLastName(input) + ',');
        await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.thankYouElement2, 'Hartelijk dank voor het aanvragen van uw Pakket voor zzp’ers in de bouw bij Univé. Wij zullen uw aanvraag nader beoordelen om te zien of wij u deze verzekering kunnen aanbieden.');
        break;
      }
      case gender.FEMALE: {
        await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.thankYouElement1, 'Beste mevrouw ' + personaData.getPersonaLastName(input) + ',');
        await genericMethods.verifyTextInElement(zzpGoedBeterBestElements.thankYouElement2, 'Hartelijk dank voor het aanvragen van uw Pakket voor zzp’ers in de bouw bij Univé. Wij zullen uw aanvraag nader beoordelen om te zien of wij u deze verzekering kunnen aanbieden.');
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + genericMethods.constructor.name + ' "" is not recognized as a command');
      }
    }
  }
}
