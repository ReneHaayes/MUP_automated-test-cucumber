import {browser} from "protractor";

export class ApiElements {

  //API URL:
  createAccountEndpoint: string = 'https://api-'+browser.params.env.environment+'.unive.nl/v1/customer/account/create';
  changePasswordEndpoint: string = 'https://api-'+browser.params.env.environment+'.unive.nl/v1/customer/password';
  oauthtestUrl: string = 'https://oauthtest.do.unive.nl/'+browser.params.env.environment+'/index.html';

  //ONEGINI
  oneginiSearchAccountWithEmailAddressEndpoint(emailAddress: string): string {
    let username: string = 'persons_api_rest_user';
    let password: string = '841fa3769515d5c7354be0a42882ebf9bb728d3f0c274dfdd0b0113e905255a3';
    return 'https://'+username+':'+password+'@login.'+browser.params.env.environment+'.unive.nl/api/persons/search?email_address=' + emailAddress;
  }

  //OAUTHTEST
  startAuthorizeClickElement: string = '[ng-click="login()"]';
  tokenTextElement: string = '[class="ng-binding"]';
}
