@createMijnUniveAccountFailing

Feature: Fault situations for creating account.

  Scenario Outline: Check if the correct notification appears when the account already exists
    Given Customer is on the mijn unive particulier page of the Unive website
    When Check if <persona> already exists
    When Customer <persona> creates an account for mijn Unive
    Then The notification that there is already an account for this e-mail adres show on screen

    Examples:
      | persona |
      | woestenburg  |

  Scenario Outline: Check if the notification appears that the password filled in is not correct according to the standards
    Given Customer is on the mijn unive particulier page of the Unive website
    When the password is filled in with <password>
    Then The notification password isn't filled in correctly shows

    Examples:
      | password  |
      | welkom01! |
      | WELKOM01! |
      | Welkom!   |
      | Welkom01  |

  Scenario Outline: Check if the notification that passwords doesn't match appear
    Given Customer is on the mijn unive particulier page of the Unive website
    When the correct password is filled in with <correctPassword> and at repeat fill in the <incorrectPassword>
    Then The notification password doesn't match correctly shows

    Examples:
      | correctPassword | incorrectPassword |
      | Welkom01!       | welkom01!         |

  Scenario Outline: Check if the notification appears that the accountnumber is not correct
    Given Customer is on the mijn unive particulier page of the Unive website
    When the account number is filled in with <account number>
    Then The notification account number not valid shows

    Examples:
      | account number |
      | 1              |
      | 123!           |
      | 12345          |
      | test           |
      | !!!!           |

  Scenario Outline: Check if the account is not recognisable.
    Given Customer is on the mijn unive particulier page of the Unive website
    When Customer <persona> creates an account for mijn Unive
    Then The notification that the data is not recognisable shows

    Examples:
      | persona |
      | salah   |
