export class SchadeServiceElements {

  placeOrZipcodeInputElement = '#searchLocation';
  submitButtonClickElement = '[class="locationFinder_searchSubmit"]';

  getTitleForLocationTextElement(input: string): string {
    return '[class="location"]:nth-child('+input+') h3';
  }

}
