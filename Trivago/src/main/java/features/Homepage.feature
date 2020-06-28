Feature: Explore Trivago Home page

  Background:

  Scenario: mouseHover Menu
    Given I am at Trivago Home Page
    And I mouseHover on Menu in Menu Bar
    When I mouseHover on Menu
    Then I should see mouseHover on Menu

  Scenario: click Language
    Given I am at Trivago Home Page
    And I click on Language
    Then I should see Language

  Scenario: click Currency
    Given I am at Trivago Home Page
    And I click on Currency
    Then I should see Currency

  Scenario: click LogIn
    Given I am at Trivago Home Page
    And I click on LogIn
    Then I should see LogIn

  Scenario: click LogIn
    Given I am at Trivago Home Page
    And I click on LogIn
    Then I should see LogIn

  Scenario: search Button
    Given I am at Trivago Home page
    And I Click on search Button
    Then I should see search Button

  Scenario: search Place
    Given I am at Trivago Home page
    And I Click on search Place
    Then I should see search Place

  Scenario: search PlBoston
    Given I am at Trivago Home page
    And I Click on search PlBoston
    Then I should see search PlBoston

  Scenario: room Selection
    Given I am at Trivago Home Page
    And I click on room Selection
    Then I should see room Selection

  Scenario: CheckOut Selection
    Given I am at Trivago Home page
    And I Click on CheckOut Selection
    Then I should see CheckOut Selection

  Scenario: CheckIn Selection
    Given I am at Trivago Home page
    And I Click on CheckIn Selection
    Then I should see CheckIn Selection