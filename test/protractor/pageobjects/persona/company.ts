import {companyNameEnum, genericEnum} from "../enum/genericEnum";
import {legalEnum} from "../enum/autoVerzekeringEnum";

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

  facebook: Company = new Company('Facebook', '7412XW', '37131558', legalEnum.BV, '91', genericEnum.EMPTY, '0612345678',
    'facebook@unive.nl');

  getCompanyName(input: string): string {
    switch (input) {
      case companyNameEnum.FACEBOOK: {
        return this.facebook.companyName;
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
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
