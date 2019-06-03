@zakelijkZorgeloosOnlineVerzekering

Feature: Happy flow for 'Zorgeloos Onlineverzekering Zakelijk'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zorgeloosonline zakelijk page of the Unive website
    When I enter step one page of zorgeloos onlineverzekering zakelijk for family composition of: one person
    And I enter step three page of zorgeloosonlineverzekering zakelijk for <company> with <persona>
    And I fill in step four of zorgeloos onlineverzekering zakelijk page with:
      | insuranceHistoryZorgeloosOnline | no |
      | cyberIncidentPresent            | no |
      | cyberIncidentRecent             | no |
      | criminalHistory                 | no |
      | damageHistoryZorgeloosOnline    | no |
    Then Thank you page for zakelijk is shown

    Examples:
      | persona | company  |
      | ronaldo | facebook |
