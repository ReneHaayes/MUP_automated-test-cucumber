import {licensePlates} from "../enum/licensePlateEnum";
import {vehicleKindEnum} from "../enum/bromfietsVerzekeringEnum";

export class Moped {

  licensePlate: string;
  brandName: string;
  model: string;
  version: string;
  constructionYear: string;

  constructor(licensePlate: string, brandName: string, model: string, constructionYear: string, version: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.model = model;
    this.version = version;
    this.constructionYear = constructionYear;
  }

}

export class MopedWithLicensePlate {

  _12FRP3: Moped = new Moped(`12-FRP-3`, 'RIEJU', vehicleKindEnum.BROMFIETS, '2005', 'RR', );

  getMopedBrandName(input: string): string {
    switch (input) {
      case licensePlates._12FRP3: {
        return this._12FRP3.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedModel(input: string): string {
    switch (input) {
      case licensePlates._12FRP3: {
        return this._12FRP3.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedConstructionYear(input: string): string {
    switch (input) {
      case licensePlates._12FRP3: {
        return this._12FRP3.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedVersion(input: string): string {
    switch (input) {
      case licensePlates._12FRP3: {
        return this._12FRP3.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
