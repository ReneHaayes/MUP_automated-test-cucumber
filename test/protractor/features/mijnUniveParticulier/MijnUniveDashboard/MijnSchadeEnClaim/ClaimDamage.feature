@MijnSchadeEnClaimSchadeMelden

Feature: Claiming damages

  Scenario Outline: Verify customer can claim a damage for autoverzekering
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a <polis> damage by filling in the form for polis
    Then Verify damage claim succes message is shown

    Examples:
      | polis                        | persona   |
      | Autoverzekering              | aakoek    |
      | Particuliere Woonverzekering | skywalker |
