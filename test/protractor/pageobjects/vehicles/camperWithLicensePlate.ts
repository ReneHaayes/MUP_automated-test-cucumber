import {licensePlates} from "../enum/licensePlateEnum";

export class Camper {

  licensePlate: string;
  brandName: string;
  brandModel: string;
  newPrice: string;
  meldCode: string;

  constructor(licensePlate: string, brandName: string, brandModel: string, newPrice: string, meldCode: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.brandModel = brandModel;
    this.newPrice = newPrice;
    this.meldCode = meldCode;
  }
}

export class CamperWithLicensePlate {

  CAMPER_BLJL41: Camper = new Camper(licensePlates.CAMPER_BLJL41, 'SPARTAN', 'CRUISE-MASTER', '15000', '0000');


  getCamperBrandName(input: string): string {
    switch (input) {
      case licensePlates.CAMPER_BLJL41: {
        return this.CAMPER_BLJL41.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCamperBrandModel(input: string): string {
    switch (input) {
      case licensePlates.CAMPER_BLJL41: {
        return this.CAMPER_BLJL41.brandModel;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCamperNewPrice(input: string): string {
    switch (input) {
      case licensePlates.CAMPER_BLJL41: {
        return this.CAMPER_BLJL41.newPrice;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCamperMeldCode(input: string): string {
    switch (input) {
      case licensePlates.CAMPER_BLJL41: {
        return this.CAMPER_BLJL41.meldCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
