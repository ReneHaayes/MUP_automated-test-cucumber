export class LoginPageElements {

  // HEADER
  homeHeaderLayoutTextElement = '[class*="layout_headline"]';
  homeHeaderLayoutText = 'Welkom bij Mijn Univé';

  // MIJN UNIVE LOGIN
  loginEmailInputElement = '#emailphone';
  loginPasswordInputElement = '#password';
  loginSubmitButtonClickElement = '[class="btn submit-btn col-xs-12 login-phone-submit-btn"]';

  // MIJN UNIVE ZAKELIJK LOGIN
  mijnUniveZakelijkUsernameInputElement = '#emailphone';
  mijnUniveZakelijkPasswordInputElement = '#password';
  mijnUniveZakelijkSubmitButtonClickElement = '[id="loginForm"] button';

  // MIJN UNIVE LOGGED IN
  loggedInHeaderH1TextElement = '[class="page-content__block__title"] h1';
  loggedInHeaderH1Text2Element = '[class="h-page-title is-visible-desktop-only"]';
  loggedInHeaderH1Text = 'Mijn overzicht';

  // MIJN UNIVE ZAKELIJK LOGGED IN
  loggedInHeaderH1TextZakelijkElement = '[class="page-content__block__title"] h1';
  loggedInHeaderH1TextZakelijk2Element = '[class="h-page-title is-visible-desktop-only"]';
  loggedInHeaderH1ZakelijkText = 'Overzicht';

  // als bevestigingspagina weer werkt even het element pakken, liefst via Developer.
  // MIJN UNIVE CHANGED PASSWORD
  loginChangedPasswordThankYouTextElement = 'LET OP NOG GEEN ELEMENT';
  loginChangedPasswordThankYouText = 'Er is bevestigingsmail naar u onderweg';

  // ERRORS
  passwordErrorFieldTextElement = '[data-messagetype="fielderror"]';
  emailAdresErrorFieldTextElement = '[for="emailphone"]';

  // VEELGESTELDE VRAGEN
  veelgesteldeVragenClickElement = '#unive-help';
  veelgesteldeVragenHeaderTextElement = '[class="action_title"]';
  veelgesteldeVragenHeaderText = 'Hulp nodig bij Mijn Univé?';

  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveClickElement = '[id="hoe-meld-ik-me-aan-voor-mijn-unive-mijn-unive"]';
  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveTextElement = '[id="hoe-meld-ik-me-aan-voor-mijn-unive-mijn-unive"] > a > h3';
  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveText = 'Op www.unive.nl/mijnunive kiest u voor ‘Account aanmaken’. Vervolgens kunt u kiezen uit twee manieren om een Mijn Univé-account aan te maken;';

  veelgesteldeVraagAntwoordGeopend = '[class="faqList"] > dd:nth-child(2) > p';

  // MAILHOG
  mailtoHeaderTextElement = '[class*="messages"] > div:nth-child(1) [ng-repeat="to in message.Content.Headers[\'To\']"]';
  firstMessageClickElement = '[class*="messages"] > div:nth-child(1)';
  painButtonClickElement = '[href="#preview-plain"]';
  verifyEmailClickElement = '[class="tab-pane ng-binding active"] [href*="https://login.pat.unive.nl/personal/verify-email"]';
  successMessageTextElement = '[data-message="success"]';
  successMessageText = 'U heeft uw e-mailadres succesvol geverifieerd. Dank u.';

  // FORGOT PASSWORD
  forgotPasswordClickElement = '#reset-password';
  forgotPasswordEmailAddressInputElement = '#email';
  forgotPasswordSubmitButtonClickElement = '#confirm';
  forgotPasswordMessageWhenEnteredEmailAddressTextElement = '[class="login-options"] > div:nth-child(1) > h4';
  plainClickElement = '[href="#preview-plain"]';
  resetPasswordInEmailClickElement = '[href*="reset-password"]';

  // RESET PASSWORD
  resetPasswordNewPasswordInputElement = '#password';
  resetPasswordConfirmNewPasswordInputElement = '#confirmPassword';
  resetPasswordSubmitButtonClickElement = '#confirm';

  // UITLOGGEN
  logOffClickElement = '[class="logout-link__body media__body"]';
}
