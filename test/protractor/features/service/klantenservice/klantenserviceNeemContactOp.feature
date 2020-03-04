@klantenserviceNeemContactOp

Feature: Klantenservice neem contact op.

  Scenario Outline: Verify klantenservice neem contact happy flow works correct.
    Given I am on the klantenservice page of the Unive website
    When Customer selects <neemContactOpTile> to neem contact op in klantenservice page
    Then Verify tile <neemContactOpTile> for neem contact op at klantenservice is open and the other tile <neemContactOpTileIngeklapt> is close

    Examples:
      | neemContactOpTile | neemContactOpTileIngeklapt |
      | Noodgeval         | Andere verzekeringen       |

