#@MijnUniveVerzekeringWijzigen
#
#Feature: Changing insurance polices.
#
#  Scenario: Changing the license plate of a vehicle within a car insurance
#    Given Customer illing is logged in on the mijn unive mijn verzekeringen page of the Unive website
#    When Customer selects active polis with polis number: 77611876
#    And Customer changes a vehicle with licenseplate: 80-SRB-4
#    Then Verify success message is shown for a change

#  Scenario: Testing if the woonverzekering insurance change flow is correctly handled
#    Given Customer illing is logged in on the mijn unive mijn verzekeringen page of the Unive website
#    When Customer selects active polis with polis number: 71755845
#    And Customer goes throught the flow of a woonverzekering insurance change
#    Then Verify success message is shown for a change

#  Scenario: Testing if the autoverzekering insurance change flow is correctly handled
#    Given Customer illing is logged in on the mijn unive mijn verzekeringen page of the Unive website
#    When Customer selects active polis with polis number: 77611876
#    And Customer goes throught the flow of a autoverzekering insurance change
#    Then Verify success message is shown for a change

