$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore TD Bank Home page",
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Products menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I bring mouse on Products",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_bring_mouse_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see All Products on the menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_All_Products_on_the_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Credit Cards",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Credit_Cards()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Credit Cards\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61429}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 753550aa99f15b37ad0cb2870e7ca2ff\n*** Element info: {Using\u003dlink text, value\u003dCredit Cards}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.creditCardsProducts(Homepage.java:57)\r\n\tat stepdefinition.StepDefinition.i_click_on_Credit_Cards(StepDefinition.java:45)\r\n\tat ✽.I click on Credit Cards(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/TDBank/src/main/java/features/Homepage.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see All type of Credit Cards",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_All_type_of_Credit_Cards()"
});
formatter.result({
  "status": "skipped"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Services menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I bring mouse on Services",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_bring_mouse_on_Services()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see All Services on the menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_All_Services_on_the_menu()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search TD Bank Products to Services menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I bring mouse on Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_bring_mouse_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move mouse from Products to Services",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_move_mouse_from_Products_to_Services()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see All Services on the menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_All_Services_on_the_menu()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search TD Bank Learning info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Learning",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Learning()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in Learning Center",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_be_in_Learning_Center()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search TD Bank all Kind of Accounts Log In",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I bring mouse on Log In",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_bring_mouse_on_Log_In()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see All kind of accounts Log In",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_All_kind_of_accounts_Log_In()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search TD Bank Branch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Find Us",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Find_Us()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Queens NY in Search Box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Queens_NY_in_Search_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_on_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see The Branches in Queens NY USA",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_The_Branches_in_Queens_NY_USA()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search TD Bank Branch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Log In Button",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Log_In_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_User_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Submit Button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_on_Submit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Welcome_message()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Country",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on country flag",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_country_flag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Canada",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_Canada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be in TD Bank Canada Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_be_in_TD_Bank_Canada_Home_Page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Search Result not Displayed expected:\u003c[Canada]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat home.Homepage.validateTDBankCountry(Homepage.java:105)\r\n\tat stepdefinition.StepDefinition.i_should_be_in_TD_Bank_Canada_Home_Page(StepDefinition.java:170)\r\n\tat ✽.I should be in TD Bank Canada Home Page(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/TDBank/src/main/java/features/Homepage.feature:53)\r\n",
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Help on TD Bank Home Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on help",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_help()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter keyword on search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_keyword_on_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search submit",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_the_search_results()"
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
  "name": "I am at TD Bank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_TD_Bank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search TD Bank Investing And Wealth Info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on Investing \u0026 Wealth",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Investing_Wealth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Individuals and Family",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Individuals_and_Family()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see different Investing Solutions",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_different_Investing_Solutions()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});