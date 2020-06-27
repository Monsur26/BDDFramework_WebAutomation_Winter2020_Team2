Feature: Exploring Verizon Homepage
  As a customer I want to explore verizon homepage

  Background: Given i am at verizon homepage

  Scenario:Hover Shop menu
    And i hover over shop menu
    When I click on interlinks
    Then internet link page show up

  Scenario: My Verizon Hover
    And hover over my verizon menu
    When I click profile link
    Then profile link page shows up

  Scenario:Language switch
    And I click for language change to Spanish
    Then the language changes

  Scenario: watch TV mouse hover
    And I hover over watch TV menu
    When I select guide line link
    Then guideline link page shows up

  Scenario:searching item
    And I search for specific item
    Then search result shows up

  Scenario: scrolling down
    And I scroll down homepage
    Then the bottom of the page shows

  Scenario: Facebook page
    And I click on the facebook page link on bottom
    Then Facebook page of verizon shows up

  Scenario: Store location
    And I click the store select link on the bottom
    When I select state from drop down menu and click submit button
    Then desired stores on state shows up

  Scenario:generating sign-in page
    And I go to sign-in hover menu
    When I registration link
    And I select identity drop down menu
    When I select user id and password generating box
    Then user id and password input box appears

  Scenario: Complete sign-in
    And I go to sign-in hover menu
    When I registration link
    And I select identity drop down menu
    When I select user id and password generating box
    And I input username and password
    When I click submit button
    Then submission error massage shows up for negative info




