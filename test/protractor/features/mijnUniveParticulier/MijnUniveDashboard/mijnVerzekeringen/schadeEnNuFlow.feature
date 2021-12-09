@mijnVerzekeringenSchadeEnNuFlow

Feature: SchadeEnNuFlow for mijn verzekeringen

  Scenario: Check if schade_en_nu is present
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects autoverzekering voor schade en nu flow
    Then Verify text for SchadeEnNu is correctly shown
