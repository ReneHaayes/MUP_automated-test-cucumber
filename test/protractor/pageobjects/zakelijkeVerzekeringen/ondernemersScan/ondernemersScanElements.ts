
export class OndernemersScanElements {
  startScan = '[data-di-id="di-id-62ef47f3-b096cc4f"]';

  // Toesturen ondernemersScan
  zipCodeElement = '.result__postal-code .input__input-field';
  zipCodeText = '8017JC';
  emailadresElement = '.result__email .input__input-field';
  emailadresText = 'OndernemersscanTest@unive.nl';
  sendReportOndernemersScan = '//*[contains(text(),"Ontvang rapport per e-mail")]';

  // NAW gegevens invullen voor een vrijblijvende afspraak
  genderElement = '//*[contains(text(),"Heer")]';
  initialsElement = 'ui-input[label*="Initialen"] .input__input-field';
  initialsText = 'M';
  lastnameElement = 'ui-input[label*="Achternaam"] .input__input-field';
  lastnameText = 'Horseman';
  companyElement = 'ui-input[label*="Bedrijfsnaam"] .input__input-field';
  companyText = 'Horseman BV';
  houseNumberElement = 'ui-input[label*="Huisnummer"] .input__input-field';
  houseNumberText = '1';
  phoneNumberElement = 'ui-input[label*="Telefoonnummer"] .input__input-field';
  phoneNumberText = '0612345678';
  MakeAppointment = '//*[contains(text(),"Maak een afspraak")]';

  // VRAGEN
  volgende = '[class="button button--secondary button--icon"]';
  question1 = '[class="survey-options"] li:nth-child(2) label';
  question2 = '[class="survey-options"] li:nth-child(1) label';
  question3 = '[class="survey-options"] li:nth-child(1) label';
  question4 = '[class="survey-options"] li:nth-child(2) label';
  question5 = '[class="survey-options"] li:nth-child(1) label';
  question6 = '[class="survey-options"] li:nth-child(1) label';
  question7 = '[class="survey-options"] li:nth-child(1) label';
  question8 = '[class="survey-options"] li:nth-child(1) label';
  question9 = '[class="survey-options"] li:nth-child(3) label';
  question10 = '[class="survey-options"] li:nth-child(1) label';
  question11 = '[class="survey-options"] li:nth-child(1) label';
  question12 = '[class="survey-options"] li:nth-child(1) label';
  question13 = '[class="survey-options"] li:nth-child(1) label';
  question14 = '[class="survey-options"] li:nth-child(1) label';
  question15 = '[class="survey-options"] li:nth-child(1) label';
  question16 = '[class="survey-options"] li:nth-child(1) label';
  question17 = '[class="survey-options"] li:nth-child(1) label';
  question18 = '[class="survey-options"] li:nth-child(1) label';
  question19 = '[class="survey-options"] li:nth-child(1) label';
  question20 = '[class="survey-options"] li:nth-child(1) label';
  question21 = '[class="survey-options"] li:nth-child(1) label';
  question22 = '[class="survey-options"] li:nth-child(1) label';
}


export const HappyFlowNoStaff = [
  {
    question: 'In welke branche bent u werkzaam?',
    answer: 'Bouwnijverheid'
  },
  {
    question: 'Welke rechtsvorm heeft uw bedrijf?',
    answer:  'Eenmanszaak'
  },
  {
    question: 'Hoeveel personen heeft u in loondienst?',
    answer:  'Geen'
  },
  {
    question: 'Huurt u (ook) wel eens iemand in?',
    answer: 'Nee'  // 2
  },
  {
    question: 'Wie neemt uw werkzaamheden over als u tijdelijk niet kunt werken?',
    answer: 'Niemand'
  },
  {
    question: 'Heeft u financiële reserves om arbeidsongeschiktheid van uzelf op te vangen?',
    answer: 'Ja'
  },
  {
    question: 'Heeft u iets geregeld voor uw pensioen?',
    answer: 'Ja'
  },
  {
    question: 'Weet u wat de financiële gevolgen zijn voor uw bedrijf en gezin als u komt te overlijden?',
    answer: 'Ja, daarvan ben ik op de hoogte'
  },
  {
    question: 'Waar is uw bedrijf gevestigd?',
    answer: 'Eigen woning'  // 3
  },
  {
    question: 'Kunt u na een calamiteit (bijv. grote brand) uw werk direct weer voortzetten?',
    answer: 'Ja'
  },
  {
    question: 'Heeft u maatregelen genomen om inbraak te voorkomen?',
    answer: 'Ja'
  },
  {
    question: 'Heeft u financiële reserves om schade of diefstal te dekken?',
    answer: 'Ja'
  },
  {
    question: 'Zijn uw bedrijfskritische gegevens voldoende beschermd en veiliggesteld? Bv. Cybercrime.',
    answer: 'Ja'
  },
  {
    question: 'Maakt u of (één van) uw werknemers gebruik van een bedrijfsauto?',
    answer: 'Ja'
  },
  {
    question: 'Kunt u uw bedrijfsauto(‘s) tijdelijk missen?',
    answer: 'Ja'
  },
  {
    question: 'Weet u wat u moet doen als uw goederen en/of goederen van derden tijdens transport kwijtraken of kapot gaan?',
    answer: 'Ja'
  },
  {
    question: 'Werkt uw bedrijf met algemene voorwaarden?',
    answer: 'Ja'
  },
  {
    question: 'Heeft u financiële reserves voor schadeclaims?',
    answer: 'Ja'
  },
  {
    question: 'Lopen uw klanten risico op (grote) financiële schade als u fouten maakt in uw werk?',
    answer: 'Ja'
  },
  {
    question: 'Hoe groot is de impact op uw bedrijf als uw leveranciers niet leveren?',
    answer: 'Klein'
  },
  {
    question: 'Hoe groot is de impact op uw bedrijf als klanten niet of niet op tijd betalen?',
    answer: 'Klein'
  },
  {
    question: 'Kunt u juridische hulp betalen bij een zakelijk geschil?',
    answer: 'Ja'
  }
];
