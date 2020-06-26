Feature: Exploring various Homepage features on TD Bank Website.
  As a customer I want to explore various features on TD Bank Home Page.
Background: Given I am at TD Bank Home Page

  Scenario: region select
    And I click region select button
    When I click region as Canada
    Then the homepage changes for Canada region

  Scenario: login dropdown menu
    And I select login drop down menu
    When I click online Banking Link
    Then I am redirected to online banking page

  Scenario: login dropdown and new window
    And i select login dropdown and select online banking
    When I switch to new window for online Banking
    Then I will be at new window

  Scenario:login dropdown and new window to previous window
    And I select dropdown and click online banking
    And I switch to new Window and redirect to previous window
    Then I am at homepage again

  Scenario: Products drop down
    And I hover over products drop down
    When I select CD's link
    Then I am at CD's link page

  Scenario:Commercial link drop down
    And I click commercial link
    When I hover over Industries drop down
    Then Industries drop down menu shows

  Scenario:Ask Now Box
    And I click ask now Box and enter input
    When I click search button
    Then the query page shows up

  Scenario:Right and Left Arrow Slide
    And I click right arrow slide twice
    When I click left arrow slide twice
    Then The original position comes back

  Scenario:popular questions link
    And I click popular questions and answers
    When I click opening bank account link
    Then bank account link page shows up

  Scenario:Login
    And I hover over login dropdown and select online banking
    When I switch to new window
    And I input username and password and remember me checkbox
    When I click apply
    Then The error massage shows up for negative testing