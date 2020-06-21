$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Browse TDBank",
  "description": "  As a customer i want to browse TDBank and see the services they offer",
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LLR0ASQH3\u0027, ip: \u0027172.16.0.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\student\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62155}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 04f3ee698d6e17ac9ab830c7c568d76e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.student(Homepage.java:34)\r\n\tat stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page(StepDefinition.java:36)\r\n\tat ✽.I am at the TDBank Home Page(file:///C:/Users/student/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/TDBank/src/main/java/features/Homepage.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigating to the student banking on TDBank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "I hover to Services",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_to_Services()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Student Banking",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_Student_Banking()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am on student banking page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_on_student_banking_page()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LLR0ASQH3\u0027, ip: \u0027172.16.0.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\student\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62269}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b455b5ef3f559b2db397a16765bb1bba\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.student(Homepage.java:34)\r\n\tat stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page(StepDefinition.java:36)\r\n\tat ✽.I am at the TDBank Home Page(file:///C:/Users/student/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/TDBank/src/main/java/features/Homepage.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigating to the services on TDBank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "I hover to Services",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_to_Services()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click on services",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_on_services()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see the service options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_the_service_options()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigating the products section on TDBank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "I hover to products",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_to_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the drop down",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_the_drop_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I read the products options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_read_the_products_options()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LLR0ASQH3\u0027, ip: \u0027172.16.0.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\student\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62536}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6e7b9d2c1096b9b6d32861cbd3598b19\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.student(Homepage.java:34)\r\n\tat stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page(StepDefinition.java:36)\r\n\tat ✽.I am at the TDBank Home Page(file:///C:/Users/student/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/TDBank/src/main/java/features/Homepage.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Help section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "I click on country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Canada",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Canada()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click help",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_help()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I read the help options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_read_the_help_options()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LLR0ASQH3\u0027, ip: \u0027172.16.0.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\student\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 566b3bb958f1fa909f1dca2461b9838e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.student(Homepage.java:34)\r\n\tat stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page(StepDefinition.java:36)\r\n\tat ✽.I am at the TDBank Home Page(file:///C:/Users/student/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/TDBank/src/main/java/features/Homepage.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Search debit card",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I click the searchbar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_the_searchbar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter debit card",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_debit_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click enter",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I see the debit card options",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_the_debit_card_options()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Canada",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "name": "I click on the region",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_the_region()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Canada",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_Canada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Canada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_see_Canada()"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LLR0ASQH3\u0027, ip: \u0027172.16.0.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00769563+2725219]\n\tOrdinal0 [0x00668551+1672529]\n\tOrdinal0 [0x00550202+524802]\n\tOrdinal0 [0x005499B2+498098]\n\tOrdinal0 [0x0054A09B+499867]\n\tOrdinal0 [0x0054AFF5+503797]\n\tOrdinal0 [0x00546994+485780]\n\tOrdinal0 [0x00550FF0+528368]\n\tOrdinal0 [0x004FD6C9+186057]\n\tOrdinal0 [0x004FCA3D+182845]\n\tOrdinal0 [0x004FA94B+174411]\n\tOrdinal0 [0x004E2528+75048]\n\tOrdinal0 [0x004E35A0+79264]\n\tOrdinal0 [0x004E3539+79161]\n\tOrdinal0 [0x0067D607+1758727]\n\tGetHandleVerifier [0x00886546+1050150]\n\tGetHandleVerifier [0x00886291+1049457]\n\tGetHandleVerifier [0x008910D7+1094071]\n\tGetHandleVerifier [0x00886B46+1051686]\n\tOrdinal0 [0x00675B06+1727238]\n\tOrdinal0 [0x0067EB7B+1764219]\n\tOrdinal0 [0x0067ECE3+1764579]\n\tOrdinal0 [0x00694C05+1854469]\n\tBaseThreadInitThunk [0x75D96359+25]\n\tRtlGetAppContainerNamedObjectPath [0x76F47C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x76F47BF4+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat common.WebAPI.getLocalDriver(WebAPI.java:71)\r\n\tat common.WebAPI.setUp(WebAPI.java:55)\r\n\tat stepdefinition.StepDefinition.openBrowser(StepDefinition.java:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Enter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "name": "I hover to login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see login",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_login()"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LLR0ASQH3\u0027, ip: \u0027172.16.0.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00769563+2725219]\n\tOrdinal0 [0x00668551+1672529]\n\tOrdinal0 [0x00550202+524802]\n\tOrdinal0 [0x005499B2+498098]\n\tOrdinal0 [0x0054A09B+499867]\n\tOrdinal0 [0x0054AFF5+503797]\n\tOrdinal0 [0x00546994+485780]\n\tOrdinal0 [0x00550FF0+528368]\n\tOrdinal0 [0x004FD6C9+186057]\n\tOrdinal0 [0x004FCA3D+182845]\n\tOrdinal0 [0x004FA94B+174411]\n\tOrdinal0 [0x004E2528+75048]\n\tOrdinal0 [0x004E35A0+79264]\n\tOrdinal0 [0x004E3539+79161]\n\tOrdinal0 [0x0067D607+1758727]\n\tGetHandleVerifier [0x00886546+1050150]\n\tGetHandleVerifier [0x00886291+1049457]\n\tGetHandleVerifier [0x008910D7+1094071]\n\tGetHandleVerifier [0x00886B46+1051686]\n\tOrdinal0 [0x00675B06+1727238]\n\tOrdinal0 [0x0067EB7B+1764219]\n\tOrdinal0 [0x0067ECE3+1764579]\n\tOrdinal0 [0x00694C05+1854469]\n\tBaseThreadInitThunk [0x75D96359+25]\n\tRtlGetAppContainerNamedObjectPath [0x76F47C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x76F47BF4+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat common.WebAPI.getLocalDriver(WebAPI.java:71)\r\n\tat common.WebAPI.setUp(WebAPI.java:55)\r\n\tat stepdefinition.StepDefinition.openBrowser(StepDefinition.java:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Sign in enter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "name": "I hover to sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_to_sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click signin",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see signin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_signin()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Giftcard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "name": "I hover to login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click login",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_login3()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I hover to giftcard",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_to_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click giftcard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_giftcard()"
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
  "name": "I am at the TDBank Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_the_TDBank_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register Giftcard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "name": "I hover to login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click login",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_login3()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I hover to giftcard",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_hover_to_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click giftcard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click register",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});