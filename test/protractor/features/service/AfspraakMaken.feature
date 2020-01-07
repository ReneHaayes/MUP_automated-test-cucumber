@KlantenserviceAfspraakMaken @Hippo @HippoForms @particulierHippo

Feature: Check for Afspraak maken page is correctly handled

  Scenario: Verify klachtenformulier happy flow for Zorgverzekering with already customer YES
    Given I am on the afspraak maken page of the Unive website
    When Customer fills in afspraak maken form correctly with already customer yes
    Then Verify afspraak maken form thank you text

  Scenario: Verify klachtenformulier happy flow for Zorgverzekering with already customer NO
    Given I am on the afspraak maken page of the Unive website
    When Customer fills in afspraak maken form correctly with already customer no
    Then Verify afspraak maken form thank you text
