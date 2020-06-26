Feature: Search product on amazon searchBox
  As a customer i want to search product on Amazon.com to purchase

  Background: Given I am at amazon homepage

  Scenario: Searching product
    And I search for Ball in the search box
    When I click search button
    Then I should see ball search result

  Scenario Outline: Search product using Parameter
    And I search for "<Items>" in the search box
    When I Click search button
    Then I should see "<ExpectedItems>"
    Examples:
      | Items | ExpectedItems |
      | ball  | "ball"        |
      | bat   | "bat"         |
      | Cup   | "Cup"         |
      | Mug   | "Mug"         |

  Scenario: Product Select
    And I search for Ball in the search box
    When I click search button
    And then I click on desired search Product
    Then desired search product shows up

  Scenario:
    And I search for Ball in the search box
    When I click search button
    And then I click on desired search Product
    When I click quantity and select desired quantity
    Then Desired quantity shows up

  Scenario: Product Checkout
    And I search for Ball in the search box
    When I click search button
    And then I click on desired search Product
    And I click on cehckout box
    Then checkout page appears


  Scenario:Homepage links
    And I try to get all the links from homepage top bar on my console
    Then the links names appears on console.

  Scenario: mouseHover on accounts
    And I hover mouse over accounts button
    Then the hover menu shows up

  Scenario: DropDown menu
    And select Drop the menu and select value by index
    Then the desired result shows up on menu

  Scenario:language select
    And I hover mouse over language and select espaniol radio button
    Then the language changes

  Scenario:menu options button
    And I click menu options
    Then  menu options shows up




