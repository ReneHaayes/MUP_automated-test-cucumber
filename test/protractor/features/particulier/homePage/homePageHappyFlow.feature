@homePageParticulier
@regressie
Feature: Check if the homepage shows the buttons correctly.

  Scenario Outline: Click on the page elements and verify if the outcome is correct.
    Given I am on the home page of the Unive website
    When I press the button <button> on the homepage
    Then Verify element on premie berekenen page for <button> is shown

    Examples:
      | button                        |
      | Aansprakelijkheidsverzekering |
      | Zorgverzekering               |
      | Reisverzekering               |

  Scenario Outline: Click on the menu and check the elements and verify if the outcome is correct.
    Given I am on the home page of the Unive website
    When I press the button <button> on the menu page
    Then Verify element on product page for <button> is shown

    Examples:
      | button             |
      | Autoverzekering    |
      | Woonverzekering    |
      | Caravanverzekering |

  Scenario Outline: Click on the klantenservice and check the elements and verify if the outcome is correct.
    Given I am on the home page of the Unive website
    When I press the button <button> on the klantenservice page
    Then Verify element on klantenservice page for <button> is shown

    Examples:
      | button               |
      | zorgnota declareren  |
      | verzekering wijzigen |
      | unive alarmcentrale  |

  Scenario Outline: Click on the header and check the elements and verify if the outcome is correct.
    Given I am on the home page of the Unive website
    When I press the button <button> on the header
    Then Verify element on header page for <button> is shown

    Examples:
      | button     |
      | zoeken     |
      | mijn unive |

  Scenario Outline: Click on the footer and check the elements and verify if the outcome is correct.
    Given I am on the home page of the Unive website
    When I press the button <button> on the footer
    Then Verify element on footer page for <button> is shown

    Examples:
      | button              |
      | zorgnota declareren |
      | postcode en plaats  |
      | klantenservice      |
      | over ons            |
