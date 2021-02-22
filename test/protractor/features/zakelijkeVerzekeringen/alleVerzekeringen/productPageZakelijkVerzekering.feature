@productPageZakelijkAlleVerzekeringen

Feature: Check if the business products and 'alle verzekeringen zakelijk' pages are correctly shown .

#Toegevoegd op 15-02-2021 - uitbreiding van huidige ProductPageZakelijkeVerzekering
  Scenario Outline: Check if the elements and dropdowns on the alle verzekeringen page are shown.
    Given I am on the alle verzekeringen zakelijk page of the Unive website
    When I am on the alle verzekeringen zakelijk page and select <Verzekeringen> from dropdown
    And   I click on <buttonPage> at the alle verzekeringen zakelijk page
    Then Verify elements on <buttonPage2> product page zakelijk is shown
    Examples:
      | Verzekeringen           | buttonPage                                | buttonPage2                           |
# Uw Bedrijfsactiviteiten
      | Uw bedrijfsactiviteiten | Bedrijfs-aansprakelijkheidsverzekering    | Bedrijfsaansprakelijkheidsverzekering |
      | Uw bedrijfsactiviteiten | Beroeps-aansprakelijkheidsverzekering     | Beroepsaansprakelijkheid              |
      | Uw bedrijfsactiviteiten | Bestuurders-aansprakelijkheidsverzekering | Bestuurdersaansprakelijkheid          |
      | Uw bedrijfsactiviteiten | Zakelijke rechtsbijstandverzekering       | Zakelijke rechtsbijstandverzekering   |
      | Uw bedrijfsactiviteiten | Constructie All Riskverzekering           | Constructie All Riskverzekering       |

# Uw Mobiliteit
#      | Uw mobiliteit           | Aanhangwagenverzekering                   | Aanhangwagenverzekering               |          [class="detailContent_title"], is not visible
      | Uw mobiliteit           | Bedrijfsautoverzekering                   | Bedrijfsautoverzekering               |
#      | Uw mobiliteit           | Bestelautoverzekering                     | Bestelautoverzekering                 |          [class="heroHeader_textContainer"] h1, is not visible
      | Uw mobiliteit           | Zakelijke bromfietsverzekering            | Zakelijke bromfietsverzekering        |
      | Uw mobiliteit           | Eigen vervoerverzekering                  | Eigen vervoerverzekering              |
      | Uw mobiliteit           | Zakelijke motorverzekering                | Zakelijke motorverzekering            |
      | Uw mobiliteit           | Personenautoverzekering                   | Personenautoverzekering               |
      | Uw mobiliteit           | Tractorverzekering                        | Tractorverzekering                    |
      | Uw mobiliteit           | Vrachtautoverzekering                     | Vrachtwagenverzekering                |
      | Uw mobiliteit           | Werkmaterieelverzekering                  | Werkmaterieelverzekering              |

# Uw Inkomen
#      | Uw inkomen              | Arbeidsongeschiktheidsverzekering ZZP     | Arbeidsongeschiktheidsverzekering ZZP |          [class="allInsurances_listItemLink"][title="Arbeidsongeschiktheidsverzekering ZZP"]     ASSERTION : Arbeidsongeschiktheidsverzekering voor ZZP'ers
#      | Uw inkomen              | Arbeidsongeschiktheidsverzekering         | Arbeidsongeschiktheidsverzekering   |                + expected - actual
 #                                                                                                                             -Arbeidsongeschiktheidsverzekering
 #                                                                                                                             -(AOV)
 #                                                                                                                             +Arbeidsongeschiktheidsverzekering (AOV)
#      | Uw inkomen              | Pensioen voor ondernemers                 | Pensioen voor ondernemers             |        [class="allInsurances_listItemLink"][title="Pensioen voor ondernemers"]                   ASSERTION: UW pensioen

# Uw Bedrijfsmiddelen
      | Uw bedrijfsmiddelen     | Bedrijfsschadeverzekering                 | Bedrijfsschadeverzekering             |
      | Uw bedrijfsmiddelen     | Gebouwenverzekering                       | Gebouwenverzekering                   |
      | Uw bedrijfsmiddelen     | Milieuschadeverzekering                   | Milieuschadeverzekering               |
#      | Uw bedrijfsmiddelen     | roerende zakenverzekering                 | roerende zakenverzekering             |      [class="allInsurances_listItemLink"][title="roerende zakenverzekering"]                     ASSERTION: Roerende Zaken Verzekering

# Uw Personeel
      | Uw personeel            | Werknemersschadeverzekering               | Werknemersschadeverzekering           |
#      | Uw personeel            | Werknemerspensioenen                      |  Werknemerspensioenen                 |      Breadcrumb "Werknemerspensioenen" is not shown on position: 3

