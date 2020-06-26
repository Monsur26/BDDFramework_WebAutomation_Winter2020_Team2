$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "JetBlue Homepage features Exploring",
  "description": "  As a customer representative I want to check several features on JetBlue Homepage",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Booking button check",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click booking button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the bookings options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_the_bookings_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Flight select button",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click booking button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click flight select button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_flight_select_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see flight select options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_flight_select_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "trip type select",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click one-way radiobutton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_one_way_radiobutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I again click round-trip radio button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_again_click_round_trip_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "round-trip radio button get selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.round_trip_radio_button_get_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Airport Select",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I select From Airport",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_From_Airport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select To airport",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_To_airport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see desired airports get selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_desired_airports_get_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "traveller info menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "select traveller info select",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.select_traveller_info_select()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"traveler-selector_hwgzeacom\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7MG7A7J\u0027, ip: \u0027192.168.1.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Monsu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50951}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: de792f3060cda4c60f715f685d220d8a\n*** Element info: {Using\u003dxpath, value\u003dtraveler-selector_hwgzeacom}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.travellerInfoMenu(Homepage.java:37)\r\n\tat stepdefinition.StepDefinition.select_traveller_info_select(StepDefinition.java:86)\r\n\tat ✽.select traveller info select(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/JetBlue/src/main/java/features/Homepage.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see traveller info options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_traveller_info_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "JetBlue Facebook Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on Facebook Page option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_on_Facebook_Page_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land on JetBlue Facebook page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_land_on_JetBlue_Facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Language Select",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "change language to Spanish",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.change_language_to_Spanish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the homepage language changes",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_homepage_language_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Checkbox",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I check and uncheck the bluepoint checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_check_and_uncheck_the_bluepoint_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the box changes accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_box_changes_accordingly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Scrolling Down Homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I scroll down to the bottom of the page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_down_to_the_bottom_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see bottom page options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_bottom_page_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at jetblue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "my trip status",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on my trip menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_my_trip_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select flight tracker",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_flight_tracker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see flight tracker info",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_flight_tracker_info()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});