@homePageZakelijk
@regressie
Feature: Check if the homepage shows the buttons correctly.

  Scenario Outline: Click on the page elements and verify if the outcome is correct.
    Given I am on the business page of the Unive website
    When I press the button <button> on the business homepage
    Then Verify element on premie berekenen business page for <button> is shown

    Examples:
      | button                        |
      | Aansprakelijkheidsverzekering |
      | arbeidsongeschiktheid         |
      | rechtsbijstand                |
      | eigen vervoer                 |

  Scenario Outline: Click on the menu and check the elements and verify if the outcome is correct.
    Given I am on the business page of the Unive website
    When I press the button <button> on the menu business page
    Then Verify element on business product page for <button> is shown

    Examples:
      | button   |
      | zzp er   |
      | agrarier |
      | gebouwen |

  Scenario Outline: Click on the klantenservice and check the elements and verify if the outcome is correct.
    Given I am on the business page of the Unive website
    When I press the button <button> on the klantenservice business page
    Then Verify element on klantenservice business page for <button> is shown

    Examples:
      | button          |
      | afspraak maken  |
      | klacht indienen |
      | inloggen        |

  Scenario Outline: Click on the header and check the elements and verify if the outcome is correct.
    Given I am on the business page of the Unive website
    When I press the button <button> on the header
    Then Verify element on header page for <button> is shown

    Examples:
      | button              |
      | zoeken              |
      | mijn unive zakelijk |

  Scenario Outline: Click on the footer and check the elements and verify if the outcome is correct.
    Given I am on the business page of the Unive website
    When I press the button <button> on the footer
    Then Verify element on footer page for <button> is shown

    Examples:
      | button                  |
      | Ondernemersscan         |
      | postcode en plaats      |
      | klantenservice zakelijk |
      | over ons                |
