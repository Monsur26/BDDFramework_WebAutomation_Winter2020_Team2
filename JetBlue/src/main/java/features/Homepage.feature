Feature: JetBlue Homepage features Exploring
  As a customer representative I want to check several features on JetBlue Homepage

  Background: Given I am at jetblue Homepage

  Scenario:Booking button check
    And I click booking button
    Then I see the bookings options

  Scenario:Flight select button
    And I click booking button
    When I click flight select button
    Then I see flight select options

  Scenario: trip type select
    And I click one-way radiobutton
    When I again click round-trip radio button
    Then round-trip radio button get selected

  Scenario:Airport Select
    And I select From Airport
    When I select To airport
    Then I see desired airports get selected

  Scenario:traveller info menu
    And select traveller info select
    Then I see traveller info options

  Scenario:JetBlue Facebook Page
    And click on Facebook Page option
    Then I land on JetBlue Facebook page

  Scenario:Language Select
    And change language to Spanish
    Then the homepage language changes

  Scenario: Checkbox
    And I check and uncheck the bluepoint checkbox
    Then the box changes accordingly

  Scenario: Scrolling Down Homepage
    And I scroll down to the bottom of the page
    Then I should see bottom page options

  Scenario: my trip status
    And I click on my trip menu
    When I select flight tracker
    Then I see flight tracker info
