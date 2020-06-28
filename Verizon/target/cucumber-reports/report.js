$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring several features on Verizon homepage.",
  "description": "  I want to explore several features on Verizon homepage.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Searching several items on search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "click the search bar on verizon and type \"\u003cItems\u003e\" on it",
  "keyword": "And "
});
formatter.step({
  "name": "I get \"\u003cexpected items\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Items",
        "expected items"
      ]
    },
    {
      "cells": [
        "Wireless",
        "\"Wireless\""
      ]
    },
    {
      "cells": [
        "Modem",
        "\"Modem\""
      ]
    },
    {
      "cells": [
        "Router",
        "\"Router\""
      ]
    }
  ]
});
formatter.background({
  "name": "I am at Verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching several items on search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "click the search bar on verizon and type \"Wireless\" on it",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_the_search_bar_on_verizon_and_type_on_it(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"\"Wireless\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching several items on search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "click the search bar on verizon and type \"Modem\" on it",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_the_search_bar_on_verizon_and_type_on_it(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get \"\"Modem\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_Modem()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "I am at Verizon homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching several items on search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "click the search bar on verizon and type \"Router\" on it",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_the_search_bar_on_verizon_and_type_on_it(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6OPSMV\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\fskol\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50746}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 42a9fe6ff3fe4e72f5828828815f4c3e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.Homepage.setSearchButton(Homepage.java:38)\r\n\tat stepdefinition.StepDefinition.click_the_search_bar_on_verizon_and_type_on_it(StepDefinition.java:175)\r\n\tat ✽.click the search bar on verizon and type \"Router\" on it(file:///C:/Users/fskol/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/Verizon/src/main/java/features/Homepage.feature:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I get \"\"Router\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_get_Router()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});