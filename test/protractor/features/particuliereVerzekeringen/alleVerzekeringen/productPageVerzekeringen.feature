@productPageAlleVerzekeringen

Feature: Check if the product and alle verzekeringen pages are correctly shown.

  Scenario Outline: Check the elements and dropdowns on the alle verzekeringen page.
    Given I am on the alle verzekeringen page of the Unive website
    When I select <select> and click on <buttonPage> at the alle verzekeringen page
    Then Verify elements on <buttonPage> product page is shown

    Examples:
      | select             | buttonPage                   |
      | uw gezondheid      | Zorgverzekering              |
      | alle verzekeringen | Collectieve Zorgverzekering  |
      | uw gezondheid      | Ongevallenverzekering        |
      | uw vrije tijd      | Reisverzekering              |
      | alle verzekeringen | Doorlopende reisverzekering  |
      | uw vrije tijd      | Kortlopende reisverzekering  |
      | uw vrije tijd      | Annuleringsverzekering       |
      | uw vrije tijd      | Camperverzekering            |
      | alle verzekeringen | Caravanverzekering           |
      | alle verzekeringen | Bootverzekering              |
      | uw vervoer         | Autoverzekering              |
      | uw vervoer         | Bromfietsverzekering         |
      | alle verzekeringen | Scooterverzekering           |
      | alle verzekeringen | Motorverzekering             |
      | uw vervoer         | Fietsverzekering             |
      | uw vervoer         | Elektrische fietsverzekering |
      | uw vervoer         | Scootmobielverzekering       |
      | uw vervoer         | Oldtimerverzekering          |
      | alle verzekeringen | Trikeverzekering             |
      | alle verzekeringen | Quadverzekering              |
      | alle verzekeringen | High speed e-bikeverzekering |
      | uw huis            | Woonpakket                   |
      | uw huis            | Inboedelverzekering          |
      | alle verzekeringen | Opstalverzekering            |
      | alle verzekeringen | Hypotheek                    |
      | uw huis            | Kostbaarhedenverzekering     |
      | uw gezondheid      | MijnGemak                    |


  Scenario Outline: Check the elements and dropdowns on the alle verzekeringen page 2.
    Given I am on the alle verzekeringen page of the Unive website
    When I select <select> and click on <buttonPage> at the alle verzekeringen bottom page
    Then Verify elements on <buttonPage> product page is shown

    Examples:
      | select                 | buttonPage                    |
      | uw recht               | rechtsbijstandverzekering     |
      | alle verzekeringen     | aansprakelijkheidsverzekering |
      | uw financiele toekomst | pensioen                      |
      | alle verzekeringen     | lijfrenteverzekering          |
      | uw nabestaanden        | uitvaartverzekering           |
      | alle verzekeringen     | overlijdensrisicoverzekering  |
