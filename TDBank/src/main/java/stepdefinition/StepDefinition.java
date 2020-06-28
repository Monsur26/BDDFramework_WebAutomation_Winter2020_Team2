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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.td.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }

    static Homepage homepage;

    public static void getInitElements() {
        homepage = PageFactory.initElements(driver, Homepage.class);
    }

    @Given("I am at TD Bank Home Page")
    public void i_am_at_TD_Bank_Home_Page() {
        getInitElements();
    }

    @Given("I bring mouse on Products")
    public void i_bring_mouse_on_Products() throws InterruptedException {
        getInitElements();
        homepage.MouseHoverOnProducts();
    }
    @Then("I should see All Products on the menu")
    public void i_should_see_All_Products_on_the_menu() {
        getInitElements();
        homepage.validateTDBankProductsmenu("Products");
    }
    @Then("I click on Products")
    public void i_click_on_Products() {
        getInitElements();
        homepage.ClickOnProducts();
    }

    @When("I click on Credit Cards")
    public void i_click_on_Credit_Cards() {
        getInitElements();
//        homepage.clickOnElementbyMouseHover();
        homepage.creditCardsProducts();
    }

    @Then("I should see All type of Credit Cards")
    public void i_should_see_All_type_of_Credit_Cards() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }



    @Given("I bring mouse on Services")
    public void i_bring_mouse_on_Services() throws InterruptedException {
        getInitElements();
        homepage.MouseHoverOnServices();
    }

    @Then("I should see All Services on the menu")
    public void i_should_see_All_Services_on_the_menu() {
        getInitElements();
        homepage.validateTDBankServicesmenu("Services");
    }

    @Given("I move mouse from Products to Services")
    public void i_move_mouse_from_Products_to_Services() throws InterruptedException {
        getInitElements();
        homepage.MouseHoverOnProductsToServices();
    }

    @When("I click on Learning")
    public void i_click_on_Learning() {
        getInitElements();
        homepage.TDBankLearning();
    }

    @Then("I should be in Learning Center")
    public void i_should_be_in_Learning_Center() {
        getInitElements();
        homepage.validateTDBankLearning("Learning Center");
    }

    @When("I bring mouse on Log In")
    public void i_bring_mouse_on_Log_In() throws InterruptedException {
        getInitElements();
        homepage.MouseHoverOnLogIn();
    }

    @Then("I should see All kind of accounts Log In")
    public void i_should_see_All_kind_of_accounts_Log_In() {
        getInitElements();
        homepage.validateTDBankLogIn("Log In");
    }

    @Given("I click on Find Us")
    public void i_click_on_Find_Us() {
        getInitElements();
        homepage.TDBankFindUs();
    }

    @Given("I enter Queens NY in Search Box")
    public void i_enter_Queens_NY_in_Search_Box() {
        getInitElements();
        homepage.LocationSearch("Queens,NY,USA");
    }

    @When("I Click on Search Button")
    public void i_Click_on_Search_Button() {
        getInitElements();
        homepage.SubmitSearch();

    }

    @Then("I should see The Branches in Queens NY USA")
    public void i_should_see_The_Branches_in_Queens_NY_USA() {
        getInitElements();
        homepage.validateBranchSearch("Find a Store or an ATM Near You");
    }
    @Given("I click on Log In Button")
    public void i_click_on_Log_In_Button() {
       getInitElements();
       homepage.TDBankLogIn();
    }

    @Given("I enter User name")
    public void i_enter_User_name() {
        getInitElements();
        homepage.TDBankUserName("mbmujib");
    }

    @Given("I enter Password")
    public void i_enter_Password() {
       getInitElements();
       homepage.TDBankPassword("abcd1234");
    }

    @When("I Click on Submit Button")
    public void i_Click_on_Submit_Button() {
        getInitElements();
        homepage.AccountLogInSubmit();
    }
    @Then("I should see Welcome message")
    public void i_should_see_Welcome_message() {
       getInitElements();
       homepage.validateAccountLogIn("Welcome to Online Banking");
    }

    @Given("I click on country flag")
    public void i_click_on_country_flag() {
        getInitElements();
        homepage.TDBankCountryFlag();
    }

    @When("I select Canada")
    public void i_select_Canada() {
        getInitElements();
        homepage.TDBankCountrySelect();
    }

    @Then("I should be in TD Bank Canada Home Page")
    public void i_should_be_in_TD_Bank_Canada_Home_Page() {
        getInitElements();
        homepage.validateTDBankCountry("");
    }
    @Given("I click on help")
    public void i_click_on_help() {
        getInitElements();
        homepage.TDBankHelpSearch();
    }

    @When("I enter keyword on search box")
    public void i_enter_keyword_on_search_box() throws InterruptedException {
        getInitElements();
        homepage.TDBankHelpSearchBox("Home Loan");
        sleepFor(10);
    }
    @When("I click on search submit")
    public void i_click_on_search_submit() {
        getInitElements();
        homepage.TDBankHelpSearchSubmit();
    }
    @Then("I should see the search results")
    public void i_should_see_the_search_results() {
        getInitElements();
        homepage.validateTDBankHelpSearch("You searched for Home Loan");
    }
    @Given("I click on Investing & Wealth")
    public void i_click_on_Investing_Wealth() {
        getInitElements();
        homepage.TDBankInvestingAndWealth();
    }

    @When("I click on Individuals and Family")
    public void i_click_on_Individuals_and_Family() {
        getInitElements();
        homepage.TDBankInvestingIndividual();
    }

    @Then("I should see different Investing Solutions")
    public void i_should_see_different_Investing_Solutions() {
        getInitElements();
        homepage.validateTDBankInvestingAndWealth("Investing Solutions for Individuals and Families");
    }

}
