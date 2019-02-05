@bromfietsVerzekering
@regressie
Feature: Happy flow for 'Bromfiets Verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the bromfietsVerzekeringPat page of the Unive website
    When I enter step one page of bromfiets verzekering for persona <persona> with license plate <licensePlate>



#    And I check step two page with premie for aansprakelijkheids verzekering is shown
#    And I enter details of <persona> in step two page of aansprakelijkheids verzekering
#    And I fill in step four of aansprakelijkheids verzekering page with:
#      | insuranceHistory | no |
#      | criminalHistory  | no |
#      | damageHistory    | no |
#    Then The thank you page for <persona> is shown

    Examples:
      | persona | licensePlate |
      | ronaldo | 12-FRP-3     |
