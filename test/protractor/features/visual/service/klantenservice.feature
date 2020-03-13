@klantenserviceVisual

  Feature: Visual test for klantenservice.

    Scenario: Visual test for klantenservice with direct online regelen and neem contact op
      Given I am on the klantenservice page of the Unive website
      Then Verify visual elements are the same for product pages compared to the base screenshot: service/klantenservice/klantenservice

    Scenario: Visual test for klantenservice neem contact op: Zorg tile opened.
      Given I am on the klantenservice page of the Unive website
      When Customer selects Zorg to neem contact op in klantenservice page
      Then Verify visual elements are the same for product pages compared to the base screenshot: service/klantenservice/klantenserviceNeemContactOp
