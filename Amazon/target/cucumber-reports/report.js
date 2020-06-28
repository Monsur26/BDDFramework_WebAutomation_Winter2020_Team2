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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Farjanas-Air\u0027, ip: \u00272604:2000:1700:1c:0:e49d:a9fc:653e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/27/nmfyzmzj1c7...}, goog:chromeOptions: {debuggerAddress: localhost:62602}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 49989aa8ebef561c269c8d0bc9deffe6\n*** Element info: {Using\u003dcss selector, value\u003d#nav-search \u003e form \u003e div.nav-right \u003e div \u003e input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\n\tat home.Homepage.clickSearchButton(Homepage.java:32)\n\tat stepdefinition.StepDefinition.i_click_search_button(StepDefinition.java:46)\n\tat ✽.I click search button(file:///Users/farjanamobin/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/Amazon/src/main/java/features/Homepage.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "then I click on desired search Product",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.then_I_click_on_desired_search_Product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "desired search product shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.desired_search_product_shows_up()"
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
