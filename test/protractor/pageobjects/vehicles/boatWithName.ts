import {boatNamesEnum, fuelTypEnum, materialEnum, typeBoatEnum} from '@enum';

export class Boat {

  name: string;
  brandName: string;
  type: string;
  constructionYear: string;
  material: string;
  motorBrandName: string;
  motorNumber: string;
  motorConstructionYear: string;
  motorPurchaseYear: string;
  fuelType: string;
  power: string;
  value: string;
  length: string;

  constructor(name: string, brandName: string, type: string, constructionYear: string, material: string, motorBrandName: string, motorNumber: string, motorConstructionYear: string, motorPurchaseYear: string, fuelType: string, power: string, value: string, length: string) {

    this.name = name;
    this.brandName = brandName;
    this.type = type;
    this.constructionYear = constructionYear;
    this.material = material;
    this.motorBrandName = motorBrandName;
    this.motorNumber = motorNumber;
    this.motorConstructionYear = motorConstructionYear;
    this.motorPurchaseYear = motorPurchaseYear;
    this.fuelType = fuelType;
    this.power = power;
    this.value = value;
    this.length = length;
  }
}

export class BoatWithName {

  azzam: Boat = new Boat(boatNamesEnum.AZZAM, boatNamesEnum.AZZAM, typeBoatEnum.SLOEP, '2018', materialEnum.KUNSTSTOF_POLYESTER, 'Kawasaki', '12345', '2018', '2018', fuelTypEnum.DIESEL, '100', '15000', '15');
  koegelwieck: Boat = new Boat(boatNamesEnum.KOEGELWIECK, boatNamesEnum.KOEGELWIECK, typeBoatEnum.CATAMARAN, '1992',  materialEnum.KUNSTSTOF_POLYESTER, 'Deutz', '12345', '1992', '1992', fuelTypEnum.DIESEL, '999', '45000' , '35');

  getBoatName(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.name;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.name;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatBrandName(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.brandName;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatType(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.type;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.type;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatConstructionYear(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.constructionYear;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatMaterial(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.material;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.material;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatMotorBrandName(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.motorBrandName;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.motorBrandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatMotorNumber(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.motorNumber;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.motorNumber;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatMotorConstructionYear(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.constructionYear;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatMotorPurchaseYear(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.motorPurchaseYear;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.motorPurchaseYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatFuelType(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.fuelType;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.fuelType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatPower(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.power;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.power;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatValue(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.value;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.value;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getBoatLength(input: string): string {
    switch (input) {
      case boatNamesEnum.AZZAM: {
        return this.azzam.length;
      }
      case boatNamesEnum.KOEGELWIECK: {
        return this.koegelwieck.length;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
