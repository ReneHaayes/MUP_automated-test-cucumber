@zzpPakket


Feature: Happy flow for ZZP Pakket (nieuw Goed Beter Best)
  doorlopen van een happy flow om zo snel mogelijk uit te komen bij de bedankpagina voor de Goed/Beter/Best pagina's

  Scenario Outline: Filling in the quickest way to get to the "Thank you" page.
    Given I am on the zzp pakket page of the Unive website
    When I enter step one of zzp-pakket with <company>:
      | companyActivity    | yes            |
      | personnelOnPayroll | no             |
      | hasCompanyCar      | yes            |
      | licensePlate       | <licensePlate> |
#    And I enter step two of zzp-pakket for <persona> with <pakketkeuze>


    Examples:
      | company         | licensePlate | pakketkeuze | persona
      | rg timmerwerken | 48-VDS-3     | goed        | ronaldo
#      | rg timmerwerken | 3-VXN-23     | beter       | ronaldo
#      | rg timmerwerken | VDV-37-X     | best        | ronaldo




