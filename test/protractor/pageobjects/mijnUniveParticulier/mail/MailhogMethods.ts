import {genericMethods, loginPageElements, mijnUniveAccountElements} from "@support";
import {verzekeringPaginasEnum} from "@enum";

export class MailhogMethods {

  async verifyEmailHandling(input: string){
    await genericMethods.goToPage(verzekeringPaginasEnum.MAILHOG);
    await genericMethods.verifyTextInElement(loginPageElements.mailtoHeaderTextElement, input);
    await genericMethods.clickOnElement(loginPageElements.firstMessageClickElement);
    await genericMethods.clickOnElement(loginPageElements.plainClickElement);
    await genericMethods.clickOnElement(mijnUniveAccountElements.confirmNewEmailAddressPlainURLClickElement);
  }

}
