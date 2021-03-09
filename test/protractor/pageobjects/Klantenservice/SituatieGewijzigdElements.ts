export class SituatieGewijzigdElements {

  situatieGewijzigdClickElement(input: string): string {
    return '[id="klantenservice-life-events"] [href*="' + input + '"]';
  }

  situatieGewijzigdHeaderElement =  '[class="detailContent_title"]';
}
