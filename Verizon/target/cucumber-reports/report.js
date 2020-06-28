$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore Verizon Home Page",
  "description": "  As a customer I want to explore verizon.com",
  "keyword": "Feature"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon Wireless Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Verizon Wireless Products and Services",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Verizon_Wireless_Products_and_Services()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon Wireless Shop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Shop",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Shop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Wireless Products and Services",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Wireless_Products_and_Services()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon Wireless Shop page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Shop",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Shop()"
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
  "name": "I scroll up",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_scroll_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at top of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_top_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon In Home Shop Deals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on In Home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_In_Home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I bring Hover mouse on Shop",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_bring_Hover_mouse_on_Shop()"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Failed to execute \u0027elementsFromPoint\u0027 on \u0027Document\u0027: The provided double value is non-finite.\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58170}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: aed6128530a1f3f4b81b0158c7c595e6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat common.WebAPI.mouseHoverByXpath(WebAPI.java:420)\r\n\tat home.Homepage.inHomeShopMouseHover(Homepage.java:67)\r\n\tat stepdefinition.StepDefinition.i_bring_Hover_mouse_on_Shop(StepDefinition.java:80)\r\n\tat ✽.I bring Hover mouse on Shop(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/Verizon/src/main/java/features/Homepage.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on Deals",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Deals()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am should see all In Home Deals",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_should_see_all_In_Home_Deals()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon In Home Shop Internet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on In Home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_In_Home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Internet",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Internet()"
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
  "name": "I am should see Internet Order link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_should_see_Internet_Order_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Verizon Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter iPhone 11 Pro in search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_iPhone_Pro_in_search_box(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press ENTER",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_press_ENTER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see iPhone 11 Pro",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_iPhone_Pro(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Verizon Wireless Phones",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Phones",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Phones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all SmartPhones",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_SmartPhones()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Tablet in Verizon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Tablet in search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_Tablet_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press ENTER",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_press_ENTER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all Tablets",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_Tablets()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon In Home Shop Internet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on In Home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_In_Home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Hover mouse on Watch TV",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Hover_mouse_on_Watch_TV()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Guide",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Guide()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Guide\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58699}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4f436221f39d824aea4e6871e2d57ecc\n*** Element info: {Using\u003dlink text, value\u003dGuide}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.inHomeWatchTVGuide(Homepage.java:118)\r\n\tat stepdefinition.StepDefinition.i_click_on_Guide(StepDefinition.java:161)\r\n\tat ✽.I click on Guide(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/Verizon/src/main/java/features/Homepage.feature:63)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am should see Watch TV Guide",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_should_see_Watch_TV_Guide()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Verizon In Home Shop Internet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on In Home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_In_Home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Internet",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Internet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate back",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_navigate_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at In Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_In_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});