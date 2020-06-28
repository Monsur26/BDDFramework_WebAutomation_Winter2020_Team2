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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.verizon.com/?lid=//global//residential");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }

    static Homepage homepage;

    public static void getInitElements() {
        homepage = PageFactory.initElements(driver, Homepage.class);
    }

    @Given("i am at verizon homepage")
    public void i_am_at_verizon_homepage() {
        getInitElements();
    }

    @Given("i hover over shop menu")
    public void i_hover_over_shop_menu() {
        getInitElements();
        homepage.shopsHover();
    }

    @When("I click on interlinks")
    public void i_click_on_interlinks() {
        getInitElements();
        homepage.internetLinkClick();
    }

    @Then("internet link page show up")
    public void internet_link_page_show_up() {
        getInitElements();
        homepage.validateHoverShops();
    }

    @Given("hover over my verizon menu")
    public void hover_over_my_verizon_menu() {
        getInitElements();
        homepage.myVerizon();
    }

    @When("I click profile link")
    public void i_click_profile_link() {
        getInitElements();
        homepage.profileLink();
    }

    @Then("profile link page shows up")
    public void profile_link_page_shows_up() {
        getInitElements();
        homepage.validateMyVerizon();
    }

    @Given("I click for language change to Spanish")
    public void i_click_for_language_change_to_Spanish() {
        getInitElements();
        homepage.EspaniolLanguageClick();
    }

    @Then("the language changes")
    public void the_language_changes() {
        getInitElements();
        homepage.validateLanguageSwitch();
    }

    @Given("I hover over watch TV menu")
    public void i_hover_over_watch_TV_menu() {
        getInitElements();
        homepage.watchTVHover();
    }

    @When("I select guide line link")
    public void i_select_guide_line_link() {
        getInitElements();
        homepage.guideLinkClick();
    }

    @Then("guideline link page shows up")
    public void guideline_link_page_shows_up() {
        getInitElements();
        homepage.validateWatchTV();
    }

    @Given("I search for specific item")
    public void i_search_for_specific_item() {
        getInitElements();
        homepage.searchBarItem("wireless");
    }

    @Then("search result shows up")
    public void search_result_shows_up() {
        getInitElements();
        homepage.validateSearchingItem();
    }

    @Given("I scroll down homepage")
    public void i_scroll_down_homepage() {
        getInitElements();
        homepage.scrollingDownHomePage();
    }

    @Then("the bottom of the page shows")
    public void the_bottom_of_the_page_shows() {
        getInitElements();
        homepage.validateScrollingDown();
    }

    @Given("I click on the facebook page link on bottom")
    public void i_click_on_the_facebook_page_link_on_bottom() {
        getInitElements();
        homepage.FacebookPage();
    }

    @Then("Facebook page of verizon shows up")
    public void facebook_page_of_verizon_shows_up() {
        getInitElements();
        homepage.validateFBPage();
    }

    @Given("I click the store select link on the bottom")
    public void i_click_the_store_select_link_on_the_bottom() {
        getInitElements();
        homepage.storeLocationLink();
    }

    @When("I select state from drop down menu and click submit button")
    public void i_select_state_from_drop_down_menu_and_click_submit_button() {
        getInitElements();
        homepage.selectStateDD();
        homepage.selectStateSubmitButton();
    }

    @Then("desired stores on state shows up")
    public void desired_stores_on_state_shows_up() {
        getInitElements();
        homepage.validateStoreSelect();
    }

    @Given("I go to sign-in hover menu")
    public void i_go_to_sign_in_hover_menu() {
        getInitElements();
        homepage.signInHover();
    }

    @When("I registration link")
    public void i_registration_link() {
        getInitElements();
        homepage.registerLinkClick();
    }

    @When("I select identity drop down menu")
    public void i_select_identity_drop_down_menu() {
        getInitElements();
        homepage.identityDD();
    }

    @When("I select user id and password generating box")
    public void i_select_user_id_and_password_generating_box() {
        getInitElements();
        homepage.userIDPassGeneratingBoxClick();
    }

    @Then("user id and password input box appears")
    public void user_id_and_password_input_box_appears() {
        getInitElements();
        homepage.validateGenerateSignIN();
    }

    @When("I input username and password")
    public void i_input_username_and_password() {
        getInitElements();
        homepage.username("user");
        homepage.password("password");
    }

    @When("I click submit button")
    public void i_click_submit_button() {
        getInitElements();
        homepage.loginButtonClick();
    }

    @Then("submission error massage shows up for negative info")
    public void submission_error_massage_shows_up_for_negative_info() {
        getInitElements();
        homepage.validateCompleteSignin();
    }


}
