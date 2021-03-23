@zakelijkAansprakelijkheidsVerzekering

Feature: Happy flow for 'zakelijk aansprakelijkheidsverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.

    Given I am on the Bedrijfsaansprakelijkheidsverzekering page of the Unive website
    When I enter step one page and click next on step two for zakelijk aansprakelijkheidsverzekering with company <company>
    And I enter step three page and click next on step four for zakelijk aansprakelijkheidsverzekering:
    And I enter step five page of zakelijk aansprakelijkheidsverzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company         |
      | ronaldo | rg timmerwerken |



    # nieuw opgezet in sprint 21-05
  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.

    Given I am on the Bedrijfsaansprakelijkheidsverzekering page of the Unive website
    When I enter page one for zakelijk aansprakelijkheidsverzekering with company <company>
    And I enter page two for zakelijk aansprakelijkheidsverzekering
    And I enter page three for zakelijk aansprakelijkheidsverzekering with:
      | workOutsideNetherlands  | <hasExplanationIfYes> |
      | clientInSpecificSector  | <hasExplanationIfYes> |
      | demolishBuildings       | <hasExplanationIfYes> |
      | outsourceToZzp          | <hasExplanationIfYes> |
      | workWithAsbestos        | <hasExplanationIfYes> |
      | putUpScaffolding        | <hasExplanationIfYes> |
      | useSpecificEquipment    | <hasExplanationIfYes> |
      | workOnlyInPrivateSector | <hasExplanationIfYes> |
      | heavyConstructionWork   | <hasExplanationIfYes> |
      | riskFreeThreeYearsPrior | <hasExplanationIfYes> |
    And I enter page four for zakelijk aansprakelijkheidsverzekering
    And I enter page five of zakelijk aansprakelijkheidsverzekering for <company> with <persona>
    And I fill in almost insured page with:
      | insuranceHistory | <hasExplanationIfYes> |
      | criminalHistory  | <hasExplanationIfYes> |
      | damageHistory    | <hasExplanationIfYes> |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company         | hasExplanationIfYes |
      | ronaldo | rg timmerwerken | no                  |
