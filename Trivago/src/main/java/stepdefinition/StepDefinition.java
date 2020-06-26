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
    @Given("I am at Trivago Home Page")
    public void i_am_at_Trivago_Home_Page() {
       getInitElements();
    }

    @Given("I enter Los Angeles, CA in search box")
    public void i_enter_Los_Angeles_CA_in_search_box() {
        getInitElements();
        homepage.enterKeyword();
    }

    @When("I click on search button")
    public void i_click_on_search_button() {
        getInitElements();
        homepage.clickOnSearch();
    }

    @Then("I should see all hotels in Los Angeles")
    public void i_should_see_all_hotels_in_Los_Angeles() {
        getInitElements();
        homepage.validateHotelSearch("Sort by");
    }
    @When("I hover mouse on Menu")
    public void i_hover_mouse_on_Menu() throws InterruptedException {
        getInitElements();
        homepage.trivagoMenu();
    }

    @Then("I should see full Menu")
    public void i_should_see_full_Menu() {
        getInitElements();
        homepage.validateTrivagoMenu();
    }
    @When("I click on Currency drop down select GBP")
    public void i_click_on_Currency_drop_down_select_GBP() throws InterruptedException {

        getInitElements();
        homepage.trivagoCurrency();
    }

    @Then("I should see GBP is selected")
    public void i_should_see_GBP_is_selected() {
       getInitElements();
       homepage.validateCurrencyChange();
    }
    @Given("I click on Login Button")
    public void i_click_on_Login_Button() {
        getInitElements();
        homepage.trivagoLogin();
    }

    @Given("I enter email")
    public void i_enter_email() {
        getInitElements();
        homepage.trivagoemail();
    }

    @When("I click on Next")
    public void i_click_on_Next() {
        getInitElements();
        homepage.trivagoemailNext();
    }
    @Given("I click on check in")
    public void i_click_on_check_in() {
       getInitElements();
       homepage.trivagoCheckIn();
    }

    @Given("I select date")
    public void i_select_date() {
        getInitElements();
        homepage.checkinDate();
    }

    @Then("I should see check in date")
    public void i_should_see_check_in_date() {
        getInitElements();
        homepage.validateCheckIn();
    }
    @Given("I click on Check out")
    public void i_click_on_Check_out() {
       getInitElements();
       homepage.trivagoCheckInOut();
    }

    @Given("I select check out date")
    public void i_select_check_out_date() {
        getInitElements();
        homepage.checkoutDate();
    }

    @Then("I should see selected check out date")
    public void i_should_see_selected_check_out_date() {
        getInitElements();
        homepage.validateCheckout();
    }
    @Then("I should see hotels in Los Angeles")
    public void i_should_see_hotels_in_Los_Angeles() {
       getInitElements();
       homepage.validateHotelSearch();
    }
    @When("I scroll down to the bottom of page")
    public void i_scroll_down_to_the_bottom_of_page() {
       getInitElements();
       homepage.trivagoSearchScroll();
    }

    @Then("I should see all hotels in the search page")
    public void i_should_see_all_hotels_in_the_search_page() {
       getInitElements();
       homepage.validateSearchScrollDown();
    }
    @Given("I click on More filters")
    public void i_click_on_More_filters() throws InterruptedException {
        getInitElements();
        homepage.trivagosearchMoreFilter();
    }

    @When("I click on Car park Check Box")
    public void i_click_on_Car_park_Check_Box() throws InterruptedException {
       getInitElements();
       homepage.filterCarpark();
    }

    @Then("I should see Car park is selected")
    public void i_should_see_Car_park_is_selected() {
        getInitElements();
        homepage.validateSearchMoreFilters();
    }
    @Given("I enter London, UK in search box")
    public void i_enter_London_UK_in_search_box() {
        getInitElements();
        homepage.londonHotels();
    }

    @When("I click on Hotel Facilities")
    public void i_click_on_Hotel_Facilities() throws InterruptedException {
        getInitElements();
        homepage.trivagosearchHotelFacility();
    }

    @Then("I should see all available Facilities")
    public void i_should_see_all_available_Facilities() {
      getInitElements();
      homepage.validateHotelFacilities();
    }
    @Given("I click on Accommodation")
    public void i_click_on_Accommodation() throws InterruptedException {
        getInitElements();
        homepage.londonSearchAccommodation();
    }

    @When("I click on Hotels only")
    public void i_click_on_Hotels_only() {
       getInitElements();
       homepage.accommodationOption();
    }

    @Then("I should see Hotel option is selected")
    public void i_should_see_Hotel_option_is_selected() {
        getInitElements();
        homepage.validateSearchAccommodation();
    }
    @Given("I click on Guest rating")
    public void i_click_on_Guest_rating() {
      getInitElements();
      homepage.UKHotelGuestRating();
    }
    @When("I select Very good rating")
    public void i_select_Very_good_rating() {
        getInitElements();
        homepage.UKGuestRatingVGood();
    }

    @Then("I should see Very good Rating Hotels")
    public void i_should_see_Very_good_Rating_Hotels() {
        getInitElements();
        homepage.validateUKHotelGuestRating();
    }



}
