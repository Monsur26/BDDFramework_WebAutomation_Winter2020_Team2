Feature: Clicking on links on CNN homepage
  As a customer i want to be able to read up on news on the fly

  Background:
    Given I am at CNN Home Page

  @SmokeTest1
  Scenario: Click CNN US
    And I maximize the window
    When I Click Cnn US
    Then I should see US Section

  @SmokeTest2
  Scenario: Click CNN International
    And I maximize the window
    When I Click Cnn INT
    Then I should see INT Section

  @SmokeTest3
  Scenario: Click CNN Spanish
    And I maximize the window
    When I Click Cnn Spanish
    Then I should see SPN Section

  @SmokeTest4
  Scenario: Click CNN US dropdown
    And I maximize the window
    When I Click Cnn US
    Then I should see US Section

  @SmokeTest5
  Scenario: Click CNN ARAB
    And I maximize the window
    When I Click Cnn ARAB
    Then I should see ARAB Section

  @SmokeTest6
  Scenario: Click CNN ZIP CODE
    And I maximize the window
    When I Click Cnn Zip Code and Enter Zip
    Then I should see new Location

  @SmokeTest7
  Scenario: Click CNN ARAB DROPDOWN
    And I maximize the window
    When I Click Cnn INT
    Then I should see INT Section

  @SmokeTest8
  Scenario: Click CNN United DROPDOWN
    And I maximize the window
    When I Click Cnn United dropdown
    Then I should see United Section dropdown

  @SmokeTest9
  Scenario: Click CNN World FrontPage
    And I maximize the window
    When I Click Cnn World Front Page
    Then I should see Cnn World Front Page

  @SmokeTest10
  Scenario: Click CNN US Front Page
    And I maximize the window
    When I Click Cnn US Front Page
    Then I should see Cnn US Front Page