Feature: Explore Verizon Home page

  Background:

  Scenario: click wireless
    Given I am at Verizon Home Page
    And I click on wireless
    Then I should see wireless


  Scenario: click search
    Given I am at Verizon Home Page
    And I click on search in menu bar
    Then I should see search


  Scenario: click plans
    Given I am at Verizon Home Page
    And I click on plans
    Then I should see plans