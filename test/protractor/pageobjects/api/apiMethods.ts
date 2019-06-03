import {HttpClient} from "protractor-http-client/dist/http-client";
import {ResponsePromise} from "protractor-http-client/dist/promisewrappers";
import {PersonaData} from "../persona/persona";
import {ApiElements} from "./apiElements";
import {GenericMethods} from "../generic/genericMethods";
import {verzekeringPaginasEnum} from "../enum/genericEnum";

let personaData: PersonaData = new PersonaData();
let apiElements: ApiElements = new ApiElements();
let genericMethods: GenericMethods = new GenericMethods();

export class ApiMethods {

  async postWithAlreadyLoggedInToken(url: string, body: string): Promise<ResponsePromise> {
    let client = new HttpClient();
    return await client.post(url, body,
      {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + await this.getTokenWhenAlreadySignedIn() + "",
        "cache-control": "no-cache"
      });
  }

  async postWithPostmanToken(url: string, body: string): Promise<ResponsePromise> {
    let client = new HttpClient();
    return await client.post(url, body,
      {
        "Content-Type": "application/json",
        "Postman-Token": "b7dc912c-3479-430a-a2d9-bfd80c8034a9",
        "cache-control": "no-cache"
      });
  }

  async get(url: string, header: string): Promise<ResponsePromise> {
    let client = new HttpClient();
    return await client.get(url, header);
  }

  createChangePasswordBody(newPassword: string, persona: string): string {
    return '{"oldPassword": "' + newPassword + '", "newPassword": "' + personaData.getPersonaPassword(persona) + '"}'
  }

  createAccountBody(persona: string): string {
    let email: string = '{"emailAddress": "' + personaData.getPersonaEmailAddress(persona) + '",';
    let password: string = '"password": "' + personaData.getPersonaPassword(persona) + '",';
    let dateOfBirth: string = '"dateOfBirth": "' + personaData.getPersonaBirthYear(persona) + '-' + personaData.getPersonaBirthMonth(persona) + '-'
      + personaData.getPersonaBirthday(persona) + 'T00:00:00Z",';
    let postalCode: string = '"postalCode": "' + personaData.getPersonaZipcode(persona) + '",';
    let receiveNewsLetter: string = '"receiveNewsLetter": ' + false + '}';
    return email + password + dateOfBirth + postalCode + receiveNewsLetter
  }

  async checkIfAccountExistsWhenDoesntExistCreateAccount(persona: string) {
    let searchAccount: ResponsePromise = await this.get(apiElements.oneginiSearchAccountWithEmailAddressEndpoint(personaData.getPersonaEmailAddress(persona)), "");
    try {
      await genericMethods.verifyTextContains(searchAccount.body.toString(), '"totalResults":1')
    } catch (e) {
      let createAccount: ResponsePromise = await this.postWithPostmanToken(
        apiElements.createAccountEndpoint,
        this.createAccountBody(persona));
      console.log(createAccount.statusCode);
      await genericMethods.verifyNumber(await createAccount.statusCode, 201);
    }
  }

  async getTokenWhenAlreadySignedIn(): Promise<string> {
    await genericMethods.goToPage(verzekeringPaginasEnum.OAUTH);
    await genericMethods.clickOnElement(apiElements.startAuthorizeClickElement);
    return await genericMethods.getText(apiElements.tokenTextElement);
  }

}

