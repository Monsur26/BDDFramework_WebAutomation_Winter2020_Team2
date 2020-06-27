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
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.jetblue.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at JetBlue Home Page")
    public void i_am_at_JetBlue_Home_Page() {
        getInitElements();
    }

    @Given("I Click on Book in Menu Bar")
    public void i_Click_on_Book_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.bookSelection();
    }

    @Then("I should see Book")
    public void i_should_see_Book() {
        getInitElements();
    }


    @Given("I Click on LogIn in Menu Bar")
    public void i_Click_on_LogIn_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.clickLogIn();
    }

    @Then("I should see LogIn")
    public void i_should_see_LogIn() {
      getInitElements();
    }

    @Given("I Click on MyTrips in Menu Bar")
    public void i_Click_on_MyTrips_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.clickMyTrips();
    }

    @Then("I should see MyTrips")
    public void i_should_see_MyTrips() {
        getInitElements();
    }
    @Given("I mouseHover on MyTrips in Menu Bar")
    public void i_mouseHover_on_MyTrips_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on MyTrips")
    public void i_mouseHover_on_MyTrips() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverMyTrips();
    }

    @Then("I should see mouseHover on MyTrips")
    public void i_should_see_mouseHover_on_MyTrips() {
        getInitElements();
    }


    @Given("I mouseHover on Explore in Menu Bar")
    public void i_mouseHover_on_Explore_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Explore")
    public void i_mouseHover_on_Explore() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverExplore();

    }

    @Then("I should see mouseHover on Explore")
    public void i_should_see_mouseHover_on_Explore() {
        getInitElements();
    }


    @Given("I mouseHover on Travel in Menu Bar")
    public void i_mouseHover_on_Travel_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Travel")
    public void i_mouseHover_on_Travel() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverTravel();

    }

    @Then("I should see mouseHover on Travel")
    public void i_should_see_mouseHover_on_Travel() {
        getInitElements();
    }


    @Given("I mouseHover on Flight in Menu Bar")
    public void i_mouseHover_on_Flight_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Flight")
    public void i_mouseHover_on_Flight() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverFlight();

    }

    @Then("I should see mouseHover on Flight")
    public void i_should_see_mouseHover_on_Flight() {
        getInitElements();
    }

    @Given("I mouseHover on CheckIn in Menu Bar")
    public void i_mouseHover_on_CheckIn_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on CheckIn")
    public void i_mouseHover_on_CheckIn() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverCheckIn();

    }

    @Then("I should see mouseHover on CheckIn")
    public void i_should_see_mouseHover_on_CheckIn() {
        getInitElements();
    }


    @Given("I mouseHover on TravelAlert in Menu Bar")
    public void i_mouseHover_on_TravelAlert_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on TravelAlert")
    public void i_mouseHover_on_TravelAlert() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverTravelAlert();

    }

    @Then("I should see mouseHover on TravelAlert")
    public void i_should_see_mouseHover_on_TravelAlert() {
        getInitElements();
    }



    @Given("I Click on Travel in Menu Bar")
    public void i_Click_on_Travel_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.clickTravel();
    }

    @Then("I should see Travel")
    public void i_should_see_Travel() {
        getInitElements();
    }

    @Given("I Click on maximize LogIn")
    public void i_Click_on_maximize_LogIn() throws InterruptedException {
        getInitElements();
        homepage.logIn();
    }

    @Then("I should see maximize LogIn")
    public void i_should_see_maximize_LogIn() {
        getInitElements();
    }


    @Given("I Click on oneWay RadioButton")
    public void i_Click_on_oneWay_RadioButton() throws InterruptedException {
        getInitElements();
        homepage.oneWayRadioButton();
    }

    @Then("I should see oneWay RadioButton")
    public void i_should_see_oneWay_RadioButton() {
        getInitElements();
    }

    @Given("I Click on joinIn in Menu Bar")
    public void i_Click_on_joinIn_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.joinIn();
    }

    @Then("I should see joinIn")
    public void i_should_see_joinIn() {
        getInitElements();
    }

    @Given("I Click on checkBox1 in Menu Bar")
    public void i_Click_on_checkBox1_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.checkBox1();
    }

    @Then("I should see checkBox1")
    public void i_should_see_checkBox1() {
        getInitElements();
    }

    @Given("I Click on signIn in Menu Bar")
    public void i_Click_on_signIn_in_Menu_Bar() throws InterruptedException {
        getInitElements();
        homepage.signIn();
    }

    @Then("I should see signIn")
    public void i_should_see_signIn() {
        getInitElements();
    }


    @Given("I Click on firstName")
    public void i_Click_on_firstName() throws InterruptedException {
        getInitElements();
        homepage.firstName();
    }

    @Then("I should see FirstName")
    public void i_should_see_FirstName() throws InterruptedException {
        getInitElements();

    }


    @Given("I Click on lastName")
    public void i_Click_on_lastName() throws InterruptedException {
        getInitElements();
        homepage.lastName();
    }

    @Then("I should see lastName")
    public void i_should_see_lastName() throws InterruptedException {
        getInitElements();

    }


    @Given("I Click on put Confirmation")
    public void i_Click_on_put_Confirmation() throws InterruptedException {
        getInitElements();
        homepage.putConfirmation();
    }

    @Then("I should see put Confirmation")
    public void i_should_see_put_Confirmation() throws InterruptedException {
        getInitElements();

    }


    @Given("I Click on signIn Email")
    public void i_Click_on_signIn_Email() throws InterruptedException {
        getInitElements();
        homepage.signInEmail();
    }

    @Then("I should see signInEmail")
    public void i_should_see_signInEmail() throws InterruptedException {
        getInitElements();

    }


    @Given("I Click on continue To FindFlights")
    public void i_Click_on_continue_To_FindFlights() throws InterruptedException {
        getInitElements();
        homepage.continueToFindFlights();
    }

    @Then("I should see continue To FindFlights")
    public void i_should_see_continue_To_FindFlights() throws InterruptedException {
        getInitElements();

    }


    @Given("I Click on checkIn Info")
    public void i_Click_on_checkIn_Info() throws InterruptedException {
        getInitElements();
        homepage.checkInInfo();
    }

    @Then("I should see checkIn Info")
    public void i_should_see_checkIn_Info() throws InterruptedException {
        getInitElements();

    }


}
