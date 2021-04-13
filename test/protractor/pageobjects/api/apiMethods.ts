import {HttpClient} from 'protractor-http-client/dist/http-client';
import {ResponsePromise} from 'protractor-http-client/dist/promisewrappers';
import {verzekeringPaginasEnum} from '../enum/genericEnum';
import {apiElements, genericMethods, personaData} from '@support';


export class ApiMethods {

  async postWithAlreadyLoggedInToken(url: string, body: string): Promise<ResponsePromise> {
    const client = new HttpClient();
    return await client.post(url, body,
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + await this.getTokenWhenAlreadySignedIn() + '',
        'cache-control': 'no-cache'
      });
  }

  async postWithPostmanToken(url: string, body: string): Promise<ResponsePromise> {
    const client = new HttpClient();
    return await client.post(url, body,
      {
        'Content-Type': 'application/json',
        'Postman-Token': 'b7dc912c-3479-430a-a2d9-bfd80c8034a9',
        'cache-control': 'no-cache'
      });
  }

  async get(url: string, header: string): Promise<ResponsePromise> {
    const client = new HttpClient();
    return await client.get(url, header);
  }

  createChangePasswordBody(newPassword: string, persona: string): string {
    return '{"oldPassword": "' + newPassword + '", "newPassword": "' + personaData.getPersonaPassword(persona) + '"}';
  }

  createAccountBody(persona: string): string {
    const email: string = '{"emailAddress": "' + personaData.getPersonaEmailAddress(persona) + '",';
    const password: string = '"password": "' + personaData.getPersonaPassword(persona) + '",';
    const dateOfBirth: string = '"dateOfBirth": "' + personaData.getPersonaBirthYear(persona) + '-' + personaData.getPersonaBirthMonth(persona) + '-'
      + personaData.getPersonaBirthday(persona) + 'T00:00:00Z",';
    const postalCode: string = '"postalCode": "' + personaData.getPersonaZipcode(persona) + '",';
    const receiveNewsLetter: string = '"receiveNewsLetter": ' + false + '}';
    return email + password + dateOfBirth + postalCode + receiveNewsLetter;
  }

  async checkIfAccountExistsWhenDoesntExistCreateAccount(persona: string) {
    const searchAccount: ResponsePromise = await this.get(apiElements.oneginiSearchAccountWithEmailAddressEndpoint(personaData.getPersonaEmailAddress(persona)), '');
    try {
      await genericMethods.verifyTextContains(searchAccount.body.toString(), '"totalResults":1');
    } catch (e) {
      const createAccount: ResponsePromise = await this.postWithPostmanToken(
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

