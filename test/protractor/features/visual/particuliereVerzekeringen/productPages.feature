@productPagesVisual

Feature: Testing the different product pages.

  Scenario Outline: Compare screenshots when at the top of the homepage.
    Given I am on the <page> page of the Unive website
    Then Verify visual elements are the same for product pages compared to the base screenshot: <baseImage>

    Examples:
      | page                       | baseImage                                                  |
      | alle verzekeringen         | particuliereVerzekeringen/productPages/productPagesHome    |
      | autoverzekeringProductPage | particuliereVerzekeringen/productPages/autoverzekeringPage |
      | woonVerzekeringPp          | particuliereVerzekeringen/productPages/woonverzekeringPage |
