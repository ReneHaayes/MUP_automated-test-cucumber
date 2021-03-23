@personenautoverzekering @qis @qisParticulier @qRelease

Feature: Happy flow for 'personenautoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Autoverzekering page of the Unive website
    When Customer enters step one page of autoverzekeringen for <persona> with license plate <licensePlate>
    And Customer enters step two page of autoverzekering with collective aut
    And Customer enters step three page of autoverzekering for <licensePlate>
    And Customer enters step four page of autoverzekering for <persona>
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is visible for page autoverzekering

    Examples:
      | licensePlate | persona |
      | 06-HN-DL     | ronaldo |

    @collectieveAutoverzekering
  Scenario: Checking if the prefill for collectives are working correctly
    Given I am on the prefill omring pashouders page of the Unive website
    When Customer enters step one page of autoverzekeringen for ronaldo with license plate 06-HN-DL
    Then Verify step two page of autoverzekering automatically prefilled with collective string:16427

    @autoMeldcode
  Scenario: Checking the meldcode is mandatory
    Given I am on the Autoverzekering page of the Unive website
    When Customer enters step one page of autoverzekeringen for ronaldo with license plate 06-HN-DL
    And Customer enters step two page of autoverzekering without collective
    Then Verify registrationCode is mandatory. An errormessage is displayed when you leave meldcode empty



