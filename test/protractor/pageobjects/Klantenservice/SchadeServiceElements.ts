export class SchadeServiceElements {

  placeOrZipcodeInputElement = 'map-search ::sr #search-input-field ::sr input';
  submitButtonClickElement = 'map-search ::sr #search-submit-button';

  selectCaravanClickElement = 'map-search ::sr [value="caravan"]';
  selectCamperClickElement = 'map-search ::sr [value="camper"]';
  selectAutoClickElement = 'map-search ::sr [value="bodywork"]';
  selectRuitschadeClickElement = 'map-search ::sr [value="window"]';
  locationFinderLoaderElement = 'map-search ::sr [class*="animation-spin"]';

  getOpeningHoursDayHoursTextElement = 'map-search ::sr map-search-result-list ::sr map-search-result-item ::sr #opening-hours > div:nth-child(2) > div.w-full.ml-3 > div > div:nth-child(2)';

  selectedSchadeServiceAddresTextElement = 'map-search ::sr map-search-result-list ::sr map-search-result-item ::sr [id="address"]';

  getTitleForLocationTextElement(input: string): string {
    return 'map-search ::sr map-search-result-list ::sr map-search-result-item:nth-child(' + input + ') ::sr #title'
  }

  getLocationFinderClickElement(input: string): string {
    return 'map-search ::sr [title="' + input + '"]';
  }

  getOpeningHoursDayTextElement(input: string) {
    return '//*[@class="location _is_selected"]//*[@class="location_detailOpeningHoursLine"]//*[text()="' + input + '"]';
  }

  winkelzoekerTitleTextElement = 'main-container > h1';
}
