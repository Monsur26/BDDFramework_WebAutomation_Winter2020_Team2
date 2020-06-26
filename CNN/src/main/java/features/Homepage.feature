Feature: Exploring features on CNN homepage
  As a customer I want to explore several feature on CNN home page.

  Background: Given I am CNN homepage

  Scenario: Menu Search box
    And I click menu search generating box
    Then Menu search box generates

  Scenario: Searching items
    And I click to open menu generating box
    When I search for specified item and press enter
    Then i get the specified search item

  Scenario:US top news of the day
    Given I click US top news and top news of the day
    Then I get the top news of the day

  Scenario:video link
    Given I click video link
    And I click selected video
    Then selected video starts playing

  Scenario:user acc hover mouse
    Given I hover mouse over user account
    Then user account options show up

  Scenario: login info input
    Given I click user account button
    When I input username and password
    Then the info shows up

  Scenario:
    And I scroll down
    Then I see the bottom of the homepage.

  Scenario Outline: searchBox items
    And I click menu search generating box
    When I search for specified "<Items>" and press enter
    Then I get "<ExpectedItems>"

    Examples:
      | Items    | ExpectedItems |
      | top news | "top news"    |
      | Covid    | "Covid"       |
      | BLM      | "BLM"         |
