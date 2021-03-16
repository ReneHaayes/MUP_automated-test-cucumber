export class WidgetsZakelijkElements {

  // ZAKELIJKE AANSPRAKELIJKHEIDSVERZEKERING
  // kvkNumberAansprakelijkheidsVerzekeringWidgetInputElement = 'corporate-liability-widget ::sr kvk-nummer ::sr #kvk-nummer';
  kvkNumberAansprakelijkheidsVerzekeringWidgetInputElement = 'kvk-widget[funnel-link*=\'aansprakelijkheidsverzekeringbedrijven/premieberekenen-en-afsluiten\'] ::sr kvk-nummer ::sr #kvk-nummer';

  // ZAKELIJKE RECHTSBIJSTANDVERZEKERING
  // kvkNumberRechtsbijstandVerzekeringWidgetInputElement = 'legal-assistance-widget ::sr kvk-nummer ::sr #kvk-nummer';
  kvkNumberRechtsbijstandVerzekeringWidgetInputElement = 'kvk-widget[funnel-link*=\'rechtsbijstandverzekering/premieberekenen-en-afsluiten\'] ::sr kvk-nummer ::sr #kvk-nummer';

  // ZAKELIJKE EIGEN VERVOER VERZEKERING
  // kvkNumberEigenVervoerVerzekeringWidgetInputElement = 'legal-assistance-widget ::sr kvk-nummer ::sr #kvk-nummer';
  kvkNumberEigenVervoerVerzekeringWidgetInputElement = 'kvk-widget[funnel-link*=\'eigenvervoerverzekering/premieberekenen-en-afsluiten\'] ::sr kvk-nummer ::sr #kvk-nummer';

  // KVK ELEMENTS
  kvkNameElement = 'div:nth-of-type(3) > span > strong';
  kvkLegalElement = '[data-input-field-id="IF31406_33330"] [selected="selected"]';
  kvkNotAllowedElement = 'div.ui-modal__content > div > div:nth-child(1)';

  kvkWidgetAansprakelijkheidsVerzekeringBerekenUwPremieButton = 'kvk-widget[funnel-link*=\'aansprakelijkheidsverzekeringbedrijven/premieberekenen-en-afsluiten\'] ::sr custom-button ::sr button';
  kvkWidgetRechtsbijstandVerzekeringBerekenUwPremieButton = 'kvk-widget[funnel-link*=\'rechtsbijstandverzekering/premieberekenen-en-afsluiten\'] ::sr custom-button ::sr button';
  kvkWidgetEigenVervoerVerzekeringBerekenUwPremieButton = 'kvk-widget[funnel-link*=\'eigenvervoerverzekering/premieberekenen-en-afsluiten\'] ::sr custom-button ::sr button';




}
