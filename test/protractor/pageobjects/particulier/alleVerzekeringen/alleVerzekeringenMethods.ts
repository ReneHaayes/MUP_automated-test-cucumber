import {GenericMethods} from "../../generic/genericMethods";
import {selectAlleVerzekeringEnum} from "../../enum/alleVerzekeringEnum";
import {AlleVerzekeringenElements} from "./alleVerzekeringenElements";
import {breadCrumbEnum, verzekeringPaginasEnum} from "../../enum/genericEnum";
import {browser} from "protractor";
import {GetUrlUnive} from "../../generic/getUrlUnive";

let genericMethods: GenericMethods = new GenericMethods();
let getUrlUnive: GetUrlUnive = new GetUrlUnive();
let alleVerzekeringenElements: AlleVerzekeringenElements = new AlleVerzekeringenElements();

export class AlleVerzekeringenMethods {

  async selectAlleVerzekeringDropdown(input: string) {
    switch (input) {
      case selectAlleVerzekeringEnum.ALLE_VERZEKERING: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.alleUniveVerzekeringenSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_COLLECTIEF_VOORDEEL: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwCollectiefVoordeelSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_FINANCIELE_TOEKOMST: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwFinancieleToekomstSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_GEZONDHEID: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwGezondheidSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_HUIS: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwHuisSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_NABESTAANDEN: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwNabestaandenSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_ONLINE_VEILIGHEID: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwOnlineVeiliigheidSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_RECHT: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwRechtSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_VERVOER: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwVervoerSelectElement);
        break;
      }
      case selectAlleVerzekeringEnum.UW_VRIJE_TIJD: {
        await genericMethods.selectInDropdown(alleVerzekeringenElements.selectVerzekeringenDropdownElement, alleVerzekeringenElements.uwVrijeTijdSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + '"" is not recognized as a command');
      }
    }
  }

  async clickAlleVerzekeringInput(input: string) {
    await genericMethods.clickOnElement('[class="allInsurances_listItemLink"][title="' + input + '"]');
  }

  async verifyAlleVerzekeringInput(input: string) {
    switch (input) {
      case verzekeringPaginasEnum.ZORGVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.ZORGVERZEKERING);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.zorgVerzekeringPageH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ZORGVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.zorgVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.COLLECTIEVE_ZORGVERZEKERING: {
        const url: string = await getUrlUnive.getUrlUnive(verzekeringPaginasEnum.COLLECTIEVE_ZORGVERZEKERING);
        await genericMethods.verifyUrlContains(url);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.collectieveZorgVerzekeringH1TitleTextElement, alleVerzekeringenElements.collectieveZorgVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ZORGVERZEKERING, 2);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.COLLECTIEF, 3);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.collectieveZorgVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      // case verzekeringPaginasEnum.ONGEVALLENVERZEKERING: {
      //   await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.ONGEVALLENVERZEKERING);
      //   await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.ongevallenVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumOngevallenverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.verzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.REISVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.REISVERZEKERING);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.REISVERZEKERING);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumReisverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.reisVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING_PP);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.doorlopendeReisVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumDoorlopendeReisverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.verzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.KORTLOPENDEREISVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.KORTLOPENDEREISVERZEKERING_PP);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.kortlopendeReisVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumKortlopendeReisverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.reisVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.ANNULERINGSVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.ANNULERINGSVERZEKERING);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.annuleringsVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumAnnuleringsverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.verzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.CAMPERVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.CAMPERVERZEKERING);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.camperVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumCaravanverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.camperVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.CARAVANVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.CARAVANVERZEKERING);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.caravanVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumCaravanverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.caravanVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.BOOTVERZEKERING: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.BOOTVERZEKERING);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.BOOTVERZEKERING);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumBootverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.bootVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.AUTOVERZEKERING_PAT);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.AUTOVERZEKERING_PAT);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumAutoverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.autoVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      // case verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT: {
      //   await genericMethods.verifyUrlContains(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT);
      //   await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.bromfietsVerzekeringH1TitleText);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.firstBreadcrumbHomeElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.secondBreadcrumBromfietsverzekeringElement, browser.getPageTimeout);
      //   await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.bromfietsVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
      //   break;
      // }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + '"" is not recognized as a command');
      }
    }
  }


}
