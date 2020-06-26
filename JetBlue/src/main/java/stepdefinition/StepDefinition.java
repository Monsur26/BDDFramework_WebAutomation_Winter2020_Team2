package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.jetblue.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at jetblue Homepage")
    public void i_am_at_jetblue_Homepage() {
        getInitElements();
    }

    @Given("I click booking button")
    public void i_click_booking_button() {
        getInitElements();
        homepage.bookingButtonClick();
    }

    @Then("I see the bookings options")
    public void i_see_the_bookings_options() {
        homepage.validateBookingButton();
    }
    @When("I click flight select button")
    public void i_click_flight_select_button() {
        getInitElements();
        homepage.clickFlightButton();
    }

    @Then("I see flight select options")
    public void i_see_flight_select_options() {
        homepage.validateBookingButton();
    }
    @Given("I click one-way radiobutton")
    public void i_click_one_way_radiobutton() {
        getInitElements();
        homepage.oneWayButtonSelect();
    }

    @When("I again click round-trip radio button")
    public void i_again_click_round_trip_radio_button() {
        getInitElements();
        homepage.roundTRipButtonSelect();
    }

    @Then("round-trip radio button get selected")
    public void round_trip_radio_button_get_selected() {
        getInitElements();
        homepage.validateJetBlueLogo();
    }
    @Given("I select From Airport")
    public void i_select_From_Airport() {
        getInitElements();
        homepage.searchFromAirport("JFK");
    }

    @When("I select To airport")
    public void i_select_To_airport() {
        getInitElements();
        homepage.searchToAirport("Qatar");
    }

    @Then("I see desired airports get selected")
    public void i_see_desired_airports_get_selected() {
       getInitElements();
       homepage.validateJetBlueLogo();
    }
    @Given("select traveller info select")
    public void select_traveller_info_select() {
        getInitElements();
        homepage.travellerInfoMenu();

    }

    @Then("I see traveller info options")
    public void i_see_traveller_info_options() {
        getInitElements();
        homepage.validateTravellerMenu();
    }
    @Given("click on Facebook Page option")
    public void click_on_Facebook_Page_option() {
        getInitElements();
        homepage.FaceBookPage();
    }

    @Then("I land on JetBlue Facebook page")
    public void i_land_on_JetBlue_Facebook_page() {
        getInitElements();
        homepage.validateFBPage();
    }
    @Given("change language to Spanish")
    public void change_language_to_Spanish() {
        getInitElements();
        implicitWait(5);
        homepage.languageChange();

    }

    @Then("the homepage language changes")
    public void the_homepage_language_changes() {
        getInitElements();
        homepage.validateJetBlueLogo();
    }
    @Given("I check and uncheck the bluepoint checkbox")
    public void i_check_and_uncheck_the_bluepoint_checkbox() {
        getInitElements();
        homepage.checkBox();
        homepage.checkBox();
    }

    @Then("the box changes accordingly")
    public void the_box_changes_accordingly() {
        getInitElements();
        homepage.validateJetBlueLogo();
    }
    @Given("I scroll down to the bottom of the page")
    public void i_scroll_down_to_the_bottom_of_the_page() {
        getInitElements();
        homepage.scrollDownHomePage();
    }

    @Then("I should see bottom page options")
    public void i_should_see_bottom_page_options() {
        getInitElements();
        homepage.validateJetBlueLogo();
    }
    @Given("I click on my trip menu")
    public void i_click_on_my_trip_menu() {
       getInitElements();
       homepage.myTripMenu();
    }

    @When("I select flight tracker")
    public void i_select_flight_tracker() {
       getInitElements();
       homepage.flightTracker();
    }

    @Then("I see flight tracker info")
    public void i_see_flight_tracker_info() {
        getInitElements();
        homepage.validateJetBlueLogo();

    }







}
