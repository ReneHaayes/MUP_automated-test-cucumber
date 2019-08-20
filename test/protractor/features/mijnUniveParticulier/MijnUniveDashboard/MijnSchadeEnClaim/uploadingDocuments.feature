@MijnSchadeEnClaimUploadDocuments

Feature: Going to damage and claim page and uploading a image

  Scenario Outline: Verify image is uploaded.
    Given Customer illing is logged in on the mijn unive mijn schade en claim page of the Unive website
    When Customer uploads <filename> for claim with damage number: 2755827
    Then Verify uploaded <filename> is show in the list beneath

    Examples:
      | filename    |
      | test123.txt |

