 @widgetsParticulier


  Feature: Check if the particuliere widgets and product pages are correctly shown.

  # Aansprakelijkheidsverzekering
  Scenario Outline: Check if the aansprakelijkheidsverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I choose gezinssamenstelling: <household> to insure
    Then I check if the gezinssamenstelling <household> is selected on the next page
    Examples:
      | household             |
      | Eenpersoonshuishouden |
      | Eenoudergezin         |
      | Samenwonend           |
      | Gezin met kind(eren)  |

  # bootverzekering
  Scenario Outline: Check if the bootverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I choose the type of boat: <boat> to insure
    Then I check if the type of boat: <boat> is selected on the next page
    Examples:
      | boat         |
      | Motorboot    |
      | Zeilboot     |
      | Sloep        |
      | Rubberboot   |
      | RoeibootKano |
      | Speedboot    |
      | Catamaran    |


  # bromfietsverzekering particulier
  Scenario Outline: Enter a license plate number for bromfiets widget and check if the correct data appears.
    Given I am on the salesWidgets page of the Unive website
    When I enter the bromfiets <licensePlate> and <zipCode> in the widget for bromfiets and press <button>
    Then The bromfiets <licensePlate> data <willWont> appear

    Examples:
      | licensePlate | willWont | zipCode | button           |
      | 12-FRP-3     | will     | 1234 ab | license plate    |
      | 12-FRP-3     | wont     | 1234 ab | dont know        |
      | 12-FRP-3     | wont     | 1234 ab | no license plate |
      | 12-FRP-3     | will     | 1234 ab | no zipcode       |
    # extra test case(s)
      | F-169-NS     | will     | 1234 ab | license plate    |

   # camperverzekering
  Scenario Outline: Enter a license plate number for camperverzekering widget  and check if the correct data appears.
    Given I am on the salesWidgets page of the Unive website
    When I enter the camper <licensePlate> in the widget for camper and press <button>
    Then The camper <licensePlate> data <willWont> appear

    Examples:
      | button           | licensePlate | willWont |
      | license plate    | BL-JL-41     | will     |
      | no license plate | BL-JL-41     | wont     |
      | dont know        | BL-JL-41     | wont     |
    # extra test case(s)
      | license plate    | 1-VPR-20     | will     |

  # caravanverzekering
  Scenario Outline: Check if the caravanverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I choose the type of caravan: <caravan> to insure
    Then I check if the type of caravan: <caravan> is selected on the next page
    Examples:
      | caravan     |
      | Toercaravan |
      | Vouwwagen   |
      | Stacaravan  |


  # fietsverzekering
  Scenario Outline: Check if the fietsverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I choose the type of bicycle: <bicycle> to insure
    Then I check if the type of bicycle: <bicycle> is selected on the next page
    Examples:
      | bicycle           |
      | Elektrische fiets |
      | Gewone fiets      |
      | Racefiets         |
      | Mountainbike      |
      | Ligfiets          |
      | Aangepaste fiets  |


  # autoverzekering particulier
  Scenario Outline: Enter a license plate number for autoverzekering widget particulier and check if the correct data appears.
    Given I am on the salesWidgets page of the Unive website
    When I press the button <button> for the following license plate <licensePlate> on the page for autoverzekering
    Then The <licensePlate> data <willWont> appears for Particuliere autoverzekering

    Examples:
      | button           | licensePlate | willWont |
      | license plate    | 06-HN-DL     | will     |
      | no license plate | 06-HN-DL     | wont     |
      | dont know        | 06-HN-DL     | wont     |


  # motorverzekering
  Scenario Outline: Check if the motorverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I enter the motorcycle <licensePlate> and <zipCode> in the widget for motorcycle and press <button>
    Then The motorcycle <licensePlate> data <willWont> appear

    Examples:
      | licensePlate | zipCode | willWont | button           |
      | MP-TT-99     | 1234 ab | will     | license plate    |
      | MP-TT-99     | 1234 ab | wont     | no license plate |
      | MP-TT-99     | 1234 ab | will     | no zipcode       |
      | MP-TT-99     | 1234 ab | wont     | dont know        |
 # extra test case(s)
      | MF-PV-49     | 1234 ab | will     | license plate    |

  # rechtsbijstandverzekering
  Scenario Outline: Check if the rechtsbijstandsverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I choose the te verzekeren gezinsleden: <family members> voor een rechtsbijstandverzekering
    Then  I check if the rechtsbijstandverzekering shows the correct <family members> on the next page
    Examples:
      | family members                    |
      | Alleen mijzelf                    |
      | Mijzelf en mijn partner           |
      | Mijzelf en mijn kind              |
      | Mijzelf mijn partner en mijn kind |


  # Doorlopende reisverzekering
  Scenario Outline: Check if the doorlopende reisverzekering on the salesWidget and product pages are correctly shown
    Given I am on the salesWidgets page of the Unive website
    When I choose gezinsleden: <family members> to insure
    Then I check if the <family members> I have selected are present on the next page
    Examples:
      | family members                                 |
      | Nothing is checked                             |
      | Mijzelf checked                                |
      | Mijzelf en Mijn Partner checked                |
      | Mijzelf en Mijn kinderen checked               |
      | Mijzelf, Mijn Partner en Mijn kinderen checked |
      | Mijn Partner checked                           |
      | Mijn kinderen checked                          |
      | Mijn Partner en Mijn kinderen checked          |


  # scootmobielverzekering
  Scenario Outline: Check if the scootmobielverzekering on the salesWidget and product pages are correctly shown.
    Given I am on the salesWidgets page of the Unive website
    When I choose the type of scootmobiel: <mobilityScooter> to insure
    Then I check if the type of scootmobiel: <mobilityScooter> is selected on the next page
    Examples:
      | mobilityScooter   |
      | scootmobiel       |
      | invalidenvoertuig |
