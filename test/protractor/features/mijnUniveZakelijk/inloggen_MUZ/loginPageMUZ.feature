@loginPageMijnUniveZakelijk @onegini

Feature: Login page for Mijn Unive Zakelijk

  Scenario: Filling in the login data for mijn unive zakelijk
    Given Customer is on the mijn unive zakelijk page of the Unive website
    When PersonaZakelijk UniPAT_Corp_9 logs in
    Then the title Overzicht appears on screen

#  Scenario Outline: Filling in the wrong password with a correct email adress for mijn unive particulier
#    Given Customer is on the mijn unive particulier page of the Unive website
#    When Customer logs in with wrong email address <emailAddress>
#    And Customer logs in with wrong password <password>
#    Then the password error text <errorText> appears
#
#    Examples:
#      | emailAddress    | password      | errorText                                                                                                                      |
#      | illing@unive.nl | wrongPassword | Vult u de juiste gegevens in of klik hieronder op ‘Wachtwoord vergeten’. Controleer of u een e-mail van Univé heeft ontvangen. |
#
#  Scenario Outline: Filling in the wrong emailaddress for mijn unive particulier
#    Given Customer is on the mijn unive particulier page of the Unive website
#    When Customer logs in with wrong email address <emailAddress>
#    Then the emailadres error text <errorText> appears
#
#    Examples:
#      | emailAddress | errorText                      |
#      | wrongEmail   | Dit e-mailadres is niet geldig |
