export class WidgetsParticulierElements {

  // AANSPRAKELIJKHEIDSVERZEKERING WIDGET
  // Select in widget
  singleWithoutChildrenSelectElement = 'singleWithoutChildren';
  singleWithChildrenSelectElement = 'singleWithChildren';
  coupleWithoutChildrenSelectElement = 'coupleWithoutChildren';
  coupleWithChildrenSelectElement = 'coupleWithChildren';
  // Controle op volgende pagina
  singleWithoutChildrenChecked = '[class="ng-scope checked focus"] input[id="_Form_IF5405_13219_eenpersoonshuishouden"]';
  singleWithChildrenChecked = '[class="ng-scope checked"] input[id="_Form_IF5405_13219_eenoudergezin"]';
  coupleWithoutChildrenChecked = '[class="ng-scope checked"] input[id="_Form_IF5405_13219_samenwonend"]';
  coupleWithChildrenChecked = '[class="ng-scope checked"] input[id="_Form_IF5405_13219_gezinMetKinderen"]';

// BOOTVERZEKERING WIDGET
  // Select in widget
  motorbootSelectElement = 'motorboot';
  zeilbootSelectElement = 'zeilboot';
  sloepSelectElement = 'sloep';
  rubberbootSelectElement = 'rubberboot';
  roeibootKanoSelectElement = 'roeibootKano';
  speedbootSelectElement = 'speedboot';
  catamaranSelectElement = 'catamaran';
  // Controle op volgende pagina
  motorbootChecked = '[value="string:motorboot"][selected="selected"]';
  zeilbootChecked = '[value="string:zeilboot"][selected="selected"]';
  sloepChecked = '[value="string:sloep"][selected="selected"]';
  rubberbootChecked = '[value="string:rubberboot"][selected="selected"]';
  roeibootKanoChecked = '[value="string:roeibootKano"][selected="selected"]';
  speedbootChecked = '[value="string:speedboot"][selected="selected"]';
  catamaranChecked = '[value="string:catamaran"][selected="selected"]';


  // CARAVANVERZEKERING
  // Select in widget
  toercaravanSelectElement = 'toercaravan';
  vouwwagenSelectElement = 'vouwwagen';
  stacaravanSelectElement = 'stacaravan';
  // Controle op volgende pagina
  toercaravanChecked = '[class="ng-scope checked"] input[id="_Form_IF7914_12028_toercaravan"]';
  vouwwagenChecked = '[class="ng-scope checked"] input[id="_Form_IF7914_12028_vouwwagen"]';
  stacaravanChecked = '[class="ng-scope checked focus"] input[id="_Form_IF7914_12028_stacaravan"]';


  // FIETSVERZEKERING
  // Select in widget
  elektrischeFietsSelectElement = 'elektrischeFiets';
  gewoneFietsSelectElement = 'gewoneFiets';
  raceFietsSelectElement = 'raceFiets';
  mountainbikeSelectElement = 'mountainbike';
  ligFietsSelectElement = 'ligFiets';
  aangepasteFietsSelectElement = 'aangepasteFiets';
  // Controle op volgende pagina
  elektrischeFietsChecked = '[class="ng-scope checked focus"] input[id="_Form_IF6915_10449_ELEKTRISCH"]';
  gewoneFietsChecked = '[class="ng-scope checked"] input[id="_Form_IF6915_10449_GEWOON"]';
  raceFietsChecked = '[class="ng-scope checked"] input[id="_Form_IF6915_10449_RACE"]';
  mountainbikeChecked = '[class="ng-scope checked"] input[id="_Form_IF6915_10449_MTB"]';
  ligFietsChecked = '[class="ng-scope checked"] input[id="_Form_IF6915_10449_LIG"]';
  aangepasteFietsChecked = '[class="ng-scope checked"] input[id="_Form_IF6915_10449_AANGEPAST"]';


  // RECHTSBIJSTANDVERZEKERING
  // Select in widget
  AlleenMijzelfSelectElement = 'singleWithoutChildren';
  MijzelfEnPartnerSelectElement = 'coupleWithoutChildren';
  MijzelfEnKindSelectElement = 'singleWithChildren';
  MijzelfPartnerEnKindSelectElement = 'coupleWithChildren';
  // Controle op volgende pagina
  AlleenMijzelfChecked = '[class="ng-scope checked focus"] input[id="_Form_IF9940_14226_mijzelf"]';
  MijzelfEnPartnerChecked = '[class="ng-scope checked"] input[id="_Form_IF9940_14226_mijzelfPartner"]';
  MijzelfEnKindChecked = '[class="ng-scope checked"] input[id="_Form_IF9940_14226_mijzelfKind"]';
  MijzelfPartnerEnKindChecked = '[class="ng-scope checked"] input[id="_Form_IF9940_14226_mijzelfPartnerKind"]';

  // SCOOTMOBIELVERZEKERING
  // Select in widget
  scootmobielSelectElement = 'scootmobielSoortScootmobiel';
  invalidenVoertuigSelectElement = 'scootmobielSoortInvalidevoertu';
  // Controle op volgende pagina
  // scootmobielChecked = '[class*="focus"] [data-input-field-id="IF11481_15841"]';
  // invalidenVoertuigChecked = '[class="checked"] [data-input-field-id="IF11481_15842"]';
  scootmobielChecked = '[class*="focus"] [data-input-field-id="IF11481_15841"]';
  invalidenVoertuigChecked = '[class="checked"] [data-input-field-id="IF11481_15842"]';

  hasLicenseplateElementNotVisible = '[class="entry scoot_mobielinternet nonApplicable"]';
  hasLicenseplateElementPresent = '[data-label-id="LA_IF11481_14921"]';

  //  scootmobielChecked = '[class="single scootMobiel value radio checked"] [class="checked"] [data-input-field-id="IF11481_15841"]';
  // invalidenVoertuigChecked = '[class="single scootInvalide value radio checked"] [class="checked"] [data-input-field-id="IF11481_15842"]';


}
