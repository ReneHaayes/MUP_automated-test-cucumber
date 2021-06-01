export class MijnUniveAccountElements {

  // CREATE MIJN UNIVE ACCOUNT
  accountAanmakenButtonClickElement = '[id="section3"] [class*="btn submit-btn col-xs-12"]';
  identificeerUwZonderIdinButtonClickElement = '[href="/personal/sign-up-unp"]';
  mijnUniveLastnameInputElement = '#lastName';
  mijnUniveBirthdayInputElement = '#dateOfBirth';
  mijnUniveZipcodeInputElement = '#postalCode';
  mijnUniveHouseNumberInputElement = '#houseNumber';
  mijnUniveStreetNameInputElement = '#streetName';
  mijnUniveCityInputElement = '#city';
  mijnUniveLastFourNumberOfAccountNumberInputElement = '#bankAccountVerificationCustomAttribute';
  mijnUniveEmailAddressInputElement = '#email';
  mijnUniveEmailAddressConfirmationInputElement = '#emailConfirmation';
  mijnUniveChoosePasswordInputElement = '#password';
  mijnUnivePasswordConfirmationInputElement = '#confirmPassword';
  mijnUniveSubmitButtonClickElement = '[class="btn submit-btn"]';

  // MIJN UNIVE MENU
  mijnGegevensMenuClickElement = '[class="page-nav-item__link media"][href="/mijnunive/mijn-gegevens"]';

  // BUTTONS
  sendButtonClickElement = '[class="button form-buttons__button"]';

  // DELETE ACCOUNT
  accountVerwijderenClickElement = '[class="button-link link link--warning"][href="/mijnunive/account-verwijderen"]';
  submitVerwijderMijnAccountClickElement = '#account-delete';

  // SUCCESVOL AANMELDEN
  aanmeldenSuccesvolTextElement = '#aanmelden-succesvol';
  aanmeldenSuccesvolText = 'Aanmelden gelukt!';

  // ALREADY EXIST
  alReadyExistsTextElement = '[class*="login-box"] > h2';
  alreadyExistsText = 'Er bestaat al een Mijn Univé-account voor dit e-mailadres.';

  // PASSWORD DONT MATCH
  passwordDoesntSatisfyTheCorrectInputTextElement = '[class="register_field _is_invalid"] [data-error-text="Het wachtwoord voldoet niet aan de eisen."]';
  passwordIsEasyToGuessTextElement = '[for="password"][class="help-block"]';
  passwordIsEasyToGuessNeedCapitalText = 'Uw wachtwoord is te gemakkelijk te raden. Het wachtwoord moet ten minste één hoofdletter bevatten.';
  passwordIsEasyToGuessNeedSmallLetterText = 'Uw wachtwoord is te gemakkelijk te raden. Het wachtwoord moet ten minste één kleine letter bevatten.';
  passwordIsEasyToGuessMinimumEightCharText = 'Uw wachtwoord moet minimaal 8 tekens lang zijn.';
  passwordIsEasyToGuessMinimumSpecialCharText = 'Uw wachtwoord is te gemakkelijk te raden. Het wachtwoord moet ten minste één speciaal teken bevatten.';


  passwordDontMatchTextElement = '[for="confirmPassword"][class="help-block"]';
  passwordDontMatchText = 'De wachtwoorden komen niet overeen.';

  // ACCOUNTNUMBER INVALID
  accountNumberInvalidTextElement = '[for="bankAccountVerificationCustomAttribute"][class="help-block"]';
  accountNumberInvalidToShortText = 'De ingevulde waarde is te kort';
  accountNumberInvalidOnlyNumbersText = 'Dit veld mag alleen cijfers bevatten';
  accountNumberInvalidToLongText = 'De ingevulde waarde is te lang';


  // NOT RECOGNISABLE CUSTOMER
  customerNotRecognisabelTextElement = '[class="align-self-start pre-creation-error_msg"]';
  customerNotRecognisableText = 'Op basis van deze gegevens kunnen wij u niet als klant herkennen. Pas uw gegevens aan, of bel met onze Klantenservice: 0592 349 345.';

  // CHANGE PASSWORD
  changePasswordClickElement = '[href="/mijnunive/wachtwoord-wijzigen"]';
  currentPasswordInputElement = '#current-password';
  newPasswordInputElement = '#new-password';
  newPasswordControlInputElement = '#new-password-control';


  // CHANGE EMAILADDRESS
  editEmailAddressClickElement = '[href="/mijnunive/emailadres-wijzigen"]';
  newEmailAddressInputElement = '#email';
  confirmNewEmailAddressInputElement = '#email-control';
  confirmNewEmailAddressPlainURLClickElement = '[id="preview-plain"] [href*="verify-email"]';
  successMessageTextElement = '[data-message="success"]';
  successMessageText = 'U heeft uw e-mailadres succesvol geverifieerd. Dank u.';

  // CHANGE PAYMENT
  changePaymentDataClickElement = '[class*="page-links-item"][href*="betaalgegevens-wijzigen"]';
  changePaymentPeriodRadioClickElement = '[for="change_0"]';
  changePaymentWayRadioClickElement = '[for="change_1"]';
  changeIbanRadioClickElement = '[for="change_2"]';
  ibanAccountNumberInputElement = '#iban';
  currentIbanAccountNumberInputElement = '#iban_current';
  newIbanAccountnumberInputElement = '#iban_new';
  startDateChangeInputElement = '#start_date';
  authorisationCheckBoxAutomaticCollectionClickElement = '[for="payment_method__authorized_0"]';
  authorisationCheckBoxAutomaticCollectionSecondClickElement = '[for="payment_account__authorized_0"]';

  // SELECT PAYMENT PERIOD
  paymentPeriodSelectElement = '#payment_term__frequency';
  paymentPeriodeSelectMaandElement = 'maand';


  // THANK YOU PAGE
  formThankYouTextElement = '[class*=form-container] > p';
  formThankYouText = 'Hartelijk dank voor het doorgeven van uw wijziging(en).';

  // CONTACT PREFERENCES
  damageInsurancesClickElement = '[class="h-block-title"]';
  buttonGoThroughContactPreferencesClickElement = '[class="button button--default"]';
  buttonSaveContactPreferencesClickElement = '#_communicationPreferences_changeMyCustomer';
  contactPreferencesH1TitleTextElement = '#viewPartcommunicationPreferences > h1';
  contactPreferencesH1TitleText = 'Mijn contactvoorkeuren';
  contactPreferencesSuccessMessageTextElement = '[class="mainMessage"] > p';
  contactPreferencesSuccesMessageText = 'Het bijwerken van de contactvoorkeuren is gelukt.';

  // FAMILY COMPOSITION
  familyCompositionChangePageClickElement = '[href="/mijnunive/mijn-gegevens/gezinssamenstelling"]';
  familyCompositionChangePageClickElementNext = 'div.button_flex > a';
  familyCompositionOnePersonNoChildrenClickElement = '[For="wat-is-uw-gezinssituatie_0"]';
  familyCompositionLiveTogetherNoChildrenClickElement = '[For="wat-is-uw-gezinssituatie_1"]';
  familyCompositionOneParentWithChildrenClickElement = '[For="wat-is-uw-gezinssituatie_2"]';
  familyCompositionFamilyWithChildrenClickElement = '[For="wat-is-uw-gezinssituatie_3"]';
  familyCompositionIUnderstandClickElement = '[for="akkoord-RBV-OVP_0"]';
  familyCompositionSuccessThankYouTextElement = '[class="h-block-title h-block-title__with-icon"]';
  familyCompositionSuccessThankYouText = 'Uw gezinssamenstelling wordt gewijzigd';
  familyCompositionPartnerLivingTogetherInitialsInputElement = '[name="partner-samenwonend__voorletters"]';
  familyCompositionPartnerLivingTogetherLastnameInputElement = '[name="partner-samenwonend__achternaam"]';
  familyCompositionSelectGenderLivingTogetherMaleClickElement = '[for="partner-samenwonend__geslacht_0"]';
  familyCompositionSelectGenderLivingTogetherFemaleClickElement = '[for="partner-samenwonend__geslacht_1"]';
  familyCompositionBirthdateLivingTogetherInputElement = '[name="partner-samenwonend__geboortedatum"]';
  familyCompositionPartnerFamilyInitialsInputElement = '[name="partner-gezin__voorletters"]';
  familyCompositionPartnerFamilyLastnameInputElement = '[name="partner-gezin__achternaam"]';
  familyCompositionSelectGenderFamilyMaleClickElement = '[for="partner-gezin__geslacht_0"]';
  familyCompositionSelectGenderFamilyFemaleClickElement = '[for="partner-gezin__geslacht_1"]';
  familyCompositionBirthdateFamilyInputElement = '[name="partner-geboortedatum"]';
}
