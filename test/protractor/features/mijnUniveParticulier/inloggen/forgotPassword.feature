@forgotPasswordMijnUniveParticulier @onegini

Feature: Forgot password flow.

  Scenario Outline: Going through the happy flow of the forgot password proces.
    Given Customer is on the mijn unive particulier page of the Unive website
    When persona <persona> forgot his password and resets it with new password <newPassword>
    Then <persona> can log in with <newPassword>


    Examples:
      | persona | newPassword    |
      | aakoek  | Welkom01!      |

