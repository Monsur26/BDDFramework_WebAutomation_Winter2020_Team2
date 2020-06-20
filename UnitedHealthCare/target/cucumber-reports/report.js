$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Homepage.feature");
formatter.feature({
  "name": "Explore UHC Home Page",
  "description": "",
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Insurance available in UHC",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Insurance",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Insurance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Individual and Family Plans",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Individual_and_Family_Plans()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Individual and family plans\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-I809MD1\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\maruf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62573}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c052fbbe1837c3c685bd5237368a04a9\n*** Element info: {Using\u003dlink text, value\u003dIndividual and family plans}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat home.Homepage.UHCInIndividualFamily(Homepage.java:43)\r\n\tat stepdefinition.StepDefinition.i_click_on_Individual_and_Family_Plans(StepDefinition.java:38)\r\n\tat ✽.I click on Individual and Family Plans(file:///C:/Users/maruf/Desktop/Selenium_group_2/BDD%20group%20project/BDDFramework_WebAutomation_Winter2020_Team2/UnitedHealthCare/src/main/java/features/Homepage.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see All Health Insurance for Individuals and Family",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_All_Health_Insurance_for_Individuals_and_Family()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Member Resources available in UHC",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Member Resources",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Member_Resources()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Understanding Coverage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Understanding_Coverage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see coverage of the plan",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_coverage_of_the_plan()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Member Resources available in UHC",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I enter dental plan in search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_enter_dental_plan_in_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all dental plans",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_dental_plans()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find a Doctor in UHC",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Find a Doctor",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Find_a_Doctor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on online Doctor",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_online_Doctor()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all Virtual Doctors",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_Virtual_Doctors()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Sign in page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on Sign In",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Sign_In()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in to myuhc",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_sign_in_to_myuhc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am at myuhc home page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_myuhc_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see myuhc sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_myuhc_sign_in()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Health and Wellness Preventive care tips",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on Health and Wellness",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Health_and_Wellness()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Preventive Care",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Preventive_Care()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Preventive Care tips",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Preventive_Care_tips()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all kind of Tips",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_kind_of_Tips()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Health and Wellness Preventive care tips",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on Health and Wellness",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Health_and_Wellness()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Preventive Care",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Preventive_Care()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Preventive Care tips",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_Preventive_Care_tips()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see all kind of Tips",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_all_kind_of_Tips()"
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
  "name": "I am at UHC Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_at_UHC_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search For Providers Information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on For Providers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_For_Providers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on UHC Providers Page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_am_on_UHC_Providers_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on New User",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_New_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see New User Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_New_User_Registration()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});