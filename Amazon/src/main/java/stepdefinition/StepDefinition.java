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
import java.util.List;

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

    @Given("I am at amazon Home Page 1")
    public void i_am_at_amazon_Home_Page_1() throws IOException {
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

    @Given("I Enter hello kitty stickers in search input field")
    public void i_Enter_hello_kitty_stickers_in_search_input_field() {
        getInitElements();
        homepage.enterKeyWord("hello kitty stickers");

    }
    @When("I Click search button1")
    public void i_Click_search_button1() throws InterruptedException {
        getInitElements();
        homepage.clickSearchButton();
        sleepFor(3);
    }

    @Then("I should see hello kitty stickers")
    public void i_should_see_hello_kitty_stickers() {
        getInitElements();

    }
//    //////////////////////////////////////////////////////////////
    @Given("I Enter pink notebook in search input field")
    public void i_Enter_pink_notebook_in_search_input_field() throws InterruptedException {
        homepage.enterKeyWord("pink notebook");
        sleepFor(3);
        homepage.clickSearchButton();
        sleepFor(3);
        cleanUp();
    }

    @When("I Click search button3")
    public void i_Click_search_button3() {

    }

    @Then("I should see pink notebook")
    public void i_should_see_pink_notebook() {
    }
//////////////////////////////////////////////////
@Given("I am at amazon Home Page4")
public void i_am_at_amazon_Home_Page4() throws InterruptedException {
    homepage.enterKeyWord("orange sandals");
    sleepFor(3);
    homepage.clickSearchButton();
    homepage.clickSandals();
    homepage.clickQty();
    sleepFor(3);
    cleanUp();
}
    @Given("I Enter orange sandals in search input field")
    public void i_Enter_orange_sandals_in_search_input_field() {

    }

    @When("I Click search button4")
    public void i_Click_search_button4() {

    }

    @Then("I should see orange sandals")
    public void i_should_see_orange_sandals() {

    }
////////////////////////////////////////////////////////////////
@Given("I Enter flowers in search input field")
public void i_Enter_flowers_in_search_input_field() throws InterruptedException {
    homepage.enterKeyWord("flowers");
    sleepFor(3);
    homepage.clickSearchButton();
    sleepFor(3);
    homepage.clickFlowers();
    sleepFor(3);
    cleanUp();
}
    @When("I Click search button5")
    public void i_Click_search_button5() {

    }

    @Then("I should see flowers")
    public void i_should_see_flowers() {

    }
//////////////////////////////////////////////////
@Given("I Enter mirror in search input field")
public void i_Enter_mirror_in_search_input_field() throws InterruptedException {
    homepage.enterKeyWord("mirror");
    sleepFor(3);
    homepage.clickSearchButton();
    sleepFor(3);
    homepage.clickMirror();
    sleepFor(3);
    homepage.clickQty();
    sleepFor(3);
    cleanUp();
}

    @When("I Click search button6")
    public void i_Click_search_button6() {

    }

    @Then("I should see mirror")
    public void i_should_see_mirror() {

    }
//////////////////////////////////////
    @Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page7() throws InterruptedException {
        homepage.enterKeyWord("rainbow pillow");
        sleepFor(3);
        homepage.clickSearchButton();
        sleepFor(3);
        homepage.clickPillow();
        sleepFor(3);
        homepage.clickQty();
        homepage.doSelectQty();
        sleepFor(3);
        cleanUp();
    }

    @Given("I Enter rainbow pillow in search input field")
    public void i_Enter_rainbow_pillow_in_search_input_field() {

    }

    @When("I Click search button7")
    public void i_Click_search_button7() {

    }

    @Then("I should see rainbow pillow")
    public void i_should_see_rainbow_pillow() {

    }
//////////////////////////////////////////
    @Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page() throws InterruptedException {
        homepage.enterKeyWord("feather pen");
        sleepFor(3);
        homepage.clickSearchButton();
        sleepFor(3);
        homepage.clickPen();
        sleepFor(3);
        cleanUp();
    }

    @Given("I Enter feather pen in search input field")
    public void i_Enter_feather_pen_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button8() {

    }

    @Then("I should see feather pen")
    public void i_should_see_feather_pen() {

    }
///////////////////////////////////
    @Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page9() throws InterruptedException {
        homepage.enterKeyWord("popcorn tub");
        sleepFor(3);
        homepage.clickSearchButton();
        sleepFor(3);
        homepage.clickPopcorn();
        cleanUp();
    }

    @Given("I Enter popcorn tub in search input field")
    public void i_Enter_popcorn_tub_in_search_input_field() {

    }

    @When("I Click search button9")
    public void i_Click_search_button9() {

    }

    @Then("I should see popcorn tub")
    public void i_should_see_popcorn_tub() {

    }
//////////////////////////////////////
@Given("I am at amazon Home Page")
    public void i_am_at_amazon_Home_Page10() {

    }

    @Given("I Enter pink headphones in search input field")
    public void i_Enter_pink_headphones_in_search_input_field() throws InterruptedException {
        homepage.enterKeyWord("pink headphones");
        sleepFor(3);
        homepage.clickSearchButton();
        sleepFor(3);
        homepage.clickHeadphones();
        sleepFor(3);
        homepage.clickQty();
        homepage.doSelectQty();
        cleanUp();
    }

    @When("I Click search button")
    public void i_Click_search_button10() {
    }
    @Then("I should see pink headphones")
    public void i_should_see_pink_headphones() {

    }

    @Given("I Enter Items in search input field")
    public void i_Enter_Items_in_search_input_field(List<String> items) {


        getInitElements();
    //    Homepage.validateSearchProduct();


    }










}
