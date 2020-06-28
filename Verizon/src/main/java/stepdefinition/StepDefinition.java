package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.verizon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at Verizon Home Page")
    public void i_am_at_Verizon_Home_Page() {
       getInitElements();
    }
    @Given("I click on wireless")
    public void i_click_on_wireless() {
       getInitElements();
       homepage.wireless();
    }

    @Then("I should see wireless")
    public void i_should_see_wireless() {
        getInitElements();
    }


    @Given("I click on search in menu bar")
    public void i_click_on_search_in_menu_bar() {
        getInitElements();
        homepage.search();
    }


    @Then("I should see search")
    public void i_should_see_search (){
        getInitElements();
    }

    @Given("I click on plans")
    public void i_click_on_plans() {
       getInitElements();
       homepage.plans();
    }

    @Then("I should see plans")
    public void i_should_see_plans() {
       getInitElements();
    }





}
