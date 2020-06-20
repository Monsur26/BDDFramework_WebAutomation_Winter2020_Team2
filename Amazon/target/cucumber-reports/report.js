$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Search products on amazon searchBox",
  "description": "  As a customer i want to search product on Amazon.com to purchase and navigate the website",
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
  "name": "I am at amazon Home Page 1",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_amazon_Home_Page_1()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "I Enter orange sandals in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Enter_orange_sandals_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see orange sandals",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_orange_sandals()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});