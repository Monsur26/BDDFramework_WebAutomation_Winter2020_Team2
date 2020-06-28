$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring several features on Trivago homepage.",
  "description": "  I want to explore several features on Trivago homepage.",
  "keyword": "Feature"
});
formatter.background({
  "name": "I am at Trivago Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Log In link on Trivago HomePage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click the Log In Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_the_Log_In_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Log In link appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_Log_In_link_appeared()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Log in\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6OPSMV\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\fskol\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58419}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 205fdcd34821993fded938b2e73dc834\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Log in\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat home.Homepage.validationLogButton(Homepage.java:51)\r\n\tat stepdefinition.StepDefinition.the_Log_In_link_appeared(StepDefinition.java:40)\r\n\tat ✽.The Log In link appeared(file:///C:/Users/fskol/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/Trivago/src/main/java/features/Homepage.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});