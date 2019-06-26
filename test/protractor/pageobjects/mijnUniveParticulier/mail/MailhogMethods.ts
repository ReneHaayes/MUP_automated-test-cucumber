import {verzekeringPaginasEnum} from "../../enum/genericEnum";
import {GenericMethods} from "../../generic/genericMethods";
import {LoginPageElements} from "../loginPage/loginPageElements";
import {MijnUniveAccountElements} from "../mijnUniveAccount/mijnUniveAccountElements";

let genericMethods: GenericMethods = new GenericMethods();
let loginPageElements: LoginPageElements = new LoginPageElements();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();

export class MailhogMethods {

  async verifyEmailHandling(input: string){
    await genericMethods.goToPage(verzekeringPaginasEnum.MAILHOG);
    await genericMethods.verifyTextInElement(loginPageElements.mailtoHeaderTextElement, input);
    await genericMethods.clickOnElement(loginPageElements.firstMessageClickElement);
    await genericMethods.clickOnElement(loginPageElements.plainClickElement);
    await genericMethods.clickOnElement(mijnUniveAccountElements.confirmNewEmailAddressPlainURLClickElement);
  }

}
