@analyticsPaginaNaam

Feature: Check analytics paginanaam on product pages.

  Scenario Outline: Check analytics for product pages.
    Given I am on the <page> page of the Unive website
    Then Verify that the correct paginanaam <paginaNaam ana> is show for page

    Examples:
      | page                       | paginaNaam ana        |
      | fietsverzekering pp        | Home:Fietsverzekering |
      | autoverzekeringProductPage | Home:Autoverzekering  |
      | Pensioen                   | Home:Pensioen         |
