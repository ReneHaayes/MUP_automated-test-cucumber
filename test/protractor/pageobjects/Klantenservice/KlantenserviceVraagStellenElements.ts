export class KlantenserviceVraagStellenElements {

  // Buttons
  schadeverzekeringenButtonClickElement = '[data-show-id="dt_0"]';
  zorgverzekeringenButtonClickElement = '[data-show-id="dt_1"]';
  levensverzekeringenButtonClickElement = '[data-show-id="dt_2"]';
  rechtsbijstandverzekeringButtonClickElement = '[data-show-id="dt_3"]';
  verzekeringspakketButtonClickElement = '[data-show-id="dt_4"]';
  wijzigingButtonClickElement = '[data-show-id="dt_5"]';
  overigButtonClickElement = '[data-show-id="dt_6"]';
  buttonSendClickElement = '[name="btnSubmit"]';

  // Input Elements Schadeverzekeringen
  uwVraagOfOpmerkingInputElements = '[name="damage__question"]';
  postadresInputElements = '[name="postadres"]';
  plaatsInputElements = '[name="plaats"]';
  websiteInputElements = '[name="website"]';
  doelStichtingInputElements = '[name="doel-organisatie"]';
  hoeveelLedenStichtingInputElements = '[name="leden-organisatie"]';
  contactpersoonVoorlettersInputElements = '[name="contactpersoon-voorletters"]';
  contactpersoonAchternaamInputElements = '[name="contactpersoon-achternaam"]';
  telefoonnummerInputElements = '[name="telefoonnummer"]';
  emailAdresInputElements = '[name="personal_data__email"]';
  omschrijvingSponsorAanvraagInputElements = '[name="beschrijving-van-het-sponsorverzoek"]';
  gewenstSponsorbedragInputElements = '[name="gewenst-sponsorbedrag"]';
  publiciteitsmogelijkhedenInputElements = '[name="publiciteit"]';
  toelichtingInputElements = '[name="toelichting"]';

  // Radiobuttons Schadeverzekeringen
  stichtingWinstoogmerkJaClickElement = '[class="eforms-input-group"] > label:nth-child(1)';
  bentUKlantBijUniveJaPrive = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';
  // geslachtContactpersoonMan = '#field_3 > div:nth-child(7) > div.eforms-input-group > label:nth-child(1)';
  geslachtContactpersoonMan = '.eforms-radio-container > [value="Man"] ~span';
  stichtingEerderGesponsordJa = '#page0 > div:nth-child(21) > div > label:nth-child(1)';

  // Input Elements Zorgverzekeringen
  zorgrubriekDropdownValueVerzekeringenElement = '#field_0 > div:nth-child(1) > div > select > option:nth-child(2)';
  zorgVraagOfOpmerkingInputElement = '[name="care__question"]';
  zorgClientOfInschrijfNummerInputElement = '[name="personal_data__clientNumber"]';
  zorgPostcodeInputElement = '[name="personal_data__zipcode"]';
  zorgTelefoonnummerInputElement = '[name="personal_data__phonenumber"]';

  // Radiobuttons Zorgverzekeringen
  zorgBentUKlantBijUniveJa = '#field_12 > div:nth-child(2) > div > label:nth-child(1)';

  // Input Elements Levensverzekeringen
  levensverzekeringVraagOfOpmerkingInputElement = '[name="life__question"]';
  levensverzekeringStraatnaamInputElement = '[name="personal_data__street"]';
  levensverzekeringPlaatsnaamInputElement = '[name="personal_data__city"]';

  // Radiobuttons Levensverzekeringen
  levensverzekeringBentUKlantJa = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';
  levensverzekeringGeslachtMan = '#field_3 > div:nth-child(6) > div > label:nth-child(1)';

  // Input Elements Rechtsbijstandverzekering
  rechtsbijstandRubriekDropdownValueVraag = '#field_0 > div:nth-child(1) > div > select > option:nth-child(2)';
  rechtsbijstandVraagOfOpmerkingInputElement = '[name="law__question"]';

  // Radiobuttons Rechtsbijstandverzekering
  rechtsbijstandBentUKlantJa = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';
  rechtsbijstandGeslachtMan = '#field_3 > div:nth-child(6) > div > label:nth-child(1)';

  // Input Elements verzekeringspakket
  verzekeringspakketVraagOfOpmerkingInputElement = '[name="insurance__question"]';

  // Radiobuttons verzekeringspakket
  verzekeringspakketBentUKlantJa = '#field_2 > div:nth-child(2) > div > label:nth-child(1)';
  verzekeringspakketGeslachtMan = '.eforms-radio-container > [value="Man"] ~span';

  // Input Elements wijziging
  wijzigingRubriekDrobdownValueAdresgegevensWijzigen = '#field_0 > div > div > select > option:nth-child(2)';
  wijzigingAdresWijzigenVoorlettersInputElement = '[name="change_address_personal_data__initials"]';
  wijzigingAdresWijzigenAchternaamInputElement = '[name="change_address_personal_data__surname"]';
  wijzigingAdresWijzigenGeboortedatumInputElement = '[name="change_address_personal_data__dateOfBirth"]';
  wijzigingAdresWijzigenEMailAdresInputElement = '[name="change_address_personal_data__email"]';
  wijzigingAdresWijzigenHuidigePostcodeInputElement = '[name="change_address_current__obm.zipcode"]';
  wijzigingAdresWijzigenHuidigeHuisnummerInputElement = '[name="change_address_current__houseNumber"]';
  wijzigingAdresWijzigenVerhuisDatumInputElement = '[name="change_address_new__date_move"]';
  wijzigingAdresWijzigenVerhuizenNaarPostcodeInputElement = '[name="change_address_new__zipcode"]';
  wijzigingAdresWijzigenVerhuizenNaarHuisnummerInputElement = '[name="change_address_new__houseNumber"]';

  // Radiobuttons wijziging
  wijzigingAdresWijzigenGeslachtMan = '.eforms-radio-container > [value="Man"] ~span';
  wijzigingAdresWijzigenMeeverzekerdenJa = '#field_25 > div > div > label:nth-child(1)';

  // Generiek formulier vraag stellen Elements
  vraagStellenVoorlettersInputElement = '[name="personal_data__initials"]';
  vraagStellenAchternaamInputElement = '[name="personal_data__surname"]';
  vraagStellenGeboortedatumInputElement = '[name="personal_data__dateOfBirth"]';
  vraagStellenPostcodeInputElement = '[name="personal_data__obm.zipcode"]';
  vraagStellenHuisnummerInputElement = '[name="personal_data__houseNumber"]';
  vraagStellenEMailAdresInputElement = '[name="personal_data__email"]';
  vraagStellenStraatNaamInputElement = '[name="personal_data__street"]';
  vraagStellenPlaatsInputElement = '[name="personal_data__city"]';
  vraagstellenTelefoonnummerInputElement = '[name="personal_data__phonenumber"]';
  vraagStellenClientNummerInputElement = '[name="personal_data__clientNumber"]';

  // Input Elements overig
  overigVraagOfOpmerkingInputElement = '[name="others__question"]';

  // Radiobuttons Overig
  overigBentUKlantJa = '#field_3 > div:nth-child(2) > div > label:nth-child(1)';
  overigGeslachtMan = '.eforms-radio-container > [value="Man"] ~span';

  // Confirmation
  vraagStellenConfirmationTextElement = '[class="eforms eforms-generiekEmail"] > div > p';
  vraagStellenConfirmationPrefillTextElement = '[class="eforms-container"] > p';
  vraagStellenKlachtConfirmationText = 'Wij hebben uw klacht ontvangen en nemen zo spoedig mogelijk contact met u op. U ontvangt een bevestiging van uw klacht in uw mailbox.';
  vraagStellenConfirmationText = 'Hartelijk dank';

}
