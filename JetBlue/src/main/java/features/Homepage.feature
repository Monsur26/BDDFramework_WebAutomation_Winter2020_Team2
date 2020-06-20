Feature:Explore Jet Blue Home page

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

  @SmokeTest
  Scenario: Search Flight from NewYork to Florida
    Given I am at Jet Blue Home Page
    And I enter Airport Name in From box
#    When I enter destination Airport name in To Box
#    Then I should see all available flights
