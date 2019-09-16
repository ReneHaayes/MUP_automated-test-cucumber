@KlantenserviceVraagStellen @Hippo @HippoForms @Beslisboom

Feature: Making sure the 'vraag stellen beslisboom' is functioning by filling in all forms

  Scenario: Verify form 'Schadeverzekeringen' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for schadeverzekeringen vraag stellen
    Then Verify question is accepted with a confirmation text

  Scenario: Verify form 'Zorgverzekeringen' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for zorgverzekeringen vraag stellen
    Then Verify question is accepted with a confirmation text
  
  Scenario: Verify form 'Levensverzekeringen' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for levensverzekeringen vraag stellen
    Then Verify question is accepted with a confirmation text

  Scenario: Verify form 'Rechtsbijstandverzekering' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for rechtsbijstandverzekering vraag stellen
    Then Verify question is accepted with a confirmation text

  Scenario: Verify form 'Verzekeringspakket' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for verzekeringspakket vraag stellen
    Then Verify question is accepted with a confirmation text

  Scenario: Verify form 'Wijziging' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for wijziging vraag stellen
    Then Verify question is accepted with a confirmation text

  Scenario: Verify form 'Overig' on vraagstellen page
    Given I am on the vraagStellen page of the Unive website
    When Customer fills in form for overig vraag stellen
    Then Verify question is accepted with a confirmation text