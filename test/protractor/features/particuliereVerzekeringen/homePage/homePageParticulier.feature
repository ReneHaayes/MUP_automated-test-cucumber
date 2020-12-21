@homePageParticulier @hippo @particulierHippo

Feature: Check if the home and alle verzekeringen page shows the buttons correctly.

  Scenario Outline: Click on the page elements and verify if the outcome is correct.
    Given I am on the Home page of the Unive website
    When I press the button <button> on the homepage
    Then Verify element on premie berekenen page for <button> is shown

    Examples:
      | button                        |
#      | Aansprakelijkheidsverzekering |    Staat niet meer op homepage
      | Zorgverzekering               |
#      | Reisverzekering               |    Staat niet meer op home page

  Scenario Outline: Click on the menu and check the elements and verify if the outcome is correct.
    Given I am on the <page> page of the Unive website
    When I press the button <button> on the menu page
    Then Verify element on product page for <button> is shown

    Examples:
      | page               | button          |
      | Home               | Autoverzekering |
      | Home               | Woonverzekering |
      | alle verzekeringen | Autoverzekering |
      | alle verzekeringen | Woonverzekering |


  Scenario Outline: Click on the klantenservice and check the elements and verify if the outcome is correct.
    Given I am on the <page> page of the Unive website
    When I press the button <button> on the klantenservice page
    Then Verify element on klantenservice page for <button> is shown

    Examples:
      | page               | button               |
      | Home               | zorgnota declareren  |
      | Home               | verzekering wijzigen |
      | Home               | unive alarmcentrale  |
      | alle verzekeringen | zorgnota declareren  |
      | alle verzekeringen | verzekering wijzigen |
      | alle verzekeringen | unive alarmcentrale  |


  Scenario Outline: Click on the header and check the elements and verify if the outcome is correct.
    Given I am on the <page> page of the Unive website
    When I press the button <button> on the header
    Then Verify element on header page for <button> is shown

    Examples:
      | page               | button     |
      | Home               | zoeken     |
      | Home               | mijn unive |
      | alle verzekeringen | zoeken     |
      | alle verzekeringen | mijn unive |

  Scenario Outline: Click on the footer and check the elements and verify if the outcome is correct.
    Given I am on the <page> page of the Unive website
    When I press the button <button> on the footer
    Then Verify element on footer page for <button> is shown

    Examples:
      | page               | button              |
      | Home               | zorgnota declareren |
      | Home               | klantenservice      |
      | Home               | over ons            |
      | alle verzekeringen | zorgnota declareren |
      | alle verzekeringen | klantenservice      |
      | alle verzekeringen | over ons            |

  Scenario: Click on the winkels button on the homepage.
    Given I am on the Home page of the Unive website
    When I press the button winkels on the homepage
    Then Verify element on winkels page are shown
