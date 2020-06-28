Feature: Exploring several features on Verizon homepage.
  I want to explore several features on Verizon homepage.
  Background:  I am at Verizon homepage

  Scenario: select the Top Menu
    And Verizon Homepage top menu select
    Then Selected Menu such as Business menu showed up

  Scenario: Select the My verizon Link and then choose the option using  mouse hover method
    And click on the link named My Verizon
    Then The chosen option showed up by mouse hover

  Scenario: Select link through mouse hover
    And click on My Verizon Link
    When Select the link Moving Button
    Then Desired link appeared

  Scenario: Search Bar on Verizon
    And click the search bar on verizon and type something on it
    Then The desired messsage or link showed up

  Scenario: Radio Button select on Verizon
    And at first select Search Button
    When select YES then NO radio button
    Then Desired operation done in Homepage

  Scenario: select desire item using Drop Down
    And At first select Search Button and type desire item or message
    When desired option appeared then choose option through Drop Down process
    Then operation happened in homepage

   Scenario: Sign In Button on Verizon
     And select sign In button in Homepage
     Then operation done in Homepage

    Scenario: Register Button On Verizon
     And At first select Sign In button through mouse hover
     And select the chosen option
     Then Finally the selected option showed up in Homepage


    Scenario: Locate Button on Verizon
    And click the Locate Button on the top of the homepage
    Then Locate Button Appeared

  Scenario: Customer Sign In option on Verizon
    And Select the Locate Button top corner of the Homepage
    When Sign In option appeared
    Then Finally Sign In option successfully done



  @test
  Scenario Outline: Searching several items on search bar
  And click the search bar on verizon and type "<Items>" on it
  Then I get "<expected items>"
  Examples:
    |Items  |expected items|
    |Wireless|"Wireless"   |
    |Modem   |"Modem"       |
    |Router  |"Router"     |