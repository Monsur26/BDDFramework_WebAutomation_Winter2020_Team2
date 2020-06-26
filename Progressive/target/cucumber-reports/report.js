$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore Progressive Home Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Explore Progressive Products",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Progressive Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Progressive_Home_Page()"
});
formatter.result({
  "status": "passed"
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
  "name": "I am at Explore Products window",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Explore_Products_window()"
});
formatter.result({
  "error_message": "java.util.NoSuchElementException\r\n\tat java.base/java.util.LinkedHashMap$LinkedHashIterator.nextNode(LinkedHashMap.java:721)\r\n\tat java.base/java.util.LinkedHashMap$LinkedKeyIterator.next(LinkedHashMap.java:741)\r\n\tat home.Homepage.windowHandle(Homepage.java:24)\r\n\tat home.Homepage.ExploreProductsWindow(Homepage.java:28)\r\n\tat stepdefinition.StepDefinition.i_am_at_Explore_Products_window(StepDefinition.java:40)\r\n\tat ✽.I am at Explore Products window(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/Progressive/src/main/java/features/Homepage.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see all products in new window",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_products_in_new_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});