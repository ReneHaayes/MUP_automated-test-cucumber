@zorgCheckTool

Feature: Check if zorgCheckTool provides the correct advices for different answers and shows correct information texts.

  Scenario Outline: Answer 8 questions and check 2 advices
    Given I am on the zorgCheckTool page of the Unive website
    When I answer 8 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    Then Verify that the advices are correctly shown with:
    |advice1BV  |<advice1BV>  |
    |advice1AVTV|<advice1AVTV>|
    |advice1TV  |<advice1TV>  |
    |advice2BV  |<advice2BV>  |
    |advice2AVTV|<advice2AVTV>|
    |advice2TV  |<advice2TV>  |

        Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|advice1BV  |advice1AVTV     |advice1TV |advice2BV  |advice2AVTV     |advice2TV |
        |B        |A        |B        |D        |C        |A        |A        |A        |Zorg Vrij  |Aanvullend Goed |Tand Beter|Zorg Vrij  |Aanvullend Beter|Tand Goed |
        |A        |B        |A        |A        |A        |B        |B        |B        |Zorg Select|Aanvullend Goed |Geen      |Zorg Select|Aanvullend Beter|Geen      |
        |C        |B        |B        |B        |B        |D        |A        |A        |Zorg Vrij  |Aanvullend Beter|Tand Best |Zorg Vrij  |Aanvullend Goed |Geen      |
        |C        |D        |A        |C        |D        |C        |B        |B        |Zorg Select|Aanvullend Best |Tand Best |Zorg Select|Aanvullend Beter|Tand Beter|
        |A        |C        |B        |A        |A        |C        |B        |A        |Zorg Vrij  |Aanvullend Beter|Tand Beter|Zorg Vrij  |Aanvullend Goed |Tand Goed |
        |D        |A        |A        |D        |B        |B        |A        |B        |Zorg Select|Aanvullend Best |Geen      |Zorg Select|Aanvullend Beter|Geen      |
        |A        |A        |A        |D        |A        |A        |A        |A        |Zorg Vrij  |Aanvullend Beter|Geen      |Zorg Vrij  |Aanvullend Goed |Geen      |
        |A        |A        |A        |B        |C        |C        |B        |B        |Zorg Select|Aanvullend Goed |Tand Beter|Zorg Select|Aanvullend Beter|Tand Goed |
        |A        |A        |B        |C        |D        |D        |A        |A        |Zorg Vrij  |Aanvullend Goed |Tand Best |Zorg Vrij  |Aanvullend Beter|Tand Beter|
        |A        |A        |B        |B        |A        |B        |B        |B        |Zorg Select|Geen            |Geen      |Zorg Select|Aanvullend Goed |Geen      |
        |A        |A        |B        |A        |B        |A        |B        |A        |Zorg Vrij  |Geen            |Geen      |Zorg Vrij  |Aanvullend Goed |Geen      |
        |A        |A        |B        |A        |C        |D        |B        |B        |Zorg Select|Geen            |Tand Best |Zorg Select|Geen            |Tand Beter|
        |A        |A        |B        |A        |B        |C        |B        |A        |Zorg Vrij  |Geen            |Tand Beter|Zorg Vrij  |Geen            |Tand Goed |

  Scenario: Check i-text at question 2
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 1 question with:
    |question1|A|
    When I click on the i-button
    Then Verify that the correct i-texts for question two are shown
  
  Scenario: Check i-text at question 3
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 2 questions with:
    |question1|A|
    |question2|A|
    When I click on the i-button
    Then Verify that the correct i-texts for question three are shown
  
  Scenario: Check i-text at question 8
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 7 questions with:
    |question1|A|
    |question2|A|
    |question3|A|
    |question4|A|
    |question5|A|
    |question6|A|
    |question7|A|
    When I click on the i-button
    Then Verify that the correct i-texts for question eight are shown

  Scenario: Check i-text below answer D at question 5
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 4 questions with:
    |question1|A|
    |question2|A|
    |question3|A|
    |question4|A|
    When I select answer for question 5 with:
    |question5|D|
    Then Verify that the correct i-text is shown below selected answer for question five
  
  Scenario: Check i-text below answer D at question 6
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 5 questions with:
    |question1|A|
    |question2|A|
    |question3|A|
    |question4|A|
    |question5|A|
    When I select answer for question 6 with:
    |question6|D|
    Then Verify that the correct i-text is shown below selected answer for question six

  Scenario Outline: Check foutief emailadres melding bij email dit advies
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 8 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    And I click on the email dit advies button
    When I enter an emailaddress with:
    |emailaddress|geenapenstaartje.nl|
    Then the correct errormessage is shown
    And send email button is not available
      
      Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|
        |B        |A        |B        |D        |C        |A        |A        |A        |

  Scenario Outline: Check juist emailadres en verzending advies
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 8 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    And I click on the email dit advies button
    When I enter an emailaddress with:
    |emailaddress|info@apenstaartje.nl|
    Then the send email button is available
    And the success message is shown

      Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|
        |B        |A        |B        |D        |C        |A        |A        |A        |

  Scenario Outline: Check de prefill in de zorgwizard na doorklikken op advies
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 8 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    When I click on the Kies deze verzekering button
    Then I get redirected to zorgwizard on a new tab
    And The adviceresult is prefilled in the wizard with:
    |advice1BV  |<advice1BV>  |
    |advice1AVTV|<advice1AVTV>|
    |advice1TV  |<advice1TV>  |

      Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|advice1BV  |advice1AVTV     |advice1TV |
        |B        |A        |B        |D        |C        |A        |A        |A        |Zorg Vrij  |Aanvullend Goed |Tand Beter|
        |C        |D        |A        |C        |D        |C        |B        |B        |Zorg Select|Aanvullend Best |Tand Best |
        |A        |A        |B        |A        |B        |A        |B        |A        |Zorg Vrij  |Geen            |Geen      |