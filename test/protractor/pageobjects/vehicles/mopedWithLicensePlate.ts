import {licensePlates, mopedTypeEnum} from '@enum';

export class Moped {

  licensePlate: string;
  brandName: string;
  model: string;
  version: string;
  constructionYear: string;
  vehicleType: string;

  constructor(licensePlate: string, brandName: string, model: string, constructionYear: string, version: string, vehicleType: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.model = model;
    this.version = version;
    this.constructionYear = constructionYear;
    this.vehicleType = vehicleType;
  }

}

export class MopedWithLicensePlate {

  MOPED_12FRP3: Moped = new Moped(licensePlates.MOPED_12FRP3, 'RIEJU', mopedTypeEnum.BROMFIETS, '2005', 'RR', mopedTypeEnum.BROMFIETS);  // versie veranderd van RR X/SPORT naar RR
  MOPED_F169NS: Moped = new Moped(licensePlates.MOPED_F169NS, 'VESPA', mopedTypeEnum.SNORSCOOTER, '2013', 'SPRINT S 4T', mopedTypeEnum.SNORSCOOTER);  // versie veranderd van S naar SPRINT S 4T
  MOPED_DKR97R: Moped = new Moped(licensePlates.MOPED_DKR97R, 'RIESE & MULLER', mopedTypeEnum.SNORFIETS, '2017', 'CRUISER NUVINCI HS', mopedTypeEnum.HIGH_SPEED_BIKE);

  getMopedBrandName(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOPED_12FRP3.brandName;
      }
      case licensePlates.MOPED_F169NS: {
        return this.MOPED_F169NS.brandName;
      }
      case licensePlates.MOPED_DKR97R: {
        return this.MOPED_DKR97R.brandName;
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
      case licensePlates.MOPED_DKR97R: {
        return this.MOPED_DKR97R.model;
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
      case licensePlates.MOPED_DKR97R: {
        return this.MOPED_DKR97R.constructionYear;
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
      case licensePlates.MOPED_DKR97R: {
        return this.MOPED_DKR97R.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMopedVehicleType(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOPED_12FRP3.vehicleType;
      }
      case licensePlates.MOPED_F169NS: {
        return this.MOPED_F169NS.vehicleType;
      }
      case licensePlates.MOPED_DKR97R: {
        return this.MOPED_DKR97R.vehicleType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
