package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "High Sierra", "chrome", "83", "https://www.trivago.com/");
        //setup("https://www.trivago.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @When("I eneter Miami in the search box")
    public void i_eneter_Miami_in_the_search_box() {
        getInitElements();
        homepage.searchMiami();

    }

    @When("I click on search button")
    public void i_click_on_search_button() {
        getInitElements();
        homepage.clickSearch();

    }

    @Then("I should see Miami")
    public void i_should_see_Miami() {
        getInitElements();
        homepage.clickSearch();

    }


}
