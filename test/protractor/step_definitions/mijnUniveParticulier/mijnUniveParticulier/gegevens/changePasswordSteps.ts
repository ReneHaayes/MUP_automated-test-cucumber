import {Then, When} from "cucumber";
import {GenericMethods} from "../../../../pageobjects/generic/genericMethods";
import {ApiMethods} from "../../../../pageobjects/api/apiMethods";
import {ApiElements} from "../../../../pageobjects/api/apiElements";
import {MijnUniveAccountElements} from "../../../../pageobjects/mijnUniveParticulier/mijnUniveAccount/mijnUniveAccountElements";
import {PersonaData} from "../../../../pageobjects/persona/persona";
import {LoginPageElements} from "../../../../pageobjects/mijnUniveParticulier/loginPage/loginPageElements";
import {ResponsePromise} from "protractor-http-client/dist/promisewrappers";


let genericMethods: GenericMethods = new GenericMethods();
let apiMethods: ApiMethods = new ApiMethods();
let apiElements: ApiElements = new ApiElements();
let mijnUniveAccountElements: MijnUniveAccountElements = new MijnUniveAccountElements();
let personaData: PersonaData = new PersonaData();
let loginPageElements: LoginPageElements = new LoginPageElements();

When(/^Customer changes password for (.*) with (.*)$/, async (persona: string, newPassword: string) => {
  await genericMethods.clickOnElement(mijnUniveAccountElements.mijnGegevensMenuClickElement);
  await genericMethods.clickOnElement(mijnUniveAccountElements.changePasswordClickElement);
  await genericMethods.typeText(mijnUniveAccountElements.currentPasswordInputElement, personaData.getPersonaPassword(persona));
  await genericMethods.typeText(mijnUniveAccountElements.newPasswordInputElement, newPassword);
  await genericMethods.typeText(mijnUniveAccountElements.newPasswordControlInputElement, newPassword);
  await genericMethods.clickOnElement(mijnUniveAccountElements.sendButtonClickElement);
});

Then(/^Verify (.*) is logged in with (.*)$/, async (persona: string, newPassword: string) => {
  await genericMethods.typeText(loginPageElements.loginEmailInputElement, personaData.getPersonaEmailAddress(persona));
  await genericMethods.typeText(loginPageElements.loginPasswordInputElement, newPassword);
  await genericMethods.clickOnElement(loginPageElements.loginSubmitButtonClickElement);
  await genericMethods.verifyTextInElement(loginPageElements.loggedInHeaderH1TextElement, loginPageElements.loggedInHeaderH1Text);
  let createAccount: ResponsePromise = await apiMethods.postWithAlreadyLoggedInToken(apiElements.changePasswordEndpoint, apiMethods.createChangePasswordBody(newPassword, persona));
  await genericMethods.verifyNumber(await createAccount.statusCode, 200);
});

