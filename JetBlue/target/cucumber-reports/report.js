$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Exploring several features on Verizon homepage.",
  "description": "  I want to explore several features on Verizon homepage.",
  "keyword": "Feature"
});
formatter.background({
  "name": "Given  I am at JetBlue Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Travel Info Link on JetBlue",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "Click the link travel info on Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.click_the_link_travel_info_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The selected Travel Info link opened",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.the_selected_Travel_Info_link_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});