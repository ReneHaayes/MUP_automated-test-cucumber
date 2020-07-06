export class StickyBalkElements {

  //STICKYBALK GENERIC
  stickyBalkElement = '[class*="totaalPremie--sticky"]';
  bekijkOpbouwPremieClickElement = '[class*="infoText--summary"] > span';
  bekijkOpbouwPremieSamenvattingCloseClickElement = '[class="qisZone_sidebarclose"]';
  controleerGegevensClickElement = '[class*="infoText--overlay"] > span';

  //STICKY AUTOVERZEKERING
  bekijkOpbouwPremieSamenvattingKentekenTextElement = 'span:nth-child(4) > div > dl > div > dd > div > div:nth-child(1) > div.value';
  bekijkOpbouwPremieSamenvattingGeselecteerdeBasisDekkingTextElement = '[class="line premium bold"] [class="label"]';

  //STICKY RECHTSBIJSTANDVERZEKERING
  bekijkOpbouwPremieSamenvattingGezinssamenstellingTextElement = '#SIDEBAR-ID > div > span.qisZone_sidebarData > div > dl > div > dd > div > div > div.value';
  bekijkOpbouwPremieSamenvattingKeuzeTextElement = '#SIDEBAR-ID > div > span.qisZone_sidebarPremium > div > dl > div > dd > div > div:nth-child(1) > div.label';

  //STICKY DOORLOPENDE VERZEKERING
  bekijkOpbouwPremieSamenvattingVerzekerdenTextElement = '#element1 > div > span.qisZone_sidebarData > div > dl > div > dd > div > div:nth-child(2)'


}
