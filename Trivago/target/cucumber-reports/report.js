$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring Trivago Homepage",
  "description": "  As a customer I want to explore different features on Trivago Website Homepage",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I hover mouse over MenuBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_mouse_over_MenuBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click BookingOverview link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_BookingOverview_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at booking overview Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_booking_overview_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I select US dropdown menu and select value at index 0",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_US_dropdown_menu_and_select_value_at_index(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at 0 valued index page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_valued_index_page(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I select countries dropdown menu and select value at index 4",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_countries_dropdown_menu_and_select_value_at_index(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at number 4 valued index page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_number_valued_index_page(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I click right arrow to slide towards right twice",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_right_arrow_to_slide_towards_right_twice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click left arrow afterwords twice",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_left_arrow_afterwords_twice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it slides left and right shows best cities to visit.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.it_slides_left_and_right_shows_best_cities_to_visit()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Not successful expected:\u003cHotels [In New York ]\u003e but was:\u003cHotels [in New York]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat home.Homepage.validateArrowSlide(Homepage.java:92)\r\n\tat stepdefinition.StepDefinition.it_slides_left_and_right_shows_best_cities_to_visit(StepDefinition.java:87)\r\n\tat ✽.it slides left and right shows best cities to visit.(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/Trivago/src/main/java/features/Homepage.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "i write email on subscription email box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_write_email_on_subscription_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the subscribe button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_the_subscribe_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get retry since the email is not valid",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_retry_since_the_email_is_not_valid()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I click and set destination on destination search box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_and_set_destination_on_destination_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the search result for preferred destination.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_the_search_result_for_preferred_destination()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I click checkin Box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_checkin_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select checkin Date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_checkin_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get checkin date selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_checkin_date_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I click checkout Box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_checkout_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select checkout date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_checkout_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Checkout date got selected",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.checkout_date_got_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I clicked room select box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_clicked_room_select_box()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u00271 Room\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7MG7A7J\u0027, ip: \u0027192.168.1.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Monsu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 322e29e1c7f7b320ffc6d18851517477\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u00271 Room\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.roomBox(Homepage.java:66)\r\n\tat stepdefinition.StepDefinition.i_clicked_room_select_box(StepDefinition.java:155)\r\n\tat ✽.I clicked room select box(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/Trivago/src/main/java/features/Homepage.feature:44)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I increase adults button and room increase button by 1+",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_increase_adults_button_and_room_increase_button_by_1()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click apply button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_apply_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The new information settles on the room select box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_new_information_settles_on_the_room_select_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Trivago HomePage",
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
  "name": "I click Trivago Instagram Page and a new window generates",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_Trivago_Instagram_Page_and_a_new_window_generates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I land on Trivago Instagram page.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_land_on_Trivago_Instagram_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});