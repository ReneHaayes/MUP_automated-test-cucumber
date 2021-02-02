import {licensePlates} from '@enum';

export class CompanyCar {

  licensePlate: string;
  brandName: string;
  brandType: string;
  constructionYear: string;
  model: string;
  bodyType: string;
  fuelType: string;
  firstAdmission: string;
  reportingCode: string;
  weight: string;

  constructor(licensePlate: string, brandName: string, brandType: string, constructionYear: string, model: string, bodyType: string, fuelType: string, firstAdmission: string, reportingCode: string, weight: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.brandType = brandType;
    this.constructionYear = constructionYear;
    this.model = model;
    this.bodyType = bodyType;
    this.fuelType = fuelType;
    this.firstAdmission = firstAdmission;
    this.reportingCode = reportingCode;
    this.weight = weight;
  }
}

export class CompanyCarWithLicensePlate {

  COMPANY_CAR_KH801P: CompanyCar = new CompanyCar(licensePlates.COMPANY_CAR_KH801P, 'Ford', 'MUSTANG', '2016', '2.3 ECOBOOST', 'Coupe', 'Benzine', '16-09-2016', '0000', '1595');

  getCarFuelType(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.fuelType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBodyType(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.bodyType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarModel(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarConstructionYear(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBrandType(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.brandType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBrandName(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarFirstAdmission(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.firstAdmission;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarReportingCode(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.reportingCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarWeight(input: string): string {
    switch (input) {
      case licensePlates.COMPANY_CAR_KH801P: {
        return this.COMPANY_CAR_KH801P.weight;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
