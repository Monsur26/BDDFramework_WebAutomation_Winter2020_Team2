Feature:Explore Trivago Home page

  Background:
    Given I am at Trivago Home Page

#  @SmokeTest
#  Scenario: Search Hotel in Trivago home page
#    Given I enter Los Angeles, CA in search box
#    When I click on search button
#    Then I should see all hotels in Los Angeles

#  @SmokeTest
#  Scenario: Explore Trivago menu
#    When I hover mouse on Menu
#    Then I should see full Menu

#  @Pending
#  Scenario: Explore Trivago Currency(its shows access denied)
#    When I click on Currency drop down select GBP
#    Then I should see GBP is selected
#
#  @Pending
#  Scenario: Login Trivago
#    Given I click on Login Button
#    And I enter email
#    When I click on Next
#    Then I can see Tivago account page

#  @SmokeTest
#  Scenario: Search Hotel in Trivago and select check in date
#    Given I enter Los Angeles, CA in search box
#    Given I click on check in
#    And I select date
#    When I click on search button
#    Then I should see check in date

#  @SmokeTest
#  Scenario: Enter check in and check out date in hotel Search
#    Given I enter Los Angeles, CA in search box
#    Given I click on check in
#    And I select date
#    And I click on Check out
#    When I select check out date
#    Then I should see selected check out date

#  @SmokeTest
#  Scenario: Search Hotel in Trivago with check in and check out date
#    Given I enter Los Angeles, CA in search box
#    Given I click on check in
#    And I select date
#    And I click on Check out
#    And I select check out date
#    When I click on search button
#    Then I should see hotels in Los Angeles

#  @SmokeTest
#  Scenario: Scroll down to check all Hotel search
#    Given I enter Los Angeles, CA in search box
#    Given I click on check in
#    And I select date
#    And I click on Check out
#    And I select check out date
#    And I click on search button
#    When I scroll down to the bottom of page
#    Then I should see all hotels in the search page

#  @SmokeTest
#  Scenario: Add more Filter in Hotel Search
#    Given I enter Los Angeles, CA in search box
#    Given I click on check in
#    And I select date
#    And I click on search button
#    Given I click on More filters
#    When I click on Car park Check Box
#    Then I should see Car park is selected

#  @SmokeTest
#  Scenario: Check Hotel Facilities in Hotel Search
#    Given I enter London, UK in search box
#    Given I click on check in
#    And I select date
#    And I click on search button
#    Given I click on More filters
#    When I click on Hotel Facilities
#    Then I should see all available Facilities

#  @SmokeTest
#  Scenario: Add accommodation option in Hotels search
#    Given I enter London, UK in search box
#    Given I click on check in
#    And I select date
#    And I click on search button
#    Given I click on Accommodation
#    When I click on Hotels only
#    Then I should see Hotel option is selected

  @SmokeTest
  Scenario: Add accommodation option in Hotels search
    Given I enter London, UK in search box
    Given I click on check in
    And I select date
    And I click on search button
    And I click on Guest rating
    When I select Very good rating
    Then I should see Very good Rating Hotels

