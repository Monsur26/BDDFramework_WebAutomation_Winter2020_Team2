Feature: Explore Amazon Home page
  As a customer I want to search products on amazon.com

  @Regression
  Scenario: Search Amazon Main Menu
    When I click on Amazon Main Menu
    Then I should see all Category

  Scenario: Search product using Parameter
    And I Enter Items in search input field
      | Face Mask      |
      | Tablet         |
      | Hand Soap      |
      | I Phone 11 Pro |
    When I Click search button
    Then I should see Expected Items
      | "Face Mask"      |
      | "Tablet"         |
      | "Hand soap"      |
      | "I Phone 11 Pro" |