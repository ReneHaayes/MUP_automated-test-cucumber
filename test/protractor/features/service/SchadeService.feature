@SchadeService

Feature: Check if schade service is functioning correctly

  Scenario: Verify schade beslisboom happy flow for Vervoer, Auto and Ruitschade
    Given I am on the schade service page of the Unive website
    When Customer selects Zwolle for schade service
    Then Verify UAS Pouw Zwolle is available on location 1
