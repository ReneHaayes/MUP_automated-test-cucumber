export class MijnUniveAccountElements {

  //CREATE MIJN UNIVE ACCOUNT
  accountAanmakenButtonClickElement: string = '[id="section3"] [class*="btn submit-btn col-xs-12"]';
  identificeerUwZonderIdinButtonClickElement: string = '[href="/personal/sign-up-unp"]';
  mijnUniveLastnameInputElement: string = '#lastName';
  mijnUniveBirthdayInputElement: string = '#dateOfBirth';
  mijnUniveZipcodeInputElement: string = '#postalCode';
  mijnUniveHouseNumberInputElement: string = '#houseNumber';
  mijnUniveStreetNameInputElement: string = '#streetName';
  mijnUniveCityInputElement: string = '#city';
  mijnUniveLastFourNumberOfAccountNumberInputElement: string = '#bankAccountVerificationCustomAttribute';
  mijnUniveEmailAddressInputElement: string = '#email';
  mijnUniveEmailAddressConfirmationInputElement: string = '#emailConfirmation';
  mijnUniveChoosePasswordInputElement: string = '#password';
  mijnUnivePasswordConfirmationInputElement: string = '#confirmPassword';
  mijnUniveSubmitButtonClickElement: string = '[class="btn submit-btn"]';

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
  alReadyExistsTextElement: string = '[class*="login-box"] > h2';
  alreadyExistsText: string = 'Er bestaat al een Mijn Univé-account voor dit e-mailadres.';

  //PASSWORD DONT MATCH
  passwordDoesntSatisfyTheCorrectInputTextElement: string = '[class="register_field _is_invalid"] [data-error-text="Het wachtwoord voldoet niet aan de eisen."]';
  passwordIsEasyToGuessTextElement: string = '[for="password"][class="help-block"]';
  passwordIsEasyToGuessNeedCapitalText: string = 'Uw wachtwoord is te gemakkelijk te raden. Het wachtwoord moet ten minste één hoofdletter bevatten.';
  passwordIsEasyToGuessNeedSmallLetterText: string = 'Uw wachtwoord is te gemakkelijk te raden. Het wachtwoord moet ten minste één kleine letter bevatten.';
  passwordIsEasyToGuessMinimumEightCharText: string = 'Uw wachtwoord moet minimaal 8 tekens lang zijn.';
  passwordIsEasyToGuessMinimumSpecialCharText: string = 'Uw wachtwoord is te gemakkelijk te raden. Het wachtwoord moet ten minste één speciaal teken bevatten.';


  passwordDontMatchTextElement: string = '[for="confirmPassword"][class="help-block"]';
  passwordDontMatchText: string = 'De wachtwoorden komen niet overeen.';

  //ACCOUNTNUMBER INVALID
  accountNumberInvalidTextElement: string = '[for="bankAccountVerificationCustomAttribute"][class="help-block"]';
  accountNumberInvalidToShortText: string = 'De ingevulde waarde is te kort';
  accountNumberInvalidOnlyNumbersText: string = 'Dit veld mag alleen cijfers bevatten';
  accountNumberInvalidToLongText: string = 'De ingevulde waarde is te lang';


  //NOT RECOGNISABLE CUSTOMER
  customerNotRecognisabelTextElement: string = '[class="align-self-start pre-creation-error_msg"]';
  customerNotRecognisableText: string = 'Op basis van deze gegevens kunnen wij u niet als klant herkennen. Pas uw gegevens aan, of bel met onze Klantenservice: 0592 349 345.';

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
  authorisationCheckBoxAutomaticCollectionSecondClickElement: string = '[for="payment_account__authorized_0"]';

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

  //FAMILY COMPOSITION
  familyCompositionOnePersonNoChildrenClickElement: string = '[For="wat-is-uw-gezinssituatie_0"]';
  familyCompositionLiveTogetherNoChildrenClickElement: string = '[For="wat-is-uw-gezinssituatie_1"]';
  familyCompositionOneParentWithChildrenClickElement: string = '[For="wat-is-uw-gezinssituatie_2"]';
  familyCompositionFamilyWithChildrenClickElement: string = '[For="wat-is-uw-gezinssituatie_3"]';
  familyCompositionIunderstandClickElement: string = '[for="akkoord-RBV-OVP_0"]';
  familyCompositionSuccesThankYouText: string = 'Bedankt voor het invullen van uw gegevens. U ontvangt ter bevestiging een e-mail met uw gegevens.';
  familyCompositionPartnerLivingTogetherInitialsInputElement: string = '[name="partner-samenwonend__voorletters"]';
  familyCompositionPartnerLivingTogetehrLastnameInputElement: string = '[name="partner-samenwonend__achternaam"]';
  familyCompositionSelectGenderLivingTogetherMaleClickElement: string = '[for="partner-samenwonend__geslacht_0"]';
  familyCompositionSelectGenderLivingTogetherFemaleClickElement: string = '[for="partner-samenwonend__geslacht_1"]';
  familyCompositionBirthdateLivingTogetherInputElement: string = '[name="partner-samenwonend__geboortedatum"]';
  familyCompositionPartnerFamilyInitialsInputElement: string = '[name="partner-gezin__voorletters"]';
  familyCompositionPartnerFamilyLastnameInputElement: string = '[name="partner-gezin__achternaam"]';
  familyCompositionSelectGenderFamilyMaleClickElement: string = '[for="partner-gezin__geslacht_0"]';
  familyCompositionSelectGenderFamilyFemaleClickElement: string = '[for="partner-gezin__geslacht_1"]';
  familyCompositionBirthdateFamilyInputElement: string = '[name="partner-gezin__geboortedatum"]';
}
