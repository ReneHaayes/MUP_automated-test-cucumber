@MijnSchadeEnClaimSchadeMelden

Feature: Claiming damages

  Scenario: Verify customer can claim a damage for autoverzekering
    Given Customer woestenburg is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a autoverzekering damage by filling in the form for polis 78899401
    Then Verify damage claim succes message is shown

  Scenario: Verify customer can claim a damage for woonverzekering
    Given Customer woestenburg is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a woonverzekering damage by filling in the form for polis 71755845
    Then Verify damage claim succes message is shown

  Scenario: Verify customer can claim a damage for doorlopende verzekering
    Given Customer woestenburg is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a doorlopende reisverzekering damage by filling in the form for polis 71752632
    Then Verify damage claim succes message is shown
