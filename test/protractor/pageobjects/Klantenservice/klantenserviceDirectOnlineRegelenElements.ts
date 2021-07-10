export class KlantenserviceDirectOnlineRegelenElements {

  directOnlineRegelenTileClickElement(input: string): string {
    return '[class="clientService_blockListItemLink"][title*="' + input + '"]';
  }

}
