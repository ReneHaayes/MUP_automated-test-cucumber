import {bootVerzekeringElements, genericMethods} from "@support";
import {fuelTypEnum, materialEnum, typeBoatEnum} from "@enum";

export class BootVerzekeringMethods {

  async selectTypeOfBoat(input: string) {
    switch (input) {
      case typeBoatEnum.CATAMARAN: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootCatamaranSelectElement);
        break;
      }
      case typeBoatEnum.MOTORBOOT: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootMotorbootSelectElement);
        break;
      }
      case typeBoatEnum.ROEIBOOT_KANO: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootRoeibootKanoSelectElement);
        break;
      }
      case typeBoatEnum.RUBBERBOOT: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootRubberbootSelectElement);
        break;
      }
      case typeBoatEnum.SLOEP: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootSloepSelectElement);
        break;
      }
      case typeBoatEnum.SPEEDBOOT: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootSpeedbootSelectElement);
        break;
      }
      case typeBoatEnum.ZEILBOOT: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.typeOfBootSelectElement, bootVerzekeringElements.typeOfBootZeilbootSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectMaterialBoat(input: string) {
    switch (input) {
      case materialEnum.KUNSTSTOF_POLYESTER: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialKunststofPolyesterSelectElement);
        break;
      }
      case materialEnum.ALUMINIUM: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialAluminiumSelectElement);
        break;
      }
      case materialEnum.FERROCEMENT: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialFerrocementSelectElement);
        break;
      }
      case materialEnum.POLYESTER_WOOD: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialPolyesterHoutSelectElement);
        break;
      }
      case materialEnum.RUBBER: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialRubberSelectElement);
        break;
      }
      case materialEnum.STEEL: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialStaalSelectElement);
        break;
      }
      case materialEnum.STEEL_WOOD: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialStaalHoutSelectElement);
        break;
      }
      case materialEnum.WOOD: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatMaterialSelectElement, bootVerzekeringElements.boatMaterialHoutSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

  async selectFuelTypeBoat(input: string) {
    switch (input) {
      case fuelTypEnum.DIESEL: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatFueltypeSelectElement, bootVerzekeringElements.boatFueltypeDieselSelectElement);
        break;
      }
      case fuelTypEnum.BENZINE: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatFueltypeSelectElement, bootVerzekeringElements.boatFueltypeBenzineSelectElement);
        break;
      }
      case fuelTypEnum.ELEKTRISCH: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatFueltypeSelectElement, bootVerzekeringElements.boatFueltypeElektrischSelectElement);
        break;
      }
      case fuelTypEnum.LPG: {
        await genericMethods.selectInDropdown(bootVerzekeringElements.boatFueltypeSelectElement, bootVerzekeringElements.boatFueltypeLPGSelectElement);
        break;
      }
      default: {
        throw new Error('The input: "" ' + input + ' ""  you have entered for "" ' + this.constructor.name + ' "" is not recognized as a command');
      }
    }
  }

}
