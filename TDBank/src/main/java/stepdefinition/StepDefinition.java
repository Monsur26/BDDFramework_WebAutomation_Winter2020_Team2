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

    @Given("I am at TDBank homepage")
    public void i_am_at_TDBank_homepage() {
        getInitElements();
    }

    @Given("I click on top menu link")
    public void i_click_on_top_menu_link() {
        getInitElements();
        homepage.topMenuSet();
    }

    @Then("I see the top menu link options")
    public void i_see_the_top_menu_link_options() {
        getInitElements();
        homepage.validateMenuTop();
    }
    @Given("click on navigation menu link")
    public void click_on_navigation_menu_link() {
        getInitElements();
        homepage.navigationMenuSet();
    }
    @Then("Navigation menu link appeared")
    public void navigation_menu_link_appeared() {
        getInitElements();
        homepage.validateNavigation();
    }
    @Given("click on Log In Menu")
    public void click_on_Log_In_Menu() {
        getInitElements();
        homepage.logInMenuSet();
    }
    @Then("Log In menu opened")
    public void log_In_menu_opened() {
        getInitElements();
        homepage.validationLogIn();
    }

    @Given("click on Log In menu")
    public void click_on_Log_In_menu() {
        getInitElements();
        homepage.logInMenuSet();
    }

    @Given("Credit Card option select")
    public void credit_Card_option_select() {
        getInitElements();
        homepage.setCreditCard();
    }

    @Given("Switch to new window")
    public void switch_to_new_window(){
        getInitElements();
        switchToNewWindow();
    }

    @Then("New Window switched on")
    public void new_Window_switched_on() {
        getInitElements();
        homepage.validationNewWindow();
    }
    @Given("write searching item on the Search Button")
    public void write_searching_item_on_the_Search_Button() {
        getInitElements();
        homepage.searchButtonSet("Apply for a credit card online");
    }

    @Then("Searched item or message showed up")
    public void searched_item_or_message_showed_up() {
        getInitElements();
        homepage.validationSearchButton();
    }
    @Given("Select User Access Link")
    public void select_User_Access_Link() {
        getInitElements();
        homepage.userAccessSet();
    }

    @Then("Desired link appeared")
    public void desired_link_appeared() {
        getInitElements();
        homepage.validationUserAccess();
    }
    @Given("Select any Quick Service link")
    public void select_any_Quick_Service_link() {
        getInitElements();
        homepage.quickServiceSet();
    }

    @Then("Selected link showed up")
    public void selected_link_showed_up() {
        getInitElements();
        homepage.validationQuickService();
    }
    @Given("click any link of service menu")
    public void click_any_link_of_service_menu() {
        getInitElements();
        homepage.serviceMenuSet();
    }

    @Then("My selected link showed up")
    public void my_selected_link_showed_up() {
        getInitElements();
        homepage.validationServiceMenu();

    }








}
