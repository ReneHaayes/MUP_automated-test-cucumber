@aansprakelijkheidsVerzekering
@regressie
Feature: Happy flow for 'Aansprakelijkheids Verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the aansprakelijkheidsverzekering page of the Unive website
    When I enter step one page of aansprakelijkheids verzekering for family composition of: one person
    And I check step two page with premie for aansprakelijkheids verzekering is shown
    And I enter details of <persona> in step two page of aansprakelijkheids verzekering
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |
