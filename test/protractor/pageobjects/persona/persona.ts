/* tslint:disable:no-shadowed-variable */
import {
  durationEntrepreneur,
  gender,
  houseNumberAddition, personaName,
  phoneNumber,
  prefix,
  specificIdentification
} from '@enum';

export class Persona {

  firstName: string;
  initials: string;
  lastName: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  zipCode: string;
  gender: string;
  prefix: string;
  birthPlace: string;
  houseNumber: string;
  houseNumberAddition: string;
  phoneNumber: string;
  specificIdentification: string;
  specificIdentificationNumber: string;
  eMailAddress: string;
  accountNumber: string;
  bsn: string;
  profession: string;
  kvkNumber: string;
  durationEntrepreneur: string;
  height: string;
  weight: string;
  password: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(firstName: string, initials: string, prefix: string, lastName: string, birthday: string, birthMonth: string, birthYear: string, birthplace: string, zipcode: string, houseNumber: string, houseNumberAddition: string,
              gender: string, phoneNumber: string, specificIdentification: string, specificIdentificationNumber: string, eMailAddress: string, accountNumber: string, bsn: string,
              profession: string, kvkNumber: string, durationEntrepreneur: string, height: string, weight: string, password: string) {

    this.firstName = firstName;
    this.initials = initials;
    this.lastName = lastName;
    this.birthDay = birthday;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.zipCode = zipcode;
    this.gender = gender;
    this.prefix = prefix;
    this.birthPlace = birthplace;
    this.houseNumber = houseNumber;
    this.houseNumberAddition = houseNumberAddition;
    this.phoneNumber = phoneNumber;
    this.specificIdentification = specificIdentification;
    this.specificIdentificationNumber = specificIdentificationNumber;
    this.eMailAddress = eMailAddress;
    this.accountNumber = accountNumber;
    this.bsn = bsn;
    this.profession = profession;
    this.kvkNumber = kvkNumber;
    this.durationEntrepreneur = durationEntrepreneur;
    this.height = height;
    this.weight = weight;
    this.password = password;
  }
}


export class PersonaData {

  ronaldo: Persona = new Persona('Cristiano', 'C', prefix.NO_PREFIX, 'Ronaldo', '10', '05', '1987', 'Deventer', '7412XW', '91',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '0601234587', specificIdentification.PASSPORT, 'ACP26N', 'ronaldo@unive.nl',
    'NL05INGB0661095088', '218333754', 'model', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  messi: Persona = new Persona('Lionel', 'L', prefix.NO_PREFIX, 'Messi', '05', '09', '1965', 'Apeldoorn', '7412TV', '44',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, phoneNumber.NO_PHONENUMBER, specificIdentification.DRIVER_LICENSE, '12345567890',
    'messi@unive.nl', 'NL05INGB0661095088', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Welkom01!');
  salah: Persona = new Persona('Mohammed', 'M', prefix.NO_PREFIX, 'Salah', '15', '06', '1992', 'Enschede', '7412XW', '31',
    'A', gender.MALE, '1234567890', specificIdentification.ID_CARD, 'HDN068A', 'onjuisteemailadres@test.nl',
    '5088', '218333754', 'beast', '1234567890', durationEntrepreneur._3, '167', '50', 'Welkom01!');
  neymar: Persona = new Persona('Neymar', 'N', 'Da', 'Silva', '05', '02', '1992', 'Arnhem', '7412XW', '12',
    'ABC', gender.FEMALE, '0612345678' , specificIdentification.SOMETHING_ELSE, specificIdentification.NO_NUMBER, 'neymar@unive.nl',
    'NL05INGB0661095088', '218333754', 'diver', '1234567890', durationEntrepreneur._7, '190', '98', 'Welkom01!');
  pogba: Persona = new Persona('Paul', 'PL', prefix.NO_PREFIX, 'Pogba', '15', '03', '1993', 'Zwolle', '7412TV', '69',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, phoneNumber.NO_PHONENUMBER, specificIdentification.ID_CARD, '897623', 'pogba@unive.nl',
    'NL05INGB0661095088', '218333754', 'beast', '1234567890', durationEntrepreneur._MIN1, '209', '110', 'Welkom01!');
  illing: Persona = new Persona('Geraldine', 'G', prefix.NO_PREFIX, 'Illing - van Bruggen', '28', '10', '1962', 'Deventer', '9939 PA', '27',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, '0601234587', specificIdentification.PASSPORT, 'ACP26N', 'illing@unive.nl',
    '5088', '218333754', 'model', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  woestenburg: Persona = new Persona('Annie', 'AF', prefix.NO_PREFIX, 'Woestenburg', '19', '10', '1956', 'Venhuizen', '1606XA', '11',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'a.woestenburg@quicknet.nl', '3872', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Welkom01!');
  aakoek: Persona = new Persona('Annie', 'AA', prefix.NO_PREFIX, 'Koek', '07', '07', '1976', 'Enschede', '7546ET', '59',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'aakoek@hotmail.com', '2487', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Welkom01!');
  ako: Persona = new Persona('Ako', 'AJC', prefix.NO_PREFIX, 'Koek', '09', '04', '1962', 'Kudelstaart', '1433DC', '4',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'ako62@live.nl', '8582', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Test123!');
  erichters: Persona = new Persona('Antonie', 'A', prefix.NO_PREFIX, 'Evers', '01', '01', '1937', 'Delfzijl', '9934LP',
    '6', houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'eversrichters@ziggo.nl', '7671', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Test123!');
  knoppers: Persona = new Persona('Anton', 'AO', prefix.NO_PREFIX, 'Knoppers', '13', '12', '1952', 'Appingedam', '99002CM', '7',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '0601234587', specificIdentification.PASSPORT, 'ACP26N', 'antonknoppers@kpnmail.nl',
    'NL09RABO0313083398', '218333754', 'model', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  testvrouwCustomerRecognition: Persona = new Persona('Zappie', 'Z.Z.', prefix.NO_PREFIX, 'Top', '01', '01', '1972', 'Amsterdam', '1012NX', '1',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, '0592444523', specificIdentification.PASSPORT, 'ACP26N', 'zz@top.nl',
    'NL49ANDL0687747724', '232099765', 'dolfijnentrainer', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  testmanActivePolicy: Persona = new Persona('Zulu', 'Z.Z.', prefix.NO_PREFIX, 'Top', '01', '01', '1955', 'Amsterdam', '1012NX', '3',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31687654321', specificIdentification.PASSPORT, 'ACP26N', 'actieve@polis.nl',
    'NL02ABNA0123456789', '559488944', 'plintenplakker', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  testkindCustomerRecognition: Persona = new Persona('Zulu', 'Z.Z.', prefix.NO_PREFIX, 'Top', '01', '01', '1900', 'Amsterdam', '1012NX', '3',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31687654321', specificIdentification.PASSPORT, 'ACP26N', 'actieve@polis.nl',
    'NL02ABNA0123456789', '559488944', 'plintenplakker', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  testkindOnder18Een: Persona = new Persona('Dennis', 'D.', 'Het', 'Kind onder achttien een', '04', '03', '2012', 'Amsterdam', '1012NX', '3',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31687654321', specificIdentification.PASSPORT, 'ACP26N', 'kindonder18@een.nl',
    'NL02ABNA0123456789', '586265594', 'student', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  testkindBoven18Een: Persona = new Persona('Berend', 'B.', 'Het', 'Kind boven achttien een', '11', '05', '1999', 'Amsterdam', '1012NX', '3',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31687654321', specificIdentification.PASSPORT, 'ACP26N', 'kindboven18@een.nl',
    'NL02ABNA0123456789', '670020916', 'student', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  testPartner: Persona = new Persona('Arie', 'A', 'De', 'Partner', '23', '09', '1985', 'Amsterdam', '1012NX', '3',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31687654321', specificIdentification.PASSPORT, 'ACP26N', 'partner@een.nl',
    'NL02ABNA0123456789', '670020916', 'kattenfluisteraar', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');

  darthvader: Persona = new Persona('Anakin', 'A', prefix.NO_PREFIX, 'Darth Vader', '15', '04', '1949', 'Zwolle', '7541 WH', '22',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.PASSPORT, '1775248', 'darthvader@univetest.nl',
    'NL02ABNA0123456789', '224181828', 'President', '1234567890', durationEntrepreneur._5, '200', '90', 'Welkom01!');

  skywalker: Persona = new Persona('Luke', 'L', prefix.NO_PREFIX, 'Partner', '16', '06', '1973', 'Kampen', '8261 CA', '222',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, '+31612345678', specificIdentification.PASSPORT, 'ACP26N', 'lukeskywalker@univetest.nl',
    'NL02ABNA0123456789', '226186118', 'Lightsaber tester', '1234567890', durationEntrepreneur._5, '175', '75', 'Welkom01!');


  getPersonaZipcode(input: string): string {
    switch (input) {
      case personaName.ILLING: {
        return this.illing.zipCode;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.zipCode;
      }
      case personaName.RONALDO: {
        return this.ronaldo.zipCode;
      }
      case personaName.MESSI: {
        return this.messi.zipCode;
      }
      case personaName.NEYMAR: {
        return this.neymar.zipCode;
      }
      case personaName.SALAH: {
        return this.salah.zipCode;
      }
      case personaName.POGBA: {
        return this.pogba.zipCode;
      }
      case personaName.AAKOEK: {
        return this.aakoek.zipCode;
      }
      case personaName.AKO: {
        return this.ako.zipCode;
      }
      case personaName.ERICHTERS: {
        return this.erichters.zipCode;
      }
      case personaName.KNOPPERS: {
        return this.knoppers.zipCode;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.zipCode;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.zipCode;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.zipCode;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.zipCode;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.zipCode;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.zipCode;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.zipCode;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.zipCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBirthday(input: string): string {
    switch (input) {
      case personaName.ILLING: {
        return this.illing.birthDay;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.birthDay;
      }
      case personaName.RONALDO: {
        return this.ronaldo.birthDay;
      }
      case personaName.MESSI: {
        return this.messi.birthDay;
      }
      case personaName.NEYMAR: {
        return this.neymar.birthDay;
      }
      case personaName.SALAH: {
        return this.salah.birthDay;
      }
      case personaName.POGBA: {
        return this.pogba.birthDay;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.birthDay;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.birthDay;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.birthDay;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.birthDay;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.birthDay;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.birthDay;
      }
      case personaName.AAKOEK: {
        return this.aakoek.birthDay;
      }
      case personaName.AKO: {
        return this.ako.birthDay;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthDay;
      }
      case personaName.KNOPPERS: {
        return this.knoppers.birthDay;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.birthDay;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.birthDay;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaBirthMonth(input: string): string {
    switch (input) {
      case personaName.ILLING: {
        return this.illing.birthMonth;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.birthMonth;
      }
      case personaName.RONALDO: {
        return this.ronaldo.birthMonth;
      }
      case personaName.MESSI: {
        return this.messi.birthMonth;
      }
      case personaName.NEYMAR: {
        return this.neymar.birthMonth;
      }
      case personaName.SALAH: {
        return this.salah.birthMonth;
      }
      case personaName.POGBA: {
        return this.pogba.birthMonth;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.birthMonth;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.birthMonth;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.birthMonth;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.birthMonth;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.birthMonth;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.birthMonth;
      }
      case personaName.AAKOEK: {
        return this.aakoek.birthMonth;
      }
      case personaName.AKO: {
        return this.ako.birthMonth;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthMonth;
      }
      case personaName.KNOPPERS: {
        return this.knoppers.birthMonth;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.birthMonth;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.birthMonth;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaBirthYear(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.birthYear;
      }
      case personaName.ILLING: {
        return this.illing.birthYear;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.birthYear;
      }
      case personaName.RONALDO: {
        return this.ronaldo.birthYear;
      }
      case personaName.MESSI: {
        return this.messi.birthYear;
      }
      case personaName.NEYMAR: {
        return this.neymar.birthYear;
      }
      case personaName.SALAH: {
        return this.salah.birthYear;
      }
      case personaName.POGBA: {
        return this.pogba.birthYear;
      }
      case personaName.AAKOEK: {
        return this.aakoek.birthYear;
      }
      case personaName.AKO: {
        return this.ako.birthYear;
      }
       case personaName.ERICHTERS: {
        return this.erichters.birthYear;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.birthYear;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.birthYear;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.birthYear;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.birthYear;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.birthYear;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.birthYear;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.birthYear;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.birthYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaBirthDate(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.birthDay + '-' + this.knoppers.birthMonth + '-' + this.knoppers.birthYear;
      }
      case personaName.ILLING: {
        return this.illing.birthDay + '-' + this.illing.birthMonth + '-' + this.illing.birthYear;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.birthDay + '-' + this.woestenburg.birthMonth + '-' + this.woestenburg.birthYear;
      }
      case personaName.RONALDO: {
        return this.ronaldo.birthDay + '-' + this.ronaldo.birthMonth + '-' + this.ronaldo.birthYear;
      }
      case personaName.MESSI: {
        return this.messi.birthDay + '-' + this.messi.birthMonth + '-' + this.messi.birthYear;
      }
      case personaName.NEYMAR: {
        return this.neymar.birthDay + '-' + this.neymar.birthMonth + '-' + this.neymar.birthYear;
      }
      case personaName.SALAH: {
        return this.salah.birthDay + '-' + this.salah.birthMonth + '-' + this.salah.birthYear;
      }
      case personaName.POGBA: {
        return this.pogba.birthDay + '-' + this.pogba.birthMonth + '-' + this.pogba.birthYear;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.birthDay + '-' + this.testvrouwCustomerRecognition.birthMonth + '-' + this.testvrouwCustomerRecognition.birthYear;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.birthDay + '-' + this.testmanActivePolicy.birthMonth + '-' + this.testmanActivePolicy.birthYear;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.birthDay + '-' + this.testkindCustomerRecognition.birthMonth + '-' + this.testkindCustomerRecognition.birthYear;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.birthDay + '-' + this.testkindOnder18Een.birthMonth + '-' + this.testkindOnder18Een.birthYear;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.birthDay + '-' + this.testkindBoven18Een.birthMonth + '-' + this.testkindBoven18Een.birthYear;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.birthDay + '-' + this.testPartner.birthMonth + '-' + this.testPartner.birthYear;
      }
      case personaName.AAKOEK: {
        return this.aakoek.birthDay + '-' + this.aakoek.birthMonth + '-' + this.aakoek.birthYear;
      }
      case personaName.AKO: {
        return this.ako.birthDay + '-' + this.ako.birthMonth + '-' + this.ako.birthYear;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthDay + '-' + this.erichters.birthMonth + '-' + this.erichters.birthYear;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.birthDay + '-' + this.darthvader.birthMonth + '-' + this.darthvader.birthYear;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.birthDay + '-' + this.skywalker.birthMonth + '-' + this.skywalker.birthYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaLastName(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.lastName;
      }
      case personaName.ILLING: {
        return this.illing.lastName;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.lastName;
      }
      case personaName.RONALDO: {
        return this.ronaldo.lastName;
      }
      case personaName.MESSI: {
        return this.messi.lastName;
      }
      case personaName.NEYMAR: {
        return this.neymar.lastName;
      }
      case personaName.SALAH: {
        return this.salah.lastName;
      }
      case personaName.POGBA: {
        return this.pogba.lastName;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.lastName;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.lastName;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.lastName;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.lastName;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.lastName;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.lastName;
      }
      case personaName.AAKOEK: {
        return this.aakoek.lastName;
      }
      case personaName.AKO: {
        return this.ako.lastName;
      }
       case personaName.ERICHTERS: {
        return this.erichters.lastName;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.lastName;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.lastName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaFirstName(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.firstName;
      }
      case personaName.ILLING: {
        return this.illing.firstName;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.firstName;
      }
      case personaName.RONALDO: {
        return this.ronaldo.firstName;
      }
      case personaName.MESSI: {
        return this.messi.firstName;
      }
      case personaName.NEYMAR: {
        return this.neymar.firstName;
      }
      case personaName.SALAH: {
        return this.salah.firstName;
      }
      case personaName.POGBA: {
        return this.pogba.firstName;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.firstName;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.firstName;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.firstName;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.firstName;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.firstName;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.firstName;
      }
      case personaName.AAKOEK: {
        return this.aakoek.firstName;
      }
      case personaName.AKO: {
        return this.ako.firstName;
      }
      case personaName.ERICHTERS: {
        return this.erichters.firstName;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.firstName;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.firstName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaGender(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.gender;
      }
      case personaName.ILLING: {
        return this.illing.gender;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.gender;
      }
      case personaName.RONALDO: {
        return this.ronaldo.gender;
      }
      case personaName.MESSI: {
        return this.messi.gender;
      }
      case personaName.NEYMAR: {
        return this.neymar.gender;
      }
      case personaName.SALAH: {
        return this.salah.gender;
      }
      case personaName.POGBA: {
        return this.pogba.gender;
      }
      case personaName.AAKOEK: {
        return this.aakoek.gender;
      }
      case personaName.AKO: {
        return this.ako.gender;
      }
      case personaName.ERICHTERS: {
        return this.erichters.gender;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.gender;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.gender;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.gender;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.gender;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.gender;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.gender;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.gender;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.gender;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaInitials(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.initials;
      }
      case personaName.ILLING: {
        return this.illing.initials;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.initials;
      }
      case personaName.RONALDO: {
        return this.ronaldo.initials;
      }
      case personaName.MESSI: {
        return this.messi.initials;
      }
      case personaName.NEYMAR: {
        return this.neymar.initials;
      }
      case personaName.SALAH: {
        return this.salah.initials;
      }
      case personaName.POGBA: {
        return this.pogba.initials;
      }
      case personaName.AAKOEK: {
        return this.aakoek.initials;
      }
      case personaName.AKO: {
        return this.ako.initials;
      }
      case personaName.ERICHTERS: {
        return this.erichters.initials;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.initials;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.initials;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.initials;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.initials;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.initials;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.initials;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.initials;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.initials;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPrefix(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.prefix;
      }
      case personaName.ILLING: {
        return this.illing.prefix;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.prefix;
      }
      case personaName.RONALDO: {
        return this.ronaldo.prefix;
      }
      case personaName.MESSI: {
        return this.messi.prefix;
      }
      case personaName.NEYMAR: {
        return this.neymar.prefix;
      }
      case personaName.SALAH: {
        return this.salah.prefix;
      }
      case personaName.POGBA: {
        return this.pogba.prefix;
      }
      case personaName.AAKOEK: {
        return this.aakoek.prefix;
      }
      case personaName.AKO: {
        return this.ako.prefix;
      }
      case personaName.ERICHTERS: {
        return this.erichters.prefix;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.prefix;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.prefix;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.prefix;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.prefix;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.prefix;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.prefix;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.prefix;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.prefix;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBirthPlace(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.birthPlace;
      }
      case personaName.ILLING: {
        return this.illing.birthPlace;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.birthPlace;
      }
      case personaName.RONALDO: {
        return this.ronaldo.birthPlace;
      }
      case personaName.MESSI: {
        return this.messi.birthPlace;
      }
      case personaName.NEYMAR: {
        return this.neymar.birthPlace;
      }
      case personaName.SALAH: {
        return this.salah.birthPlace;
      }
      case personaName.POGBA: {
        return this.pogba.birthPlace;
      }
      case personaName.AAKOEK: {
        return this.aakoek.birthPlace;
      }
      case personaName.AKO: {
        return this.ako.birthPlace;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthPlace;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.birthPlace;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.birthPlace;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.birthPlace;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.birthPlace;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.birthPlace;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.birthPlace;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.birthPlace;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.birthPlace;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHouseNumber(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.houseNumber;
      }
      case personaName.ILLING: {
        return this.illing.houseNumber;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.houseNumber;
      }
      case personaName.RONALDO: {
        return this.ronaldo.houseNumber;
      }
      case personaName.MESSI: {
        return this.messi.houseNumber;
      }
      case personaName.NEYMAR: {
        return this.neymar.houseNumber;
      }
      case personaName.SALAH: {
        return this.salah.houseNumber;
      }
      case personaName.POGBA: {
        return this.pogba.houseNumber;
      }
      case personaName.AAKOEK: {
        return this.aakoek.houseNumber;
      }
      case personaName.AKO: {
        return this.ako.houseNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.houseNumber;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.houseNumber;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.houseNumber;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.houseNumber;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.houseNumber;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.houseNumber;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.houseNumber;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.houseNumber;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.houseNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHouseNumberAddition(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.houseNumberAddition;
      }
      case personaName.ILLING: {
        return this.illing.houseNumberAddition;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.houseNumberAddition;
      }
      case personaName.RONALDO: {
        return this.ronaldo.houseNumberAddition;
      }
      case personaName.MESSI: {
        return this.messi.houseNumberAddition;
      }
      case personaName.NEYMAR: {
        return this.neymar.houseNumberAddition;
      }
      case personaName.SALAH: {
        return this.salah.houseNumberAddition;
      }
      case personaName.POGBA: {
        return this.pogba.houseNumberAddition;
      }
      case personaName.AAKOEK: {
        return this.aakoek.houseNumberAddition;
      }
      case personaName.AKO: {
        return this.ako.houseNumberAddition;
      }
      case personaName.ERICHTERS: {
        return this.erichters.houseNumberAddition;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.houseNumberAddition;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.houseNumberAddition;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.houseNumberAddition;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.houseNumberAddition;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.houseNumberAddition;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.houseNumberAddition;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.houseNumberAddition;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.houseNumberAddition;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPhoneNumber(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.phoneNumber;
      }
      case personaName.ILLING: {
        return this.illing.phoneNumber;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.phoneNumber;
      }
      case personaName.RONALDO: {
        return this.ronaldo.phoneNumber;
      }
      case personaName.MESSI: {
        return this.messi.phoneNumber;
      }
      case personaName.NEYMAR: {
        return this.neymar.phoneNumber;
      }
      case personaName.SALAH: {
        return this.salah.phoneNumber;
      }
      case personaName.POGBA: {
        return this.pogba.phoneNumber;
      }
      case personaName.AAKOEK: {
        return this.aakoek.phoneNumber;
      }
      case personaName.AKO: {
        return this.ako.phoneNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.phoneNumber;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.phoneNumber;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.phoneNumber;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.phoneNumber;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.phoneNumber;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.phoneNumber;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.phoneNumber;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.phoneNumber;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.phoneNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaSpecificIdentification(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.specificIdentification;
      }
      case personaName.ILLING: {
        return this.illing.specificIdentification;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.specificIdentification;
      }
      case personaName.RONALDO: {
        return this.ronaldo.specificIdentification;
      }
      case personaName.MESSI: {
        return this.messi.specificIdentification;
      }
      case personaName.NEYMAR: {
        return this.neymar.specificIdentification;
      }
      case personaName.SALAH: {
        return this.salah.specificIdentification;
      }
      case personaName.POGBA: {
        return this.pogba.specificIdentification;
      }
      case personaName.AAKOEK: {
        return this.aakoek.specificIdentification;
      }
      case personaName.AKO: {
        return this.ako.specificIdentification;
      }
      case personaName.ERICHTERS: {
        return this.erichters.specificIdentification;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.specificIdentification;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.specificIdentification;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.specificIdentification;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.specificIdentification;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.specificIdentification;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.specificIdentification;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.specificIdentification;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.specificIdentification;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaSpecificIdentificationNumber(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.specificIdentificationNumber;
      }
      case personaName.ILLING: {
        return this.illing.specificIdentificationNumber;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.specificIdentificationNumber;
      }
      case personaName.RONALDO: {
        return this.ronaldo.specificIdentificationNumber;
      }
      case personaName.MESSI: {
        return this.messi.specificIdentificationNumber;
      }
      case personaName.NEYMAR: {
        return this.neymar.specificIdentificationNumber;
      }
      case personaName.SALAH: {
        return this.salah.specificIdentificationNumber;
      }
      case personaName.POGBA: {
        return this.pogba.specificIdentificationNumber;
      }
      case personaName.AAKOEK: {
        return this.aakoek.specificIdentificationNumber;
      }
      case personaName.AKO: {
        return this.ako.specificIdentificationNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.specificIdentificationNumber;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.specificIdentificationNumber;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.specificIdentificationNumber;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.specificIdentificationNumber;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.specificIdentificationNumber;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.specificIdentificationNumber;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.specificIdentificationNumber;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.specificIdentificationNumber;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.specificIdentificationNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaEmailAddress(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.eMailAddress;
      }
      case personaName.ILLING: {
        return this.illing.eMailAddress;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.eMailAddress;
      }
      case personaName.RONALDO: {
        return this.ronaldo.eMailAddress;
      }
      case personaName.MESSI: {
        return this.messi.eMailAddress;
      }
      case personaName.NEYMAR: {
        return this.neymar.eMailAddress;
      }
      case personaName.SALAH: {
        return this.salah.eMailAddress;
      }
      case personaName.POGBA: {
        return this.pogba.eMailAddress;
      }
      case personaName.AAKOEK: {
        return this.aakoek.eMailAddress;
      }
      case personaName.AKO: {
        return this.ako.eMailAddress;
      }
      case personaName.ERICHTERS: {
        return this.erichters.eMailAddress;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.eMailAddress;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.eMailAddress;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.eMailAddress;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.eMailAddress;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.eMailAddress;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.eMailAddress;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.eMailAddress;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.eMailAddress;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaAccountNumber(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.accountNumber;
      }
      case personaName.ILLING: {
        return this.illing.accountNumber;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.accountNumber;
      }
      case personaName.RONALDO: {
        return this.ronaldo.accountNumber;
      }
      case personaName.MESSI: {
        return this.messi.accountNumber;
      }
      case personaName.NEYMAR: {
        return this.neymar.accountNumber;
      }
      case personaName.SALAH: {
        return this.salah.accountNumber;
      }
      case personaName.POGBA: {
        return this.pogba.accountNumber;
      }
      case personaName.AAKOEK: {
        return this.aakoek.accountNumber;
      }
      case personaName.AKO: {
        return this.ako.accountNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.accountNumber;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.accountNumber;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.accountNumber;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.accountNumber;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.accountNumber;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.accountNumber;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.accountNumber;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.accountNumber;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.accountNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBsn(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.bsn;
      }
      case personaName.ILLING: {
        return this.illing.bsn;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.bsn;
      }
      case personaName.RONALDO: {
        return this.ronaldo.bsn;
      }
      case personaName.MESSI: {
        return this.messi.bsn;
      }
      case personaName.NEYMAR: {
        return this.neymar.bsn;
      }
      case personaName.SALAH: {
        return this.salah.bsn;
      }
      case personaName.POGBA: {
        return this.pogba.bsn;
      }
      case personaName.AAKOEK: {
        return this.aakoek.bsn;
      }
      case personaName.AKO: {
        return this.ako.bsn;
      }
      case personaName.ERICHTERS: {
        return this.erichters.bsn;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.bsn;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.bsn;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.bsn;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.bsn;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.bsn;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.bsn;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.bsn;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.bsn;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaProfession(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.profession;
      }
      case personaName.ILLING: {
        return this.illing.profession;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.profession;
      }
      case personaName.RONALDO: {
        return this.ronaldo.profession;
      }
      case personaName.MESSI: {
        return this.messi.profession;
      }
      case personaName.NEYMAR: {
        return this.neymar.profession;
      }
      case personaName.SALAH: {
        return this.salah.profession;
      }
      case personaName.POGBA: {
        return this.pogba.profession;
      }
      case personaName.AAKOEK: {
        return this.aakoek.profession;
      }
      case personaName.AKO: {
        return this.ako.profession;
      }
      case personaName.ERICHTERS: {
        return this.erichters.profession;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.profession;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.profession;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.profession;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.profession;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.profession;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.profession;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.profession;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.profession;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaKvkNumber(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.kvkNumber;
      }
      case personaName.ILLING: {
        return this.illing.kvkNumber;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.kvkNumber;
      }
      case personaName.RONALDO: {
        return this.ronaldo.kvkNumber;
      }
      case personaName.MESSI: {
        return this.messi.kvkNumber;
      }
      case personaName.NEYMAR: {
        return this.neymar.kvkNumber;
      }
      case personaName.SALAH: {
        return this.salah.kvkNumber;
      }
      case personaName.POGBA: {
        return this.pogba.kvkNumber;
      }
      case personaName.AAKOEK: {
        return this.aakoek.kvkNumber;
      }
      case personaName.AKO: {
        return this.ako.kvkNumber;
      }
       case personaName.ERICHTERS: {
        return this.erichters.kvkNumber;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.kvkNumber;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.kvkNumber;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.kvkNumber;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.kvkNumber;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.kvkNumber;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.kvkNumber;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.kvkNumber;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.kvkNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaDurationEntrepreneur(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.durationEntrepreneur;
      }
      case personaName.ILLING: {
        return this.illing.durationEntrepreneur;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.durationEntrepreneur;
      }
      case personaName.RONALDO: {
        return this.ronaldo.durationEntrepreneur;
      }
      case personaName.MESSI: {
        return this.messi.durationEntrepreneur;
      }
      case personaName.NEYMAR: {
        return this.neymar.durationEntrepreneur;
      }
      case personaName.SALAH: {
        return this.salah.durationEntrepreneur;
      }
      case personaName.POGBA: {
        return this.pogba.durationEntrepreneur;
      }
      case personaName.AAKOEK: {
        return this.aakoek.durationEntrepreneur;
      }
      case personaName.AKO: {
        return this.ako.durationEntrepreneur;
      }
       case personaName.ERICHTERS: {
        return this.erichters.durationEntrepreneur;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.durationEntrepreneur;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.durationEntrepreneur;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.durationEntrepreneur;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.durationEntrepreneur;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.durationEntrepreneur;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.durationEntrepreneur;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.durationEntrepreneur;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.durationEntrepreneur;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHeight(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.height;
      }
      case personaName.ILLING: {
        return this.illing.height;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.height;
      }
      case personaName.RONALDO: {
        return this.ronaldo.height;
      }
      case personaName.MESSI: {
        return this.messi.height;
      }
      case personaName.NEYMAR: {
        return this.neymar.height;
      }
      case personaName.SALAH: {
        return this.salah.height;
      }
      case personaName.POGBA: {
        return this.pogba.height;
      }
      case personaName.AAKOEK: {
        return this.aakoek.height;
      }
      case personaName.AKO: {
        return this.ako.height;
      }
      case personaName.ERICHTERS: {
        return this.erichters.height;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.height;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.height;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.height;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.height;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.height;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.height;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.height;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.height;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaWeight(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.weight;
      }
      case personaName.ILLING: {
        return this.illing.weight;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.weight;
      }
      case personaName.RONALDO: {
        return this.ronaldo.weight;
      }
      case personaName.MESSI: {
        return this.messi.weight;
      }
      case personaName.NEYMAR: {
        return this.neymar.weight;
      }
      case personaName.SALAH: {
        return this.salah.weight;
      }
      case personaName.POGBA: {
        return this.pogba.weight;
      }
      case personaName.AAKOEK: {
        return this.aakoek.weight;
      }
      case personaName.AKO: {
        return this.ako.weight;
      }
      case personaName.ERICHTERS: {
        return this.erichters.weight;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.weight;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.weight;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.weight;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.weight;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.weight;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.weight;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.weight;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.weight;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPassword(input: string): string {
    switch (input) {
      case personaName.KNOPPERS: {
        return this.knoppers.password;
      }
      case personaName.ILLING: {
        return this.illing.password;
      }
      case personaName.WOESTENBURG: {
        return this.woestenburg.password;
      }
      case personaName.RONALDO: {
        return this.ronaldo.password;
      }
      case personaName.MESSI: {
        return this.messi.password;
      }
      case personaName.NEYMAR: {
        return this.neymar.password;
      }
      case personaName.SALAH: {
        return this.salah.password;
      }
      case personaName.POGBA: {
        return this.pogba.password;
      }
      case personaName.AAKOEK: {
        return this.aakoek.password;
      }
      case personaName.AKO: {
        return this.ako.password;
      }
      case personaName.ERICHTERS: {
        return this.erichters.password;
      }
      case personaName.TESTVROUWCUSTOMERRECOGNITION: {
        return this.testvrouwCustomerRecognition.password;
      }
      case personaName.TESTMANACTIVEPOLICY: {
        return this.testmanActivePolicy.password;
      }
      case personaName.TESTKINDCUSTOMERRECOGNITION: {
        return this.testkindCustomerRecognition.password;
      }
      case personaName.TESTKINDONDER18EEN: {
        return this.testkindOnder18Een.password;
      }
      case personaName.TESTKINDBOVEN18EEN: {
        return this.testkindBoven18Een.password;
      }
      case personaName.TESTPARTNER: {
        return this.testPartner.password;
      }
      case personaName.DARTHVADER: {
        return this.darthvader.password;
      }
      case personaName.SKYWALKER: {
        return this.skywalker.password;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
