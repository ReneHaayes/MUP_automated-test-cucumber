@faqPageMijnUniveParticulier

Feature: Check FAQ page for Mijn Unive Particulier
    # knop moet linken naar https://acc.unive.nl/hulp-nodig-mijnunive --> actie Onewelcome: ticket Support-4664

  Scenario Outline: Veelgestelde vragen check
    Given Customer is on the mijn unive particulier page of the Unive website
    When Customer clicks on veelgestelde vragen button
    Then the title for veelgestelde vragen appears on screen
    And Customer clicks on the Account aanmaken question
    And verify the answer to <veelgestelde vraag>

    Examples:
      | veelgestelde vraag                  |
      | Hoe meld ik me aan voor Mijn Univé? |
