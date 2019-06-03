import {Given, When} from "cucumber";
import {ResponsePromise} from "protractor-http-client/dist/promisewrappers";
import {ApiMethods} from "../../pageobjects/api/apiMethods";
import {ApiElements} from "../../pageobjects/api/apiElements";

let apiMethods: ApiMethods = new ApiMethods();
let apiElements: ApiElements = new ApiElements();

Given(/^api on location$/, async () => {
  let createAccount: ResponsePromise = await apiMethods.postWithAlreadyLoggedInToken(apiElements.changePasswordEndpoint, apiMethods.createChangePasswordBody('Welkom01!', 'annie'));
  console.log(createAccount.body.toString());
  console.log(createAccount.statusCode);
  // await apiMethods.getTokenWhenAlreadySignedIn('annie');
});

When(/^search api$/, async () => {
  await apiMethods.checkIfAccountExistsWhenDoesntExistCreateAccount("annie")
});
