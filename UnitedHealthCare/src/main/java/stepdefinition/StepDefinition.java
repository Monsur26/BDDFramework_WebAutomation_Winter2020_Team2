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

    @When("I see the special notice for covid-{int} and I close it.")
    public void i_see_the_special_notice_for_covid_and_I_close_it(Integer int1) {
        getInitElements();
        homepage.setCovidNoticeClose();
    }

    @Then("the notice disappears.")
    public void the_notice_disappears() {
       getInitElements();
       homepage.validateCovidNotice();
    }
    @When("I click searchbox and write search item and hit enter")
    public void i_click_searchbox_and_write_search_item_and_hit_enter() {
        getInitElements();
        homepage.searchBox("Health");
    }

    @Then("search result shows.")
    public void search_result_shows() {
        getInitElements();
        homepage.validateSearchBox();
    }
    @When("I click insurance Button and followed by medicare button")
    public void i_click_insurance_Button_and_followed_by_medicare_button() {
        getInitElements();
        homepage.insuranceButton();
        homepage.medicareButton();
    }

    @Then("I land on medicare options page.")
    public void i_land_on_medicare_options_page() {
        getInitElements();
        homepage.validateInsuranceButtonSearch();
    }
    @Given("I click insurance Button")
    public void i_click_insurance_Button() {
        getInitElements();
        homepage.insuranceButton();
    }

    @Given("I click medicare Button")
    public void i_click_medicare_Button() {
        getInitElements();
        homepage.medicareButton();
    }

    @When("I enter zip code and press enter for offer I am redirected to a new page")
    public void i_enter_zip_code_and_press_enter_for_offer_I_am_redirected_to_a_new_page() {
       getInitElements();
       homepage.medicareZip("11417");
    }

    @Then("I land on the options offer page")
    public void i_land_on_the_options_offer_page() {
        getInitElements();
        homepage.validateMedicareZipSearch();
    }
    @Given("I click signIn Button")
    public void i_click_signIn_Button() {
        getInitElements();
        homepage.setSignInMenu();
    }

    @When("I click on myuhc signIn, I go to new windows and come back to previous window.")
    public void i_click_on_myuhc_signIn_I_go_to_new_windows_and_come_back_to_previous_window() {
        getInitElements();
        homepage.setMyuhc();
    }

    @Then("I am at UHC homepage again.")
    public void i_am_at_UHC_homepage_again() {
        getInitElements();
        homepage.validateSignIn();
    }
    @Given("I click Spanish language link to change language")
    public void i_click_Spanish_language_link_to_change_language() throws InterruptedException {
        getInitElements();
        homepage.setEspaniolLng();
    }

    @Then("The language switches back to English")
    public void the_language_switches_back_to_English() {
        getInitElements();
        homepage.validateLanguage();
    }
    @Given("I get upper menu links list")
    public void i_get_upper_menu_links_list() {
        getInitElements();
        homepage.upperLinks();

    }

    @Then("All the link names appears")
    public void all_the_link_names_appears() {
        getInitElements();
        homepage.validateCovidNotice();
    }
    @When("I click welcome member feature sign in,I go to new window")
    public void i_click_welcome_member_feature_signin_I_go_to_new_window() {
        getInitElements();
        homepage.welcomeMemberSignIn();
    }

    @Then("I am at new window sign in page")
    public void i_am_at_new_window_sign_in_page() {
        getInitElements();
        homepage.validateMemberSignIn();
    }
    @When("I drag the homepage logo to search box")
    public void i_drag_the_homepage_logo_to_search_box() {
        getInitElements();
        homepage.dragUHCLogo();

    }

    @Then("homepage url shows up in the searchbox")
    public void homepage_url_shows_up_in_the_searchbox() {
        getInitElements();
        homepage.validateCovidNotice();
    }
    @When("I drag and drop explore medicare button to search box")
    public void i_drag_and_drop_explore_medicare_button_to_search_box() {
        getInitElements();
        homepage.dragExploreMedicare();
    }

    @Then("explore medicare button link appears on search box")
    public void explore_medicare_button_link_appears_on_search_box() {
        getInitElements();
        homepage.validateExploreMedicare();
    }







}
