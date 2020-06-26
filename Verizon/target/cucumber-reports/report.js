$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore Verizon Home Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Explore Verizon Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Verizon Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Verizon_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Verizon Wireless Products and Services",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_Verizon_Wireless_Products_and_Services()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Verizon Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at Verizon Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_Verizon_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Wireless",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Wireless()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter iPhone 11 Pro in search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_iPhone_Pro_in_search_box(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press ENTER",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_press_ENTER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see iPhone 11 Pro",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_iPhone_Pro(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});