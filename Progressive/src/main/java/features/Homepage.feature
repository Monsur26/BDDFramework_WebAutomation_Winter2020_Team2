Feature: Explore Progressive Home Page
  As a customer I want to explore Progressive.com to search different services

  Background: I am at Progressive Home Page
  @SmokeTest
  Scenario: Explore Progressive Auto Insurance
    Given I click on Explore
    When I click on Auto
    Then I am at Car Insurance page

  @SmokeTest
  Scenario: Explore Progressive Homeowners Insurance
    Given I click on Explore Products
    When  I click on Homeowners
    Then I am at Homeowners Insurance page
  @SmokeTest
  Scenario: Explore Progressive Homeowners Insurance Coverage
    Given I click on Explore Products
    Given  I click on Homeowners
    And I hover mouse on EXPLORE HOMEOWNERS
    When I click on Coverages
    Then I am at Homeowners Insurance Coverages page
  @SmokeTest
  Scenario: Explore More Choices of Progressive
    Given I click on more choices
    Given  I click on Car Shopping
    When I click on find car
    Then I am at Car Shopping page

  @SmokeTest
  Scenario: Explore More Choices of Progressive
    Given I click on more choices
#    Given  I click on Car Shopping
    When I navigate to home page
    Then I am at Progressive HomePage

  @SmokeTest
  Scenario: Explore Progressive All Products
    Given I click on Explore Products
    When  I click on all products
    Then I am at Explore All Products page

  @SmokeTest
  Scenario: Scroll down Progressive All Products page
    Given I click on Explore Products
    And  I click on all products
    When I scroll down
    Then I am at the bottom of Explore All Products page

  @SmokeTest
  Scenario: Scroll down and scroll up Progressive All Products page
    Given I click on Explore Products
    And  I click on all products
    And I scroll down to the page
    When I scroll up to the page
    Then I am at the top of Explore All Products page

  @SmokeTest
  Scenario: Explore Progressive about us
    Given I click on about us
    When I click on Who we are
    Then I am at about us page

  @SmokeTest
  Scenario: Explore Progressive Local Agents
    Given I click on about us
    When I click on Local Agents
    Then I am at Local Agents page

  @SmokeTest
  Scenario: Explore Progressive Auto and Home
    And I click on Auto and Home
    And I enter Zip
    When I click on Get a quote
    Then I should see Start the Quote page
