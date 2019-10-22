@personalDetails
@WIP

Feature: Changing data for moving to a new house

  Scenario Outline: Filling in the moving form and sending it to Unive
    Given Customer <persona> is logged in on the mijn unive particulier page of the Unive website
    When <persona> changes personal details with:
      | newInitial            | B                 |
      | newLastName           | test123           |
      | newEmailAddress       | tes123@test123.nl |
      | newPhoneNumberPrivate | 1234567890        |

    Examples:
      | persona     |
      | woestenburg |
