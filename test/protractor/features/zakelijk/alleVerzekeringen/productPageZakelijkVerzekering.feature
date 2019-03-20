@productPageZakelijkAlleVerzekeringen
@regressie
Feature: Check if the product and alle verzekeringen pages are correctly shown business.

  Scenario Outline: Check the elements and dropdowns on the alle verzekeringen page.
    Given I am on the alle verzekeringen zakelijk page of the Unive website
    When I click on <buttonPage> at the alle verzekeringen zakelijk page
    Then Verify elements on <buttonPage> product page zakelijk is shown

    Examples:
      | buttonPage                            |
      | Bedrijfsaansprakelijkheidsverzekering |
      | Bedrijfsautoverzekering               |
      | Bedrijfsschadeverzekering             |
      | Beroepsaansprakelijkheid              |
      | Bestuurdersaansprakelijkheid          |
      | Constructie All Riskverzekering       |
      | Eigen vervoerverzekering              |
      | Gebouwenverzekering                   |
      | Handelaarskentekenverzekering         |
      | Milieuschadeverzekering               |
      | Personenautoverzekering               |
      | Zakelijke motorverzekering            |
      | Zakelijke rechtsbijstandverzekering  |
      | Tractorverzekering                    |
      | Vrachtautoverzekering                 |
      | Werkmaterieelverzekering              |
