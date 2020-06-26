$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring features on CNN homepage",
  "description": "  As a customer I want to explore several feature on CNN home page.",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Menu Search box",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click menu search generating box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_menu_search_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Menu search box generates",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.menu_search_box_generates()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching items",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click to open menu generating box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_to_open_menu_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for specified item and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_specified_item_and_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i get the specified search item",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_the_specified_search_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "US top news of the day",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click US top news and top news of the day",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_US_top_news_and_top_news_of_the_day()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the top news of the day",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_the_top_news_of_the_day()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "video link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click video link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_video_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click selected video",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_selected_video()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selected video starts playing",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.selected_video_starts_playing()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html[1]/body[1]/div[5]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/a[1]/*[local-name()\u003d\u0027svg\u0027][1]/*[name()\u003d\u0027rect\u0027][1]\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7MG7A7J\u0027, ip: \u0027192.168.1.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Monsu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62677}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 87efb31967d8c1eb6e44c2bba1dc5bcc\n*** Element info: {Using\u003dxpath, value\u003d/html[1]/body[1]/div[5]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/a[1]/*[local-name()\u003d\u0027svg\u0027][1]/*[name()\u003d\u0027rect\u0027][1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat home.Homepage.validatingCNNLogo(Homepage.java:54)\r\n\tat stepdefinition.StepDefinition.selected_video_starts_playing(StepDefinition.java:88)\r\n\tat ✽.selected video starts playing(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/CNN/src/main/java/features/Homepage.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "user acc hover mouse",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I hover mouse over user account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_mouse_over_user_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user account options show up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.user_account_options_show_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "login info input",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click user account button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_user_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_input_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the info shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_info_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
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
  "name": "I scroll down",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the bottom of the homepage.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_the_bottom_of_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "searchBox items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click menu search generating box",
  "keyword": "And "
});
formatter.step({
  "name": "I search for specified \"\u003cItems\u003e\" and press enter",
  "keyword": "When "
});
formatter.step({
  "name": "I get \"\u003cExpectedItems\u003e\"",
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
        "top news",
        "\"top news\""
      ]
    },
    {
      "cells": [
        "Covid",
        "\"Covid\""
      ]
    },
    {
      "cells": [
        "BLM",
        "\"BLM\""
      ]
    }
  ]
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "searchBox items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click menu search generating box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_menu_search_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for specified \"top news\" and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_specified_and_press_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"\"top news\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_top_news()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "searchBox items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click menu search generating box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_menu_search_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for specified \"Covid\" and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_specified_and_press_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"\"Covid\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_Covid()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am CNN homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "searchBox items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click menu search generating box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_menu_search_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for specified \"BLM\" and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_specified_and_press_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"\"BLM\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_BLM()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});