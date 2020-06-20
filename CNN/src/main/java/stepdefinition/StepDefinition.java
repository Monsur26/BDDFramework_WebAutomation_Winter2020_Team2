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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.cnn.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am CNN homepage")
    public void i_am_CNN_homepage() {
        getInitElements();
    }

    @Given("I click menu search generating box")
    public void i_click_menu_search_generating_box() {
        getInitElements();
        homepage.menuBoxGenerating();
    }

    @Then("Menu search box generates")
    public void menu_search_box_generates() {
        getInitElements();
        homepage.validatingCNNLogo();
    }

    @Given("I click to open menu generating box")
    public void i_click_to_open_menu_generating_box() {
        getInitElements();
        homepage.menuBoxGenerating();
    }

    @When("I search for specified item and press enter")
    public void i_search_for_specified_item_and_press_enter() {
        getInitElements();
        homepage.heeadersearchbox("DJT");
    }

    @Then("i get the specified search item")
    public void i_get_the_specified_search_item() {
        getInitElements();
        homepage.validatingCNNLogo();
    }

    @Given("I click US top news and top news of the day")
    public void i_click_US_top_news_and_top_news_of_the_day() {
      getInitElements();
      homepage.USNewsLink();
      homepage.USTopNews();

    }

    @Then("I get the top news of the day")
    public void i_get_the_top_news_of_the_day() {
        getInitElements();
        homepage.validatingCNNLogo();
    }

    @Given("I click video link")
    public void i_click_video_link() {
        getInitElements();
        homepage.videoLink();
    }

    @Given("I click selected video")
    public void i_click_selected_video() {
        getInitElements();
        homepage.videoSelectedLink();
    }

    @Then("selected video starts playing")
    public void selected_video_starts_playing() {
        getInitElements();
        homepage.validatingCNNLogo();
    }

    @Given("I hover mouse over user account")
    public void i_hover_mouse_over_user_account() {
        getInitElements();
        homepage.hoverToUserAcc();
    }

    @Then("user account options show up")
    public void user_account_options_show_up() {
        getInitElements();
        homepage.validatingCNNLogo();
    }

    @Given("I click user account button")
    public void i_click_user_account_button() {
        getInitElements();
        homepage.userACC();
    }

    @When("I input username and password")
    public void i_input_username_and_password() {
        getInitElements();
        homepage.emaillogin("DJT@WH.com");
        homepage.passwordadd("Melania");
    }

    @Then("the info shows up")
    public void the_info_shows_up() {
        getInitElements();
        homepage.validatingCNNLogo();
    }

}
