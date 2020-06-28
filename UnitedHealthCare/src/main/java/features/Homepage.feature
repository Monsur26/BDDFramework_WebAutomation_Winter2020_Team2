Feature: Exploring United Health Care HomePage
  I want to explore different feature of united health care homepage features as a customer

  Background:
    Given I am at United Health Care HomePage


  Scenario: insurance options
    When I click the insurance button
    Then I see the different insurance options

  Scenario: drag and drop logo
    When I click on the UHC logo
    And I drag it to the search bar
    Then the logo appears on the search bar

  Scenario:plan feature
    When I click the plan button
    Then I land on plan options page

  Scenario:new window open upon medicare button check
    Given I click insurance Button
    And I click medicare Button
    When I enter zip code and press enter for offer I am redirected to a new page
    Then I land on the options offer

  Scenario: choosing providers
    And I click plans button
    When I click providers option
    Then I see all the providers

  Scenario:Sign in
    And I click on sign in option
    Then it takes me to the sign in page

  Scenario:Login
    And I click on sign in option
    Then it takes me to the sign in page
    Then I click on the UHC login page

  Scenario:Search doctor
    When I click on search bar
    Then I type "I need a doctor"
    And I am able to see all the doctors

  Scenario: UHC logo drag and drop
    When I drag the homepage logo to search box
    Then homepage url shows up in the searchbox

  Scenario: Drag and drop explore medicare button
    When I drag and drop explore medicare button to search box
    Then explore medicare button link appears on search box