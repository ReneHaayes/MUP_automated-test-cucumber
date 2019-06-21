@headerAndFooterHomepageMijnUniveParticulier

Feature: Header and footer happyflow

  Scenario Outline: Click on the header in MU and check the elements and verify if the outcome is correct.
    Given Customer illing is logged in on the mijn unive particulier page of the Unive website
    When Customer press the button <button> on the Mijn Unive homepage header
    Then Verify element on Mijn Unive header page for <button> is shown

    Examples:
      | button         |
      | zoeken         |
      | mijn unive     |
      | verzekeringen  |
      | klantenservice |

  @jaapjan
  Scenario Outline: Click on the footer in MU and check the elements and verify if the outcome is correct.
    Given Customer illing is logged in on the mijn unive particulier page of the Unive website
    When Customer press the button <button> on the Mijn Unive homepage footer
    Then Verify element on Mijn Unive footer page for <button> is shown

    Examples:
      | button                         |
      | bekijk de veelgestelde vragen  |

