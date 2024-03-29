@mijnVerzekeringenPolisDetails

Feature: Going to polis details through mijn verzekeringen

  Scenario Outline: Verify polis status  polis are correctly shown.
    Given Customer <persona> is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects <polis status> polis with polis number: <polis number>
    Then Verify polis status <polis status> and polis number <polis number> is shown correctly

    Examples:
      | polis number | polis status | persona     |
      | 77753251     | ended        | illing      |
      | 79364507     | active       | illing      |

  Scenario Outline: Verify polises from external companies
    Given Customer <persona> is logged in on the mijn unive mijn verzekeringen page of the Unive website
    When Customer selects active polis with polis number: <polis number>
    Then Verify insurance company <insurance company> and polis number <polis number> is shown correctly

    Examples:
      | polis number | insurance company | persona |
      | 1605710201   | SRLEV N.V.        | illing  |

# not possible to change an external polis. This action will be activated when external polissen can be changed
#  Scenario Outline: Change polis data from external companies
#    Given Customer <persona> is logged in on the <polisdetails url> page of the Unive website
#    When Customer changes the external polis
#    Then Verify thank you message for creating a change is correctly shown
#
#    Examples:
#      | persona | polisdetails url        |
#      | illing  | polisdetails 1600478601 |

