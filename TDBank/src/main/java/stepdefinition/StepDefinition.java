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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.td.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at TD Bank Home Page")
    public void i_am_at_TD_Bank_Home_Page() {
        getInitElements();
    }

    @Given("I click region select button")
    public void i_click_region_select_button() {
        getInitElements();
        homepage.region();
    }

    @When("I click region as Canada")
    public void i_click_region_as_Canada() {
        getInitElements();
        homepage.regionCanada();
    }

    @Then("the homepage changes for Canada region")
    public void the_homepage_changes_for_Canada_region() {
        getInitElements();
        homepage.validateRegion();
    }

    @Given("I select login drop down menu")
    public void i_select_login_drop_down_menu() {
       getInitElements();
       homepage.loginDD();
    }

    @When("I click online Banking Link")
    public void i_click_online_Banking_Link() {
        getInitElements();
        homepage.onlineBankingLink();
    }

    @Then("I am redirected to online banking page")
    public void i_am_redirected_to_online_banking_page() {
        getInitElements();
        homepage.validateLoginDD();
    }

    @Given("i select login dropdown and select online banking")
    public void i_select_login_dropdown_and_select_online_banking() {
       getInitElements();
       homepage.loginDD();
       homepage.onlineBankingLink();
    }

    @When("I switch to new window for online Banking")
    public void i_switch_to_new_window_for_online_Banking() {
        getInitElements();
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }
    }

    @Then("I will be at new window")
    public void i_will_be_at_new_window() {
        getInitElements();
        homepage.validateTDLogo();
    }

    @Given("I select dropdown and click online banking")
    public void i_select_dropdown_and_click_online_banking() {
        getInitElements();
        homepage.loginDD();
        homepage.onlineBankingLink();

    }

    @Given("I switch to new Window and redirect to previous window")
    public void i_switch_to_new_Window_and_redirect_to_previous_window() {
        getInitElements();
        String winHandleBefore = driver.getWindowHandle();
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }
        driver.switchTo().window(winHandleBefore);

    }

    @Then("I am at homepage again")
    public void i_am_at_homepage_again() {
        getInitElements();
        homepage.validateLoginDD();
    }

    @Given("I hover over products drop down")
    public void i_hover_over_products_drop_down() {
        getInitElements();
        homepage.proDD();
    }

    @When("I select CD's link")
    public void i_select_CD_s_link() {
        getInitElements();
        homepage.CDs();
    }

    @Then("I am at CD's link page")
    public void i_am_at_CD_s_link_page() {
        getInitElements();
        homepage.validateTDLogo();
    }

    @Given("I click commercial link")
    public void i_click_commercial_link() {
        getInitElements();
        homepage.commercialLInk();
    }

    @When("I hover over Industries drop down")
    public void i_hover_over_Industries_drop_down() {
       getInitElements();
       homepage.industriesDD();
    }

    @Then("Industries drop down menu shows")
    public void industries_drop_down_menu_shows() {
        getInitElements();
        homepage.validateIndustriesDD();
    }

    @Given("I click ask now Box and enter input")
    public void i_click_ask_now_Box_and_enter_input() {
        getInitElements();
        homepage.questionsSearchBox("ABCD");
    }

    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
        homepage.askButton();

    }

    @Then("the query page shows up")
    public void the_query_page_shows_up() {
        getInitElements();
        homepage.validateAskNOw();
    }

    @Given("I click right arrow slide twice")
    public void i_click_right_arrow_slide_twice() {
        getInitElements();
        homepage.setRightArrowSlide();
        homepage.setRightArrowSlide();

    }

    @When("I click left arrow slide twice")
    public void i_click_left_arrow_slide_twice() {
        getInitElements();
        homepage.setLeftArrowSlide();
        homepage.setLeftArrowSlide();
    }

    @Then("The original position comes back")
    public void the_original_position_comes_back() {
        getInitElements();
        homepage.validateTDLogo();
    }

    @Given("I click popular questions and answers")
    public void i_click_popular_questions_and_answers() {
        getInitElements();
        homepage.popularQA();
    }

    @When("I click opening bank account link")
    public void i_click_opening_bank_account_link() {
        getInitElements();
        homepage.openingBankAccQuestion();
    }

    @Then("bank account link page shows up")
    public void bank_account_link_page_shows_up() {
        getInitElements();
        homepage.validateTDLogo();
    }

    @Given("I hover over login dropdown and select online banking")
    public void i_hover_over_login_dropdown_and_select_online_banking() {
        getInitElements();
        homepage.loginDD();
        homepage.onlineBankingLink();
    }

    @When("I switch to new window")
    public void i_switch_to_new_window() {
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }

    }

    @When("I input username and password and remember me checkbox")
    public void i_input_username_and_password_and_remember_me_checkbox() {
       getInitElements();
       homepage.userName("DD");
       homepage.password("DD");
       homepage.rememberChkBox();
    }

    @When("I click apply")
    public void i_click_apply() {
        getInitElements();
        homepage.loginButton();
    }

    @Then("The error massage shows up for negative testing")
    public void the_error_massage_shows_up_for_negative_testing() {
        getInitElements();
        homepage.validateTDLogo();
    }

}
