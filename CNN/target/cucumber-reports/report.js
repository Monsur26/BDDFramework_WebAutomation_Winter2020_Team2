$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Clicking on links on CNN homepage",
  "description": "  As a customer i want to be able to read up on news on the fly",
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
  "name": "I am at CNN Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_cnn_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click CNN US",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "name": "I maximize the window",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Cnn US",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_cnn_US()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see US Section",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_US_Section()"
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
