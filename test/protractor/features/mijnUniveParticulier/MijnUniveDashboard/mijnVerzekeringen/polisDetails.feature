@mijnVerzekeringenPolisDetails

Feature: Going to polis details through mijn verzekeringen

  Scenario Outline: Change identification data for persona when logged in
    Given Customer annie is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer select polis with polis number: <polis number>
    Then Verify polis details with polis number <polis number> is shown

    Examples:
      | polis number |
      | 71256974     |
