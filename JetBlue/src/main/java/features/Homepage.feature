Feature:Explore Jet Blue Home page
  As a customer I want to explore JetBlue.com to search different services

  Background:
    Given I am at Jet Blue Home Page

  @SmokeTest
  Scenario: Search Flight to Book
    And I click on Book
    When I click on Flights
    Then I should see Search Flights Page

  @SmokeTest
  Scenario: Search Flights to NewYork
    And I click on Explore
    When I click on NewYork
    Then I should see Flights to NewYork search Page

  @SmokeTest
  Scenario: Search Flight from NewYork to Los Angeles
    And I click on Explore
    And I click on Los Angeles
    When I click on NewYork to Los Angeles
    Then I should see Best Flight Finder

  @SmokeTest
  Scenario: Jet Blue Sign In
    And I click on Sign in
    And I enter email id
    When I enter password
    Then I should see Sign in completed

  @SmokeTest
  Scenario: Jet Blue Travel Alerts
    And I click on Travel Alerts
    When I click on Airport Alerts
    Then I should see all Airport Alerts

  @Pending
  Scenario: Search Flight from NewYork to Florida
    Given I am at Jet Blue Home Page
    And I enter Airport Name in From box
#    When I enter destination Airport name in To Box
#    Then I should see all available flights

  @Regression
  Scenario: Explore all destinations
    And I click on Explore
    When I click on All Destinations
    Then I should see all Destinations
  @Regression
  Scenario: Explore Flights to Miami area
    And I click on Explore
    And I click on All Destinations
    When I click on Miami Area
    Then I should see Flight to Miami area

  @Regression
  Scenario: Explore vacation deals
    And I click on Explore
    And I click on Vacation Deals
    When I scroll down to check all over the page
    Then I should see Start Planning button
  @Regression
  Scenario: Search for Hotels
    And I click on Hotels
    And I click on Explore Hotels
    When I am navigated to a new window to Hotels
    Then I should see Hotels search options