export class EigenVervoerVerzekeringElements {

  // KVK NUMBER
  kvkNumberInputElement = '#_Form_IF31406_34108';       // nieuw op zakelijktest, vervangt huidige flow
  kvkNameCheckElement = '[class="entryGroupContent"] div:nth-child(3) > span > strong';
  kvkActivityCheckElement = '[class="entryGroupContent"] div:nth-child(4) > span > strong:nth-child(3)';

  activityZakelijkeDienstverlening = 'Zakelijke dienstverlening';
  activityWerkzaamhedenBouw = 'Werkzaamheden in de bouw';

  // COMPANY DATA
  kvkNumberPrefilledElement = '[data-label-id="LA_IF25914_33331"] span';
  companyNamePrefilledElement = '[data-label-id="LA_IF25914_33329"] span';
  companyLegalPrefilledElement = '[data-label-id="LA_IF25914_33330"] span';

  // ACTIVITY
  activityEigenVervoerSelectElement = '#_Form_IF26031_33425';
  activitySelectAdviesbureauElement = 'string:adviesbureau';
  activitySelectAdviesbureauIctElement = 'string:adviesbureauICT';
  activitySelectBedrijfsOpleidingEnTrainingElement = 'string:bedrijfsopleidingentraining';
  activitySelectBemiddelingElement = 'string:bemiddeling';
  activitySelectFotograafElement = 'string:fotograaf';
  activitySelectGlazenwasserElement = 'string:glazenwasser';
  activitySelectHovenierElement = 'string:hovenier';
  activitySelectKapperElement = 'string:kapper';
  activitySelectKlussenbedrijfElement = 'string:klussenbedrijf';
  activitySelectOrganisatieAdviesbureauElement = 'string:organisatieadviesbureau';
  activitySelectPedicureElement = 'string:pedicure';
  activitySelectReclamebureauElement = 'string:reclamebureau';
  activitySelectSchilderElement = 'string:schilder';
  activitySelectSchoonheidsSpecialistElement = 'string:schoonheidsspec';
  activitySelectSchoonmakerElement = 'string:schoonmaker';
  activitySelectSoftwarebedrijfElement = 'string:softwarebedrijf';
  activitySelectStratenmakerElement = 'string:stratenmaker';
  activitySelectStukadoorElement = 'string:stukadoor';
  activitySelectTimmermanElement = 'string:timmerman';
  activitySelectTegelzetterElement = 'string:tegelzetter';
  activitySelectWebdesignElement = 'string:webdesign';
  activitySelectOverigElement = 'string:overig';

  correctActivityYesElement = '[data-label-id="LA_IF31406_39608"] > div > label:nth-child(1)' ;
  correctActivityNoElement = '[data-label-id="LA_IF31406_39608"] > div > label:nth-child(2)' ;
  hasEmployeeYesElement = '[data-label-id="LA_IF31406_37329"] > div > label:nth-child(1)';
  hasEmployeeNoElement =  '[data-label-id="LA_IF31406_37329"] > div > label:nth-child(2)' ;

  // VEHICLE INFO
  vehicleInfoPassengerCarClickElement = '[data-label-id*="LA_IF21624_28332"] label';
  vehicleInfoPassengerCarTypeElement = '#_Form_IF21624_28322';
  vehicleInfoDeliveryVanClickElement = '[data-label-id*="LA_IF21624_28318"] label';
  vehicleInfoDeliveryVanTypeElement = '#_Form_IF21624_28323';
  vehicleInfoLorryClickElement = '[data-label-id*="LA_IF21624_28319"] label';
  vehicleInfoLorryTypeElement = '#_Form_IF21624_28324';
  vehicleInfoTrailersClickElement = '[data-label-id*="LA_IF21624_28320"] label';
  vehicleInfoTrailersTypeElement = '#_Form_IF21624_28325';

  // TRAILER WICH IS OPEN
  openTrailerYesClickElement = '[data-label-id*="LA_IF21624_34916"] .radioList > label:nth-child(1)';
  openTrailerNoClickElement = '[data-label-id*="LA_IF21624_34916"] .radioList > label:nth-child(2)';

}
