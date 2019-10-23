@mijnVerzekeringenAlgemeneVoorwaarden

Feature: Algemene voorwaarden for mijn verzekeringen

  Scenario: Change identification data for persona when logged in
    Given Customer woestenburg is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects algemene voorwaarden
    Then Verify algemene voorwaarden is available on screen as a pdf
