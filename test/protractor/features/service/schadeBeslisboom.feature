@SchadeBeslisboom @Hippo @HippoForms @Beslisboom @particulierHippo

Feature: Check if schade beslisboom is functioning correctly

  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer, Aanrijding and Schade melden
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Aanrijding
    And Customer clicks on button Moet ik mijn schade wel of niet melden
    Then Information text about Moet ik mijn schade wel of niet melden is shown

  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer, Aanrijding and Hoe schade melden
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Aanrijding
    And Customer clicks on button Hoe kan ik schade melden bij Unive
    Then Information text about Hoe kan ik schade melden bij Unive

  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer, Aanrijding and Hoe verloopt de schade afhandeling
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Aanrijding
    And Customer clicks on button Hoe verloopt de schade afhandeling
    Then Information text about Hoe verloopt de schade afhandeling is shown

  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer, Aanrijding and Wat kan ik nog na de uitbetaling
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Aanrijding
    And Customer clicks on button Wat kan ik nog na de uitbetaling
    Then information text about Wat kan ik nog na de uitbetaling is shown
  
  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer and Mijn auto is gestolen
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Mijn auto is gestolen
    Then information text about Mijn auto is gestolen is shown

  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer and Inbraak in mijn auto
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Inbraak in mijn auto
    Then information text about Inbraak in mijn auto is shown

  Scenario: Verify schade beslisboom happy flow for Auto/Oldtimer and Ruitschade
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Auto or Oldtimer
    And Customer clicks on button Ruitschade
    Then information text about Ruitschade is shown
  
  Scenario: Verify schade beslisboom happy flow for Motor/Trike/Quad, Aanrijding and Moet ik mijn schade wel of niet melden
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Motor Trike Quad
    And Customer clicks on button Aanrijding for Motor
    And Customer clicks on button Moet ik mijn schade wel of niet melden for Motor
    Then information text about Moet ik mijn schade wel of niet melden for Motor is shown

  Scenario: Verify schade beslisboom happy flow for Bromfiets/Scooter/Scootmobiel, Aanrijding and Moet ik mijn schade wel of niet melden for Bromfiets
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Bromfiets Scooter Scootmobiel
    And Customer clicks on button Aanrijding of Bromfiets
    And Customer clicks on button Moet ik mijn schade wel of niet melden for Bromfiets
    Then information text about Moet ik mijn schade wel of niet melden for Bromfiets is shown

  Scenario: Verify schade beslisboom happy flow for Fiets/E-bike en Een aanrijding met mijn fiets
    Given I am on the schade beslisboom page of the Unive website
    When Customer clicks on button Fiets E-bike
    And Customer clicks on button Een aanrijding met mijn fiets
    Then information text about Een aanrijding met mijn fiets is shown