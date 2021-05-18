export class LoginPageElements {

  // HEADER
  homeHeaderLayoutTextElement = '[class*="layout_headline"]';
  homeHeaderLayoutText = 'Welkom bij Mijn Univé';

  // MIJN UNIVE LOGIN
  loginEmailInputElement = '#emailphone';
  loginPasswordInputElement = '#password';
  loginSubmitButtonClickElement = '[id="loginForm"] button';

  // MIJN UNIVE LOGGED IN
  loggedInHeaderH1TextElement = '[class="page-content__block__title"] h1';
  loggedInHeaderH1Text2Element = '[class="h-page-title is-visible-desktop-only"]';
  loggedInHeaderH1Text = 'Mijn overzicht';

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

  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveTextElement = '[id="hoe-meld-ik-me-aan-voor-mijn-unive-mijn-unive"] > a > h3';
  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveText = 'Op www.unive.nl/mijnunive kiest u voor ‘Aanmelden voor Mijn Univé’ en vult u eenmalig een aantal persoonlijke gegevens in, zoals uw geboortedatum, postcode en een wachtwoord. Aan de hand daarvan zoeken wij u op in onze klantenadministratie. Hebben wij u gevonden, dan krijgt u een bevestigingsmailtje met een activeringslink. Nadat u via die link uw account heeft geactiveerd, heeft u direct toegang tot Mijn Univé.';

  veelgesteldeVraagAntwoordGeopend = '[class="faqList"] > dd:nth-child(6) > p';

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
