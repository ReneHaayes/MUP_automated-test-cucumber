import {GenericMethods} from "../../generic/genericMethods";
import {selectAlleVerzekeringEnum} from "../../enum/alleVerzekeringEnum";
import {AlleVerzekeringenElements} from "./alleVerzekeringenElements";
import {breadCrumbEnum, verzekeringPaginasEnum} from "../../enum/genericEnum";
import {browser} from "protractor";
import {GetUrlUnive} from "../../generic/getUrlUnive";
import {HmPageElements} from "../../generic/hmPageElements";

let genericMethods: GenericMethods = new GenericMethods();
let getUrlUnive: GetUrlUnive = new GetUrlUnive();
let hmPageElements: HmPageElements = new HmPageElements();
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

  async clickAlleVerzekeringBottomInput(input: string) {
    await genericMethods.clickOnElement('[href="/'+input+'"][class="allInsurances_listItemLink"]');
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
      case verzekeringPaginasEnum.ONGEVALLENVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.ONGEVALLENVERZEKERING);
        await genericMethods.verifyTextInElement(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.ongevallenVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ONGEVALLENVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.verzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.REISVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.REISVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.REISVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.REISVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.reisVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING: {
        await genericMethods.verifyUrlContains(verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING_PP);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.doorlopendeReisVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.DOORLOPENDEREISVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.verzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.KORTLOPENDEREISVERZEKERING: {
        await genericMethods.verifyUrlContains(verzekeringPaginasEnum.KORTLOPENDEREISVERZEKERING_PP);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.kortlopendeReisVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.KORTLOPENDEREISVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.reisVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ANNULERINGSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.ANNULERINGSVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.annuleringsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ANNULERINGSVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.verzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.CAMPERVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.CAMPERVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.camperVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.CAMPERVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.camperVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.CARAVANVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.CARAVANVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.caravanVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.CARAVANVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.caravanVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BOOTVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.BOOTVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.BOOTVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BOOTVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.bootVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.AUTOVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.AUTOVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.AUTOVERZEKERING_PAT);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.AUTOVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.autoVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.bromfietsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.bromfietsVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.SCOOTERVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.SCOOTERVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.SCOOTERVERZEKERING_PAT);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.SCOOTERVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.scooterVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.MOTORVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.MOTORVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.MOTORVERZEKERING_PAT);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MOTORVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.motorVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.FIETSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.FIETSVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.FIETSVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.FIETSVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.fietsVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.ELEKTRISCHE_FIETSVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.ELEKTRISCHE_FIETSVERZEKERING_PP);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.elektrischeFietsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.ELEKTRISCHE_FIETSVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.elektrischeFietsVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.SCOOTMOBIELVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.SCOOTMOBIELVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.scootmobielVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.SCOOTMOBIELVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.scootmobielVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.OLDTIMERVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.OLDTIMERVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.OLDTIMERVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.OLDTIMERVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.oldtimerVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.TRIKEVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.MOTORVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.MOTORVERZEKERING_PAT);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MOTORVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.motorVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.QUADVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.MOTORVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.MOTORVERZEKERING_PAT);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.MOTORVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.motorVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.HIGH_SPEED_E_BIKE_VERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.bromfietsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.BROMFIETSVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.bromfietsVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.WOONPAKKET: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.WOONVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.WOONVERZEKERING_PAT);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.WOONVERZEKERING_PAT, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.woonVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.INBOEDELVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.INBOEDELVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.inboedelVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.INBOEDELVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.inboedelVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.OPSTALVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.OPSTALVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.OPSTALVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.OPSTALVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.inboedelVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.HYPOTHEEK: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.HYPOTHEEK);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.HYPOTHEEK);
        // await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        // await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HYPOTHEEK, 2);
        // These methods can be put on when the breadcrumn is realised (it has been put on the backlog)
        break;
      }
      case verzekeringPaginasEnum.KOSTBAARHEDEN_VERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.KOSTBAARHEDEN_VERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.kostbaarhedenVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.KOSTBAARHEDEN_VERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.kostbaarhedenVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING_PP: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.rechtsbijstandVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.RECHTSBIJSTANDVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.rechtsbijstandVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.AANSPRAKELIJKHEIDSVERZEKERING_PAT: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.AANSPRAKELIJKHEIDSVERZEKERING_PAT);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, alleVerzekeringenElements.aansprakelijkheidsVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.AANSPRAKELIJKHEIDSVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.aansprakelijkheidsVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.PENSIOEN: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.PENSIOEN);
        await genericMethods.verifyTextInElementIgnoreCase(hmPageElements.overUniveTitleTextElement, verzekeringPaginasEnum.PENSIOEN);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.PENSIOEN, 2);
        break;
      }
      case verzekeringPaginasEnum.LIJFRENTEVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.LIJFRENTEVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.lijfrenteVerzekeringH1TitleTextElement, alleVerzekeringenElements.lijfrenteVerzekeringH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.LIJFRENTEVERZEKERING, 2);
        break;
      }
      case verzekeringPaginasEnum.UITVAARTVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.UITVAARTVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(alleVerzekeringenElements.productPageH1TitleTextElement, verzekeringPaginasEnum.UITVAARTVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.UITVAARTVERZEKERING, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.uitvaartVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      case verzekeringPaginasEnum.OVERLIJDENSRISICOVERZEKERING: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.OVERLIJDENSRISICOVERZEKERING);
        await genericMethods.verifyTextInElementIgnoreCase(hmPageElements.overUniveTitleTextElement, verzekeringPaginasEnum.OVERLIJDENSRISICOVERZEKERING);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.OVERLIJDENSRISICOVERZEKERING, 2);
        break;
      }
      case verzekeringPaginasEnum.MIJNGEMAK: {
        await genericMethods.verifyUrlContainsIgnoreCase(verzekeringPaginasEnum.MIJNGEMAK);
        await genericMethods.verifyTextInElementIgnoreCase(hmPageElements.overUniveTitleTextElement, alleVerzekeringenElements.mijnGemakH1TitleText);
        await genericMethods.verifyBreadcrumbOnPosition(verzekeringPaginasEnum.HOME, 1);
        await genericMethods.verifyBreadcrumbOnPosition(breadCrumbEnum.MIJN_GEMAK, 2);
        await genericMethods.waitForElementIsVisible(alleVerzekeringenElements.mijngemakVerzekeringBerekenUwPremieButtonClickElement, browser.getPageTimeout);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + '"" is not recognized as a command');
      }
    }
  }


}
