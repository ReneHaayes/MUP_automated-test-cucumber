export class SituatieGewijzigdElements {

  situatieGewijzigdClickElement(input: string): string {
    return '[id="klantenservice-life-events"] [href*="'+input+'"]';
  }

  situatieGewijzigdHeaderElement: string =  '[class="detailContent_title"]';
}
