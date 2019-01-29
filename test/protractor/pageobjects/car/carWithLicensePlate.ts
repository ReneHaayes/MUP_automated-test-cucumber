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

  _06HNDL: Car = new Car(`06-HN-DL`, 'BMW', '3-SERIE', '2001', '318CI EXECUTIVE',
    "Softtop", 'Benzine', '12-09-2001', '0000');

  _80SRB4: Car = new Car('80-SRB-4', 'Renault', 'CLIO', '2011', '1.5 DCI AUTHENTIQUE',
    'Hatchback', 'Diesel', '01-01-2011', '0000');

  getCarFuelType(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.fuelType;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.fuelType;
    } else {
      throw new Error('The input you have entered getCarFuelType: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarBodyType(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.bodyType;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.bodyType;
    } else {
      throw new Error('The input you have entered getCarBodyType: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarModel(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.model;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.model;
    } else {
      throw new Error('The input you have entered getCarModel: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarConstructionYear(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.constructionYear;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.constructionYear;
    } else {
      throw new Error('The input you have entered getCarConstructionYear: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarBrandType(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.brandType;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.brandType;
    } else {
      throw new Error('The input you have entered getCarBrandType: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarBrandName(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.brandName;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.brandName;
    } else {
      throw new Error('The input you have entered getCarBrandName: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarFirstAdmission(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.firstAdmission;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.firstAdmission;
    } else {
      throw new Error('The input you have entered getCarFirstAdmission: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

  getCarReportingCode(licensePlate: string): string {
    if (licensePlate === '06-HN-DL') {
      return this._06HNDL.reportingCode;
    } else if (licensePlate === '80-SRB-4') {
      return this._80SRB4.reportingCode;
    } else {
      throw new Error('The input you have entered getCarReportingCode: "" ' + licensePlate + ' "" is not recognized as a command');
    }
  }

}
