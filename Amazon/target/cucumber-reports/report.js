$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Search product on amazon searchBox",
  "description": "  As a customer i want to search product on Amazon.com to purchase",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for Ball in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_Ball_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see ball search result",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_ball_search_result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for \"\u003cItems\u003e\" in the search box",
  "keyword": "And "
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Items",
        "ExpectedItems"
      ]
    },
    {
      "cells": [
        "ball",
        "\"ball\""
      ]
    },
    {
      "cells": [
        "bat",
        "\"bat\""
      ]
    },
    {
      "cells": [
        "Cup",
        "\"Cup\""
      ]
    },
    {
      "cells": [
        "Mug",
        "\"Mug\""
      ]
    }
  ]
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for \"ball\" in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_in_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"\"ball\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_ball()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for \"bat\" in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_in_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"\"bat\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_bat()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for \"Cup\" in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_in_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"\"Cup\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Cup()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for \"Mug\" in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_in_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"\"Mug\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Mug()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Product Select",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for Ball in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_Ball_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then I click on desired search Product",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.then_I_click_on_desired_search_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "desired search product shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.desired_search_product_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for Ball in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_Ball_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then I click on desired search Product",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.then_I_click_on_desired_search_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click quantity and select desired quantity",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_quantity_and_select_desired_quantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Desired quantity shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.desired_quantity_shows_up()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Not valid assertion expected:\u003c[Hand Sanitizer]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat home.Homepage.validateSearchProductSelectandqty(Homepage.java:88)\r\n\tat stepdefinition.StepDefinition.desired_quantity_shows_up(StepDefinition.java:106)\r\n\tat ✽.Desired quantity shows up(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/Amazon/src/main/java/features/Homepage.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Product Checkout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for Ball in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_Ball_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then I click on desired search Product",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.then_I_click_on_desired_search_Product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on cehckout box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_cehckout_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checkout page appears",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.checkout_page_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage links",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I try to get all the links from homepage top bar on my console",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_try_to_get_all_the_links_from_homepage_top_bar_on_my_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the links names appears on console.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_links_names_appears_on_console()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "mouseHover on accounts",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I hover mouse over accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_mouse_over_accounts_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the hover menu shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_hover_menu_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "DropDown menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "select Drop the menu and select value by index",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.select_Drop_the_menu_and_select_value_by_index()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the desired result shows up on menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_desired_result_shows_up_on_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "language select",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I hover mouse over language and select espaniol radio button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_mouse_over_language_and_select_espaniol_radio_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7MG7A7J\u0027, ip: \u0027192.168.1.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Monsu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54929}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ec0f9e2e93532982326a01429333fd50\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat home.Homepage.espaniolRadioButton(Homepage.java:60)\r\n\tat stepdefinition.StepDefinition.i_hover_mouse_over_language_and_select_espaniol_radio_button(StepDefinition.java:156)\r\n\tat ✽.I hover mouse over language and select espaniol radio button(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/Amazon/src/main/java/features/Homepage.feature:56)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the language changes",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_language_changes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at amazon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "menu options button",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click menu options",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_menu_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "menu options shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.menu_options_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});