@verzekeringsKaarten

Feature: Verzekeringskaarten

  Scenario Outline: Verify verzekeringskaarten link is available and clickable for different polises
    Given Customer <persona> is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer goes to verzekeringskaarten for <polis>
    Then Verify url for verzekeringskaarten contains the following <urlToVerify>

    Examples:
      | persona         | polis               | urlToVerify                    |
      | woestenburg     | Autoverzekering     | unive/autoverzekering-all-risk |

    # TODO add: new scenario's for a user with polises who dont change.
