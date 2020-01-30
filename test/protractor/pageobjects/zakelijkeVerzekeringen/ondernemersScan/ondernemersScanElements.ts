
export class OndernemersScanElements {
  startScan: string = '//*[contains(text(),"Doe de Ondernemersscan")]';

  // Toesturen ondernemersScan
  zipCodeElement: string = '.result__postal-code .input__input-field';
  zipCodeText: string = '8017JC';
  emailadresElement: string = '.result__email .input__input-field';
  emailadresText: string = 'OndernemersscanTest@unive.nl';
  sendReportOndernemersScan: string = '//*[contains(text(),"Ontvang rapport per e-mail")]';

  // NAW gegevens invullen voor een vrijblijvende afspraak
  genderElement: string = '//*[contains(text(),"Heer")]';
  initialsElement: string = 'ui-input[label*="Initialen"] .input__input-field';
  initialsText: string = 'M';
  lastnameElement: string = 'ui-input[label*="Achternaam"] .input__input-field';
  lastnameText: string = 'Horseman';
  companyElement: string = 'ui-input[label*="Bedrijfsnaam"] .input__input-field';
  companyText: string = 'Horseman BV';
  houseNumberElement: string = 'ui-input[label*="Huisnummer"] .input__input-field';
  houseNumberText: string = '1';
  phoneNumberElement: string = 'ui-input[label*="Telefoonnummer"] .input__input-field';
  phoneNumberText: string = '0612345678';
  MakeAppointment: string = '//*[contains(text(),"Maak een afspraak")]';
}


export const HappyFlowNoStaff = [
  {
    question: 'In welke branche bent u werkzaam?',
    answer: 'Bouwnijverheid'
  },
  {
    question: 'Welke rechtsvorm heeft uw bedrijf?',
    answer: 'Eenmanszaak'
  },
  {
    question: 'Hoeveel personen heeft u in loondienst?',
    answer: 'Geen'
  },
  {
    question: 'Huurt u (ook) wel eens iemand in?',
    answer: 'Nee'
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
    answer: 'Eigen woning'
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
]
