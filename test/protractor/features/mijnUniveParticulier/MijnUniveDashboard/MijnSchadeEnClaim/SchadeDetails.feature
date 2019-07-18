@MijnSchadeEnClaimSchadeDetails

Feature: Going to damage and claim page and checking the different details on page

  @hsn
  Scenario Outline: Verify damage status with damage status is show correctly
    Given Customer <persona> is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer selects damage claim with damage number: <damage number>
    Then Verify damage claim with damage number <damage number> is shown correctly

#    Then Verify polis status <polis status> and polis number <polis number> is shown correctly

    Examples:
      | damage number | persona |
      | 2735521       | illing  |
#
#  Scenario Outline: Verify polises from external companies
#    Given Customer <persona> is logged in on the mijn unive mijn verzekeringen page of the Unive website
#    When Customer selects active polis with polis number: <polis number>
#    Then Verify insurance company <insurance company> and polis number <polis number> is shown correctly
#
#    Examples:
#      | polis number | insurance company | persona |
#      | 1600478601   | Reaal             | illing  |
#
#  Scenario Outline: Change polis data from external companies
#    Given Customer <persona> is logged in on the <polisdetails url> page of the Unive website
#    When Customer changes the external polis
#    Then Verify thank you message for creating a change is correctly shown
#
#    Examples:
#      | persona | polisdetails url        |
#      | illing  | polisdetails 1600478601 |

