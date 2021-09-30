@MijnSchadeEnClaimPremiegevolgenBerekenen

Feature: Going to premiegevolgen page and verifying the NCBM prognose.

  Scenario: Verify ncbm prognose page.
    Given Customer illing is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer clicks on button Premiegevolgen berekenen
    And Customer selects premiegevolgen berekenen for polis with number: 79364507
    Then Verify ncbm prognose page is shown with correct title

