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


    @Given("I Click on US in Menu Bar")
    public void i_Click_on_US_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.clickUS();
    }

    @Then("I should see US")
    public void i_should_see_US() {
        getInitElements();
    }

    @Given("I Click on Edition")
    public void i_Click_on_Edition() throws InterruptedException {
        getInitElements();
        homepage.clickEdition();
    }

    @Then("I should see Edition")
    public void i_should_see_Edition() {
        getInitElements();
    }

    @Given("I Click on Video")
    public void i_Click_on_Video() throws InterruptedException {
        getInitElements();
        homepage.clickVideo();
    }

    @Then("I should see Video")
    public void i_should_see_Video() {
        getInitElements();
    }

    @Given("I Click on Travel")
    public void i_Click_on_Travel() throws InterruptedException {
        getInitElements();
        homepage.clickTravel();
    }

    @Then("I should see Travel")
    public void i_should_see_Travel() {
        getInitElements();
    }

    @Given("I Click on Entertainment")
    public void i_Click_on_Entertainment() throws InterruptedException {
        getInitElements();
        homepage.clickEntertainment();
    }

    @Then("I should see Entertainment")
    public void i_should_see_Entertainment() {
        getInitElements();
    }

    @Given("I Click on Health")
    public void i_Click_on_Health() throws InterruptedException {
        getInitElements();
        homepage.clickHealth();
    }

    @Then("I should see Health")
    public void i_should_see_Health() {
        getInitElements();
    }

    @Given("I Click on Politics")
    public void i_Click_on_Politics() throws InterruptedException {
        getInitElements();
        homepage.clickPolitics();
    }

    @Then("I should see Politics")
    public void i_should_see_Politics() {
        getInitElements();
    }

    @Given("I Click on Opinion")
    public void i_Click_on_Opinion() throws InterruptedException {
       getInitElements();
       homepage.clickOpinion();
    }

    @Then("I should see Opinion")
    public void i_should_see_Opinion() {
        getInitElements();
    }

    @Given("I Click on Styles")
    public void i_Click_on_Styles() throws InterruptedException {
        getInitElements();
        homepage.clickStyles();
    }

    @Then("I should see Styles")
    public void i_should_see_Styles() {
        getInitElements();
    }

    @Given("I Click on Account")
    public void i_Click_on_Account() throws InterruptedException {
        getInitElements();
        homepage.clickAccount();
    }

    @Then("I should see Account")
    public void i_should_see_Account() {
        getInitElements();
    }






}
