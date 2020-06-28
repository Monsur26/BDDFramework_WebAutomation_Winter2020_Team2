Feature: Exploring several features on Amazon homepage.
  As a customer i want to explore several feature on amazon homepage.
Background:  Given I am at amazon homepage
  @pending
  Scenario: amazon search bar check
    And I put some input on amazon search box
    When I click amazon search button
    Then search result shows up
@pending
  Scenario: product selecting on amazon
    And write the desire product's name in search bar
    When click search button in amazon
    And click on desired product
    Then desired product appears

  Scenario: select product quantity on amazon (enter keyword.clickSearchButton,clickProduct)
    And write input in search bar
    When click on the amazon search button
    When click on the product
    When select desire quantity
    Then selected result shows up