import {
  durationEntrepreneur,
  gender,
  houseNumberAddition,
  personaName,
  phoneNumber,
  prefix,
  specificIdentification
} from "../enum/genericEnum";

export class Persona {

  firstName: string;
  initials: string;
  lastName: string;
  birthDay: string;
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

  constructor(firstName: string, initials: string, prefix: string, lastName: string, birthday: string, birthplace: string, zipcode: string, houseNumber: string, houseNumberAddition: string,
              gender: string, phoneNumber: string, specificIdentification: string, specificIdentificationNumber: string, eMailAddress: string, accountNumber: string, bsn: string,
              profession: string, kvkNumber:string, durationEntrepreneur: string, height: string, weight: string) {

    this.firstName = firstName;
    this.initials = initials;
    this.lastName = lastName;
    this.birthDay = birthday;
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
  }
}

export class PersonaData {

  ronaldo: Persona = new Persona('Cristiano', 'C', prefix.NO_PREFIX, 'Ronaldo', '10-05-1987', 'Deventer', '7412XW', '91',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '0601234587', specificIdentification.PASSPORT, 'ACP26N', 'ronaldo@unive.nl',
    'NL05INGB0661095088', '218333754', 'model', '1234567890', durationEntrepreneur._5, '185', '85');
  messi: Persona = new Persona('Lionel', 'L', prefix.NO_PREFIX, 'Messi', '05-09-1965', 'Apeldoorn', '7412TV', '44',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, phoneNumber.NO_PHONENUMBER, specificIdentification.DRIVER_LICENSE, '12345567890',
    'messi@unive.nl', 'NL05INGB0661095088', '218333754', 'footballer', '1234567890', durationEntrepreneur._9, '176', '76');
  salah: Persona = new Persona('Mohammed', 'M', prefix.NO_PREFIX, 'Salah', '15-06-1992', 'Enschede', '7412XW', '31',
    'A', gender.MALE, '1234567890', specificIdentification.ID_CARD, 'HDN068A', 'salah@unive.nl',
    'NL05INGB0661095088', '218333754', 'beast', '1234567890', durationEntrepreneur._3, '167', '50');
  neymar: Persona = new Persona('Neymar', 'N', 'da', 'Silva', '05-02-1992', 'Arnhem', '7412XW', '12',
    'ABC', gender.FEMALE, phoneNumber.NO_PHONENUMBER, specificIdentification.SOMETHING_ELSE, specificIdentification.NO_NUMBER, 'neymar@unive.nl',
    'NL05INGB0661095088', '218333754', 'diver', '1234567890', durationEntrepreneur._7, '190', '98');
  pogba: Persona = new Persona('Paul', 'PL', prefix.NO_PREFIX, 'Pogba', '15-03-1993', 'Zwolle', '7412TV', '69',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '1234567890', specificIdentification.ID_CARD, '897623', 'pogba@unive.nl',
    'NL05INGB0661095088', '218333754', 'beast', '1234567890', durationEntrepreneur._MIN1, '209', '110');


  getPersonaZipcode(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBirthday(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaLastName(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaFirstName(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaGender(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }

  getPersonaInitials(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPrefix(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBirthPlace(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHouseNumber(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHouseNumberAddition(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaPhoneNumber(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaSpecificIdentification(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaSpecificIdentificationNumber(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaEmailAddress(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaAccountNumber(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaBsn(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaProfession(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaKvkNumber(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaDurationEntrepreneur(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaHeight(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getPersonaWeight(input: string): string {
    switch (input) {
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }


}
