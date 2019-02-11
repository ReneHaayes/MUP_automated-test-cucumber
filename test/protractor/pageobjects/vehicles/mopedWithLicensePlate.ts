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

  _12FRP3: Moped = new Moped(licensePlates._12FRP3, 'RIEJU', vehicleKindEnum.BROMFIETS, '2005', 'RR', );
  _F169NS: Moped = new Moped(licensePlates._F169NS, 'VESPA', vehicleKindEnum.SNORSCOOTER, '2013', 'SPRINT S 4T', );


  getMopedBrandName(input: string): string {
    switch (input) {
      case licensePlates._12FRP3: {
        return this._12FRP3.brandName;
      }
      case licensePlates._F169NS: {
        return this._F169NS.brandName;
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
      case licensePlates._F169NS: {
        return this._F169NS.model;
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
      case licensePlates._F169NS: {
        return this._F169NS.constructionYear;
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
      case licensePlates._F169NS: {
        return this._F169NS.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
