import {BoatWithName} from "../pageobjects/vehicles/boatWithName";
import {CompanyData} from "../pageobjects/persona/company";
import {PersonaData} from "../pageobjects/persona/persona";
import {BusinessCarWithLicensePlate} from "../pageobjects/vehicles/businessCarWithLicensePlate";
import {MopedWithLicensePlate} from "../pageobjects/vehicles/mopedWithLicensePlate";
import {CarWithLicensePlate} from "../pageobjects/vehicles/carWithLicensePlate";
import {MotorWithLicensePlate} from "../pageobjects/vehicles/motorWithLicensePlate";
import {CamperWithLicensePlate} from "../pageobjects/vehicles/camperWithLicensePlate";


export const personaData: PersonaData = new PersonaData();
export const boatWithName: BoatWithName = new BoatWithName();
export const companyData: CompanyData = new CompanyData();
export const carWithLicensePlate: CarWithLicensePlate = new CarWithLicensePlate();
export const businessCarWithLicensePlate: BusinessCarWithLicensePlate = new BusinessCarWithLicensePlate();
export const mopedWithLicensePlate: MopedWithLicensePlate = new MopedWithLicensePlate();
export const motorWithLicensePlate: MotorWithLicensePlate = new MotorWithLicensePlate();
export const camperWithLicensePlate: CamperWithLicensePlate = new CamperWithLicensePlate();
