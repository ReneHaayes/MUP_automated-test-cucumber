@KlantenserviceAfspraakMaken @Hippo @HippoForms @particulierHippo

Feature: Check for Afspraak maken page is correctly handled

  Scenario: Verify klachtenformulier happy flow
    Given I am on the afspraak maken page of the Unive website
    When Customer fills in afspraak maken form correctly
    Then Verify afspraak maken form thank you text

  Scenario: Verify afspraak maken button is available when logged in
    Given Customer woestenburg is logged in on the mijn unive particulier page of the Unive website
    When Customer navigates to winkel details and clicks on afspraak maken
    Then Verify button in winkel details navigates to afspraak maken url
