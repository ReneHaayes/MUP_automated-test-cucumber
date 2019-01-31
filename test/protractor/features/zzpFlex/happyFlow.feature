Feature: Happy flow for 'Autoverzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the zzpFlexPat page of the Unive website
    When I enter step one page of zzpFlex with premie of 75
    And I enter step two page of zzpFlex for persona <persona>
    And I enter step three page of zzpFlex for <persona> with
      | notWorkForFourteenDays | no |
      | heartComplaints        | no |
      | cancer                 | no |
      | psychologist           | no |
      | posturalComplaints     | no |
      | otherCondition         | no |
      | medicines              | no |
      | disabilityBenefit      | no |
    And I enter step four page of zzpFlex with
      | lifeInsurance                | yes       |
      | incomeIncapacitated          | no income |
      | amountIncapacitated          | yes       |
      | monthlyIncapacitated         | no income |
      | consciousOfAccidentInsurance | yes       |
      | consciousOfMaxTwoYears       | yes       |
    And I enter step five page of zzpFlex with
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then Thank you page for zppFlex <persona> is shown

    Examples:
      | persona |
      | ronaldo |
