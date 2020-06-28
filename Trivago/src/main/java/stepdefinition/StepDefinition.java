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
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.trivago.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at Trivago Home Page")
    public void i_am_at_Trivago_Home_Page() {
        getInitElements();
    }

    @Given("I mouseHover on Menu in Menu Bar")
    public void i_mouseHover_on_Menu_in_Menu_Bar() {
       getInitElements();
    }

    @When("I mouseHover on Menu")
    public void i_mouseHover_on_Menu() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverMenu();
    }

    @Then("I should see mouseHover on Menu")
    public void i_should_see_mouseHover_on_Menu() {
       getInitElements();
    }

    @Given("I click on Language")
    public void i_click_on_Language() throws InterruptedException {
        getInitElements();
        homepage.clickLanguage();
    }

    @Then("I should see Language")
    public void i_should_see_Language() {
        getInitElements();
    }

    @Given("I click on Currency")
    public void i_click_on_Currency() throws InterruptedException {
        getInitElements();
        homepage.clickCurrency();
    }

    @Then("I should see Currency")
    public void i_should_see_Currency() {
       getInitElements();
    }

    @Given("I click on LogIn")
    public void i_click_on_LogIn() throws InterruptedException {
        getInitElements();
        homepage.clickLogIn();
    }

    @Then("I should see LogIn")
    public void i_should_see_LogIn() {
       getInitElements();
    }

    @Given("I am at Trivago Home page")
    public void i_am_at_Trivago_Home_page() {
        getInitElements();

    }

    @Given("I Click on search Button")
    public void i_Click_on_search_Button() throws InterruptedException {
       getInitElements();
       homepage.searchButton();
    }

    @Then("I should see search Button")
    public void i_should_see_search_Button() {
       getInitElements();
    }

    @Given("I Click on search Place")
    public void i_Click_on_search_Place() throws InterruptedException {
        getInitElements();
        homepage.searchPlace();
    }

    @Then("I should see search Place")
    public void i_should_see_search_Place() {
       getInitElements();
    }

    @Given("I Click on search PlBoston")
    public void i_Click_on_search_PlBoston() throws InterruptedException {
        getInitElements();
        homepage.searchPlBoston();
    }

    @Then("I should see search PlBoston")
    public void i_should_see_search_PlBoston() {
       getInitElements();
    }

    @Given("I click on room Selection")
    public void i_click_on_room_Selection() throws InterruptedException {
        getInitElements();
        homepage.roomSelection();
    }

    @Then("I should see room Selection")
    public void i_should_see_room_Selection() {
        getInitElements();
    }

    @Given("I Click on CheckOut Selection")
    public void i_Click_on_CheckOut_Selection() throws InterruptedException {
        getInitElements();
        homepage.CheckOutSelection();
    }

    @Then("I should see CheckOut Selection")
    public void i_should_see_CheckOut_Selection() {
        getInitElements();
    }

    @Given("I Click on CheckIn Selection")
    public void i_Click_on_CheckIn_Selection() throws InterruptedException {
        getInitElements();
        homepage.CheckInSelection();
    }

    @Then("I should see CheckIn Selection")
    public void i_should_see_CheckIn_Selection() {
       getInitElements();
    }



}
