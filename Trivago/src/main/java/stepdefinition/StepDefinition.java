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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.trivago.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at Trivago Homepage")
    public void i_am_at_Trivago_Homepage() {
       getInitElements();
    }

    @Given("click the Log In Button")
    public void click_the_Log_In_Button() {
        getInitElements();
        homepage.logButtonSet();

    }

    @Then("The Log In link appeared")
    public void the_Log_In_link_appeared() {
        getInitElements();
        homepage.validationLogButton();

    }

    @Given("click the menu link")
    public void click_the_menu_link() {
        getInitElements();
        homepage.menuButtonSet();
    }

    @Then("The menu link showed up")
    public void the_menu_link_showed_up() {
        getInitElements();
        homepage.validationMenuButton();
    }

    @Given("At first click the link Menu Button")
    public void at_first_click_the_link_Menu_Button() {
       getInitElements();
       homepage.menuButtonSet();
    }

    @When("Select the Payment Method option")
    public void select_the_Payment_Method_option() {
        getInitElements();
        homepage.paymentMethodSet();
    }

    @Then("Finally the desired page opened")
    public void finally_the_desired_page_opened() {
        getInitElements();
        homepage.validationMethodPayment();
    }

    @Given("click the currency link")
    public void click_the_currency_link() {
        getInitElements();
        homepage.currencyButtonSet();

    }

    @Then("The currency link opened")
    public void the_currency_link_opened() {
        getInitElements();
        homepage.validationCurrencyButton();
    }

    @Given("click the language link")
    public void click_the_language_link() {
        getInitElements();
        homepage.languageButtonSet();
    }

    @Then("The language link showed up")
    public void the_language_link_showed_up() {
        getInitElements();
        homepage.validationLanguageButton();

    }
    @Given("write something in search bar")
    public void write_something_in_search_bar() {
        getInitElements();
        homepage.searchBarSet("");
    }

    @Then("The desired item showed up")
    public void the_desired_item_showed_up() {
        getInitElements();
        homepage.validationSearchBar();
    }

    @Given("At first write something on Search Bar")
    public void at_first_write_something_on_Search_Bar() {
       getInitElements();
       homepage.searchBarSet("");
    }

    @When("click the search button")
    public void click_the_search_button() {
        getInitElements();
        homepage.searchButtonSet();
    }

    @Then("Finally the desired item showed up in Homepage")
    public void finally_the_desired_item_showed_up_in_Homepage() {
        getInitElements();
        homepage.validationSearchButton();
    }
    @Given("click the bottom link")
    public void click_the_bottom_link() {
       getInitElements();
       homepage.bottomBarSet();
    }

    @Then("Finally the desired page showed up")
    public void finally_the_desired_page_showed_up() {
        getInitElements();
        homepage.validationBottomBarLink();

    }












}
