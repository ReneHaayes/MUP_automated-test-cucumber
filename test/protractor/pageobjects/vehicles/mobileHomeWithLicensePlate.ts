import {licensePlates} from '@enum';

export class MobileHome {

  licensePlate: string;
  brandName: string;
  brandModel: string;
  newPrice: string;
  meldCode: string;
  constructionYear: string;

  constructor(licensePlate: string, brandName: string, model: string, constructionYear: string, newPrice: string, meldCode: string) {
    this.licensePlate = licensePlate;
    this.brandName = brandName;
    this.brandModel = model;
    this.newPrice = newPrice;
    this.meldCode = meldCode;
    this.constructionYear = constructionYear;
  }

}

export class MobileHomeWithLicensePlate {

  MobileHome_BLJL41: MobileHome = new MobileHome(licensePlates.MOBILE_HOME_BLJL41, 'SPARTAN', 'CRUISE-MASTER' , '1995', '15000', '0000' );
  MobileHome_1VPR20: MobileHome = new MobileHome(licensePlates.MOBILE_HOME_1VPR20, 'PEUGEOT', 'BOXER' , '2011', '15000', '0000' );

  getMobileHomeBrandName(input: string): string {
    switch (input) {
      case licensePlates.MOBILE_HOME_BLJL41: {
        return this.MobileHome_BLJL41.brandName;
      }
      case licensePlates.MOBILE_HOME_1VPR20: {
        return this.MobileHome_1VPR20.brandName;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMobileHomeModel(input: string): string {
    switch (input) {
      case licensePlates.MOBILE_HOME_BLJL41: {
        return this.MobileHome_BLJL41.brandModel;
      }
      case licensePlates.MOBILE_HOME_1VPR20: {
        return this.MobileHome_1VPR20.brandModel;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMobileHomeConstructionYear(input: string): string {
    switch (input) {
      case licensePlates.MOBILE_HOME_BLJL41: {
        return this.MobileHome_BLJL41.constructionYear;
      }
      case licensePlates.MOBILE_HOME_1VPR20: {
        return this.MobileHome_1VPR20.constructionYear;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }

  }


  getMobileHomeNewPrice(input: string): string {
    switch (input) {
      case licensePlates.MOBILE_HOME_BLJL41: {
        return this.MobileHome_BLJL41.newPrice;
      }
      case licensePlates.MOBILE_HOME_1VPR20: {
        return this.MobileHome_1VPR20.newPrice;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  getMobileHomeMeldCode(input: string): string {
    switch (input) {
      case licensePlates.MOBILE_HOME_BLJL41: {
        return this.MobileHome_BLJL41.meldCode;
      }
      case licensePlates.MOBILE_HOME_1VPR20: {
        return this.MobileHome_1VPR20.meldCode;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
