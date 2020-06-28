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

    @Given("I am at Trivago HomePage")
    public void i_am_at_Trivago_HomePage() {
        getInitElements();
    }
    @Given("I hover mouse over MenuBox")
    public void i_hover_mouse_over_MenuBox() {
        getInitElements();
        homepage.setMenuHover();
    }
    @When("I click BookingOverview link")
    public void i_click_BookingOverview_link() {
        getInitElements();
        homepage.setBookingOverview();
    }
    @Then("I am at booking overview Page")
    public void i_am_at_booking_overview_Page() {
        getInitElements();
        homepage.validationMenuHoverAndSelect();
    }
    @When("I select US dropdown menu and select value at index {int}")
    public void i_select_US_dropdown_menu_and_select_value_at_index(Integer int1) {
        getInitElements();
        homepage.setUSDDropDown();
    }
    @Then("I am at {int} valued index page")
    public void i_am_at_valued_index_page(Integer int1) {
        getInitElements();
        homepage.validateUSDDropdown();
    }
    @When("I select countries dropdown menu and select value at index {int}")
    public void i_select_countries_dropdown_menu_and_select_value_at_index(Integer int1) {
        getInitElements();
        homepage.nationsDropDown();
    }
    @Then("I am at number {int} valued index page")
    public void i_am_at_number_valued_index_page(Integer int1) {
        getInitElements();
        homepage.validateDropdownBottom();
    }
    @When("I click right arrow to slide towards right twice")
    public void i_click_right_arrow_to_slide_towards_right_twice() {
        getInitElements();
        homepage.rightArrowSlide();
        homepage.rightArrowSlide();
    }
    @When("I click left arrow afterwords twice")
    public void i_click_left_arrow_afterwords_twice() {
        getInitElements();
        homepage.leftArrowSlide();
        homepage.leftArrowSlide();
    }
    @Then("it slides left and right shows best cities to visit.")
    public void it_slides_left_and_right_shows_best_cities_to_visit() {
        getInitElements();
        homepage.validateArrowSlide();
    }
    @When("i write email on subscription email box")
    public void i_write_email_on_subscription_email_box() {
        getInitElements();
        homepage.setEmailBox("mmm@mm.com");
    }
    @When("I click the subscribe button")
    public void i_click_the_subscribe_button() {
        getInitElements();
        homepage.setSubscribeButton();
    }
    @Then("I get retry since the email is not valid")
    public void i_get_retry_since_the_email_is_not_valid() {
        getInitElements();
        homepage.validateEmailSubscription();
    }
    @When("I click and set destination on destination search box")
    public void i_click_and_set_destination_on_destination_search_box() {
        getInitElements();
        homepage.setDestinationBox("NYC");
    }
    @Then("I get the search result for preferred destination.")
    public void i_get_the_search_result_for_preferred_destination() {
        getInitElements();
        homepage.validateDestinationBox();
    }
    @When("I click checkin Box")
    public void i_click_checkin_Box() {
        getInitElements();
        homepage.checkInBox();
    }
    @When("I select checkin Date")
    public void i_select_checkin_Date() {
        getInitElements();
        homepage.checkInDate();
    }
    @Then("I get checkin date selected")
    public void i_get_checkin_date_selected() {
        getInitElements();
        homepage.validateCheckin();
    }
    @When("I click checkout Box")
    public void i_click_checkout_Box() {
        getInitElements();
        homepage.checkoutBox();
    }
    @When("I select checkout date")
    public void i_select_checkout_date() {
        getInitElements();
        homepage.checkOutDate();
    }
    @Then("Checkout date got selected")
    public void checkout_date_got_selected() {
        getInitElements();
        homepage.validateCheckout();
    }
    @When("I clicked room select box")
    public void i_clicked_room_select_box() {
        getInitElements();
        homepage.roomBox();
    }
    @When("I increase adults button and room increase button by 1+")
    public void i_increase_adults_button_and_room_increase_button_by_1() {
        getInitElements();
        homepage.adultsIncreaseButton();
        homepage.roomsIncreaseButton();
    }
    @When("I click apply button")
    public void i_click_apply_button() {
        getInitElements();homepage.applyButton();
    }
    @Then("The new information settles on the room select box")
    public void the_new_information_settles_on_the_room_select_box() {
        getInitElements();
        homepage.validateRoomDetail();
    }
    @When("I click Trivago english")
    public void i_click_Trivago_english() {
        getInitElements();
        homepage.trivagoInsta();
    }
    @Then("I land on Trivago english page")
    public void i_land_on_Trivago_english_page() {
        getInitElements();
     //   homepage.validateTrivagoInstagramPage();
    }

}


