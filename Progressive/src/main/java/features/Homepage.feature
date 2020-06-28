Feature: Browse throughout the progressive site
  As I customer I want to find the best car insurance for myself

  Background:
  Given: I am at progressive homepage

  @Test1
  Scenario: input zipcode for auto insurance
    And I click on auto insurance
    When I Enter my zipcode search input field
    Then I click on submit button

  @Test2
  Scenario: Explore feature
    And I click on explore feature
    When I Click on save button
    Then I should see all the saving features

  @Test3
  Scenario: Popup Handling
    And I see a popup
    When I Click X button on the popup
    Then popup disappears
  @Test4
  Scenario: Login
    And I click login
    When I click on email field entry
    Then I enter my email address
  @Test5
  Scenario: Password
    And I click login
    When I click on email field entry
    Then I enter my email address
    And I enter my password
  @Test6
  Scenario: Checkbox
    And I click login
    When I click on email field entry
    Then I enter my email address
    And I enter my password
    Then I click the checkbox
  @Test7
  Scenario: Submit login
    And I click login
    When I click on email field entry
    Then I enter my email address
    And I enter my password
    When I click the checkbox
    Then I clickt he submit button

  @Test8
  Scenario: Call button
    And I click on the call logo
    Then I should see the call feature
  @Test9
  Scenario: Boat insurance
    And I click on the boat insurance icon
    When I Click the input field
    Then I type my zipcode
  @Test10
  Scenario: Data Driven Excel
    And I click on the boat insurance icon
    When I Click the input field
    Then I type my zipcode