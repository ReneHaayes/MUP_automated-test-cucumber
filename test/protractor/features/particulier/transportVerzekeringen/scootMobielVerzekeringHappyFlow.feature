@scootMobielVerzekering
@regressie
Feature: Happy flow for 'scootMobielVerzekering'

  Scenario Outline: Filling in the quickest happy flow to get to the "Thank you" page.
    Given I am on the Scootmobielverzekering page of the Unive website
    When I enter step one page and click next on step two of scootmobiel verzekering with:
      | purchasePrice | 1500 |
    And I enter step three page of scootmobiel verzekering with:
      | brandName        | test |
      | brandModel       | test |
      | constructionYear | 2015 |
      | frameNumber      | 0000 |
    And I enter details of <persona> in your data page of scootmobiel verzekeringen
    And I fill in almost insured page with:
      | insuranceHistory | no |
      | criminalHistory  | no |
      | damageHistory    | no |
    Then The thank you page for <persona> is shown

    Examples:
      | persona |
      | ronaldo |

