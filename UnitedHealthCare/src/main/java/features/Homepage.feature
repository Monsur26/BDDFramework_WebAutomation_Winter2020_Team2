Feature: Exploring United Health Care HomePage
  I want to explore different feature of united health care homepage features as a customer

  Background:Given I am at United Health Care HomePage

@Test1
  Scenario: covid notice bar
    When I see the special notice for covid-19 and I close it
    Then the notice disappears

  Scenario: searchBox searching
    When I click searchbox and write search item and hit enter
    Then search result shows

  Scenario:insurance button check
    When I click insurance Button and followed by medicare button
    Then I land on medicare options page

  Scenario:new window open upon medicare button check
    Given I click insurance Button
    And I click medicare Button
    When I enter zip code and press enter for offer I am redirected to a new page
    Then I land on the options offer

  Scenario: new window poops up upon myuhc link clicking
    And I click signIn Button
    When I click on myuhc signIn, I go to new windows and come back to previous window.
    Then I am at UHC homepage again

  Scenario:changing language
    And I click Spanish language link to change language
    Then The language switches back to English

  Scenario:getting list of upper tab links
    And I get upper menu links list
    Then All the link names appears

  Scenario:member sign in and redirecting to new window
    When I click welcome member feature sign in,I go to new window
    Then I am at new window sign in page

  Scenario: UHC logo drag and drop
    When I drag the homepage logo to search box
    Then homepage url shows up in the searchbox

  Scenario: Drag and drop explore medicare button
    When I drag and drop explore medicare button to search box
    Then explore medicare button link appears on search box