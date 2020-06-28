$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring variour Homepage feature on Jet Blue Website.",
  "description": "  As a customer I want to explore various feature on Jet Blue Home Page.",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given I am at Jet Blue Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "book webelement Select",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I put my cursor on book select button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_put_my_cursor_on_book_select_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click book select button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_book_select_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it shows me different option",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.it_shows_me_different_option()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Given I am at Jet Blue Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "logIn click",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I select logIn button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_select_logIn_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Farjanas-Air\u0027, ip: \u00272604:2000:1700:1c:0:e49d:a9fc:653e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/27/nmfyzmzj1c7...}, goog:chromeOptions: {debuggerAddress: localhost:64383}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1963c8d4aa3d93cacc2cd4d6ce519e09\n*** Element info: {Using\u003dcss selector, value\u003d/html/body/jb-app/jb-header/jb-header-desktop/div[2]/div/div/jb-subnav-desktop/div/div/span[1]/a}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat home.Homepage.clickLogIn(Homepage.java:19)\n\tat stepdefinition.StepDefinition.i_select_logIn_button(StepDefinition.java:48)\n\tat ✽.I select logIn button(file:///Users/farjanamobin/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/JetBlue/src/main/java/features/Homepage.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on logIn",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_logIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_redirected_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});