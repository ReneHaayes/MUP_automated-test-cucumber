import {genericElements, genericMethods, stickyBalkElements} from "@support";
import {browser} from "protractor";
import {homePageEnum} from "../enum/woonVerzekeringEnum";


export class StickyBalkMethods {

  async verifyStickyBalkAndOpbouwVanBerekening(input: string) {
    await genericMethods.waitForElementNotVisible(genericElements.loader, browser.getPageTimeout);
    await genericMethods.waitForElementIsVisible(stickyBalkElements.stickyBalkElement, 10000);
    await genericMethods.clickOnElement(stickyBalkElements.stickyBalkElement);

    switch (input) {
      case homePageEnum.AUTOVERZEKERING: {
        await this.verifySummaryAutoVerzekering();
        break;
      }
      case homePageEnum.RECHTSBIJSTAND: {
        await this.verifySummaryRechtsbijstandVerzekering();
        break;
      }
      case homePageEnum.REISVERZEKERING: {
        await this.verifySummaryReisVerzekering();
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

    await genericMethods.clickOnElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingCloseClickElement);
  }

  async verifySummaryRechtsbijstandVerzekering() {
    await genericMethods.verifyTextInElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingGezinssamenstellingTextElement, 'Eenpersoonshuishouden');
    await genericMethods.verifyTextInElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingKeuzeTextElement, 'Verkeer & voertuigen');
  }

  async verifySummaryAutoVerzekering() {
    await genericMethods.waitForElementIsVisible(stickyBalkElements.bekijkOpbouwPremieSamenvattingCloseClickElement, browser.getPageTimeout);
    await genericMethods.verifyTextInElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingKentekenTextElement, '06-HN-DL');
    await genericMethods.verifyTextInElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingGeselecteerdeBasisDekkingTextElement, 'WA+');
  }

  async verifySummaryReisVerzekering() {
    await genericMethods.verifyTextInElement(stickyBalkElements.bekijkOpbouwPremieSamenvattingVerzekerdenTextElement, 'Uzelf');
  }
}
