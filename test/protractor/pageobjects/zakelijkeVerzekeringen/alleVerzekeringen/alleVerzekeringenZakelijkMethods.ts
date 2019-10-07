import {breadCrumbEnum, verzekeringPaginasEnum} from "../../enum/genericEnum";
import {browser} from "protractor";
import {
  alleVerzekeringenElements,
  alleVerzekeringenZakelijkElements,
  genericElements,
  genericMethods
} from "../../../support";

export class AlleVerzekeringenZakelijkMethods {

  async verifyAlleVerzekeringInput(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkAansprakelijkheidsVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ZAKELIJK_AANSPRAKELIJKHEIDSVERZEKERING);
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
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.bedrijfsautoVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
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
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.milieSchadeVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.milieSchadeVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MILIEUSCHADEVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case breadCrumbEnum.PERSONENAUTOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.personenAutoVerzekeringZakelijkPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkAutoverzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.PERSONENAUTOVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJK_MOTOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkMotorVerzekering);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkMotorVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MOTORVERZEKERING_PAT, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJK_RECHTSBIJSTANDVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkRechtsBijstandVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenZakelijkElements.zakelijkRechtsbijstandVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.zakelijkRechtsbijstandVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(genericElements.zakelijkTractorVerzekeringPp);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.ZAKELIJK, 2);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ZAKELIJK_TRACTORVERZEKERING, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.tractorVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
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
        await genericMethods.waitForElementIsVisible(alleVerzekeringenZakelijkElements.maakAfspraakProductsMainButtonClickElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + '"" is not recognized as a command');
      }
    }
  }


  async clickAlleVerzekeringInput(input: string) {
    await genericMethods.clickOnElement('[class="linkLists_categoryItem"] [title="' + input + '"]');
  }

}
