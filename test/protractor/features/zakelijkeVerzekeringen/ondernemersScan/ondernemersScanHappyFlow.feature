@ondernemersScan

Feature: Happy flow for 'ondernemersscan'

  Scenario: Filling in the quickest happy flow to get to the "Thank you" page no staff.
    Given I am on the Ondernemersscan page of the Unive website
    When I enter step one page and click Doe de Ondernemersscan and start scan:
    And I enter zipcode and emailadres to get my results of the Ondernemersscan
    And I enter my details for personal advice
    Then Thank you page for make appointment is shown

