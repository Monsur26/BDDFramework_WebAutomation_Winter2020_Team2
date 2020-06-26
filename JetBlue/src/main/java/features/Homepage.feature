Feature: Being able to plan flights on JetBlue
  As a customer i want to be able to book a flight from anywhere

  Background:
    Given I am at JetBlue Home Page

  @Regression1
  Scenario: Click JetBlue from Africa
    And make it fullscreen
    When I Browse from Africa
    Then I should see same URL

  @Regression2
  Scenario: Click JetBlue from Asia
    And make it fullscreen
    When I Browse from Asia
    Then I should see same URL

  @Regression3
  Scenario: Click JetBlue from CA
    And make it fullscreen
    When I Browse from CA
    Then I should see same URL

  @Regression4
  Scenario: Click JetBlue from EU
    And make it fullscreen
    When I Browse from Europe
    Then I should see same URL

  @Regression5
  Scenario: Click JetBlue from Arab
    And make it fullscreen
    When I Browse from ARAB
    Then I should see same URL

  @SmokeTest1
  Scenario: Click JetBlue from SA
    And make it fullscreen
    When I Browse from SA
    Then I should see same URL

  @SmokeTest2
  Scenario: Click JetBlue from NA
    And make it fullscreen
    When I Browse from NA
    Then I should see same URL


  @SmokeTest3
  Scenario: Click JetBlue from NABuffalo
    And make it fullscreen
    When I Browse from NABuffalo
    Then I should see same URL

  @SmokeTest4
  Scenario: Click JetBlue from NADetroit
    And make it fullscreen
    When I Browse from NADetroit
    Then I should see same URL


  @SmokeTest5
  Scenario: Drop down list to see items in ascending order by name
    And make it fullscreen
    When I browse items from ascending order
    Then I see items from ascending ord
