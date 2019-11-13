export class SchadeServiceElements {

  placeOrZipcodeInputElement = '#searchLocation';
  submitButtonClickElement = '[class="locationFinder_searchSubmit"]';

  selectCaravanClickElement = '[class="locationFinder_filters_radio"]:nth-child(1) > label:nth-child(3)';
  selectCamperClickElement = '[class="locationFinder_filters_radio"]:nth-child(1) > label:nth-child(4)';
  selectBothClickElement = '[class="locationFinder_filters_radio"]:nth-child(2) > label:nth-child(4)';

  getTitleForLocationTextElement(input: string): string {
    return '[class="location"]:nth-child('+input+') h3';
  }

}
