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

  MOTOR_MPTT99: Motor = new Motor(licensePlates.MOTOR_MPTT99, 'SUZUKI', vehicleKindEnum.MOTOR, '2004', 'GSX R 750', '2999');
  QUAD_97XFTK: Motor = new Motor(licensePlates.QUAD_97XFTK, 'hsun', vehicleKindEnum.QUAD, '2007', 'HS150S', '3999');
  TRIKE_21PLN1: Motor = new Motor(licensePlates.TRIKE_21PLN1, 'courage trike', vehicleKindEnum.TRIKE, '2011', 'CT100TDI TIP', '4960');


  getMotorBrandName(input: string): string {
    switch (input) {
      case licensePlates.MOTOR_MPTT99: {
        return this.MOTOR_MPTT99.brandName;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.brandName;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorModel(input: string): string {
    switch (input) {
      case licensePlates.MOTOR_MPTT99: {
        return this.MOTOR_MPTT99.model;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.model;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorConstructionYear(input: string): string {
    switch (input) {
      case licensePlates.MOPED_12FRP3: {
        return this.MOTOR_MPTT99.constructionYear;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.constructionYear;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorVersion(input: string): string {
    switch (input) {
      case licensePlates.MOTOR_MPTT99: {
        return this.MOTOR_MPTT99.version;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.version;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.version;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMotorPrice(input: string): string {
    switch (input) {
      case licensePlates.MOTOR_MPTT99: {
        return this.MOTOR_MPTT99.price;
      }
      case licensePlates.QUAD_97XFTK: {
        return this.QUAD_97XFTK.price;
      }
      case licensePlates.TRIKE_21PLN1: {
        return this.TRIKE_21PLN1.price;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
