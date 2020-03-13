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


  Scenario Outline: Verify afspraak maken form is prefilled with customer information when logged in
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When Logged in customer fills in afspraak maken form correctly and prefill is filled in for persona <persona>
    Then Verify afspraak maken form thank you text

    Examples:
      | persona |
      | illing  |

  Scenario: Verify afspraak maken form is prefilled with customer information when logged in
    Given Customer illing is logged in on the mijn unive particulier page of the Unive website
    When Customer navigates to winkel details and clicks on afspraak maken
    Then Verify button in winkel details navigates to afspraak maken url
