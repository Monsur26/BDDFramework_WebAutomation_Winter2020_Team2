Feature: Explore JetBlue page

  Background:


  Scenario: Select Book
    Given I am at JetBlue Home Page
    And I Click on Book in Menu Bar
    Then I should see Book

  Scenario: click LogIn
    Given I am at JetBlue Home Page
    And I Click on LogIn in Menu Bar
    Then I should see LogIn


  Scenario: click MyTrips
    Given I am at JetBlue Home Page
    And I Click on MyTrips in Menu Bar
    Then I should see MyTrips


  Scenario: mouseHover MyTrips
    Given I am at JetBlue Home Page
    And I mouseHover on MyTrips in Menu Bar
    When I mouseHover on MyTrips
    Then I should see mouseHover on MyTrips


  Scenario: mouseHover Explore
    Given I am at JetBlue Home Page
    And I mouseHover on Explore in Menu Bar
    When I mouseHover on Explore
    Then I should see mouseHover on Explore


  Scenario: mouseHover Travel
    Given I am at JetBlue Home Page
    And I mouseHover on Travel in Menu Bar
    When I mouseHover on Travel
    Then I should see mouseHover on Travel


  Scenario: mouseHover Flight
    Given I am at JetBlue Home Page
    And I mouseHover on Flight in Menu Bar
    When I mouseHover on Flight
    Then I should see mouseHover on Flight


  Scenario: mouseHover CheckIn
    Given I am at JetBlue Home Page
    And I mouseHover on CheckIn in Menu Bar
    When I mouseHover on CheckIn
    Then I should see mouseHover on CheckIn


  Scenario: mouseHover TravelAlert
    Given I am at JetBlue Home Page
    And I mouseHover on TravelAlert in Menu Bar
    When I mouseHover on TravelAlert
    Then I should see mouseHover on TravelAlert


  Scenario: click Travel
    Given I am at JetBlue Home Page
    And I Click on Travel in Menu Bar
    Then I should see Travel


  Scenario: maximize LogIn
    Given I am at JetBlue Home Page
    And I Click on maximize LogIn
    Then I should see maximize LogIn


  Scenario: click oneWay RadioButton
    Given I am at JetBlue Home Page
    And I Click on oneWay RadioButton
    Then I should see oneWay RadioButton


  Scenario: click joinIn
    Given I am at JetBlue Home Page
    And I Click on joinIn in Menu Bar
    Then I should see joinIn


  Scenario: click checkBox1
    Given I am at JetBlue Home Page
    And I Click on checkBox1 in Menu Bar
    Then I should see checkBox1


  Scenario: click signIn
    Given I am at JetBlue Home Page
    And I Click on signIn in Menu Bar
    Then I should see signIn


  Scenario: click FirstName
    Given I am at JetBlue Home Page
    And I Click on firstName
    Then I should see FirstName


  Scenario: click lastName
    Given I am at JetBlue Home Page
    And I Click on lastName
    Then I should see lastName


  Scenario: put Confirmation
    Given I am at JetBlue Home Page
    And I Click on put Confirmation
    Then I should see put Confirmation


  Scenario: signIn Email
    Given I am at JetBlue Home Page
    And I Click on signIn Email
    Then I should see signInEmail


  Scenario: continue To FindFlights
    Given I am at JetBlue Home Page
    And I Click on continue To FindFlights
    Then I should see continue To FindFlights


  Scenario: checkIn Info
    Given I am at JetBlue Home Page
    And I Click on checkIn Info
    Then I should see checkIn Info