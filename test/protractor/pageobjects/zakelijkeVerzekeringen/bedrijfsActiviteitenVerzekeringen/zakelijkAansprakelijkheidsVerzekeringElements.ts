export class ZakelijkAansprakelijkheidsVerzekeringElements {

  //COMPANY DATA
  kvkNumberInputElement: string = '#_Form_IF31406_34108';
  getCompanyDataButtonClickElement: string = '#_Form_IF31406_39313';
  companyNameTextElement: string = '[ng-class*="R31406_2"]  strong';
  // Tijdelijke oplossing: Bedrijfsautoverzekering maakt onterecht gebruik van ZakelijkAansprakelijkheidsVerzekering Elements.
  companyNameTextElementB: string = '[ng-class*="R31406_3"]  strong';
  correctCompanyDataYesClickElement: string = '[data-label-id*="LA_IF31406_39608"] .radioList > label:nth-child(1)';
  correctCompanyDataNoClickElement: string = '[data-label-id*="LA_IF31406_39608"] .radioList > label:nth-child(2)';
  otherActivitiesYesClickElement: string = '[data-label-id*="LA_IF19217_24949"] .radioList > label:nth-child(1)';
  otherActivitiesNoClickElement: string = '[data-label-id*="LA_IF19217_24949"] .radioList > label:nth-child(2)';

  //STEP THREE
  usualConditionsYesClickElement: string = '[data-label-id*="LA_IF19426_24997"] .radioList > label:nth-child(1)';
  usualConditionsNoClickElement: string = '[data-label-id*="LA_IF19426_24997"] .radioList > label:nth-child(2)';
  outsideNetherlandsYesClickElement: string = '[data-label-id*="LA_IF19426_24998"] .radioList > label:nth-child(1)';
  outsideNetherlandsNoClickElement: string = '[data-label-id*="LA_IF19426_24998"] .radioList > label:nth-child(2)';
  clientsInFollowingSectorsYesElement: string = '[data-label-id*="IF19426_40845"] .radioList > label:nth-child(1)';
  clientsInFollowingSectorsNoElement: string = '[data-label-id*="IF19426_40845"] .radioList > label:nth-child(2)';
  productsToFactoryYesClickElement: string = '[data-label-id*="LA_IF19426_25042"] .radioList > label:nth-child(1)';
  productsToFactoryNoClickElement: string = '[data-label-id*="LA_IF19426_25042"] .radioList > label:nth-child(2)';
  demolishBuildingsYesClickElement: string = '[data-label-id*="LA_IF19427_24999"] .radioList > label:nth-child(1)';
  demolishBuildingsNoClickElement: string = '[data-label-id*="LA_IF19427_24999"] .radioList > label:nth-child(2)';
  outsourceToZzpYesClickElement: string = '[data-label-id*="LA_IF19427_38411"] .radioList > label:nth-child(1)';
  outsourceToZzpNoClickElement: string = '[data-label-id*="LA_IF19427_38411"] .radioList > label:nth-child(2)';
  workingWithAsbestYesClickElement: string = '[data-label-id*="LA_IF19427_25000"] .radioList > label:nth-child(1)';
  workingWithAsbestNoClickElement: string = '[data-label-id*="LA_IF19427_25000"] .radioList > label:nth-child(2)';
  scaffoldingYesClickElement: string = '[data-label-id*="LA_IF19427_38410"] .radioList > label:nth-child(1)';
  scaffoldingNoClickElement: string = '[data-label-id*="LA_IF19427_38410"] .radioList > label:nth-child(2)';
  useFollowingEquipmentDuringWorkYesClickElement: string = '[data-label-id*="LA_IF19427_40911"] .radioList > label:nth-child(1)';
  useFollowingEquipmentDuringWorkNoClickElement: string = '[data-label-id*="LA_IF19427_40911"] .radioList > label:nth-child(2)';
  buildOnlyPrivateSectorYesElement: string = '[data-label-id="LA_IF36905_47009"] [class=radioList] > label:nth-child(1)';
  buildOnlyPrivateSectorNoElement: string = '[data-label-id="LA_IF36905_47009"] [class=radioList] > label:nth-child(2)';
  heavyConstructionWorkYesElement: string = '[data-label-id="LA_IF36905_47010"] [class=radioList] > label:nth-child(1)';
  heavyConstructionWorkNoElement: string = '[data-label-id="LA_IF36905_47010"] [class=radioList] > label:nth-child(2)';
  additionalRiskThreeYearsPriorYesElement: string = '[data-label-id="LA_IF19446_25037"] [class=radioList] > label:nth-child(1)';
  additionalRiskThreeYearsPriorNoElement: string= '[data-label-id="LA_IF19446_25037"] [class=radioList] > label:nth-child(2)';

  //SELECT TOOLS
  toolsSelectElement: string = '#_Form_IF19427_25045';
  toolsVaartuigenSelectElement: string = 'string:vaartuigen';
  toolsHeistellingenSelectElement: string = 'string:heistellingen';
  toolsLocomotievenSelectElement: string = 'string:locomotieven';
  toolsHijskranenSelectElement: string = 'string:hijskranen';
  toolsLiftenSelectElement: string = 'string:liften';
  toolsBokkenSelectElement: string = 'string:bokken';
  toolsLaadbruggenSelectElement: string = 'string:laadbruggen';
  toolsSmalspoorSelectElement: string = 'string:smalspoor';
  toolsOverigSelectElement: string = 'string:overig';
  toolsGeenSelectElement: string = 'string:geen';
}
