Feature: : Exploring features on Amazon Homepage
  As a customer i want to explore amazon.com

Background:
  Given I Am At Amazon Homepage

  Scenario: Search Product
  And i enter Iphone 11 Pro in the search box
  Then i able to see the result

  Scenario: Search Product1
    Given i enter  bowflex Dumbbell Pro in the search box
    When when i Click the search box
    And i click the product
    Then i can see The product

    Scenario: Best Seller
    When i click bestseller
      Then i should see the result

  Scenario: Search Samsung Galaxy
    When i enter  Samsung Galaxy S20 Ultra in the search box
    And when i click the search box
    When i click the Product
    Then i can see the product

  Scenario: Bicycle
    When i click ride electric bicycle
    Then i see the bicycle

  Scenario: Search lg Oled
    When i enter  lg Oled in the search box
    And when i click the search box
    When i click The product
    Then i can see the product

  Scenario: Customer Refund
    When i click customer service
    And when i click return and refunds
    Then i can see The result

  Scenario: Game
    When i click new releases
    And when i click the last of us
    Then i can See the result

  Scenario: Food Item
    When i click whole foods
    And when i click blackberries
    Then i can see the result

#    Scenario: Amazon Logo
#    When i drag and drop the logo
#    Then i see the result