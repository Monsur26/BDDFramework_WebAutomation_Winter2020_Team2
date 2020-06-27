$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring Verizon Homepage",
  "description": "  As a customer I want to explore verizon homepage",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Hover Shop menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "i hover over shop menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_over_shop_menu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Failed to execute \u0027elementsFromPoint\u0027 on \u0027Document\u0027: The provided double value is non-finite.\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7MG7A7J\u0027, ip: \u0027192.168.1.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Monsu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63174}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 228087996eb86afa672a0ae0ab1480ed\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat common.WebAPI.mouseHover(WebAPI.java:565)\r\n\tat home.Homepage.shopsHover(Homepage.java:36)\r\n\tat stepdefinition.StepDefinition.i_hover_over_shop_menu(StepDefinition.java:37)\r\n\tat ✽.i hover over shop menu(file:///C:/Users/Monsu/IdeaProjects/BDDFramework_WEM_Winter_2020_Team2/Verizon/src/main/java/features/Homepage.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on interlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_interlinks()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "internet link page show up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.internet_link_page_show_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "My Verizon Hover",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "hover over my verizon menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.hover_over_my_verizon_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click profile link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_profile_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "profile link page shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.profile_link_page_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Language switch",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click for language change to Spanish",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_for_language_change_to_Spanish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the language changes",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_language_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "watch TV mouse hover",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I hover over watch TV menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_over_watch_TV_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select guide line link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_guide_line_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guideline link page shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.guideline_link_page_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "searching item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for specific item",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_search_for_specific_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search result shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.search_result_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "scrolling down",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I scroll down homepage",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_down_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bottom of the page shows",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_bottom_of_the_page_shows()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Facebook page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the facebook page link on bottom",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_the_facebook_page_link_on_bottom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Facebook page of verizon shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.facebook_page_of_verizon_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Store location",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click the store select link on the bottom",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_the_store_select_link_on_the_bottom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select state from drop down menu and click submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_state_from_drop_down_menu_and_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "desired stores on state shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.desired_stores_on_state_shows_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "generating sign-in page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I go to sign-in hover menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_go_to_sign_in_hover_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I registration link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_registration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select identity drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_identity_drop_down_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select user id and password generating box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_user_id_and_password_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user id and password input box appears",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.user_id_and_password_input_box_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given i am at verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Complete sign-in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I go to sign-in hover menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_go_to_sign_in_hover_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I registration link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_registration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select identity drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_identity_drop_down_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select user id and password generating box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_user_id_and_password_generating_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input username and password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_input_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click submit button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submission error massage shows up for negative info",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.submission_error_massage_shows_up_for_negative_info()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});