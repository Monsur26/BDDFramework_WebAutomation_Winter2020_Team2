Feature: Browse TDBank
  As a customer i want to browse TDBank and see the services they offer

  Background:
    Given I am at the TDBank Home Page


  @Test1
  Scenario: Navigating to the student banking on TDBank
    And I hover to Services
    When I Click Student Banking
    Then I am on student banking page
  @Test2
  Scenario: Navigating to the services on TDBank
    And I hover to Services
    When I Click on services
    Then I see the service options
  @Test3
  Scenario: Navigating the products section on TDBank

    And I hover to products
    When I click on the drop down
    Then I read the products options
  @Test4
  Scenario: Help section
    And I click on country
    When I click on Canada
    When I Click help
    Then I read the help options
  @Test5
  Scenario: Search debit card
    And I click the searchbar
    When I enter debit card
    When I Click enter
    Then I see the debit card options
  @Test6
  Scenario: Go to Canada
    And I click on the region
    When I click Canada
    Then I see Canada
  @Test7
  Scenario:Login Enter
    And I hover to login
    When I click on login
    Then I should see login
  @Test8
  Scenario: Sign in enter
    And I hover to sign in
    When I click signin
    Then I should see signin
  @Test9
  Scenario: Giftcard
    And I hover to login
    When I click login
    When I hover to giftcard
    Then I click giftcard
  @Test10
  Scenario: Register Giftcard
    And I hover to login
    When I click login
    When I hover to giftcard
    Then I click giftcard
    Then I click register