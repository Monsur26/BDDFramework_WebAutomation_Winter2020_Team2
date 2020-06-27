package stepdefinition;


import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.cnn.com/");
        // settingmyOsX("https://www.cnn.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }


    static Homepage homepage;
    public static void getInitElements(){
        homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() {
        getInitElements();
    }

    @Given("I Click on CNN Logo in Menu Bar")
    public void i_Click_on_CNN_Logo_in_Menu_Bar() {
        getInitElements();
    }

    @When("I Click on Top Banner")
    public void i_Click_on_Top_Banner() {
        getInitElements();
        homepage.TopbannerSelecting();
    }

    @Then("I should see Top Banner")
    public void i_should_see_Top_Banner() {
        getInitElements();
    }

    @Given("I Click on Logo Button in menu bar")
    public void i_click_on_Logo_Button_in_menu_bar() {
        getInitElements();
    }


    @Then("I should see Logo Button")
    public void i_should_see_Logo_Button() {
        getInitElements();
    }




}
