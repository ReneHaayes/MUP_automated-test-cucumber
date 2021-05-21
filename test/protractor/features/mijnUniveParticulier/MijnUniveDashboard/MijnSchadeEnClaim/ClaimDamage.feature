@MijnSchadeEnClaimSchadeMelden

Feature: Claiming damages

  Scenario Outline: Verify customer can claim a damage for autoverzekering
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a <polis> damage by filling in the form for polis
    Then Verify damage claim succes message is shown

    Examples:
      | polis           | persona |
      | Autoverzekering | aakoek  |

# herschrijven WOON op dezelfde manier als autoverzekering
  Scenario: Verify customer can claim a damage for woonverzekering
    Given Customer darthvader is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a woonverzekering damage by filling in the form for polis 71727735
    Then Verify damage claim succes message is shown
  # gebruik Skywalker voor WOON
