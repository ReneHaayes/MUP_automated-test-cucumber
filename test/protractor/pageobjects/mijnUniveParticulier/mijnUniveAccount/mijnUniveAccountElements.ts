export class MijnUniveAccountElements {

  //CREATE MIJN UNIVE ACCOUNT
  accountAanmakenButtonClickElement: string = '[id="section3"] [class="btn submit-btn col-xs-12"]';
  mijnUniveBirthdayInputElement: string = '#geboortedatum';
  mijnUniveZipcodeInputElement: string = '#postcode';
  mijnUniveLastFourNumberOfAccountNumberInputElement: string = '#bankAccount';
  mijnUniveEmailAddressInputElement: string = '#email';
  mijnUniveEmailAddressConfirmationInputElement: string = '#emailConfirmation';
  mijnUniveChoosePasswordInputElement: string = '#password';
  mijnUnivePasswordConfirmationInputElement: string = '#password-confirmation';
  mijnUniveSubmitButtonClickElement: string = '[class="register_submit"]';

  //MIJN UNIVE MENU
  mijnGegevensMenuClickElement: string = '[class="page-nav-item__link media"][href="/mijnunive/mijn-gegevens"]';

  //DELETE ACCOUNT
  accountVerwijderenClickElement: string = '[class="button-link link link--warning"][href="/mijnunive/account-verwijderen"]';
  submitVerwijderMijnAccountClickElement: string = '[class="deleteAccount_submit"]';

  //SUCCESVOL AANMELDEN
  aanmeldenSuccesvolTextElement: string = '#aanmelden-succesvol';
  aanmeldenSuccesvolText: string = 'Aanmelden gelukt!';

  //ALREADY EXIST
  alReadyExistsTextElement: string = '[data-warning-message*="Er bestaat al een Mijn Univé-account voor dit e-mailadres. Het is niet mogelijk om een nieuw account aan te maken."]';

  //PASSWORD DONT MATCH
  passwordDoesntSatisfyTheCorrectInputTextElement: string = '[class="register_field _is_invalid"] [data-error-text="Het wachtwoord voldoet niet aan de eisen."]';
  passwordDontMatchTextElement: string = '[class="register_field _is_invalid"] [data-error-text="De wachtwoorden komen niet overeen."]';

  //ACCOUNTNUMBER INVALID
  accountNumberInvalidElement: string = '[class="register_field _is_invalid"] [data-error-text="Vul een geldig bankrekeningnummer in (1234)."]';

  //NOT RECOGNISABLE CUSTOMER
  customerNotRecognisabelTextElement: string = '[class*="toast--warning"]';
  customerNotRecognisableText: string = 'Op basis van deze gegevens kunnen wij u niet als klant herkennen. Pas uw gegevens aan, of bel met onze Klantenservice: (0592) 34 93 45. (409:130)';

  //CHANGE PASSWORD
  changePasswordClickElement: string = '[href="/mijnunive/wachtwoord-wijzigen"]';
  currentPasswordInputElement: string = '#current-password';
  newPasswordInputElement: string = '#new-password';
  newPasswordControlInputElement: string = '#new-password-control';
  sendButtonClickElement: string = '[class="button form-buttons__button"]';


}
