import {licensePlates} from "../enum/licensePlateEnum";

export class Car {

  licensePlate: string;
  brandName: string;
  brandType: string;
  constructionYear: string;
  model: string;
  bodyType: string;
  fuelType: string;
  firstAdmission: string;
  reportingCode: string;

  constructor(licensePlate: string, brandName: string, brandType: string, constructionYear: string, model: string, bodyType: string,
              fuelType: string, firstAdmission: string, reportingCode: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.brandType = brandType;
    this.constructionYear = constructionYear;
    this.model = model;
    this.bodyType = bodyType;
    this.fuelType = fuelType;
    this.firstAdmission = firstAdmission;
    this.reportingCode = reportingCode;
  }
}

export class CarWithLicensePlate {

  _06HNDL: Car = new Car(licensePlates._06HNDL, 'BMW', '3-SERIE', '2001', '318CI EXECUTIVE',
    "Softtop", 'Benzine', '12-09-2001', '0000');

  _80SRB4: Car = new Car(licensePlates._80SRB4, 'Renault', 'CLIO', '2011', '1.5 DCI AUTHENTIQUE',
    'Hatchback', 'Diesel', '01-01-2011', '0000');

  getCarFuelType(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.fuelType;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.fuelType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBodyType(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.bodyType;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.bodyType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarModel(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.model;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarConstructionYear(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.constructionYear;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBrandType(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.brandType;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.brandType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBrandName(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.brandName;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarFirstAdmission(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.firstAdmission;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.firstAdmission;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarReportingCode(input: string): string {
    switch (input) {
      case licensePlates._06HNDL: {
        return this._06HNDL.reportingCode;
      }
      case licensePlates._80SRB4: {
        return this._80SRB4.reportingCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
