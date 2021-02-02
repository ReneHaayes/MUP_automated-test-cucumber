import {licensePlates, mopedTypeEnum} from '@enum';

export class Motorcycle {

  licensePlate: string;
  brandName: string;
  model: string;
  version: string;
  constructionYear: string;
  price: string;

  constructor(licensePlate: string, brandName: string, model: string, constructionYear: string, version: string, price: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.model = model;
    this.version = version;
    this.constructionYear = constructionYear;
    this.price = price;
  }

}

export class MotorcycleWithLicensePlate {

  MOTORCYCLE_MPTT99: Motorcycle = new Motorcycle(licensePlates.MOTORCYCLE_MPTT99, 'SUZUKI', 'SPORT', '2004', 'GSX R 750', '2999');
  MOTORCYCLE_MFPV49: Motorcycle = new Motorcycle(licensePlates.MOTORCYCLE_MFPV49, 'HARLEY DAVIDSON', 'CHOPPER', '2002', '88 FLSTF FAT BOY', 'priceless' );
  QUAD_97XFTK: Motorcycle = new Motorcycle(licensePlates.QUAD_97XFTK, 'hsun', mopedTypeEnum.QUAD, '2007', 'HS150S', '3999');
  TRIKE_21PLN1: Motorcycle = new Motorcycle(licensePlates.TRIKE_21PLN1, 'courage trike', mopedTypeEnum.TRIKE, '2011', 'CT100TDI TIP', '4960');


  getMotorcycleBrandName(input: string): string {
    switch (input) {
      case licensePlates.MOTORCYCLE_MPTT99: {
        return this.MOTORCYCLE_MPTT99.brandName;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.brandName;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.brandName;
      }
      case licensePlates.MOTORCYCLE_MFPV49: {
        return this.MOTORCYCLE_MFPV49.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorcycleModel(input: string): string {
    switch (input) {
      case licensePlates.MOTORCYCLE_MPTT99: {
        return this.MOTORCYCLE_MPTT99.model;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.model;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.model;
      }
      case licensePlates.MOTORCYCLE_MFPV49: {
        return this.MOTORCYCLE_MFPV49.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorcycleConstructionYear(input: string): string {
    switch (input) {
      case licensePlates.MOTORCYCLE_MPTT99: {
        return this.MOTORCYCLE_MPTT99.constructionYear;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.constructionYear;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.constructionYear;
      }
      case licensePlates.MOTORCYCLE_MFPV49: {
        return this.MOTORCYCLE_MFPV49.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorcycleVersion(input: string): string {
    switch (input) {
      case licensePlates.MOTORCYCLE_MPTT99: {
        return this.MOTORCYCLE_MPTT99.version;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.version;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.version;
      }
      case licensePlates.MOTORCYCLE_MFPV49: {
        return this.MOTORCYCLE_MFPV49.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorcyclePrice(input: string): string {
    switch (input) {
      case licensePlates.MOTORCYCLE_MPTT99: {
        return this.MOTORCYCLE_MPTT99.price;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.price;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.price;
      }
      case licensePlates.MOTORCYCLE_MFPV49: {
        return this.MOTORCYCLE_MFPV49.price;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
