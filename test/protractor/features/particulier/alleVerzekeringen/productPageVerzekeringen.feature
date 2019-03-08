@productPageAlleVerzekeringen
@regressie
Feature: Check if the product and alle verzekeringen pages are correctly shown.

  Scenario Outline: Check the elements and dropdowns on the alle verzekeringen page.
    Given I am on the alle verzekeringen page of the Unive website
    When I select <select> and click on <buttonPage> at the alle verzekeringen page
    Then Verify elements on <buttonPage> product page is shown

    Examples:
      | select             | buttonPage                  |
#      | uw gezondheid      | Zorgverzekering             |
      | alle verzekeringen | Collectieve Zorgverzekering |
#      | uw gezondheid | Ongevallenverzekering |
#      | uw vrije tijd      | reisverzekering             |
#      | alle verzekeringen | doorlopende reisverzekering |
#      | uw vrije tijd | kortlopende reisverzekering |
#      | uw vrije tijd | annuleringsverzekering |
#      | uw vrije tijd | camperverzekering |
#      | alle verzekeringen | caravanverzekering |
#      | alle verzekeringen | bootverzekering |
#      | uw vervoer | autoverzekering |
#      | uw vervoer | bromfietsverzekering |
#      | alle verzekeringen | Scooterverzekering |
