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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.jetblue.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at Jet Blue Home Page")
    public void i_am_at_Jet_Blue_Home_Page() {
        getInitElements();
    }

    @Given("I click on Book")
    public void i_click_on_Book() {
        getInitElements();
        homepage.jetBlueBook();
    }

    @When("I click on Flights")
    public void i_click_on_Flights() {
        getInitElements();
        homepage.jetBlueBookFlight();
    }

    @Then("I should see Search Flights Page")
    public void i_should_see_Search_Flights_Page() {
       getInitElements();
       homepage.validateJetBlueBookFlight("Search flights");
    }
    @Given("I click on Explore")
    public void i_click_on_Explore() {
        getInitElements();
        homepage.jetBlueExplore();
    }

    @When("I click on NewYork")
    public void i_click_on_NewYork() {
        getInitElements();
        homepage.jetBlueExploreNewYork();
    }

    @Then("I should see Flights to NewYork search Page")
    public void i_should_see_Flights_to_NewYork_search_Page() {
      getInitElements();
      homepage.validateJetBlueExploreNewYork("Flights to New York City");
    }
    @Given("I click on Los Angeles")
    public void i_click_on_Los_Angeles() {
       getInitElements();
       homepage.jetBlueExploreLA();
    }

    @When("I click on NewYork to Los Angeles")
    public void i_click_on_NewYork_to_Los_Angeles() {
       getInitElements();
       homepage.jetBlueNYtoLAFlights();
    }

    @Then("I should see Best Flight Finder")
    public void i_should_see_Best_Flight_Finder() {
       getInitElements();
       homepage.validateJetBlueExploreNYtoLA("Best Fare Finder");
    }
    @Given("I click on Sign in")
    public void i_click_on_Sign_in() {
        getInitElements();
        homepage.jetBlueSignin();
    }

    @Given("I enter email id")
    public void i_enter_email_id() {
       getInitElements();
       homepage.enteredEmail();
    }

    @When("I enter password")
    public void i_enter_password() {
        getInitElements();
        homepage.enterPassword();
    }

    @Then("I should see Sign in completed")
    public void i_should_see_Sign_in_completed() {
        getInitElements();
        homepage.validateJetBlueSignIn("Sign In");
    }
    @Given("I click on Travel Alerts")
    public void i_click_on_Travel_Alerts() {
        getInitElements();
        homepage.jetBlueTravelAlert();
    }

    @When("I click on Airport Alerts")
    public void i_click_on_Airport_Alerts() {
        getInitElements();
        homepage.jetBlueAirportAlert();
    }

    @Then("I should see all Airport Alerts")
    public void i_should_see_all_Airport_Alerts() {
        getInitElements();
        homepage.validateJetBlueAirportAlerts("Airport alerts");
    }
    @Given("I enter Airport Name in From box")
    public void i_enter_Airport_Name_in_From_box() {
        getInitElements();
        homepage.flightFromWhere();

    }

    @When("I enter destination Airport name in To Box")
    public void i_enter_destination_Airport_name_in_To_Box() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("I should see all available flights")
    public void i_should_see_all_available_flights() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
