Feature: Explore CNN Home page

  Background:

  Scenario: Select Top Banner
    Given I am at CNN Home Page
    And I Click on CNN Logo in Menu Bar
    When I Click on Top Banner
    Then I should see Top Banner


  Scenario: Select Logo Button
    Given I am at CNN Home Page
    And I Click on Logo Button in menu bar
    Then  I should see Logo Button