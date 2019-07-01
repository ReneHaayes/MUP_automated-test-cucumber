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

  //BUTTONS
  sendButtonClickElement: string = '[class="button form-buttons__button"]';

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


  //CHANGE EMAILADDRESS
  editEmailAddressClickElement: string = '[href="/mijnunive/emailadres-wijzigen"]';
  newEmailAddressInputElement: string = '#email';
  confirmNewEmailAddressInputElement: string = '#email-control';
  confirmNewEmailAddressPlainURLClickElement: string = '[id="preview-plain"] [href*="verify-email"]';
  successMessageTextElement: string = '[data-message="success"]';
  successMessageText: string = 'U heeft uw e-mailadres succesvol geverifieerd. Dank u.';

  //CHANGE PAYMENT
  changePaymentDataClickElement: string = '[class*="page-links-item"][href*="betaalgegevens-wijzigen"]';
  changePaymentPeriodRadioClickElement: string = '[for="change_0"]';
  changePaymentWayRadioClickElement: string = '[for="change_1"]';
  changeIbanRadioClickElement: string = '[for="change_2"]';
  ibanAccountNumberInputElement: string = '#iban';
  currentIbanAccountNumberInputElement: string = '#iban_current';
  newIbanAccountnumberInputElement: string = '#iban_new';
  startDateChangeInputElement: string = '#start_date';
  authorisationCheckBoxAutomaticCollectionClickElement: string = '[for="payment_method__authorized_0"]';

  //SELECT PAYMENT PERIOD
  paymentPeriodSelectElement: string = '#payment_term__frequency';
  paymentPeriodeSelectMaandElement: string = 'maand';


  //THANK YOU PAGE
  formThankYouTextElement: string = '[class*=form-container] > p';
  formThankYouText: string = 'Hartelijk dank voor het doorgeven van uw wijziging(en).';

  //CONTACT PREFERENCES
  damageInsurancesClickElement: string = '[class="h-block-title"]';
  buttonGoThroughContactPreferencesClickElement: string = '[class="button button--default"]';
  buttonSaveContactPreferencesClickElement: string = '#_communicationPreferences_changeMyCustomer';
  contactPreferencesH1TitleTextElement: string = '#viewPartcommunicationPreferences > h1';
  contactPreferencesH1TitleText: string = 'Mijn contactvoorkeuren';
  contactPreferencesSuccesMessageTextElement: string = '[class="mainMessage"] > p';
  contactPreferencesSuccesMessageText: string = 'Het bijwerken van de contactvoorkeuren is gelukt.';

  //IDENTITY PREFERENCES
  typeIdentitySelectElement: string = '#idtype';
  typeIdentityDriversLicenseSelectElement: string = 'Rijbewijs';
  idNumberInputElement: string = '#idnummer';
  identityPreferencesChangingSuccesTextElement: string = '[class="page-content__block"] > p';
  identityPreferencesChangingSuccesText: string = 'U heeft uw identiteitsgegevens succesvol aan ons doorgegeven.';
}
