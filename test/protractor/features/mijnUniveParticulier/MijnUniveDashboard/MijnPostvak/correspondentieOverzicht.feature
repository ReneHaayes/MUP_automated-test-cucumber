@MijnPostvakCorrespondentieOverzicht

Feature: Inbox and correspondence

  Scenario: Verify correspondence overview in my inbox.
    Given Customer woestenburg is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects the Correspondenties page
    Then Verify the Correspondentie page is shown

  Scenario: Verify correspondence overview in my inbox.
    Given Customer woestenburg is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects Correspondenties
    And Customer selects the quicklink for groene kaart downloaden
    Then Verify the clicked correspondence is shown

  Scenario: Verify correspondence overview in my inbox.
    Given Customer woestenburg is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects the quicklink for polisblad downloaden
    Then Verify the clicked correspondence is shown

  Scenario: Verify correspondence overview in my inbox.
    Given Customer woestenburg is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects the quicklink for nota downloaden
    Then Verify the clicked correspondence is shown

  Scenario: Verify persoonlijk advies documents ara available for download
    Given Customer woestenburg is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects personal advice
    Then Verify the customer is on the page persoonlijk advies

