Feature: Exploring variour Homepage feature on Jet Blue Website.
  As a customer I want to explore various feature on Jet Blue Home Page.
  Background: Given I am at Jet Blue Home Page
    Scenario: book webelement Select
      And I put my cursor on book select button
      When I click book select button
      Then it shows me different option
  Scenario: logIn click
    And I select logIn button
    When I click on logIn
    Then I redirected to login page
