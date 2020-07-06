@productPageZakelijkAlleVerzekeringen

Feature: Check if the product and alle verzekeringen pages are correctly shown business.

  Scenario Outline: Check the elements and dropdowns on the alle verzekeringen page.
    Given I am on the alle verzekeringen zakelijk page of the Unive website
    When I click on <buttonPage> at the alle verzekeringen zakelijk page
    Then Verify elements on <buttonPage2> product page zakelijk is shown

    Examples:
      | buttonPage                                | buttonPage2                               |
      | Bedrijfs-aansprakelijkheidsverzekering    | Bedrijfsaansprakelijkheidsverzekering     |
      | Bedrijfsautoverzekering                   | Bedrijfsautoverzekering                   |
      | Bedrijfsschadeverzekering                 | Bedrijfsschadeverzekering                 |
      | Beroeps-aansprakelijkheidsverzekering     | Beroepsaansprakelijkheid                  |
      | Bestuurders-aansprakelijkheidsverzekering | Bestuurdersaansprakelijkheid              |
      | Constructie All Riskverzekering           | Constructie All Riskverzekering           |
      | Eigen vervoerverzekering                  | Eigen vervoerverzekering                  |
      | Gebouwenverzekering                       | Gebouwenverzekering                       |
      | Handelaarskentekenverzekering             | Handelaarskentekenverzekering             |
      | Milieuschadeverzekering                   | Milieuschadeverzekering                   |
      | Personenautoverzekering                   | Personenautoverzekering                   |
      | Zakelijke motorverzekering                | Zakelijke motorverzekering                |
      | Zakelijke rechtsbijstandverzekering       | Zakelijke rechtsbijstandverzekering       |
      | Tractorverzekering                        | Tractorverzekering                        |
      | Vrachtautoverzekering                     | Vrachtwagenverzekering                    |
      | Werkmaterieelverzekering                  | Werkmaterieelverzekering                  |
