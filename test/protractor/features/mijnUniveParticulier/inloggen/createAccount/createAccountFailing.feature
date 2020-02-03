@createMijnUniveAccountFailing @onegini

Feature: Fault situations for creating account.

  Scenario Outline: Check if the correct notification appears when the account already exists
    Given Customer is on the mijn unive particulier page of the Unive website
    When Check if <persona> already exists
    And Customer <persona> creates an account for mijn Unive
    Then The notification that there is already an account for this e-mail adres show on screen

    Examples:
      | persona |
      | ako     |

  Scenario: Check if the notification appears that the password filled in is not correct according to the standards
    Given Customer is on the mijn unive particulier page of the Unive website
    When the password is filled in with welkom01!
    Then The notification password isn't filled correctly need a capital shows

  Scenario: Check if the notification appears that the password filled in is not correct according to the standards
    Given Customer is on the mijn unive particulier page of the Unive website
    When the password is filled in with WELKOM01!
    Then The notification password isn't filled correctly need a small letter shows

  Scenario: Check if the notification appears that the password filled in is not correct according to the standards
    Given Customer is on the mijn unive particulier page of the Unive website
    When the password is filled in with Welkom!
    Then The notification password isn't filled correctly need minimum eight characters shows

  Scenario: Check if the notification appears that the password filled in is not correct according to the standards
    Given Customer is on the mijn unive particulier page of the Unive website
    When the password is filled in with Welkom01
    Then The notification password isn't filled correctly need minimum special character shows

  Scenario: Check if the notification that passwords doesn't match appear
    Given Customer is on the mijn unive particulier page of the Unive website
    When the correct password is filled in with Welkom01! and at repeat fill in the welkom01!
    Then The notification password doesn't match correctly shows


  Scenario: Check if the notification appears that the accountnumber is not correct
    Given Customer is on the mijn unive particulier page of the Unive website
    When the account number is filled in with 1
    Then The notification account number to short shows

  Scenario: Check if the notification appears that the accountnumber is not correct
    Given Customer is on the mijn unive particulier page of the Unive website
    When the account number is filled in with 12345
    Then The notification account number to long shows

  Scenario Outline: Check if the notification appears that the accountnumber is not correct
    Given Customer is on the mijn unive particulier page of the Unive website
    When the account number is filled in with <account numbers>
    Then The notification account number only numbers shows

    Examples:
      | account numbers |
      | 123!            |
      | test            |
      | !!!!            |

  Scenario: Check if the account is not recognisable.
    Given Customer is on the mijn unive particulier page of the Unive website
    When Customer salah creates an account for mijn Unive
    Then The notification that the data is not recognisable shows
