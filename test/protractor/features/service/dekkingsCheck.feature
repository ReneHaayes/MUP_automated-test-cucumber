# DekkingsCheck wordt niet gebruikt op PAT en PRD. 15-02-2021
#@dekkingsCheck
#
#Feature: dekkingscheck on ruitschade.
#
#  Scenario Outline: Dekkingscheck correctly goes to schadeservice.
#    Given I am on the schade beslisboom page of the Unive website
#    When Customer navigates to ruitschade and fills in kenteken for dekkingscheck with <licensePlate> and date today
#    And Customer fills place or zipcode in input element <placeOrZipcode>
#    Then Verify that dekkingscheck correctly navigates to schadeservice and correctly fills in the place <placeOrZipcode>
#
#    Examples:
#      | placeOrZipcode | licensePlate |
#      | groningen      | HT-115-B     |
#
#  Scenario: Dekkingscheck doesnt
#    Given I am on the schade beslisboom page of the Unive website
#    When Customer navigates to ruitschade and fills in kenteken for dekkingscheck with test123 and date today
#    Then Verify button direct contact correctly appears

