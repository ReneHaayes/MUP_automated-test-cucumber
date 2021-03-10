@MijnSchadeEnClaimSchadeMelden

Feature: Claiming damages

  Scenario: Verify customer can claim a damage for autoverzekering
    Given Customer darthvader is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a autoverzekering damage by filling in the form for polis 70462892
    Then Verify damage claim succes message is shown

  Scenario: Verify customer can claim a damage for woonverzekering
    Given Customer darthvader is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer claims a woonverzekering damage by filling in the form for polis 71727735
    Then Verify damage claim succes message is shown

#  Scenario: Verify customer can claim a damage for doorlopende verzekering
#    Given Customer darthvader is logged in on the mijn unive mijn schade en claim page of the Unive website
#    When Customer claims a doorlopende reisverzekering damage by filling in the form for polis 78918999
#    Then Verify damage claim succes message is shown
