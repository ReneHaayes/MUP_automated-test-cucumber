export class SchadeServiceElements {

  placeOrZipcodeInputElement = '#searchLocation';
  submitButtonClickElement = '[class="locationFinder_searchSubmit"]';

  selectCaravanClickElement = '[class="locationFinder_filters_radio"]:nth-child(1) > label:nth-child(3)';
  selectCamperClickElement = '[class="locationFinder_filters_radio"]:nth-child(1) > label:nth-child(4)';
  selectBothClickElement = '[class="locationFinder_filters_radio"]:nth-child(2) > label:nth-child(4)';
  locationFinderLoaderElement = '[class="locationFinder_mapPlaceholder _is_loading"]';

  selectedSchadeServiceAddresTextElement = '[class="location _is_selected"] [class="location_address"] span:nth-child(1)';

  getTitleForLocationTextElement(input: string): string {
    return '[class="location"]:nth-child('+input+') h3';
  }

  getLocationFinderClickElement(input: string): string {
    return '//*[@class="locationFinder_locationList"]//*[text()="'+input+'"]';
  }

  getOpeningHoursDayTextElement(input: string){
    return '//*[@class="location _is_selected"]//*[@class="location_detailOpeningHoursLine"]//*[text()="'+input+'"]';
  }

  getOpeningHoursDayHoursTextElement(input: string){
    return '//*[@class="location _is_selected"]//*[@class="location_detailOpeningHoursLine"]//*[text()="'+input+'"]/following-sibling::span';
  }
}
