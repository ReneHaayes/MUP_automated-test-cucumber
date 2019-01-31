@aansprakelijkheidsVerzekering
Feature: Happy flow for 'Aansprakelijkheids Verzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the aansprakelijkheidsVerzekeringPat page of the Unive website
    When I enter step one page of aansprakelijkheids verzekering for family composition of: one person

    Examples:
      | persona |
      | ronaldo |
