@mijnVerzekeringenSchadeEnNuFlow

Feature: SchadeEnNuFlow for mijn verzekeringen

  Scenario: Check if schade_en_nu autoverzekering is present
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects autoverzekering voor schade en nu flow
    Then Verify text for SchadeEnNu is correctly shown

  Scenario: Check if schade_en_nu bootverzekering is present
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects bootverzekering voor schade en nu flow
    Then Verify text for SchadeEnNu is correctly shown

  Scenario: Check if schade_en_nu camperverzekering is present
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects camperverzekering voor schade en nu flow
    Then Verify text for SchadeEnNu is correctly shown
