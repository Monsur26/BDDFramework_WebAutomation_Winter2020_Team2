$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore Trivago Home page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Hotel in Trivago home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter Los Angeles, CA in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Los_Angeles_CA_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all hotels in Los Angeles",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_hotels_in_Los_Angeles()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#js_price_disclaimer \u003e div \u003e div \u003e span.sort-by__text\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51668}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 44824e4a80d931fbd75655252ea7c58b\n*** Element info: {Using\u003dcss selector, value\u003d#js_price_disclaimer \u003e div \u003e div \u003e span.sort-by__text}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat home.Homepage.validateHotelSearch(Homepage.java:51)\r\n\tat stepdefinition.StepDefinition.i_should_see_all_hotels_in_Los_Angeles(StepDefinition.java:45)\r\n\tat ✽.I should see all hotels in Los Angeles(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/Trivago/src/main/java/features/Homepage.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Trivago menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I hover mouse on Menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_mouse_on_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see full Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_full_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Hotel in Trivago and select check in date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter Los Angeles, CA in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Los_Angeles_CA_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see check in date",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_check_in_date()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter check in and check out date in hotel Search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter Los Angeles, CA in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Los_Angeles_CA_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Check out",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Check_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select check out date",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_check_out_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see selected check out date",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_selected_check_out_date()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Hotel in Trivago with check in and check out date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter Los Angeles, CA in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Los_Angeles_CA_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Check out",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Check_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select check out date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_check_out_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see hotels in Los Angeles",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_hotels_in_Los_Angeles()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll down to check all Hotel search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter Los Angeles, CA in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Los_Angeles_CA_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Check out",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Check_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select check out date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_check_out_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down to the bottom of page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_down_to_the_bottom_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all hotels in the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_hotels_in_the_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add more Filter in Hotel Search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter Los Angeles, CA in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Los_Angeles_CA_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on More filters",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_More_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Car park Check Box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Car_park_Check_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Car park is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Car_park_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Hotel Facilities in Hotel Search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter London, UK in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_London_UK_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on More filters",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_More_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Hotel Facilities",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Hotel_Facilities()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all available Facilities",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_available_Facilities()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add accommodation option in Hotels search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter London, UK in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_London_UK_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Accommodation",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Accommodation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Hotels only",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Hotels_only()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Hotel option is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Hotel_option_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Trivago Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Trivago_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add accommodation option in Hotels search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter London, UK in search box",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_London_UK_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on check in",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_check_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Guest rating",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Guest_rating()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Very good rating",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_Very_good_rating()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Very good Rating Hotels",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Very_good_Rating_Hotels()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});