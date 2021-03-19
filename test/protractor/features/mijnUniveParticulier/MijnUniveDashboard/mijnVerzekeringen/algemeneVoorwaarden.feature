@mijnVerzekeringenAlgemeneVoorwaarden

Feature: Algemene voorwaarden for mijn verzekeringen

  Scenario: Check if algemene voorwaarden is present
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects algemene voorwaarden
    Then Verify algemene voorwaarden is available on screen as a pdf
