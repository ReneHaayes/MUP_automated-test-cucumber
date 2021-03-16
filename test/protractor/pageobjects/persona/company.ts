import {companyNameEnum,
  genericEnum,
  legalEnum
} from '@enum';


export class Company {

  companyName: string;
  zipCode: string;
  kvkNumber: string;
  legal: string;
  companyMainActivity: string;
  houseNumber: string;
  houseNumberAdding: string;
  phoneNumber: string;
  emailAddress: string;


  constructor(companyName: string, zipcode: string, kvkNumber: string, legal: string, companyMainActivity: string, houseNumber: string, houseNumberAdding: string, phoneNumber: string, emailAddress: string) {

    this.companyName = companyName;
    this.zipCode = zipcode;
    this.kvkNumber = kvkNumber;
    this.legal = legal;
    this.companyMainActivity = companyMainActivity;
    this.houseNumber = houseNumber;
    this.houseNumberAdding = houseNumberAdding;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;

  }
}

export class CompanyData {
// Deze gegevensset gebruikt KVK-nummers van productie omgeving
   facebook: Company = new Company('Facebook', '7412XW', '37131558', legalEnum.BV, 'Werkzaamheden in de bouw', '91', genericEnum.EMPTY, '0612345678', 'facebook@unive.nl');
   rg_timmerwerken: Company = new Company('R.G. Timmerwerken', '1851LX', '37131558', legalEnum.EENMANSZAAK, 'Werkzaamheden in de bouw', '33', 'c', '0612345678', 'Timmerwerkje@unive.nl');
   Grondverzet_machine_verhuur_Springer: Company = new Company('Grondverzet & machine verhuur J. Springer', '2642CD', '27277486', legalEnum.EENMANSZAAK, 'Werkzaamheden in de bouw', '21', genericEnum.EMPTY, '0612345678', 'GRONDVERZET@unive.nl');

  // Deze gegevensset gebruikt KVK-nummers van mock server. Echte KVK-nummers willen we niet meer gebruiken om te voorkomen dat het fout gaat bij echte klanten
  // facebook: Company = new Company('Facebook', '7412XW', '99000002', legalEnum.BV, 'Werkzaamheden in de bouw', '91', genericEnum.EMPTY, '0612345678', 'facebook@unive.nl');
  // rg_timmerwerken: Company = new Company('R.G. Timmerwerken', '1851LX', '99000002', legalEnum.EENMANSZAAK, 'Werkzaamheden in de bouw', '33', 'c', '0612345678', 'Timmerwerkje@unive.nl');
  // Grondverzet_machine_verhuur_Springer: Company = new Company('Grondverzet & machine verhuur J. Springer', '2642CD', '99000002', legalEnum.EENMANSZAAK, 'Werkzaamheden in de bouw', '21', genericEnum.EMPTY, '0612345678', 'GRONDVERZET@unive.nl');

  getCompanyName(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.companyName;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.companyName;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.companyName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyZipcode(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.zipCode;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.zipCode;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.zipCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyKvkNumber(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.kvkNumber;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.kvkNumber;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.kvkNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyLegal(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.legal;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.legal;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.legal;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyMainActivity(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.companyMainActivity;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.companyMainActivity;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.companyMainActivity;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyHouseNumber(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.houseNumber;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.houseNumber;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.houseNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyHouseNumberAdding(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.houseNumberAdding;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.houseNumberAdding;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.houseNumberAdding;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyEmailAddress(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.emailAddress;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.emailAddress;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.emailAddress;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCompanyPhoneNumber(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.phoneNumber;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.phoneNumber;
      }
      case companyNameEnum.GRONDVERZET_MACHINE_VERHUUR_SPRINGER: {
        return this.Grondverzet_machine_verhuur_Springer.phoneNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
