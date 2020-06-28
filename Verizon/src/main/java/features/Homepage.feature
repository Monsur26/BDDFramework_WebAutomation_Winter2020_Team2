Feature: Explore Verizon Home Page
  As a customer I want to explore verizon.com

  Background: I am at Verizon Home Page

  @SmokeTest
  Scenario: Explore Verizon Wireless Products
    When I click on Wireless
    Then I should see Verizon Wireless Products and Services

  @SmokeTest
  Scenario: Explore Verizon Wireless Shop
    Given I click on Wireless
    When I click on Shop
    Then I should see Wireless Products and Services

  @SmokeTest
  Scenario: Explore Verizon Wireless Shop page
    Given I click on Wireless
    Given I click on Shop
    And I scroll down to the page
    When I scroll up
    Then I am at top of the page

  @SmokeTest
  Scenario: Explore Verizon In Home Shop Deals
    Given I click on In Home
    Given I bring Hover mouse on Shop
    When I click on Deals
    Then I am should see all In Home Deals

  @SmokeTest
  Scenario: Explore Verizon In Home Shop Internet
    Given I click on In Home
    Given I click on Internet
    When I scroll down
    Then I am should see Internet Order link

  @SmokeTest
  Scenario: Search Verizon Products
    And I click on Wireless
    And I enter iPhone 11 Pro in search box
    When I press ENTER
    Then I should see iPhone 11 Pro

  @SmokeTest
  Scenario: Search Verizon Wireless Phones
    And I click on Wireless
    When I click on Phones
    Then I should see all SmartPhones

  @Regression
  Scenario: Search Tablet in Verizon
    And I click on Wireless
    And I enter Tablet in search box
    When I press ENTER
    Then I should see all Tablets

  @Regression
  Scenario: Explore Verizon In Home Shop Internet
    Given I click on In Home
    Given I Hover mouse on Watch TV
    When I click on Guide
    Then I am should see Watch TV Guide

  @Regression
  Scenario: Explore Verizon In Home Shop Internet
    Given I click on In Home
    Given I click on Internet
    When I navigate back
    Then I am at In Home page