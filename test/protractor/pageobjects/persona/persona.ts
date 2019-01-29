import {gender, houseNumberAddition, personaName, phoneNumber, prefix, specificIdentification} from "../enum/enum";

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


  constructor(firstName: string, initials: string, prefix: string, lastName: string, birthday: string, birthplace: string, zipcode: string, houseNumber: string, houseNumberAddition: string,
              gender: string, phoneNumber: string, specificIdentification: string, specificIdentificationNumber: string, eMailAddress: string, accountNumber: string) {

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
  }
}

export class PersonaData {

  ronaldo: Persona = new Persona('Cristiano', 'C', prefix.NO_PREFIX, 'Ronaldo', '10-05-1987', 'Deventer', '7412XW', '91',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '0601234587', specificIdentification.PASSPORT, 'ACP26N', 'ronaldo@unive.nl',
    'NL05INGB0661095088');
  messi: Persona = new Persona('Lionel', 'L', prefix.NO_PREFIX, 'Messi', '05-09-1965', 'Apeldoorn', '7412TV', '44',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.FEMALE, phoneNumber.NO_PHONENUMBER, specificIdentification.DRIVER_LICENSE, '12345567890',
    'messi@unive.nl', 'NL05INGB0661095088');
  salah: Persona = new Persona('Mohammed', 'M', prefix.NO_PREFIX, 'Salah', '15-06-1992', 'Enschede', '7412XW', '31',
    'A', gender.MALE, '1234567890', specificIdentification.ID_CARD, 'HDN068A', 'salah@unive.nl',
    'NL05INGB0661095088');
  neymar: Persona = new Persona('Neymar', 'N', 'da', 'Silva', '05-02-1992', 'Arnhem', '7412XW', '12',
    'ABC', gender.FEMALE, phoneNumber.NO_PHONENUMBER, specificIdentification.SOMETHING_ELSE, specificIdentification.NO_NUMBER, 'neymar@unive.nl',
    'NL05INGB0661095088');
  pogba: Persona = new Persona('Paul', 'PL', prefix.NO_PREFIX, 'Pogba', '15-03-1993', 'Zwolle', '7412TV', '69',
    houseNumberAddition.NO_HOUSENUMBER_ADDITION, gender.MALE, '1234567890', specificIdentification.ID_CARD, '897623', 'pogba@unive.nl',
    'NL05INGB0661095088');


  getPersonaZipcode(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.zipCode;
    } else if (persona === personaName.MESSI) {
      return this.messi.zipCode;
    } else if (persona === personaName.SALAH) {
      return this.salah.zipCode;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.zipCode;
    } else if (persona === personaName.POGBA) {
      return this.pogba.zipCode;
    } else {
      throw new Error('The input you have entered for getPersonaZipCode: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaBirthday(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.birthDay;
    } else if (persona === personaName.MESSI) {
      return this.messi.birthDay;
    } else if (persona === personaName.SALAH) {
      return this.salah.birthDay;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.birthDay;
    } else if (persona === personaName.POGBA) {
      return this.pogba.birthDay;
    } else {
      throw new Error('The input you have entered for getPersonaBirthday: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaLastName(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.lastName;
    } else if (persona === personaName.MESSI) {
      return this.messi.lastName;
    } else if (persona === personaName.SALAH) {
      return this.salah.lastName;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.lastName;
    } else if (persona === personaName.POGBA) {
      return this.pogba.lastName;
    } else {
      throw new Error('The input you have entered for getPersonaLastName: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaFirstName(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.firstName;
    } else if (persona === personaName.MESSI) {
      return this.messi.firstName;
    } else if (persona === personaName.SALAH) {
      return this.salah.firstName;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.firstName;
    } else if (persona === personaName.POGBA) {
      return this.pogba.firstName;
    } else {
      throw new Error('The input you have entered for getPersonaFirstname: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaGender(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.gender;
    } else if (persona === personaName.MESSI) {
      return this.messi.gender;
    } else if (persona === personaName.SALAH) {
      return this.salah.gender;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.gender;
    } else if (persona === personaName.POGBA) {
      return this.pogba.gender;
    } else {
      throw new Error('The input you have entered for getPersonaGender: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaInitials(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.initials;
    } else if (persona === personaName.MESSI) {
      return this.messi.initials;
    } else if (persona === personaName.SALAH) {
      return this.salah.initials;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.initials;
    } else if (persona === personaName.POGBA) {
      return this.pogba.initials;
    } else {
      throw new Error('The input you have entered for getPersonaInitials: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaPrefix(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.prefix;
    } else if (persona === personaName.MESSI) {
      return this.messi.prefix;
    } else if (persona === personaName.SALAH) {
      return this.salah.prefix;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.prefix;
    } else if (persona === personaName.POGBA) {
      return this.pogba.prefix;
    } else {
      throw new Error('The input you have entered for getPersonaPrefix: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaBirthPlace(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.birthPlace;
    } else if (persona === personaName.MESSI) {
      return this.messi.birthPlace;
    } else if (persona === personaName.SALAH) {
      return this.salah.birthPlace;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.birthPlace;
    } else if (persona === personaName.POGBA) {
      return this.pogba.birthPlace;
    } else {
      throw new Error('The input you have entered for getPersonaBirthPlace: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaHouseNumber(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.houseNumber;
    } else if (persona === personaName.MESSI) {
      return this.messi.houseNumber;
    } else if (persona === personaName.SALAH) {
      return this.salah.houseNumber;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.houseNumber;
    } else if (persona === personaName.POGBA) {
      return this.pogba.houseNumber;
    } else {
      throw new Error('The input you have entered for getPersonaHouseNumber: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaHouseNumberAddition(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.houseNumberAddition
    } else if (persona === personaName.MESSI) {
      return this.messi.houseNumberAddition;
    } else if (persona === personaName.SALAH) {
      return this.salah.houseNumberAddition;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.houseNumberAddition;
    } else if (persona === personaName.POGBA) {
      return this.pogba.houseNumberAddition;
    } else {
      throw new Error('The input you have entered for getPersonaHouseNumberAddition: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaPhoneNumber(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.phoneNumber;
    } else if (persona === personaName.MESSI) {
      return this.messi.phoneNumber;
    } else if (persona === personaName.SALAH) {
      return this.salah.phoneNumber;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.phoneNumber;
    } else if (persona === personaName.POGBA) {
      return this.pogba.phoneNumber;
    } else {
      throw new Error('The input you have entered for getPersonaPhoneNumber: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaSpecificIdentification(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.specificIdentification;
    } else if (persona === personaName.MESSI) {
      return this.messi.specificIdentification;
    } else if (persona === personaName.SALAH) {
      return this.salah.specificIdentification;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.specificIdentification;
    } else if (persona === personaName.POGBA) {
      return this.pogba.specificIdentification;
    } else {
      throw new Error('The input you have entered for getPersonaSpecificIdentification: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaSpecificIdentificationNumber(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.specificIdentificationNumber;
    } else if (persona === personaName.MESSI) {
      return this.messi.specificIdentificationNumber;
    } else if (persona === personaName.SALAH) {
      return this.salah.specificIdentificationNumber;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.specificIdentificationNumber;
    } else if (persona === personaName.POGBA) {
      return this.pogba.specificIdentificationNumber;
    } else {
      throw new Error('The input you have entered for getPersonaSpecificIdentificationNumber: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaEmailAddress(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.eMailAddress;
    } else if (persona === personaName.MESSI) {
      return this.messi.eMailAddress;
    } else if (persona === personaName.SALAH) {
      return this.salah.eMailAddress;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.eMailAddress;
    } else if (persona === personaName.POGBA) {
      return this.pogba.eMailAddress;
    } else {
      throw new Error('The input you have entered for getPersonaEmailAddress: "" ' + persona + ' "" is not recognized as a command');
    }
  }

  getPersonaAccountNumber(persona: string): string {
    if (persona === personaName.RONALDO) {
      return this.ronaldo.accountNumber;
    } else if (persona === personaName.MESSI) {
      return this.messi.accountNumber;
    } else if (persona === personaName.SALAH) {
      return this.salah.accountNumber;
    } else if (persona === personaName.NEYMAR) {
      return this.neymar.accountNumber;
    } else if (persona === personaName.POGBA) {
      return this.pogba.accountNumber;
    } else {
      throw new Error('The input you have entered for getPersonaAccountNumber: "" ' + persona + ' "" is not recognized as a command');
    }
  }
}
