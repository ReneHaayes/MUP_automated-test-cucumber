@MijnPostvakCorrespondentieOverzicht

Feature: Inbox and correspondence

  @hsn
  Scenario: Verify correspondence overview in my inbox.
    Given Customer illing is logged in on the mijn unive mijn postvak page of the Unive website
    When Customer selects first correspondence for package
    Then Verify the clicked correspondence is shown

