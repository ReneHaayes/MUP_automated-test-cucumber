import {
  durationEntrepreneur,
  gender,
  houseNumberAddition, personaName,
  phoneNumber,
  prefix,
  specificIdentification
} from "@enum";

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
  neymar: Persona = new Persona('Neymar', 'N', 'da', 'Silva', '05', '02', '1992', 'Arnhem', '7412XW', '12',
    'ABC', gender.FEMALE, phoneNumber.NO_PHONENUMBER, specificIdentification.SOMETHING_ELSE, specificIdentification.NO_NUMBER, 'neymar@unive.nl',
    'NL05INGB0661095088', '218333754', 'diver', '1234567890', durationEntrepreneur._7, '190', '98', 'Welkom01!');
  pogba: Persona = new Persona('Paul', 'PL', prefix.NO_PREFIX, 'Pogba', '15', '03', '1993', 'Zwolle', '7412TV', '69',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '1234567890', specificIdentification.ID_CARD, '897623', 'pogba@unive.nl',
    'NL05INGB0661095088', '218333754', 'beast', '1234567890', durationEntrepreneur._MIN1, '209', '110', 'Welkom01!');
  illing: Persona = new Persona('Geraldine', 'G', prefix.NO_PREFIX, 'Illing-van Bruggen', '28', '10', '1962', 'Deventer', '7412XW', '91',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, '0601234587', specificIdentification.PASSPORT, 'ACP26N', 'illing@unive.nl',
    '5088', '218333754', 'model', '1234567890', durationEntrepreneur._5, '185', '85', 'Welkom01!');
  woestenburg: Persona = new Persona('Annie', 'AF', prefix.NO_PREFIX, 'Woestenburg', '19', '10', '1956', 'Venhuizen', '1606XA', '11',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'a.woestenburg@quicknet.nl', '3872', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Welkom01!');
  aakoek: Persona = new Persona('Annie', 'AA', prefix.NO_PREFIX, 'Koek', '07', '07', '1976', 'Enschede', '7546ET', '59',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'aakoek@hotmail.com', '2487', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Test123!');
  ako: Persona = new Persona('Ako', 'AJC', prefix.NO_PREFIX, 'Koek', '09', '04', '1962', 'Kudelstaart', '1433DC', '4',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'ako62@live.nl', '8582', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Test123!');
  avonk: Persona = new Persona('Antonie', 'A', prefix.NO_PREFIX, 'Vonk', '19', '10', '1968', 'Apeldoorn', '7323MG', '4',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'antonie.vonk@live.nl', '1322', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Test123!');
  erichters: Persona = new Persona('Antonie', 'A', prefix.NO_PREFIX, 'Evers', '01', '01', '1937', 'Delfzijl', '9934LP',
    '6', houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '+31612345678', specificIdentification.DRIVER_LICENSE, '12345567890',
    'eversrichters@ziggo.nl', '7671', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76', 'Test123!');


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
      case personaName.AVONK: {
        return this.avonk.zipCode;
      }
      case personaName.ERICHTERS: {
        return this.erichters.zipCode;
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
      case personaName.AAKOEK: {
        return this.aakoek.birthDay;
      }
      case personaName.AKO: {
        return this.ako.birthDay;
      }
      case personaName.AVONK: {
        return this.avonk.birthDay;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthDay;
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
      case personaName.AAKOEK: {
        return this.aakoek.birthMonth;
      }
      case personaName.AKO: {
        return this.ako.birthMonth;
      }
      case personaName.AVONK: {
        return this.avonk.birthMonth;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthMonth;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaBirthYear(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.birthYear;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaBirthDate(input: string): string {
    switch (input) {
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
      case personaName.AAKOEK: {
        return this.aakoek.birthDay + '-' + this.aakoek.birthMonth + '-' + this.aakoek.birthYear;
      }
      case personaName.AKO: {
        return this.ako.birthDay + '-' + this.ako.birthMonth + '-' + this.ako.birthYear;
      }
      case personaName.AVONK: {
        return this.avonk.birthDay + '-' + this.avonk.birthMonth + '-' + this.avonk.birthYear;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthDay + '-' + this.erichters.birthMonth + '-' + this.erichters.birthYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaLastName(input: string): string {
    switch (input) {
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
      case personaName.AAKOEK: {
        return this.aakoek.lastName;
      }
      case personaName.AKO: {
        return this.ako.lastName;
      }
      case personaName.AVONK: {
        return this.avonk.lastName;
      }
      case personaName.ERICHTERS: {
        return this.erichters.lastName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaFirstName(input: string): string {
    switch (input) {
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
      case personaName.AAKOEK: {
        return this.aakoek.firstName;
      }
      case personaName.AKO: {
        return this.ako.firstName;
      }
      case personaName.AVONK: {
        return this.avonk.firstName;
      }
      case personaName.ERICHTERS: {
        return this.erichters.firstName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaGender(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.gender;
      }
      case personaName.ERICHTERS: {
        return this.erichters.gender;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaInitials(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.initials;
      }
      case personaName.ERICHTERS: {
        return this.erichters.initials;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPrefix(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.prefix;
      }
      case personaName.ERICHTERS: {
        return this.erichters.prefix;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBirthPlace(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.birthPlace;
      }
      case personaName.ERICHTERS: {
        return this.erichters.birthPlace;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHouseNumber(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.houseNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.houseNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHouseNumberAddition(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.houseNumberAddition;
      }
      case personaName.ERICHTERS: {
        return this.erichters.houseNumberAddition;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPhoneNumber(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.phoneNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.phoneNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaSpecificIdentification(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.specificIdentification;
      }
      case personaName.ERICHTERS: {
        return this.erichters.specificIdentification;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaSpecificIdentificationNumber(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.specificIdentificationNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.specificIdentificationNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaEmailAddress(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.eMailAddress;
      }
      case personaName.ERICHTERS: {
        return this.erichters.eMailAddress;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaAccountNumber(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.accountNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.accountNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBsn(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.bsn;
      }
      case personaName.ERICHTERS: {
        return this.erichters.bsn;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaProfession(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.profession;
      }
      case personaName.ERICHTERS: {
        return this.erichters.profession;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaKvkNumber(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.kvkNumber;
      }
      case personaName.ERICHTERS: {
        return this.erichters.kvkNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaDurationEntrepreneur(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.durationEntrepreneur;
      }
      case personaName.ERICHTERS: {
        return this.erichters.durationEntrepreneur;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHeight(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.height;
      }
      case personaName.ERICHTERS: {
        return this.erichters.height;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaWeight(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.weight;
      }
      case personaName.ERICHTERS: {
        return this.erichters.weight;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPassword(input: string): string {
    switch (input) {
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
      case personaName.AVONK: {
        return this.avonk.password;
      }
      case personaName.ERICHTERS: {
        return this.erichters.password;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
