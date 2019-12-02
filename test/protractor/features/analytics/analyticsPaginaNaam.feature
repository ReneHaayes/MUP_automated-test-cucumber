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

#    @hsn
#  Scenario Outline: Check analytics for pages mijn unive
#    Given Customer illing is logged in on the <page> page of the Unive website
#    Then Verify that the correct paginanaam <paginaNaam ana> is show for page
#
#    Examples:
#      | page                       | paginaNaam ana        |
#      | fietsverzekering pp        | Home:Fietsverzekering |

