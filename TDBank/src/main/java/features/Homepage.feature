Feature:Explore TD Bank Home page
  As a customer I want to explore different services

  Background:
    Given I am at TD Bank Home Page

   @SmokeTest
  Scenario: Search Products menu
    When I bring mouse on Products
    Then I should see All Products on the menu

   @SmokeTest
  Scenario: Search Services menu
    And I bring mouse on Services
    Then I should see All Services on the menu

  @SmokeTest
  Scenario: Search TD Bank Products to Services menu
    Given I bring mouse on Products
    And I move mouse from Products to Services
    Then I should see All Services on the menu

  @SmokeTest
  Scenario: Search TD Bank Learning info
    When I click on Learning
    Then I should be in Learning Center

  @SmokeTest
  Scenario: Search TD Bank all Kind of Accounts Log In
    When I bring mouse on Log In
    Then I should see All kind of accounts Log In

   @SmokeTest
  Scenario: Search TD Bank Branch
    Given I click on Find Us
    And I enter Queens NY in Search Box
    When I Click on Search Button
    Then I should see The Branches in Queens NY USA

  @SmokeTest
  Scenario: Search TD Bank Branch
    Given I click on Log In Button
    And I enter User name
    And I enter Password
    When I Click on Submit Button
    Then I should see Welcome message

  @SmokeTest
  Scenario: Search Country
    And I click on country flag
    When I select Canada
    Then I should be in TD Bank Canada Home Page

  @Regression
  Scenario: Search Help on TD Bank Home Page
    And I click on help
    And I enter keyword on search box
    When I click on search submit
    Then I should see the search results

  @Regression
  Scenario: Search TD Bank Investing And Wealth Info
    And I click on Investing & Wealth
    When I click on Individuals and Family
    Then I should see different Investing Solutions
