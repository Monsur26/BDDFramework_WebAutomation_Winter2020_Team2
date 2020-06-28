$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "I want to explore variour feature of Trivago Home Page",
  "description": "  As a customer I want to explore various feature on Trivago Home Page",
  "keyword": "Feature"
});
formatter.background({
  "name": "I am at Trivago Home Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Serach Miami",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I eneter Miami in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_eneter_Miami_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Miami",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Miami()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});