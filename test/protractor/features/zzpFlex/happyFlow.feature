Feature: Happy flow for 'Autoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zzpFlexPat page of the Unive website
    When I enter step one page of zzpFlex with premie of 75



    Examples:
      | persona |
      | ronaldo |
