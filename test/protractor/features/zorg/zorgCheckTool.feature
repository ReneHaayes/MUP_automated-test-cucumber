@zorgCheckTool

Feature: Check of zorgCheckTool de juiste adviezen geeft bij verschillende invoer en of de juiste informatieteksten worden getoond.

  Scenario Outline: Beantwoord 9 vragen en check 2 adviezen (zonder bestaande klanten)
    Given I am on the zorgCheckTool page of the Unive website
    When I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    Then Verify that the advices are correctly shown with:
    |advice1BV  |<advice1BV>  |
    |advice1AVTV|<advice1AVTV>|
    |advice1TV  |<advice1TV>  |
    |advice2BV  |<advice2BV>  |
    |advice2AVTV|<advice2AVTV>|
    |advice2TV  |<advice2TV>  |

        Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|advice1BV  |advice1AVTV     |advice1TV |advice2BV  |advice2AVTV     |advice2TV |
        |B        |A        |B        |D        |C        |A        |A        |A        |        B|Zorg Vrij  |Aanvullend Goed |Tand Beter|Zorg Vrij  |Aanvullend Beter|Tand Goed |
        |A        |B        |A        |A        |A        |B        |B        |B        |        B|Zorg Select|Aanvullend Goed |Geen      |Zorg Select|Aanvullend Beter|Geen      |
        |C        |B        |B        |B        |B        |D        |A        |A        |        B|Zorg Vrij  |Aanvullend Beter|Tand Best |Zorg Vrij  |Aanvullend Goed |Geen      |
        |C        |D        |A        |C        |D        |C        |B        |B        |        B|Zorg Select|Aanvullend Best |Tand Best |Zorg Select|Aanvullend Beter|Tand Beter|
        |A        |C        |B        |A        |A        |C        |B        |A        |        B|Zorg Vrij  |Aanvullend Beter|Tand Beter|Zorg Vrij  |Aanvullend Goed |Tand Goed |
        |D        |A        |A        |D        |B        |B        |A        |B        |        B|Zorg Select|Aanvullend Best |Geen      |Zorg Select|Aanvullend Beter|Geen      |
        |A        |A        |A        |D        |A        |A        |A        |A        |        B|Zorg Vrij  |Aanvullend Beter|Geen      |Zorg Vrij  |Aanvullend Goed |Geen      |
        |A        |A        |A        |B        |C        |C        |B        |B        |        B|Zorg Select|Aanvullend Goed |Tand Beter|Zorg Select|Aanvullend Beter|Tand Goed |
        |A        |A        |B        |C        |D        |D        |A        |A        |        B|Zorg Vrij  |Aanvullend Goed |Tand Best |Zorg Vrij  |Aanvullend Beter|Tand Beter|
        |A        |A        |B        |B        |A        |B        |B        |B        |        B|Zorg Select|Geen            |Geen      |Zorg Select|Aanvullend Goed |Geen      |
        |A        |A        |B        |A        |B        |A        |B        |A        |        B|Zorg Vrij  |Geen            |Geen      |Zorg Vrij  |Aanvullend Goed |Geen      |
        |A        |A        |B        |A        |C        |D        |B        |B        |        B|Zorg Select|Geen            |Tand Best |Zorg Select|Geen            |Tand Beter|
        |A        |A        |B        |A        |B        |C        |B        |A        |        B|Zorg Vrij  |Geen            |Tand Beter|Zorg Vrij  |Geen            |Tand Goed |
  
  Scenario: Check i-text bij vraag 2
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 1 question with:
    |question1|A|
    When I click on the i-button
    Then Verify that the correct i-texts for question two are shown
  
  Scenario: Check i-text bij vraag 3
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 2 questions with:
    |question1|A|
    |question2|A|
    When I click on the i-button
    Then Verify that the correct i-texts for question three are shown
    
  Scenario: Check i-text bij vraag 8
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

  Scenario: Check i-text onder antwoord D bij vraag 5
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 4 questions with:
    |question1|A|
    |question2|A|
    |question3|A|
    |question4|A|
    When I answer question 5 with:
    |question5|D|
    Then Verify that the correct i-text is shown below selected answer for question five
  
  Scenario: Check i-text onder antwoord D bij vraag 6
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 5 questions with:
    |question1|A|
    |question2|A|
    |question3|A|
    |question4|A|
    |question5|A|
    When I answer question 6 with:
    |question6|D|
    Then Verify that the correct i-text is shown below selected answer for question six
  
  Scenario Outline: Check foutief emailadres melding bij email dit advies
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    And I click on the email dit advies button
    When I enter an emailaddress with:
    |emailaddress|geenapenstaartje.nl|
    Then the correct errormessage is shown
      
      Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|
        |B        |A        |B        |D        |C        |A        |A        |A        |        B|
    
  Scenario Outline: Check juist emailadres en verzending advies
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    And I click on the email dit advies button
    When I enter an emailaddress with:
    |emailaddress|info@apenstaartje.nl|
    Then the send email button is available
    And the success message is shown

      Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|
        |B        |A        |B        |D        |C        |A        |A        |A        |        B|

  Scenario Outline: Check de prefill in de zorgwizard na doorklikken op advies
    Given I am on the zorgCheckTool page of the Unive website
    And I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    When I click on the Kies deze verzekering button
    Then I get redirected to zorgwizard on a new tab
    And The adviceresult is prefilled in the wizard with:
    |advice1BV  |<advice1BV>  |
    |advice1AVTV|<advice1AVTV>|
    |advice1TV  |<advice1TV>  |

      Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|advice1BV  |advice1AVTV     |advice1TV |
        |B        |A        |B        |D        |C        |A        |A        |A        |        B|Zorg Vrij  |Aanvullend Goed |Tand Beter|
        |C        |D        |A        |C        |D        |C        |B        |B        |        B|Zorg Select|Aanvullend Best |Tand Best |
        |A        |A        |B        |A        |B        |A        |B        |A        |        B|Zorg Vrij  |Geen            |Geen      |
    
  Scenario Outline: Check melding bij selecteren (fout) collectief
    Given I am on the zorgCheckTool page of the Unive website
    When I click on add collective button
    And I search for collective with:
    |collective|<collective>|
    Then I expect the correct messages to be shown with:
    |collective|<collective>|

      Examples: 
      |collective                    |
      |Huurdersvereniging Ijsselstein|
      |Omring Medewerkers            |
      |Carinova Thuizz               |
      
  Scenario Outline: Check of toevoegen collectief juist werkt
    Given I am on the zorgCheckTool page of the Unive website
    When I click on add collective button
    And I search for collective with:
    |collective|<collective>|
    And I apply the collective
    Then verify that the collective is correctly applied on startpage of the tool

      Examples: 
      |collective                    |
      |Omring Medewerkers            |
      
  Scenario: Verwijder collectief
    Given I am on the zorgCheckTool page of the Unive website
    When I click on add collective button
    And I search for collective with:
    |collective|Omring Medewerkers|
    And I delete the collective
    Then verify I am able to search for collective again
    
  Scenario: Voeg fout collectief toe en in 2e toevoegveld juist collectief
    Given I am on the zorgCheckTool page of the Unive website
    When I click on add collective button
    And I search for collective with:
    |collective|Huurdersvereniging Ijsselstein|
    Then I am able to enter a correct collective in the second input field
    And I apply the collective
    And verify that the collective is correctly applied on startpage of the tool

  Scenario Outline: check i-tjes bij adviezen voor aanvullende pakketten en tandpakketten, geen i-tjes voor basis
    Given I am on the zorgCheckTool page of the Unive website
    When I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    Then Verify that the i-tjes are correctly shown for the advices with:
    |advice1BV  |<advice1BV>  |
    |advice1AVTV|<advice1AVTV>|
    |advice1TV  |<advice1TV>  |
    |advice2BV  |<advice2BV>  |
    |advice2AVTV|<advice2AVTV>|
    |advice2TV  |<advice2TV>  |

        Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|advice1BV  |advice1AVTV     |advice1TV |advice2BV  |advice2AVTV     |advice2TV |
        |B        |A        |B        |D        |C        |A        |A        |A        |        B|Zorg Vrij  |Aanvullend Goed |Tand Beter|Zorg Vrij  |Aanvullend Beter|Tand Goed |
        |C        |D        |A        |C        |D        |C        |B        |B        |        B|Zorg Select|Aanvullend Best |Tand Best |Zorg Select|Aanvullend Beter|Tand Beter|
    
  Scenario Outline: check collectief toepassing in advies bij verschillende antwoorden voor basisverzekering (vraag 8)
    Given I am on the zorgCheckTool page of the Unive website
    When I click on add collective button
    And I search for collective with:
    |collective|Omring Medewerkers|
    And I apply the collective    
    And I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    Then Verify that the advices are correctly shown with:
    |advice1BV  |<advice1BV>  |
    |advice1AVTV|<advice1AVTV>|
    |advice1TV  |<advice1TV>  |
    |advice2BV  |<advice2BV>  |
    |advice2AVTV|<advice2AVTV>|
    |advice2TV  |<advice2TV>  |

        Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|advice1BV    |advice1AVTV     |advice1TV |advice2BV    |advice2AVTV     |advice2TV |
        |B        |A        |B        |D        |C        |A        |A        |A        |        B|Zorg Vrij    |Aanvullend Goed |Tand Beter|Zorg Vrij    |Aanvullend Beter|Tand Goed |
        |C        |D        |A        |C        |D        |C        |B        |B        |        B|Zorg Geregeld|Aanvullend Best |Tand Best |Zorg Geregeld|Aanvullend Beter|Tand Beter|       
    
  Scenario Outline: bestaande klant door vraag 9 beantwoorden
    Given I am on the zorgCheckTool page of the Unive website
    When I answer 9 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    |question9|<question9>|
    Then Verify the button points to wijzigen in MijnUnive

        Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|
        |C        |D        |A        |C        |D        |C        |B        |B        |        A|
    
  Scenario Outline: bestaande klant door URL parameter geeft geen 9e vraag en verwijst naar MijnUnive
    Given I am on the zorgCheckToolBekendeKlantParameter page of the Unive website
    When I answer 8 questions with:
    |question1|<question1>|
    |question2|<question2>|
    |question3|<question3>|
    |question4|<question4>|
    |question5|<question5>|
    |question6|<question6>|
    |question7|<question7>|
    |question8|<question8>|
    Then Verify the button points to wijzigen in MijnUnive

        Examples:
        |question1|question2|question3|question4|question5|question6|question7|question8|question9|
        |C        |D        |A        |C        |D        |C        |B        |B        |        A|
    
  Scenario: niet thuiszorgcollectief via parameter op URL meegeven en check dat deze aanwezig is op startpagina tool
    Given I am on the zorgCheckToolNietThuiszorgCollectiefParameter page of the Unive website
    Then verify that the collective is correctly applied on startpage of the tool
    
  Scenario: thuiszorgcollectief via parameter op URL meegeven en check dat deze niet aanwezig is op startpagina tool
    Given I am on the zorgCheckToolThuiszorgCollectiefParameter page of the Unive website
    Then verify that the collective is not present on startpage of the tool
  
  Scenario: direct zorgverzekering afsluiten is aanwezig en verwijst naar wizard op nieuwe tab
    Given I am on the zorgCheckTool page of the Unive website
    When I click on the regel het direct link
    Then validate I get redirected to the zorgwizard with the correct code in the URL