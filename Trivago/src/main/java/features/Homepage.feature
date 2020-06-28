Feature:  Exploring several features on Trivago homepage.
  I want to explore several features on Trivago homepage.
  Background: I am at Trivago Homepage

  Scenario: Log In link on Trivago HomePage
    And click the Log In Button
    Then The Log In link appeared

  Scenario: Menu Button link on Trivago Homepage
    And click the menu link
    Then The menu link showed up

  Scenario: Method Payment link on Trivago
    And At first click the link Menu Button
    When Select the Payment Method option
    Then Finally the desired page opened

  Scenario: Currency link on Trivago
    And click the currency link
    Then The currency link opened

  Scenario: Language link on Trivago
    And click the language link
    Then The language link showed up

  Scenario: Finding something through Search Bar
    And write something in search bar
    Then The desired item showed up

  Scenario: Search Button on Trivago
    And At first write something on Search Bar
    When click the search button
    Then Finally the desired item showed up in Homepage

  Scenario: Bottom Bar link on Trivago
    And click the bottom link
    Then Finally the desired page showed up
