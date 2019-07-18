@MijnSchadeEnClaimSchadeDetails

Feature: Claiming damages

  @hsn
  Scenario Outline: Verify customer can claim a damage for car
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a damage by filling in the form for polis 77611876

    Examples:
      | persona |
      | illing  |
