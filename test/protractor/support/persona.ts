import {BoatWithName} from '../pageobjects/vehicles/boatWithName';
import {CompanyData} from '../pageobjects/persona/company';
import {PersonaData} from '../pageobjects/persona/persona';
import {BusinessCarWithLicensePlate} from '../pageobjects/vehicles/businessCarWithLicensePlate';
import {MopedWithLicensePlate} from '../pageobjects/vehicles/mopedWithLicensePlate';
import {CarWithLicensePlate} from '../pageobjects/vehicles/carWithLicensePlate';
import {MotorcycleWithLicensePlate} from '../pageobjects/vehicles/motorcycleWithLicensePlate';
import {CompanyCarWithLicensePlate} from '../pageobjects/vehicles/companyCarWithLicensePlate';
import {MobileHomeWithLicensePlate} from '../pageobjects/vehicles/mobileHomeWithLicensePlate';

export const personaData: PersonaData = new PersonaData();
export const boatWithName: BoatWithName = new BoatWithName();
export const companyData: CompanyData = new CompanyData();
export const carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();
export const businessCarWithLicensePlate: BusinessCarWithLicensePlate = new BusinessCarWithLicensePlate();
export const mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();
export const motorcycleWithLicensePlate: MotorcycleWithLicensePlate = new MotorcycleWithLicensePlate();
export const companyCarWithLicensePlate: CompanyCarWithLicensePlate = new CompanyCarWithLicensePlate();
export const mobileHomeWithLicensePlate: MobileHomeWithLicensePlate = new MobileHomeWithLicensePlate();
