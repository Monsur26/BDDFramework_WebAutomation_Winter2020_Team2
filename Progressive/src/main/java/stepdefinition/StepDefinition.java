package stepdefinition;

import common.WebAPI;
import home.Progressive_Homepage;
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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.progressive.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Progressive_Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver, Progressive_Homepage.class);}

    @Given("I click on auto insurance")
    public void i_click_on_auto_insurance() {
        getInitElements();
        homepage.clickauto();
        homepage.clickzip();
        homepage.zip.sendKeys("10472");
        homepage.clickquote();
        }

        @When("I Enter my zipcode search input field")
        public void i_Enter_my_zipcode_search_input_field () {

        }

        @Then("I click on submit button")
        public void i_click_on_submit_button () {

        }
////////////////////////////////////////////////////////////////////////////////
        @Given("I click on explore feature")
        public void i_click_on_explore_feature () {
            getInitElements();
            homepage.clickexplore();
            homepage.clicksave();
        }

        @When("I Click on save button")
        public void i_Click_on_save_button () {

        }

        @Then("I should see all the saving features")
        public void i_should_see_all_the_saving_features () {

        }
///////////////////////////////////////////////////////////////////////
        @Given("I see a popup")
        public void i_see_a_popup () {
        getInitElements();
        homepage.clickpop();

        }

        @When("I Click X button on the popup")
        public void i_Click_X_button_on_the_popup () {

        }

        @Then("popup disappears")
        public void popup_disappears () {

        }
/////////////////////////////////////////////////////////////////////
        @Given("I click login123")
        public void i_click_login123 () {
            getInitElements();
            homepage.clicklog();
            homepage.user.click();
           homepage.user.sendKeys("anika11");

        }

        @When("I click on email field entry111")
        public void i_click_on_email_field_entry111 () {

        }

        @Then("I enter my email address1212")
        public void i_enter_my_email_address1212 () {

        }
////////////////////////////////////////////////////////////////////

        @Given("I click login1")
        public void i_click_login1 () {
            getInitElements();
            homepage.clicklog();
            homepage.user.click();
            homepage.user.sendKeys("anika11");
            homepage.pass.click();
            homepage.pass.sendKeys("pnt1234");
        }

        @When("I click on email field entry12")
        public void i_click_on_email_field_entry12 () {

        }

        @Then("I enter my email address12")
        public void i_enter_my_email_address12 () {

        }

        @Then("I enter my password1")
        public void i_enter_my_password1 () {

        }
///////////////////////////////////////////////////////////////////////
        @Given("I click login2")
        public void i_click_login2 () {
            getInitElements();
            homepage.clicklog();
            homepage.user.click();
            homepage.user.sendKeys("anika11");
            homepage.pass.click();
            homepage.pass.sendKeys("pnt1234");
            homepage.check.click();
        }

        @When("I click on email field entry2")
        public void i_click_on_email_field_entry2 () {

        }

        @Then("I enter my email address2")
        public void i_enter_my_email_address2 () {

        }

        @Then("I enter my password2")
        public void i_enter_my_password2 () {

        }

        @Then("I click the checkbox2")
        public void i_click_the_checkbox2 () {

        }
//////////////////////////////////////////////////////////////////////////////////////

        @Given("I click login3")
        public void i_click_login3 () {
            getInitElements();
            homepage.clicklog();
            homepage.user.click();
            homepage.user.sendKeys("anika11");
            homepage.pass.click();
            homepage.pass.sendKeys("pnt1234");
            homepage.check.click();
            homepage.submit.click();
        }

        @When("I click on email field entry")
        public void i_click_on_email_field_entry () {

        }

        @Then("I enter my email address")
        public void i_enter_my_email_address () {

        }

        @Then("I enter my password")
        public void i_enter_my_password () {

        }

        @When("I click the checkbox")
        public void i_click_the_checkbox () {

        }

        @Then("I clickt he submit button")
        public void i_clickt_he_submit_button () {

        }
////////////////////////////////////////////////////////////////////////

        @Given("I click on the call logo")
        public void i_click_on_the_call_logo () {
            getInitElements();
            homepage.clickboat();
            homepage.clickzb();
        }

        @Then("I should see the call feature")
        public void i_should_see_the_call_feature () {

        }
/////////////////////////////////////////////////////////////////////

        @Given("I click on the boat insurance icon3")
        public void i_click_on_the_boat_insurance_icon3 () {

        }

        @When("I Click the input field3")
        public void i_Click_the_input_field3 () {

        }

        @Then("I type my zipcode3")
        public void i_type_my_zipcode3 () {

        }
//////////////////////////////////////////////////////////////

        @Given("I click on the boat insurance icon")
        public void i_click_on_the_boat_insurance_icon () {
            getInitElements();
          homepage.clickauto();
          homepage.clickzip();
          homepage.clickquote();
        }

        @When("I Click the input field")
        public void i_Click_the_input_field () {

        }

        @Then("I type my zipcode")
        public void i_type_my_zipcode () {

        }


    }
