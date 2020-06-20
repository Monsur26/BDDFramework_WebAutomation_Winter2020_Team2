Feature: Browse CNN
  As a customer i want to browse CNN to see the latest news

  Background:
    Given I am at CNN Home Page

  @Test1
  Scenario: Health news
    And I hover to Health
    When I Click Health
    Then I read the Health news
  @Test2
  Scenario: wellness news
    And I hover to Health
    When I Click Health
    And  I click Wellness
    Then I read the wellness news
  @Test3
  Scenario: Edition news
    And I hover to edition
    When I Click edition
    When I Click international
    Then I read the international news
  @Test4
  Scenario: Edition news
    And I hover to the hamburger icon
    When I Click the icon
    When I Click politics
    Then I read the politics news
  @Test5
  Scenario: Search COVID
    And I click the magnify
    When I enter COVID
    When I Click enter
    Then I read the COVID news
  @Test6
  Scenario: Search Bangladesh
    And I click the magnify
    When I enter Bangladesh
    When I Click enter
    Then I read the Bangladesh news
  @Test7
  Scenario: Email input
    And I click on user
    When I enter my email
    Then I should see my email
  @Test8
  Scenario: Email Pass
    And I click on user
    When I enter my email
    Then I enter my password
  @Test9
  Scenario: Login
    And I click on user
    When I enter my email
    When I enter my password
    Then I click login
  @Test10
  Scenario: Email Pass
    And I hover over entertainment
    When I click entertainment
    Then I should see entertainment