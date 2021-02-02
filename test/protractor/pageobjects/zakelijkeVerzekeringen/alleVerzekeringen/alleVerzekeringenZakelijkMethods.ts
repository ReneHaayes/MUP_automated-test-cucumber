import {browser} from 'protractor';
import {
  alleVerzekeringenElements,
  alleVerzekeringenZakelijkElements,
  genericElements,
  genericMethods
} from '@support';
import {
  breadCrumbEnum, selectAlleVerzekeringEnum,
  verzekeringPaginasEnum
} from '@enum';

export class AlleVerzekeringenZakelijkMethods {

  async clickAlleVerzekeringInput(input: string) {
    await genericMethods.clickOnElement('[class="allInsurances_listItemLink"][title="' + input + '"]');
  }

  async selectAlleVerzekeringDropdown(input: string) {
    switch (input) {
      case selectAlleVerzekeringEnum.ALLE_VERZEKERING: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.alleUniveVerzekeringenSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_BEDRIJFSACTIVITEITEN: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwBedrijfsactiviteiten);
        break;
      }
      case selectAlleVerzekeringEnum.UW_MOBILITEIT: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwMobiliteit);
        break;
      }
      case selectAlleVerzekeringEnum.UW_INKOMEN: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwInkomen);
        break;
      }
      case selectAlleVerzekeringEnum.UW_BEDRIJFSMIDDELEN: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwBedrijfsmiddelen);
        break;
      }
      case selectAlleVerzekeringEnum.UW_PERSONEEL: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwPersoneel);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + '"" is not recognized as a command');
      }
    }
  }

  async verifyAlleVerzekeringInput(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkAansprakelijkheidsVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkAansprakelijkheidsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.AANSPRAKELIJKHEIDSVERZEKERINGBEDRIJVEN, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.aansprakelijkheidsVerzekeringZakelijkBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BEDRIJFSAUTOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.bedrijfsAutoVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.bedrijfsAutoVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BEDRIJFSAUTOVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BEDRIJFSSCHADEVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.bedrijfsSchadeVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.bedrijfsSchadeVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BEDRIJFSSCHADEVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BEROEPSAANSPRAKELIJKHEID: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.beroepsAansprakelijkheidVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.beroepsAansprakelijkheidsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.BEROEPSAANSPRAKELIJKHEIDSVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakInlineButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BESTUURDERSAANSPRAKELIJKHEID: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.bestuurdersAansprakelijkheidVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.bestuurdersAansprakelijkheidsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.BESTUURDERSAANSPRAKELIJKHEIDSVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakInlineButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.CONSTRUCTIE_ALLRISK_VERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.constructieAllRiskVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.constructieAllRiskVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.CONSTRUCTIE_ALLRISK_VERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakInlineButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.EIGENVERVOERVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.eigenVervoerVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.eigenVervoerVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.EIGENVERVOERVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.eigenVervoerVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.GEBOUWENVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkGebouwen);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.gebouwenVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.GEBOUWENVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.HANDELAARSKENTEKENVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.handelaarsKentekenVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.handelaarsKentekenVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HANDELAARSKENTEKENVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakInlineButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.MILIEUSCHADEVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.milieuSchadeVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.milieSchadeVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MILIEUSCHADEVERZEKERING, 3);
        break;
      }
      case breadCrumbEnum.PERSONENAUTOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.personenAutoVerzekeringZakelijkPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkAutoverzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.PERSONENAUTOVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJK_MOTORFIETSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkMotorfietsVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkMotorVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MOTORFIETSVERZEKERING_PAT, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJK_RECHTSBIJSTANDVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkRechtsBijstandVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkRechtsbijstandVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkTractorVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.VRACHTAUTOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.vrachtAutoVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.hmPageTitleElement, alleVerzekeringenZakelijkElements.vrachtAutoH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BEDRIJFSAUTOVERZEKERING, 3);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.VRACHTAUTOVERZEKERING, 4);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.vrachtAutoVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.WERKMATERIAALVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.werkmateriaalVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.werkmateriaalVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.WERKMATERIAALVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.AANHANGWAGENVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.aanhangwagenVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.hmPageTitleElement, verzekeringPaginasEnum.AANHANGWAGENVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.AANHANGWAGENVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJKE_BROMFIETSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkeBromfietsverzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ZAKELIJKE_BROMFIETSVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BESTELAUTOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.bestelautoVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.BESTELAUTOVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BESTELAUTOVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.bestelautoVerzekeringVerifyElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ARBEIDSONGESCHIKTHEIDSVERZEKERING_ZZP: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.arbeidsOngeschiktheidsVerzekeringZzpPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ARBEIDSONGESCHIKTHEIDSVERZEKERING_ZZP);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ARBEIDSONGESCHIKTHEIDSVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.aovZZPBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ARBEIDSONGESCHIKTHEIDSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.arbeidsOngeschiktheidsVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ARBEIDSONGESCHIKTHEIDSVERZEKERING_AOV);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ARBEIDSONGESCHIKTHEIDSVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.PENSIOEN_VOOR_ONDERNEMERS: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.pensioenVoorOndernemersPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.UW_PENSIOEN);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.PENSIOEN_VOOR_ONDERNEMERS, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ROERENDEZAKENVERZEKERING_ZAKELIJK: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.roerendeZakenVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ROERENDE_ZAKEN_VERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ROERENDEZAKENVERZEKERING_ZAKELIJK, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.WERKNEMERSSCHADEVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.werknemersSchadeVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.WERKNEMERS_SCHADE_VERZEKERING_WSV);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.WERKNEMERSSCHADEVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.WERKNEMERSPENSIOEN: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.werknemersPensioenVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.PENSIOEN_VOOR_UW_PERSONEEL);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.WERKNEMERSPENSIOEN, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.berekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + '"" is not recognized as a command');
      }
    }
  }
}
