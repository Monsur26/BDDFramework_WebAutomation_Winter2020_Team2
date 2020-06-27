Feature: Explore Amazon Home page

  Background:
    Given I am at Amazon Home Page

  Scenario: Search product
    And I Enter Hand Gloves in search input field
   When I Click on search button
    Then I should see Hand Gloves

  Scenario: Search product and add into cart
    And I Enter Disposable Face Mask in search input field
    When I Click on search button
    And I select Modenna Face mask
    And I add in cart
    Then I should see Face mask in cart


  Scenario: Search New Releases
    When I click on New Releases Link
    Then I should see all products on New Releases Product


  Scenario: Search New Releases
    And I click on New Releases Link
    When I click on Electronics
    Then I should see all New Released Electronics


  Scenario: Search Find a Gift
    When I click on Find a Gift Link
    Then I should see all products on Find a Gift


  Scenario: Search Best Sellers Products
   When I click on Best Sellers Link
    Then I should see all Best Sellers Products


  Scenario: Search Best Sellers Books
    And I click on Best Sellers Link
    When I click on Books
    Then I should see all Best Sellers Books


  Scenario: Check all Accounts and Lists
    And I bring mouse on Accounts $ Lists
    When I click on Sign in button
    Then I should see Sign-in page


  Scenario: Search Appliances from All Departments
    And I click on All Departments Dropdown and click on Appliances
    When I Click on search button
    Then I should see all Appliances


  Scenario: Search Amazon Main Menu
    When I click on Amazon Main Menu
    Then I should see all Category

