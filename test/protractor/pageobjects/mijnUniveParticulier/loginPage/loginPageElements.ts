export class LoginPageElements {

  //HEADER
  homeHeaderLayoutTextElement: string = '[class*="layout_headline"]';
  homeHeaderLayoutText: string = 'Welkom bij Mijn Univé';

  //MIJN UNIVE LOGIN
  loginEmailInputElement: string = '#email';
  loginPasswordInputElement: string = '#password';
  loginSubmitButtonClickElement: string = '[id="loginForm"] button';

  //MIJN UNIVE LOGGED IN
  loggedInHeaderH1TextElement: string = '[class="page-content__block__title"] h1';
  loggedInHeaderH1Text: string = 'Mijn overzicht';

  //ERRORS
  passwordErrorFieldTextElement: string = '[data-messagetype="fielderror"]';
  emailAdresErrorFieldTextElement: string = '[for="email"][class="help-block"]';

  //VEELGESTELDE VRAGEN
  veelgesteldeVragenClickElement: string = '#unive-help';
  veelgesteldeVragenHeaderTextElement: string = '[class="action_title"]';
  veelgesteldeVragenHeaderText: string = 'Hulp nodig bij Mijn Univé?';

  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveTextElement: string = '#aanmelden-–-hoe-meld-ik-me-aan-voor-mijn-unive';
  veelgesteldeVraagHoeMeldIkMeAanVoorMijnUniveText: string = 'Op www.unive.nl/mijnunive kiest u voor ‘Aanmelden voor Mijn Univé’ en vult u eenmalig een aantal persoonlijke gegevens in, zoals klantnummer en een wachtwoord. Aan de hand daarvan zoeken wij u op in onze klantenadministratie. Hebben wij u gevonden, dan krijgt u een bevestigingsmailtje met een activeringslink. Nadat u via die link uw account heeft geactiveerd, heeft u direct toegang tot Mijn Univé.';

  veelgesteldeVraagAntwoordGeopend: string = '[class="faqList_answer _is_expanded"][aria-hidden="false"]';

  //MAILHOG
  mailtoHeaderTextElement: string = '[class*="messages"] > div:nth-child(1) [ng-repeat="to in message.Content.Headers[\'To\']"]';
  firstMessageClickElement:string = '[class*="messages"] > div:nth-child(1)';
  painButtonClickElement: string = '[href="#preview-plain"]';
  verifyEmailClickElement: string = '[class="tab-pane ng-binding active"] [href*="https://login.pat.unive.nl/personal/verify-email"]';
  successMessageTextElement: string = '[data-message="success"]';
  successMessageText: string = 'U heeft uw e-mailadres succesvol geverifieerd. Dank u.';

  //FORGOT PASSWORD
  forgotPasswordClickElement: string = '#reset-password';
  forgotPasswordEmailAddressInputElement: string = '#email';
  forgotPasswordSubmitButtonClickElement: string = '#confirm';
  forgotPasswordMessageWhenEnteredEmailAddressTextElement: string = '#messageBox > span';
  plainClickElement: string = '[href="#preview-plain"]';
  resetPasswordInEmailClickElement: string = '[href*="reset-password"]';

  //RESET PASSWORD
  resetPasswordNewPasswordInputElement: string = '#password';
  resetPasswordConfirmNewPasswordInputElement: string = '#confirmPassword';
  resetPasswordSubmitButtonClickElement: string = '#confirm';
}
