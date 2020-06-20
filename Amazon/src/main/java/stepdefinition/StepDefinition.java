package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.messages.Messages;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.amazon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage=PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at amazon Home Page1")
    public void i_am_at_amazon_Home_Page1() throws InterruptedException {
        getInitElements();
    }

    @Given("I Enter iphone {int} pro in search input field")
    public void i_Enter_iphone_pro_in_search_input_field(Integer int1) throws InterruptedException {
        getInitElements();
        homepage.enterKeyWord("iphone 11 pro");
        sleepFor(3);
    }
    @And("I Click search button")
    public void i_Click_search_button() throws InterruptedException {
        getInitElements();
        homepage.clickSearchButton();
        sleepFor(3);
        cleanUp();
    }
    @Then("I should see iphone {int} pro")
    public void i_should_see_iphone_pro(Integer int1) {
        getInitElements();

    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    @Given("I am at amazon Home Page2")
    public void i_am_at_amazon_Home_Page2() {
        getInitElements();
    }
    @Given("I Enter hello kitty stickers in search input field")
    public void i_Enter_hello_kitty_stickers_in_search_input_field() {
        getInitElements();
    }
    @When("I Click search button1")
    public void i_Click_search_button1() throws InterruptedException {
        getInitElements();
        homepage.enterKeyWord("hello kitty stickers");
        sleepFor(3);
        throw new io.cucumber.java.PendingException();
    }

    @Then("I should see hello kitty stickers")
    public void i_should_see_hello_kitty_stickers() {
        getInitElements();

    }
    //////////////////////////////////////////////////////////////
    @Given("I Enter stickers in search input field")
    public void i_Enter_stickers_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button3() {

    }

    @Then("I should see stickers")
    public void i_should_see_stickers() {
    }
///////////////////////////////////////////////////////
@Given("I Enter stickers in search input field")
public void i_Enter_stickers_in_search_input_field2() {

}

    @When("I Click search button")
    public void i_Click_search_button4() {

    }

    @Then("I should see stickers")
    public void i_should_see_stickers2() {

    }
////////////////////////////////////////////////
@Given("I am at amazon Home Page")
public void i_am_at_amazon_Home_Page() {

}

    @Given("I Enter orange sandals in search input field")
    public void i_Enter_orange_sandals_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button5() {

    }

    @Then("I should see orange sandals")
    public void i_should_see_orange_sandals() {

    }
//////////////////////////////////////////////////////////////
@Given("I Enter flowers in search input field")
public void i_Enter_flowers_in_search_input_field() {

}

    @When("I Click search button")
    public void i_Click_search_button6() {

    }

    @Then("I should see flowers")
    public void i_should_see_flowers() {

    }
////////////////////////////////////////////////
@Given("I Enter mirror in search input field")
public void i_Enter_mirror_in_search_input_field() {

}

    @When("I Click search button")
    public void i_Click_search_button7() {

    }

    @Then("I should see mirror")
    public void i_should_see_mirror() {

    }
////////////////////////////////////

    @Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page3() {

    }

    @Given("I Enter rainbow pillow in search input field")
    public void i_Enter_rainbow_pillow_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button8() {

    }

    @Then("I should see rainbow pillow")
    public void i_should_see_rainbow_pillow() {

    }
////////////////////////////////////////
    @Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page5() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("I Enter feather pen in search input field")
    public void i_Enter_feather_pen_in_search_input_field() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("I Click search button")
    public void i_Click_search_button9() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("I should see feather pen")
    public void i_should_see_feather_pen() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
/////////////////////////////////
    @Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page9() {

    }

    @Given("I Enter popcorn tub in search input field")
    public void i_Enter_popcorn_tub_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button2() {

    }

    @Then("I should see feather pen")
    public void i_should_see_feather_pen2() {

    }
////////////////////////////////////
@Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page10() {

    }

    @Given("I Enter pink headphones in search input field")
    public void i_Enter_pink_headphones_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button10() {
    }
    @Then("I should see pink headphones")
    public void i_should_see_pink_headphones() {

    }












}
