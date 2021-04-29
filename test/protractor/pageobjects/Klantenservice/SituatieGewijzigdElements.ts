export class SituatieGewijzigdElements {

  situatieGewijzigdClickElement(input: string): string {
    return '[id="klantenservice-life-events"] [href*="' + input + '"]';
  }

  situatieGewijzigdHeaderElement =  '[class="detailContent_title"]';
  klantenservice = 'Klantenservice';
  trouwenClickElement = '[href="/klantenservice/trouwen"]';
  verhuizingClickElement = '[href="/klantenservice/verhuizing"]';
  scheidingClickElement = '[href="/klantenservice/scheiding"]';
  gezinsuitbreidingClickElement = '[href="/klantenservice/gezinsuitbreiding"]';
}
