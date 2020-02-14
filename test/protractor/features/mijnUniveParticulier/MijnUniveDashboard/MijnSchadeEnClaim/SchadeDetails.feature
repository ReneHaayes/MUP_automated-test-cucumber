@MijnSchadeEnClaimSchadeDetails

Feature: Going to damage and claim page and checking the different details on page

  Scenario Outline: Verify damage status with damage status is show correctly
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer selects damage claim with damage number: <damage number>
    Then Verify damage claim with damage number <damage number> is shown correctly

    Examples:
      | damage number | persona     |
      | 2848709       | woestenburg |
      | 2848708       | woestenburg |
