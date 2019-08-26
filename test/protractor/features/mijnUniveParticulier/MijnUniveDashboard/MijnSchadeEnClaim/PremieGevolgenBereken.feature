@MijnSchadeEnClaimPremiegevolgenBerekenen

Feature: Going to premigevolgen page and verifying the NCBM prognose.

  Scenario: Verify ncbm prognose page.
    Given Customer illing is logged in on the mijn unive premigevolgen berekenen page of the Unive website
    When Customer select premiegevolgen berekenen for polis with number: 77611876
    Then Verify ncbm prognose page is shown with correct title and table
    
