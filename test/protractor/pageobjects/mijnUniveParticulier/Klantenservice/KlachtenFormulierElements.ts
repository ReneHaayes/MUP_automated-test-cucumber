export class KlachtenFormulierElements {

  //BUTTONS
  zorgVerzekeringButtonClickElement: string = '[data-show-id="dt_0"]';
  schadeVerzekeringButtonClickElement: string = '[data-show-id="dt_1"]';
  buttonSendClickElement: string = '[name="btnSubmit"]';

  //INPUT
  omschrijvingInputElement: string = '[title="Omschrijving"]';
  oplossingInputElement: string = '[title="Welke oplossing ziet u graag voor uw klacht?"]';
  bijlageFileElement: string = '[name="bijlages-zorg__upload1"]';
  alreadyACustomerClickElement: string = '[class="eforms-input-group"] > label:nth-child(1)';
  clientNumberInputElement: string = '[title="Client- of inschrijfnummer"]';
  initialsInputElement: string = '[title="Voorletter(s)"]';
  lastNameInputElement: string = '[title="Achternaam"]';
  zipCodeInputElement: string = '[title="Postcode"]';
  houseNumberInputElement: string = '[title="Huisnummer"]';
  birthDateInputElement: string = '[title="Geboortedatum"]';
  emailAddressInputElement: string = '[title="E-mailadres"]';

  //CONFIRMATION
  confirmationZorgVerzekeringTextElement: string = '#dt_0 > article > div';
  confirmationKlachtVerzekeringTextElement: string = '#dt_1 > article > div';
  confirmationText: string = 'Wij hebben uw klacht ontvangen en nemen zo spoedig mogelijk contact met u op. U ontvangt een kopie van uw klacht in uw mailbox.';
}
