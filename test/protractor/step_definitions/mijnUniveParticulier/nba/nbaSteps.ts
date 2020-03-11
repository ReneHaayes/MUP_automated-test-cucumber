import {Then} from "cucumber";
import {genericMethods, loginPageElements, nbaElements} from "@support";

Then(/^Verify customer has an nba shown on front end$/, async () => {
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  await genericMethods.verifyTextInElement(nbaElements.nbaTitleTextElement, nbaElements.nbaTitleText);
  await genericMethods.verifyTextInElement(nbaElements.nbaContentTextElement, nbaElements.nbaContentText);
  await genericMethods.clickOnElement(nbaElements.nbaLeesMeerClickElement);
  await genericMethods.verifyTextInElement(nbaElements.nbaOpenedLeesMeerTitleTextElement, nbaElements.nbaOpenedLeesMeerTitleText);
});
