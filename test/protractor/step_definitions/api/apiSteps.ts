import {Given, When} from "cucumber";
import {ResponsePromise} from "protractor-http-client/dist/promisewrappers";
import {apiElements, apiMethods} from "@support";

Given(/^api on location$/, async () => {
  let createAccount: ResponsePromise = await apiMethods.postWithAlreadyLoggedInToken(apiElements.changePasswordEndpoint, apiMethods.createChangePasswordBody('Welkom01!', 'woestenburg'));
  console.log(createAccount.body.toString());
  console.log(createAccount.statusCode);
  // await apiMethods.getTokenWhenAlreadySignedIn('woestenburg');
});

When(/^search api$/, async () => {
  await apiMethods.checkIfAccountExistsWhenDoesntExistCreateAccount("woestenburg")
});
