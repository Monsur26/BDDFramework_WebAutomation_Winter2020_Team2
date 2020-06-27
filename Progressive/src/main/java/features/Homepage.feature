Feature: Exploring Progressive Homepage
  As a Tester I want to see several features on Progressive Homepage

  Background: Given I am at Progressive Homepage

  Scenario: Explore Button
    And I click on exploring button
    When I click on auto product button
    Then I see auto-product options

  Scenario:Claim Button
    And I click claim button
    When i click claim overview button
    Then I see claim overview options

  Scenario:Answer Button
    And I click Answer Button
    When I click AllProductAnswer
    Then the desired page shows up

  Scenario:Closing popup
    And I close the covid pop up
    Then  homepage appears without popup

  Scenario:searching item
    And I search for desired product
    Then search result shows up

  Scenario:login page
    And I click to enter login page
    Then I enter on login page

  Scenario: login credential
    And I click to enter login page
    And I input username and password
    Then login info shows up

  Scenario: scrolling down homepage
    And scroll down to the bottom of the page
    Then i see features of the bottom part.


  Scenario Outline:searching multiple item
    And I search for desired "<Product>"
    Then I get "<ExpectedProduct>"
    Examples:
      | Product   | ExpectedProduct |
      | auto      | "auto"          |
      | insurance | "insurance"     |
      | Liability | "Liability"     |

