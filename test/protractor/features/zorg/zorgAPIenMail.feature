@APIenMail    

Feature: check API calls en mails in mailhog

    @ApiTest
    Scenario: zorgAPI aanroepen om aanvraag te doen en mail te checken
        Given Ik roep de aanvraagAPI aan GET
        When Ik roep de aanvraagAPI aan POST
        And I go to mailhog to see the aanvraag bevestiging mail