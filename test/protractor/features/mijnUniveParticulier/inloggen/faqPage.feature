@faqPageMijnUniveParticulier

Feature: Login page for Mijn Unive Particulier

  Scenario Outline: Veelgestelde vragen check
    Given Customer is on the mijn unive particulier page of the Unive website
    When Customer clicks on veelgestelde vragen button
    Then the title for veelgestelde vragen appears on screen
    And verify the answer to <veelgestelde vraag>

    Examples:
      | veelgestelde vraag                  |
      | Hoe meld ik me aan voor Mijn Univé? |
