Feature: Search products on amazon searchBox
  As a customer i want to search product on Amazon.com to purchase and navigate the website

  Background:
    Given I am at amazon Home Page

  @Test1
  Scenario: Search product
    And I Enter iphone 11 pro in search input field
    When I Click search button
    Then I should see iphone 11 pro

  @Test2
  Scenario: Search product
    And I Enter hello kitty stickers in search input field
    When I Click search button
    Then I should see hello kitty stickers

  @Test3
  Scenario: Search product
    And I Enter pink notebook in search input field
    When I Click search button
    Then I should see pink notebook
  @Test4
  Scenario: Search product
    And I Enter orange sandals in search input field
    When I Click search button
    Then I should see orange sandals
  @Test5
  Scenario: Search product
    And I Enter flowers in search input field
    When I Click search button
    Then I should see flowers
  @Test6
  Scenario: Search product
    And I Enter mirror in search input field
    When I Click search button
    Then I should see mirror
  @Test7
  Scenario: Search product
    And I Enter rainbow pillow in search input field
    When I Click search button
    Then I should see rainbow pillow
  @Test8
  Scenario: Search product
    And I Enter feather pen in search input field
    When I Click search button
    Then I should see feather pen
  @Test9
  Scenario: Search product
    And I Enter popcorn tub in search input field
    When I Click search button
    Then I should see feather pen
  @Test10
  Scenario: Search product
    And I Enter pink headphones in search input field
    When I Click search button
    Then I should see pink headphones