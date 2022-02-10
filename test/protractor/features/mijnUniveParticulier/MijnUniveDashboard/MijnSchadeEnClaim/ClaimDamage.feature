@MijnSchadeEnClaimSchadeMelden

Feature: Claiming damages

  Scenario Outline: Verify customer can claim a damage for auto- or woonverzekering
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a <product> damage by filling in the form for polis
    Then Verify damage claim succes message is shown

    Examples:
      | product                        | persona        |
      | Autoverzekering                | illing         |
      | Particuliere Woonverzekering   | illing         |
