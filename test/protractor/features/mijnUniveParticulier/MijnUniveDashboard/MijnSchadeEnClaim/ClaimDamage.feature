@MijnSchadeEnClaimSchadeDetails

Feature: Claiming damages

  Scenario: Verify customer can claim a damage for autoverzekering
    Given Customer illing is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a autoverzekering damage by filling in the form for polis 77955620
    Then Verify damage claim succes message is shown

  Scenario: Verify customer can claim a damage for woonverzekering
    Given Customer illing is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a woonverzekering damage by filling in the form for polis 71755845
    Then Verify damage claim succes message is shown

  Scenario: Verify customer can claim a damage for doorlopende verzekering
    Given Customer illing is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a doorlopende reisverzekering damage by filling in the form for polis 71755844
    Then Verify damage claim succes message is shown
