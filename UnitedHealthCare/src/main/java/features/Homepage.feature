Feature:Explore UHC Home Page
  As a customer I want to explore UHC.com to search different services

  Background:
    Given I am at UHC Home Page

    @SmokeTest
  Scenario: Search Insurance available in UHC
    And I click on Insurance
    When I click on Individual and Family Plans
    Then I should see All Health Insurance for Individuals and Family

  @SmokeTest
  Scenario: Search Member Resources available in UHC
    And I click on Member Resources
    When I click on Understanding Coverage
    Then I should see coverage of the plan

  @SmokeTest
  Scenario: Search Member Resources available in UHC
    And I enter dental plan in search box
    When I click on search button
    Then I should see all dental plans

  @SmokeTest
  Scenario: Find a Doctor in UHC
    And I click on Find a Doctor
    When I click on online Doctor
    Then I should see all Virtual Doctors

  @SmokeTest
  Scenario: Search Sign in page
    And I click on Sign In
    And I click on sign in to myuhc
    When I am at myuhc home page
    Then I should see myuhc sign in

  @Regression
  Scenario: Search Health and Wellness Preventive care tips
    And I click on Health and Wellness
    And I click on Preventive Care
    When I click on Preventive Care tips
    Then I should see all kind of Tips

  @Regression
  Scenario: Search Health and Wellness Preventive care tips
    And I click on Health and Wellness
    And I click on Preventive Care
    When I click on Preventive Care tips
    Then I should see all kind of Tips

  @Regression
  Scenario: Search For Providers Information
    And I click on For Providers
    And I am on UHC Providers Page
    When I click on New User
    Then I should see New User Registration

  @Regression
  Scenario: Search For Medicaid Eligibility Information
    Given I click on Insurance
    And I click on Medicaid
    And I am at new Window
    When I click on Eligibility
    Then I am at Eligibility page

  @Regression
  Scenario: Search For Medicaid Eligibility Information
    Given I click on Insurance
    And I click on Medicaid
    And I am at new Window
    When I switch back to Main Window
    Then I am at Home Page