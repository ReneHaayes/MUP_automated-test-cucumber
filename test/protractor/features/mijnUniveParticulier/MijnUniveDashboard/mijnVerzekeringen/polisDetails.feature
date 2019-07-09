@mijnVerzekeringenPolisDetails

Feature: Going to polis details through mijn verzekeringen

  @hsn
  Scenario Outline: Verify polis status  polis are correctly shown.
    Given Customer <persona> is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects <polis status> polis with polis number: <polis number>
    Then Verify polis status <polis status> and polis number <polis number> is shown correctly


    Examples:
      | polis number | polis status | persona |
      | 77955712     | ended        | illing  |
      | 71256974     | active       | annie   |
