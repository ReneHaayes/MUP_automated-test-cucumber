@changeDataForPersona @onegini

Feature: Changing data for persona when logged in.

  Scenario Outline: Change payment data for persona when logged in
    Given Customer woestenburg is logged in on the mijn unive betaalgegevens wijzigen page of the Unive website
    When Customer changes payment data with form for <payment data>
    Then Verify thank you page for payment data changed

    Examples:
      | payment data       |
      | payment period     |
      | payment way        |
      | iban accountnumber |

  Scenario: Change contact preferences for persona when logged in
    Given Customer woestenburg is logged in on the mijn unive contactvoorkeuren doorgeven page of the Unive website
    When Customer changes contact preferences
    Then Verify thank you message is shown for changing contact preferences

  # Scenario Outline: Change password after logged in.
   # Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
   # When Customer changes password for <persona> with <newPassword>
   # Then Verify if the bevestigingspagina is shown

   # Examples:
   #   | persona | newPassword    |
   #   | ako     | Welkom01! |

  # Scenario Outline: Change emailadres for login.
    #Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    #When Customer changes email address with <newEmailAddress>
    #Then Verify <persona> is logged in with <newEmailAddress> for new email address

    #Examples:
     # | persona | newEmailAddress    |
     # | ako     | test123@test123.nl |
