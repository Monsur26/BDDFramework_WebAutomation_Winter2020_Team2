$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/VerizonHomepage.feature");
formatter.feature({
  "name": "Explore Verizon Home page",
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
formatter.scenario({
  "name": "click wireless",
  "description": "",
  "keyword": "Scenario"
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
  "name": "I click on wireless",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_wireless()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iqras-MBP.home\u0027, ip: \u0027fd4b:8d38:69ba:1:39d3:c511:b733:3fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat home.Homepage.wireless(Homepage.java:31)\n\tat stepdefinition.StepDefinition.i_click_on_wireless(StepDefinition.java:32)\n\tat ✽.I click on wireless(file:///Users/iqrakhan/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/Verizon/src/main/java/features/VerizonHomepage.feature:7)\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iqras-MBP.home\u0027, ip: \u0027fd4b:8d38:69ba:1:39d3:c511:b733:3fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\t\tat home.Homepage.wireless(Homepage.java:31)\n\t\tat stepdefinition.StepDefinition.i_click_on_wireless(StepDefinition.java:32)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\t\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\t\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\t\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\t\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\t\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\t\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\t\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\t\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat home.Homepage.wireless(Homepage.java:31)\n\tat stepdefinition.StepDefinition.i_click_on_wireless(StepDefinition.java:32)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(@class,\u0027hero-cta color_00\u0027)]//a[contains(text(),\u0027Shop\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iqras-MBP.home\u0027, ip: \u0027fd4b:8d38:69ba:1:39d3:c511:b733:3fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/3d/zj33kjy14r7...}, goog:chromeOptions: {debuggerAddress: localhost:49502}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6f474f520590bdf396359fd9bff587e6\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(@class,\u0027hero-cta color_00\u0027)]//a[contains(text(),\u0027Shop\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 63 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see wireless",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_wireless()"
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
formatter.scenario({
  "name": "click search",
  "description": "",
  "keyword": "Scenario"
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
  "name": "I click on search in menu bar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_search_in_menu_bar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iqras-MBP.home\u0027, ip: \u0027fd4b:8d38:69ba:1:39d3:c511:b733:3fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat home.Homepage.search(Homepage.java:36)\n\tat stepdefinition.StepDefinition.i_click_on_search_in_menu_bar(StepDefinition.java:44)\n\tat ✽.I click on search in menu bar(file:///Users/iqrakhan/IdeaProjects/BDDFramework_WebAutomation_Winter2020_Team2/Verizon/src/main/java/features/VerizonHomepage.feature:13)\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iqras-MBP.home\u0027, ip: \u0027fd4b:8d38:69ba:1:39d3:c511:b733:3fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\t\tat home.Homepage.search(Homepage.java:36)\n\t\tat stepdefinition.StepDefinition.i_click_on_search_in_menu_bar(StepDefinition.java:44)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\t\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\t\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\t\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\t\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\t\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\t\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\t\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\t\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\t\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\t\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\t\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat home.Homepage.search(Homepage.java:36)\n\tat stepdefinition.StepDefinition.i_click_on_search_in_menu_bar(StepDefinition.java:44)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027navPhoneSearch\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iqras-MBP.home\u0027, ip: \u0027fd4b:8d38:69ba:1:39d3:c511:b733:3fb3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/3d/zj33kjy14r7...}, goog:chromeOptions: {debuggerAddress: localhost:49582}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0de357071da2a912a0f65cedb5ed5375\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027navPhoneSearch\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 63 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see search",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_should_see_search()"
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
formatter.scenario({
  "name": "click plans",
  "description": "",
  "keyword": "Scenario"
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
  "name": "I click on plans",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinition.i_click_on_plans()"
});
