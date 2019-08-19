@KlantenserviceAfspraakMaken

Feature: Check for Afspraak maken page is correctly handled

  Scenario: Verify klachtenformulier happy flow for Zorgverzekering
    Given I am on the afspraak maken page of the Unive website
    When Customer fills in afspraak maken form correctly
    Then Verify afspraak maken form thank you text
