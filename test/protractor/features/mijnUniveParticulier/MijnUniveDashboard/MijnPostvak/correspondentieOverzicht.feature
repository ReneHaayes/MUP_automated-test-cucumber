@MijnPostvakCorrespondentieOverzicht

Feature: Inbox and correspondence

  Scenario: Verify correspondence overview in my inbox.
    Given Customer illing is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects first correspondence for package
    Then Verify the clicked correspondence is shown

  Scenario: Verify persoonlijk advies documents ara available for download
    Given Customer illing is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects personal advice
    Then Verify the customer is on the page persoonlijk advies

