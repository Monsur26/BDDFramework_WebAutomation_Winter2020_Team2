$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore Progressive Home Page",
  "description": "  As a customer I want to explore Progressive.com to search different services",
  "keyword": "Feature"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive Auto Insurance",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Explore",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Explore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Auto",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Auto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at Car Insurance page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Car_Insurance_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive Homeowners Insurance",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Explore Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Explore_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Homeowners",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Homeowners()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at Homeowners Insurance page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Homeowners_Insurance_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive Homeowners Insurance Coverage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Explore Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Explore_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Homeowners",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Homeowners()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover mouse on EXPLORE HOMEOWNERS",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_mouse_on_EXPLORE_HOMEOWNERS()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61027}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 853417f977cb2a8395f6a797cf72a8f7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat common.WebAPI.cancelAlert(WebAPI.java:433)\r\n\tat home.Homepage.exploreHomeownersMouseHover(Homepage.java:78)\r\n\tat stepdefinition.StepDefinition.i_hover_mouse_on_EXPLORE_HOMEOWNERS(StepDefinition.java:67)\r\n\tat ✽.I hover mouse on EXPLORE HOMEOWNERS(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/Progressive/src/main/java/features/Homepage.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on Coverages",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Coverages()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am at Homeowners Insurance Coverages page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Homeowners_Insurance_Coverages_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore More Choices of Progressive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on more choices",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_more_choices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Car Shopping",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Car_Shopping()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on find car",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_find_car()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61082}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 744df721c1188f134dfe9823bc6b2992\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.moreChoicesCarShoppingFind(Homepage.java:92)\r\n\tat stepdefinition.StepDefinition.i_click_on_find_car(StepDefinition.java:97)\r\n\tat ✽.I click on find car(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/Progressive/src/main/java/features/Homepage.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at Car Shopping page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Car_Shopping_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore More Choices of Progressive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on more choices",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_more_choices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to home page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at Progressive HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Progressive_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive All Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Explore Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Explore_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on all products",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at Explore All Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Explore_All_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll down Progressive All Products page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Explore Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Explore_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on all products",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the bottom of Explore All Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_bottom_of_Explore_All_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll down and scroll up Progressive All Products page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Explore Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Explore_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on all products",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down to the page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_down_to_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up to the page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_up_to_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at the top of Explore All Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_top_of_Explore_All_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive about us",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on about us",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_about_us()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Who we are",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Who_we_are()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at about us page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_about_us_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive Local Agents",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on about us",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_about_us()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Local Agents",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Local_Agents()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at Local Agents page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Local_Agents_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Progressive Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Progressive Auto and Home",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Auto and Home",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Auto_and_Home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Zip",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Zip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Get a quote",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Get_a_quote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Start the Quote page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Start_the_Quote_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});