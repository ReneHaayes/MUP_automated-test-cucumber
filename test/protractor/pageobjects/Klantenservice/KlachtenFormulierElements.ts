export class KlachtenFormulierElements {

  // BUTTONS
  zorgVerzekeringButtonClickElement = '[href*="/klantenservice/klacht-zorgverzekering"]';
  schadeVerzekeringButtonClickElement = '[href*="/klantenservice/klacht-schadeverzekering"]';
  buttonSendClickElement = '[name="btnSubmit"]';

  // INPUT
  omschrijvingInputElement = '[title="Omschrijving"]';
  oplossingInputElement = '[title="Welke oplossing ziet u graag voor uw klacht?"]';
  bijlageFileElement = '[name="bijlages-zorg__upload1"]';
  alreadyACustomerClickElement = '[class="eforms-input-group"] > label:nth-child(1)';
  clientNumberInputElement = '[title="Client- of inschrijfnummer"]';
  initialsInputElement = '[title="Voorletter(s)"]';
  lastNameInputElement = '[title="Achternaam"]';
  zipCodeInputElement = '[title="Postcode"]';
  houseNumberInputElement = '[title="Huisnummer"]';
  houseNumberAdditionInputElement = '[title="Huisnummer toevoeging"]';
  birthDateInputElement = '[title="Geboortedatum"]';
  emailAddressInputElement = '[title="E-mailadres"]';
  streetNameInputElement = '[name="personal_data__street"]';
  phoneNumberInputElement = '[name="personal_data__phonenumber"]';

  lastNameZorgInputElement = '[name="name"]';
  emailAddressZorgInputElement = '[name="email"]';
  clientNumberZorgInputElement = '[name="Web_Klantnummer__c"]';
  phoneNumberZorgInputElement = '[name="Primair_telefoonnr__c"]';
  uwKlachtZorgInputElement = '[name="description"][class="required"]';
  oplossingZorgInputElement = '[name="Web_Solution__c"]';

  // CONFIRMATION
  klachtFormConfirmationTextElement = '[class="eforms eforms-generiekEmail"] > div > p';
  klachtFormConfirmationText = 'Wij hebben uw klacht ontvangen en nemen zo spoedig mogelijk contact met u op. U ontvangt een kopie van uw klacht in uw mailbox.';
  klachtFormSecondConfirmationText = 'Wij hebben uw klacht ontvangen en nemen zo spoedig mogelijk contact met u op. U ontvangt een bevestiging van uw klacht in uw mailbox.';
}
