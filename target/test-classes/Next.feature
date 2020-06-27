Feature:
  User want to select product by brand and put in basket

  Scenario Outline:
    Given User is on homepage
    When User go to Girls option and select age
    And User search product with "<Brand>"
    Then User should found all the required product
    Then User should select the required product

    Examples:
          |Brand|
          |Label Mix |
          |Loake|