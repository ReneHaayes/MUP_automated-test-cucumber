@autoverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'personenautoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Autoverzekering page of the Unive website
    When Customer enters step one page of autoverzekeringen for <persona> with license plate <licensePlate>
    And Customer enters step two page of autoverzekering with collective aut
    And Customer enters step three page of autoverzekering for <licensePlate>
#    And Customer enters step four page of autoverzekering for <persona>
#    Then Customer can select bekijk controleer gegevens for autoverzekering in almost insured page with correct data
#    And I fill in almost insured page with:
#      | insuranceHistory | no |
#      | criminalHistory  | no |
#      | damageHistory    | no |
#    Then The thank you page for <persona> is shown

    Examples:
      | licensePlate | persona |
      | 06-HN-DL     | ronaldo |
