export class SchadeServiceElements {

  placeOrZipcodeInputElement = 'div.u-flex.u-items-center.u-relative > input';
  submitButtonClickElement = 'div.u-flex.u-items-center.u-relative > button > span > svg.u-fill-current.u-text-bosbes';

  selectCaravanClickElement = '[id="objectType_caravan"]';
  selectCamperClickElement = '[id="objectType_camper"]';
  selectAutoClickElement = '[id="objectType_car"]';
  selectRuitschadeClickElement = '[id="repairType_bodywork"]';
  locationFinderLoaderElement = 'map-search ::sr [class*="animation-spin"]';

  getOpeningHoursDayHoursTextElement = 'li:nth-child(1) > button > div > div > span > span';

  selectedSchadeServiceAddresTextElement = 'div.u-mt-16.u-overflow-y-auto.u-pb-24.md\\:u-pb-32.u-px-24.md\\:u-px-32 > div > h2';

  getTitleForLocationTextElement(input: string): string {
    return 'map-search ::sr map-search-result-list ::sr map-search-result-item:nth-child(' + input + ') ::sr #title';
  }

  getLocationFinderClickElement(input: string): string {
    return 'map-search ::sr [title="' + input + '"]';
  }

  getOpeningHoursDayTextElement(input: string) {
    return '//*[@class="location _is_selected"]//*[@class="location_detailOpeningHoursLine"]//*[text()="' + input + '"]';
  }

  winkelzoekerTitleTextElement = 'main-container > h1';
}
