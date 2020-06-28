Feature: Exploring Trivago Homepage
  As a customer I want to explore different features on Trivago Website Homepage

  Background: Given I am at Trivago HomePage

  Scenario:
    And I hover mouse over MenuBox
    When I click BookingOverview link
    Then I am at booking overview Page

  Scenario:
    When I select US dropdown menu and select value at index 0
    Then I am at 0 valued index page

  Scenario:
    When I select countries dropdown menu and select value at index 4
    Then I am at number 4 valued index page

  Scenario:
    When I click right arrow to slide towards right twice
    And I click left arrow afterwords twice
    Then it slides left and right shows best cities to visit.

  Scenario:
    When i write email on subscription email box
    And I click the subscribe button
    Then I get retry since the email is not valid

  Scenario:
    When I click and set destination on destination search box
    Then I get the search result for preferred destination.

  Scenario:
    When I click checkin Box
    And I select checkin Date
    Then I get checkin date selected

  Scenario:
    When I click checkout Box
    And  I select checkout date
    Then Checkout date got selected

  Scenario:
    When I clicked room select box
    And I increase adults button and room increase button by 1+
    When I click apply button
    Then The new information settles on the room select box

  Scenario:
    When I click Trivago Instagram Page and a new window generates
    Then I land on Trivago Instagram page.









