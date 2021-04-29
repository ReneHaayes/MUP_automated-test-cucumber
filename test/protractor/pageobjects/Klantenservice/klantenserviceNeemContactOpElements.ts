export class KlantenserviceNeemContactOpElements {

  neemContactOpClickElement(input: string): string {
    return '[text="' + input + '"]';
  }

  tileUitgeklaptElement(input: string): string {
    return '[text="' + input + '"] ::sr div > div[class*="duration-500"]';
  }

  tileIngeklaptElement(input: string): string {
    return '[text="' + input + '"] ::sr div > div[class*="duration-75"]';
  }
}
