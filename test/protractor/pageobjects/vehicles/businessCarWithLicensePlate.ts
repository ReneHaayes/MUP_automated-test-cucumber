import {licensePlates} from '@enum';

export class BusinessCar {

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

export class BusinessCarWithLicensePlate {

  BUSINESS_CAR_48VDS3: BusinessCar = new BusinessCar(licensePlates.BUSINESS_CAR_48VDS3, 'Fiat', 'DUCATO', '2007', '35L 3.0 MJ MH2 GV', 'Bestelauto', 'Diesel', '12-09-2001', '0000', '1496');
  BUSINESS_CAR_3VXN23: BusinessCar = new BusinessCar(licensePlates.BUSINESS_CAR_3VXN23, 'Opel' , 'COMBO', '2012', '1.3 CDTI L1H1 ECOFL.', 'Bedrijfsauto', 'Diesel', '27-07-2012' , '0000' , '1345');
  BUSINESS_CAR_VDV37X: BusinessCar = new BusinessCar(licensePlates.BUSINESS_CAR_VDV37X, 'Volkswagen ', 'TRANSPORTER', '2019', '2.0 TDI L2H3 HIGHL.', 'Bestelauto', 'Diesel' , '31-12-2019' , '0000' , '2019' );

  getCarBrandName(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.brandName;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.brandName;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBrandType(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.brandType;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.brandType;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.brandType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarConstructionYear(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.constructionYear;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.constructionYear;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarModel(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.model;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.model;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.model;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarBodyType(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.bodyType;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.bodyType;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.bodyType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarFuelType(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.fuelType;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.fuelType;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.fuelType;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarFirstAdmission(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.firstAdmission;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.firstAdmission;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.firstAdmission;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarReportingCode(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.reportingCode;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.reportingCode;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.reportingCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getCarWeight(input: string): string {
    switch (input) {
      case licensePlates.BUSINESS_CAR_48VDS3: {
        return this.BUSINESS_CAR_48VDS3.weight;
      }
      case licensePlates.BUSINESS_CAR_3VXN23: {
        return this.BUSINESS_CAR_48VDS3.weight;
      }
      case licensePlates.BUSINESS_CAR_VDV37X: {
        return this.BUSINESS_CAR_48VDS3.weight;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
