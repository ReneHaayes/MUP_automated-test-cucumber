import {companyNameEnum, genericEnum, legalEnum} from "@enum";


export class Company {

  companyName: string;
  zipCode: string;
  kvkNumber: string;
  legal: string;
  houseNumber: string;
  houseNumberAdding: string;
  phoneNumber: string;
  emailAddress: string;


  constructor(companyName: string, zipcode: string, kvkNumber: string, legal: string, houseNumber: string, houseNumberAdding: string, phoneNumber: string, emailAddress: string) {

    this.companyName = companyName;
    this.zipCode = zipcode;
    this.kvkNumber = kvkNumber;
    this.legal = legal;
    this.houseNumber = houseNumber;
    this.houseNumberAdding = houseNumberAdding;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;

  }
}

export class CompanyData {

  facebook: Company = new Company('Facebook', '7412XW', '37131558', legalEnum.BV, '91', genericEnum.EMPTY, '0612345678', 'facebook@unive.nl');
  rg_timmerwerken: Company = new Company('R.G. TIMMERWERKEN', '9646AS', '68727720', legalEnum.EENMANSZAAK, '8', genericEnum.EMPTY, '0612345678', 'facebook@unive.nl');
  //Specifiek zakelijktest rg_timmerwerken zipcode 7412XW - housenumber 91 - kvkNumber:'37131558'

  getCompanyName(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.companyName;
      }
      case companyNameEnum.RG_TIMMERWERKEN: {
        return this.rg_timmerwerken.companyName;
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
