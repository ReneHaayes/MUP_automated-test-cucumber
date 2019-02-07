import {licensePlates} from "../enum/licensePlateEnum";
import {vehicleKindEnum} from "../enum/bromfietsVerzekeringEnum";

export class Motor {

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

export class MotorWithLicensePlate {

  _MPTT99: Motor = new Motor(licensePlates._MPTT99, 'SUZUKI', vehicleKindEnum.MOTOR, '2004', 'GSX R 750', '2999');
  _97XFTK: Motor = new Motor(licensePlates._97XFTK, 'hsun', vehicleKindEnum.QUAD, '2007', 'HS150S', '3999');
  _21PLN1: Motor = new Motor(licensePlates._21PLN1, 'courage trike', vehicleKindEnum.TRIKE, '2011', 'CT100TDI TIP', '4960');


  getMotorBrandName(input: string): string {
    switch (input) {
      case licensePlates._MPTT99: {
        return this._MPTT99.brandName;
      }
      case licensePlates._97XFTK: {
        return this._97XFTK.brandName;
      }
      case licensePlates._21PLN1: {
        return this._21PLN1.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorModel(input: string): string {
    switch (input) {
      case licensePlates._MPTT99: {
        return this._MPTT99.model;
      }
      case licensePlates._97XFTK: {
        return this._97XFTK.model;
      }
      case licensePlates._21PLN1: {
        return this._21PLN1.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorConstructionYear(input: string): string {
    switch (input) {
      case licensePlates._12FRP3: {
        return this._MPTT99.constructionYear;
      }
      case licensePlates._97XFTK: {
        return this._97XFTK.constructionYear;
      }
      case licensePlates._21PLN1: {
        return this._21PLN1.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorVersion(input: string): string {
    switch (input) {
      case licensePlates._MPTT99: {
        return this._MPTT99.version;
      }
      case licensePlates._97XFTK: {
        return this._97XFTK.version;
      }
      case licensePlates._21PLN1: {
        return this._21PLN1.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorPrice(input: string): string {
    switch (input) {
      case licensePlates._MPTT99: {
        return this._MPTT99.price;
      }
      case licensePlates._97XFTK: {
        return this._97XFTK.price;
      }
      case licensePlates._21PLN1: {
        return this._21PLN1.price;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
