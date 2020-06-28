$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring several features on Amazon homepage.",
  "description": "  As a customer i want to explore several feature on amazon homepage.",
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
  "name": "select product quantity on amazon (enter keyword.clickSearchButton,clickProduct)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "write input in search bar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.write_input_in_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the amazon search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_on_the_amazon_search_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using css selector\u003d#nav-search \u003e form \u003e div.nav-right \u003e div \u003e input\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6OPSMV\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat home.Homepage.clickSearchButton(Homepage.java:37)\r\n\tat stepdefinition.StepDefinition.click_on_the_amazon_search_button(StepDefinition.java:78)\r\n\tat ✽.click on the amazon search button(file:///C:/Users/fskol/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/Amazon/src/main/java/features/Homepage.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on the product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_on_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select desire quantity",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.select_desire_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selected result shows up",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.selected_result_shows_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});