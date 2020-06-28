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
        setUp(false, "browserstack", "OS X", "High Sierra", "chrome", "83", "https://www.progressive.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at Progressive Homepage")
    public void i_am_at_Progressive_Homepage() {
        getInitElements();
    }

    @Given("I click on exploring button")
    public void i_click_on_exploring_button() {
        getInitElements();
        homepage.exploreButton();
    }

    @When("I click on auto product button")
    public void i_click_on_auto_product_button() {
        getInitElements();
        homepage.autoProduct();
    }

    @Then("I see auto-product options")
    public void i_see_auto_product_options() {
        getInitElements();
        homepage.validateExploreButton();
    }
    @Given("I click claim button")
    public void i_click_claim_button() {
        getInitElements();
        homepage.claimButton();

    }

    @When("i click claim overview button")
    public void i_click_claim_overview_button() {
        getInitElements();
        homepage.claimOverview();
    }

    @Then("I see claim overview options")
    public void i_see_claim_overview_options() {
        getInitElements();
        homepage.validateClaimButton();
    }
    @Given("I click Answer Button")
    public void i_click_Answer_Button() {
        getInitElements();
        homepage.answerButton();
    }

    @When("I click AllProductAnswer")
    public void i_click_AllProductAnswer() {
        getInitElements();
        homepage.AllProductAnswer();
    }

    @Then("the desired page shows up")
    public void the_desired_page_shows_up() {
        getInitElements();
        homepage.validateAnswersButton();
    }
    @Given("I close the covid pop up")
    public void i_close_the_covid_pop_up() {
        getInitElements();
        homepage.setPopUp();
        homepage.setClosePopUp();
    }

    @Then("homepage appears without popup")
    public void homepage_appears_without_popup() {
        getInitElements();
        homepage.validatePopUp();
    }
    @Given("I search for desired product")
    public void i_search_for_desired_product() {
        getInitElements();
        homepage.searchingItem("claim");
    }

    @Then("search result shows up")
    public void search_result_shows_up() {
        getInitElements();
        homepage.validateItemSearch();
    }
    @Given("I click to enter login page")
    public void i_click_to_enter_login_page() {
        getInitElements();
        homepage.login();
    }

    @Then("I enter on login page")
    public void i_enter_on_login_page() {
        getInitElements();
        homepage.validatelogin();
    }
    @Given("I input username and password")
    public void i_input_username_and_password() {
        getInitElements();
        homepage.username("DJT");
        homepage.password("Melania");
    }

    @Then("login info shows up")
    public void login_info_shows_up() {
        getInitElements();
        homepage.validateLoginCredential();
    }
    @Given("scroll down to the bottom of the page")
    public void scroll_down_to_the_bottom_of_the_page() {
        getInitElements();
        homepage.scrollingDownHomePage();
    }

    @Then("i see features of the bottom part.")
    public void i_see_features_of_the_bottom_part() {
        getInitElements();
        homepage.validateScrollingDown();
    }
    @Given("I search for desired {string}")
    public void i_search_for_desired(String string) {
        getInitElements();
        homepage.searchingItem(string);
    }

    @Then("I get \"\"auto\"\"")
    public void i_get_auto() {

    }

    @Then("I get \"\"insurance\"\"")
    public void i_get_insurance() {

    }

    @Then("I get \"\"Liability\"\"")
    public void i_get_Liability() {

    }

}

