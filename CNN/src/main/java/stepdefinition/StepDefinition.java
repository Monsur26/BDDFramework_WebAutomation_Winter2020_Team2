package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.cnn.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at CNN Home Page")
    public void i_am_at_cnn_Home_Page() throws IOException {
        getInitElements();
    }

    @And("I maximize the window")
    public void i_maximize_the_window() throws IOException, InterruptedException {
        driver.manage().window().maximize();
        sleepFor(2);
    }

    @When("I Click Cnn US")
    public void i_click_cnn_US() throws IOException, InterruptedException {
        homepage.clickCnnUnited();
    }

    @Then("I should see US Section")
    public void i_should_see_US_Section() {
        homepage.validate("https://us.cnn.com/?hpt=header_edition-picker");
    }

    @When("I Click Cnn INT")
    public void i_click_cnn_INT() throws IOException, InterruptedException {
        getInitElements();
        homepage.clickCnnInt();
    }

    @Then("I should see INT Section")
    public void i_should_see_INT_Section() {
        getInitElements();
        homepage.validate("https://www.cnn.com/world");
    }


    @When("I Click Cnn Spanish")
    public void i_click_cnn_Politics() throws IOException, InterruptedException {
        getInitElements();
        homepage.clickCnnSpan();
    }

    @Then("I should see SPN Section")
    public void i_should_see_SPN_Section() {
        getInitElements();
        homepage.validate("https://cnnespanol.cnn.com/?hpt=header_edition-picker");
    }

    @When("I Click Cnn ARAB")
    public void i_click_cnn_Arab() throws IOException, InterruptedException {
        getInitElements();
        homepage.clickCnnSpan();
    }

    @Then("I should see ARAB Section")
    public void i_should_see_ARAB_Section() {
        getInitElements();
        homepage.validate("https://cnnespanol.cnn.com/?hpt=header_edition-picker");
    }


    @When("I Click Cnn Zip Code and Enter Zip")
    public void i_click_cnn_zip_and_enter_zip() throws IOException, InterruptedException {
        getInitElements();
        driver.manage().window().maximize();
        sleepFor(2);
        homepage.CNNEZipCode();
        sleepFor(1);
        homepage.enterZipCode("11102");
        sleepFor(1);
        homepage.cnnSetLocation();
    }

    @Then("I should see new Location")
    public void i_should_see_new_Location() {
        getInitElements();
        homepage.validate("https://www.cnn.com/account/register?iid=geocorona_hp_user-reg_login-signup&registration_source=covid_hp_module&zipcode=11102");
    }


    @When("I Click Cnn ARAB dropdown")
    public void i_click_cnn_Arab_dropdown() throws IOException, InterruptedException {
        getInitElements();
        homepage.clickCnnArab();
    }


    @When("I Click Cnn United dropdown")
    public void i_click_cnn_United_dropdown() throws IOException, InterruptedException {
        getInitElements();
        homepage.clickCnnArab();
    }

    @Then("I should see United Section dropdown")
    public void i_should_see_United_Section_N() {
        getInitElements();
        homepage.validate("https://edition.cnn.com/?hpt=header_edition-picker");
    }


    @When("I Click Cnn World Front Page")
    public void i_click_cnn_World_Front_page() throws IOException, InterruptedException {
        getInitElements();
        homepage.worldCNNEdition();
    }

    @Then("I should see Cnn World Front Page")
    public void i_should_see_CNN_World_Front_Page() {
        getInitElements();
        homepage.validate("https://www.cnn.com/world");
    }

    @When("I Click Cnn US Front Page")
    public void i_click_cnn_US_Front_page() throws IOException, InterruptedException {
        getInitElements();
        homepage.worldCNNEdition();
    }

    @Then("I should see Cnn US Front Page")
    public void i_should_see_US_World_Front_Page() {
        getInitElements();
        homepage.validate("https://www.cnn.com/world");
    }


}
