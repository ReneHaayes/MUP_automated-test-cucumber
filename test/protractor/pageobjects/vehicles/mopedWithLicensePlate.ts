import {licensePlates, vehicleKindEnum} from "@enum";

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

  MOPED_12FRP3: Moped = new Moped(licensePlates.MOPED_12FRP3, 'RIEJU', vehicleKindEnum.BROMFIETS, '2005', 'RR', );  // versie veranderd van RR X/SPORT naar RR
  MOPED_F169NS: Moped = new Moped(licensePlates.MOPED_F169NS, 'VESPA', vehicleKindEnum.SNORSCOOTER, '2013', 'SPRINT S 4T', );  // versie veranderd van S naar SPRINT S 4T

  getMopedBrandName(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOPED_12FRP3.brandName;
      }
      case licensePlates.MOPED_F169NS: {
        return this.MOPED_F169NS.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedModel(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOPED_12FRP3.model;
      }
      case licensePlates.MOPED_F169NS: {
        return this.MOPED_F169NS.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedConstructionYear(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOPED_12FRP3.constructionYear;
      }
      case licensePlates.MOPED_F169NS: {
        return this.MOPED_F169NS.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedVersion(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOPED_12FRP3.version;
      }
      case licensePlates.MOPED_F169NS: {
        return this.MOPED_F169NS.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
