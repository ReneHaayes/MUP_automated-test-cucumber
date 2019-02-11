@zorgeloosOnlineVerzekering
@regressie
Feature: Happy flow for 'Zorgeloos Onlineverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zorgeloosOnlineVerzekering page of the Unive website
    When I enter step one page of zorgeloos onlineverzekering for family composition of: one person
    And I check step two page with premie for zorgeloos onlineverzekering is shown
    And I enter details of <persona> on step three page of zorgeloos onlineverzekering
    And I fill in step four of zorgeloos onlineverzekering page with:
      | insuranceHistoryZorgeloosOnline | no |
      | cyberIncidentPresent            | no |
      | cyberIncidentRecent             | no |
      | criminalHistory                 | no |
      | damageHistoryZorgeloosOnline    | no |
    Then The thank you page for <persona> is shown
    Examples:
      | persona |
      | ronaldo |
