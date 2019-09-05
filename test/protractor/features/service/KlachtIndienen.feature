@KlantenserviceKlachtIndienen @Hippo @HippoForms @Beslisboom

Feature: Testing klachtenformulier filled in correctly

  Scenario: Verify klachtenformulier happy flow for Zorgverzekering
    Given I am on the klachtenformulier page of the Unive website
    When Customer fills in form for zorgverzekering klacht
    Then Verify question is accepted with a confirmation text for klachtenformulier

  Scenario: Verify klachtenformulier happy flow for Schadeverzekering
    Given I am on the klachtenformulier page of the Unive website
    When Customer fills in form for schadeverzekering klacht
    Then Verify question is accepted with a confirmation text for klachtenformulier
