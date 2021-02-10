@zzpPakket


Feature: Happy flow for ZZP Pakket (nieuw Goed Beter Best)
  doorlopen van een happy flow om zo snel mogelijk uit te komen bij de bedankpagina voor de Goed/Beter/Best pagina's

  Scenario Outline: Filling in the quickest way to get to the "Thank you" page.
    Given I am on the zzp pakket page of the Unive website
    When I enter step one of zzp-pakket with <company>
      | correctActivity      | yes                    |
      | hasEmployees         | no                     |
      | hasCompanyCar        | <hasCompanyCar>        |
       # If hasCompanyCar = yes:
      | licensePlate         | <licensePlate>         |
      | mileage              | <mileage>              |
      | otherInventoryAdress | <otherInventoryAdress> |
      # If otherInventoryAdress = yes:
      | persona              | <persona>              |
    And I enter step two of zzp-pakket with
      | pakketkeuze | <pakketkeuze> |
    And I enter step four of zzp-pakket with
      | hasCompanyCar        | <hasCompanyCar>        |





    Examples:
      | company         | licensePlate | mileage       | persona | pakketkeuze | hasCompanyCar | otherInventoryAdress |
      | rg timmerwerken | 48-VDS-3     | tot12000      | ronaldo | goed        | no            | no                   |
      | rg timmerwerken | 3-VXN-23     | 20000tot25000 | neymar  | beter       | yes           | no                   |
      | rg timmerwerken | 3-VXN-23     | 25000tot35000 | neymar  | best        | no            | yes                  |
      | rg timmerwerken | VDV-37-X     | meerDan35000  | ronaldo | best        | yes           | yes                  |



