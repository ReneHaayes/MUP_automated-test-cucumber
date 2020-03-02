import {When} from "cucumber";
import {genericMethods, populaireProductenElements} from "@support";
import {numbersEnum} from "@enum";

When(/^Customer clicks on (.*) tile of the popular product on verzekering bijsluiten page$/, async (wichtTile: string) => {
  await genericMethods.verifyTextInElement(populaireProductenElements.titleTextElement, populaireProductenElements.titleText);
  await genericMethods.verifyTextInElement(populaireProductenElements.firstTileTitleTextElement, populaireProductenElements.firstTileTitleText);
  await genericMethods.verifyTextInElement(populaireProductenElements.secondTileTitleTextElement, populaireProductenElements.secondTileTitleText);
  await genericMethods.verifyTextInElement(populaireProductenElements.thirthTileTitleTextElement, populaireProductenElements.thirthTileTitleText);

  switch (wichtTile) {
    case numbersEnum.FIRST: {
      await genericMethods.clickOnElement(populaireProductenElements.firstTileTitleTextElement);
      break;
    }
    case numbersEnum.SECOND: {
      await genericMethods.clickOnElement(populaireProductenElements.secondTileTitleTextElement);
      break;
    }
    case numbersEnum.THIRTH: {
      await genericMethods.clickOnElement(populaireProductenElements.thirthTileTitleTextElement);
      break;
    }
    default: {
      throw new Error('The input: "" ' + wichtTile + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
});

When(/^Verify the tile correctly redirects url for the (.*) tile$/, async (wichtTile: string) => {
  switch (wichtTile) {
    case numbersEnum.FIRST: {
      await genericMethods.verifyUrlContainsIgnoreCase('woonverzekering');
      break;
    }
    case numbersEnum.SECOND: {
      await genericMethods.verifyUrlContainsIgnoreCase('autoverzekering');
      break;
    }
    case numbersEnum.THIRTH: {
      await genericMethods.verifyUrlContainsIgnoreCase('aansprakelijkheidsverzekering');
      break;
    }
    default: {
      throw new Error('The input: "" ' + wichtTile + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
    }
  }
});
