@verzekeringWijzigenSnelLink

Feature: Verzekering wijzigen snel link

  Scenario Outline: Verify customer goes to correct url through the snel link on different pages.
    Given Customer illing is logged in on the <page> page of the Unive website
    When Customer selects wijzigen verzekering snel link for polis with polis number <polisNumber>
    Then Verify correct wijzigen verzekering form is loaded for polis polisnumber: <polisNumber>

    Examples:
      | page                          | polisNumber |
      | mijn unive particulier        | 77611876    |
      | mijn unive mijn verzekeringen | 77611876    |
