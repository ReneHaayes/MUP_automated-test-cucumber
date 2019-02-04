import {licensePlates} from "../enum/licensePlateEnum";

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

  _12FRP3: Moped = new Moped(`12-FRP-3`, 'RIEJU', 'BROMFIETS', '2005', 'RR');

  getMopedBrandName(licensePlate: string): string {
    if (licensePlate === licensePlates._12FRP3) {
      return this._12FRP3.brandName;
    // } else if (licensePlate === '80-SRB-4') {
    //   return this._80SRB4.fuelType;
    } else {
      throw new Error('The input you have entered getMopedBrandName: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getMopedModel(licensePlate: string): string {
    if (licensePlate === licensePlates._12FRP3) {
      return this._12FRP3.model;
      // } else if (licensePlate === '80-SRB-4') {
      //   return this._80SRB4.fuelType;
    } else {
      throw new Error('The input you have entered getMopedModel: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getMopedConstructionYear(licensePlate: string): string {
    if (licensePlate === licensePlates._12FRP3) {
      return this._12FRP3.constructionYear;
      // } else if (licensePlate === '80-SRB-4') {
      //   return this._80SRB4.fuelType;
    } else {
      throw new Error('The input you have entered getMopedConstructionYear: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getMopedVersion(licensePlate: string): string {
    if (licensePlate === licensePlates._12FRP3) {
      return this._12FRP3.version;
      // } else if (licensePlate === '80-SRB-4') {
      //   return this._80SRB4.fuelType;
    } else {
      throw new Error('The input you have entered getMopedVersion: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

}
