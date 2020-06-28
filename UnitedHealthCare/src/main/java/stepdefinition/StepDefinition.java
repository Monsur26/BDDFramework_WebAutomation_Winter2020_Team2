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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.uhc.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at United Health Care HomePage")
    public void i_am_at_United_Health_Care_HomePage() {
    getInitElements();

    }

    @When("I click the insurance button")
    public void i_click_the_insurance_button() {
    homepage.insurance.click();
    }

    @Then("I see the different insurance options")
    public void i_see_the_different_insurance_options() {

    }


    @Given("I am at United Health Care HomePage24")
    public void i_am_at_United_Health_Care_HomePage24() {
    getInitElements();
    }

    @When("I click on the UHC logo")
    public void i_click_on_the_UHC_logo() {
    homepage.searchbar.click();
    }

    @When("I drag it to the search bar")
    public void i_drag_it_to_the_search_bar() {

    }

    @Then("the logo appears on the search bar")
    public void the_logo_appears_on_the_search_bar() {

    }

    @Given("I am at United Health Care HomePage23")
    public void i_am_at_United_Health_Care_HomePage23() {
     getInitElements();
    }

    @When("I click the plan button")
    public void i_click_the_plan_button() {
       homepage.plan.click();
    }

    @Then("I land on plan options page")
    public void i_land_on_plan_options_page() {

    }

    @Given("I am at United Health Care HomePage2")
    public void i_am_at_United_Health_Care_HomePage2() {
    getInitElements();
    }

    @Given("I click insurance Button")
    public void i_click_insurance_Button() {
    homepage.insurance.click();
    }

    @Given("I click medicare Button")
    public void i_click_medicare_Button() {
      homepage.medicare.click();
    }



    @Then("I land on the options offer")
    public void i_land_on_the_options_offer() {

    }


    @Given("I am at United Health Care HomePage13")
    public void i_am_at_United_Health_Care_HomePage13() {
    getInitElements();
    }

    @Given("I click plans button")
    public void i_click_plans_button() {
    homepage.plan.click();
    }

    @When("I click providers option")
    public void i_click_providers_option() {
    homepage.providers.click();
    }

    @Then("I see all the providers")
    public void i_see_all_the_providers() {

    }


    @Given("I am at United Health Care HomePage121")
    public void i_am_at_United_Health_Care_HomePage121() {
      getInitElements();
    }


    @Given("I click on sign in option")
    public void i_click_on_sign_in_option() {
       homepage.signin.click();
    }

    @Then("it takes me to the sign in page")
    public void it_takes_me_to_the_sign_in_page() {

    }


    @Given("I am at United Health Care HomePage22")
    public void i_am_at_United_Health_Care_HomePage22() {
    getInitElements();
    }

    @Given("I click on sign in option1")
    public void i_click_on_sign_in_option1() {
       homepage.signin.click();
    }

    @Then("it takes me to the sign in page2")
    public void it_takes_me_to_the_sign_in_page2() {

    }


    @Then("I click on the UHC login page")
    public void i_click_on_the_UHC_login_page() {
       homepage.login.click();
    }

    @Given("I am at United Health Care HomePage1")
    public void i_am_at_United_Health_Care_HomePage1() {

    }

    @When("I click on search bar")
    public void i_click_on_search_bar() {
       homepage.searchbar.click();
    }
    @Then("I type {string}")
    public void i_type(String string) {
       homepage.searchbar.sendKeys("i need a doctor");
    }


    @Then("I am able to see all the doctors")
    public void i_am_able_to_see_all_the_doctors() {

    }

    @Given("I am at United Health Care HomePage12")
    public void i_am_at_United_Health_Care_HomePage12() {
       getInitElements();
    }

    @When("I drag the homepage logo to search box")
    public void i_drag_the_homepage_logo_to_search_box() {
        homepage.login.click();
    }

    @Then("homepage url shows up in the searchbox")
    public void homepage_url_shows_up_in_the_searchbox() {

    }

    @Given("I am at United Health Care HomePage11")
    public void i_am_at_United_Health_Care_HomePage11() {
     getInitElements();
    }


    @When("I drag and drop explore medicare button to search box")
    public void i_drag_and_drop_explore_medicare_button_to_search_box() {
       homepage.medicare.click();
    }

    @Then("explore medicare button link appears on search box")
    public void explore_medicare_button_link_appears_on_search_box() {

    }
























}

