@MijnSchadeEnClaimSchadeDetails

Feature: Claiming damages

  @hsn
  Scenario Outline: Verify customer can claim a damage for autoverzekering
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a damage by filling in the form for polis 77955620
    Then Verify damage claim succes message is shown

    Examples:
      | persona |
      | illing  |
