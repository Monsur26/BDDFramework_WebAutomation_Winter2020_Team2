Feature: Explore CNN Home Page

  Background:
    Given I am at CNN Home Page

#  @SmokeTest
#  Scenario: Check CNN US page
#    When I Click on US on CNN submenu
#    Then I should see CNN US page
#  @SmokeTest
#  Scenario: Select CNN International Edition
#    Given I Click on Edition submenu
#    When I Click on International
#    Then I should see CNN World page
#  @SmokeTest
#  Scenario: Search keyword on Menu button
#    Given I Click on Menu Button
#    And I enter Economy in search box
#    When I Click on SearchSubmit
#    Then I should see Everything about economy

#  @SmokeTest
#  Scenario: Check CNN Business page
#    Given I Click on Business
#    When I scroll down in the page
#    Then I should see bottom of the page

#  @SmokeTest
#  Scenario: Check CNN Top Stories
#    Given I Click on CNN Entertainment
#    When I Click on Top Story
#    Then I am at CNN Entertainment Top Story page

#  @SmokeTest
#  Scenario: Check CNN Business Perspectives page
#    Given I Click on Business
#    When I Click on Perspectives
#    Then I am at CNN Business Perspectives page

#  @SmokeTest
#  Scenario: Go to CNN Business Perspectives page and go back to Home Page
#    Given I Click on Business
#    And I Click on Perspectives
#    And I navigate back to Business Page
#    Then I am at CNN Business Page

#  @SmokeTest
#  Scenario: CNN Home Page scroll down
#    When I scroll down to the bottom of CNN home page
#    Then I am able to see all topics at the bottom

#  @SmokeTest
#  Scenario:Check CNN 2020 Election page
#    Given I Click on Politics
#    And I Click on 2020 Election
#    When I refresh the page
#    Then I can see CNN 2020 Election page clearly

  @SmokeTest
  Scenario:Check CNN 2020 Election States page
    Given I Click on Politics
    And I Click on 2020 Election
    And I hover mouse on States & Territories
    When I click on Virginia
    Then I am at CNN 2020 Election Virginia state page