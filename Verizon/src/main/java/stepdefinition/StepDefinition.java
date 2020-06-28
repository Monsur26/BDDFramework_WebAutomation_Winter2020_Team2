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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.verizon.com/?lid=//global//residential");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("Verizon Homepage top menu select")
    public void verizon_Homepage_top_menu_select() {
        getInitElements();
        homepage.setTopMenuBusiness();
    }

    @Then("Selected Menu such as Business menu showed up")
    public void selected_Menu_such_as_Business_menu_showed_up() {
        getInitElements();
        homepage.validationTopMenu();

    }

    @Given("click on the link named My Verizon")
    public void click_on_the_link_named_My_Verizon() {
        getInitElements();
        homepage.setMyVerizon();
    }

    @Then("The chosen option showed up by mouse hover")
    public void the_chosen_option_showed_up_by_mouse_hover() {
        getInitElements();
        homepage.validationMyVerizon();
    }
    @Given("click on My Verizon Link")
    public void click_on_My_Verizon_Link() {
        getInitElements();
        homepage.setMyVerizon();
    }

    @When("Select the link Moving Button")
    public void select_the_link_Moving_Button() {
        getInitElements();
        homepage.setMovingButton();
    }

    @Then("Desired link appeared")
    public void desired_link_appeared() {
        getInitElements();
        homepage.validationMovingButton();
    }

    @Given("click the search bar on verizon and type something on it")
    public void click_the_search_bar_on_verizon_and_type_something_on_it() {
        getInitElements();
        homepage.setSearchButton("Fastest Internet");
    }

    @Then("The desired messsage or link showed up")
    public void the_desired_messsage_or_link_showed_up() {
        getInitElements();
        homepage.validationSearchButton();
    }
    @Given("at first select Search Button")
    public void at_first_select_Search_Button() {
        getInitElements();
        homepage.setSearchButton("Fastest Internet");
    }

    @When("select YES then NO radio button")
    public void select_YES_then_NO_radio_button() {
        getInitElements();
        homepage.setRadioButtonYes();
        homepage.setRadioButtonNo();
    }

    @Then("Desired operation done in Homepage")
    public void desired_operation_done_in_Homepage() {
        getInitElements();
        homepage.validationRadioButton();
    }
    @Given("At first select Search Button and type desire item or message")
    public void at_first_select_Search_Button_and_type_desire_item_or_message(){
        getInitElements();
        homepage.setSearchButton("Fastest Internet");
        implicitWaitTime(5);
    }

    @When("desired option appeared then choose option through Drop Down process")
    public void desired_option_appeared_then_choose_option_through_Drop_Down_process() {
        getInitElements();
        homepage.setSelectedOptDropDown();
    }

    @Then("operation happened in homepage")
    public void operation_happened_in_homepage() {
        getInitElements();
        homepage.validationDropDown();
    }
    @Given("select sign In button in Homepage")
    public void select_sign_In_button_in_Homepage() {
        getInitElements();
        homepage.setSignInButton();
    }

    @Then("operation done in Homepage")
    public void operation_done_in_Homepage() {
        getInitElements();
        homepage.validationSignIn();
    }
    @Given("At first select Sign In button through mouse hover")
    public void at_first_select_Sign_In_button_through_mouse_hover() {
        getInitElements();
        homepage.setSignInButton();
    }

    @Given("select the chosen option")
    public void select_the_chosen_option() {
        getInitElements();
        homepage.setRegisterButton();
    }

    @Then("Finally the selected option showed up in Homepage")
    public void finally_the_selected_option_showed_up_in_Homepage() {
        getInitElements();
        homepage.validationRegisterButton();
    }
    @Given("click the Locate Button on the top of the homepage")
    public void click_the_Locate_Button_on_the_top_of_the_homepage() {
        getInitElements();
        homepage.setLocateButton();
    }

    @Then("Locate Button Appeared")
    public void locate_Button_Appeared() {
        getInitElements();
        homepage.validationLocateButton();
    }
    @Given("Select the Locate Button top corner of the Homepage")
    public void select_the_Locate_Button_top_corner_of_the_Homepage() {
       getInitElements();
       homepage.setLocateButton();
    }

    @When("Sign In option appeared")
    public void sign_In_option_appeared() {
       getInitElements();
       homepage.setLocateSignIn();
    }

    @Then("Finally Sign In option successfully done")
    public void finally_Sign_In_option_successfully_done() {
        getInitElements();
        homepage.validationLocateSignIn();
    }

    @Given("click the search bar on verizon and type {string} on it")
    public void click_the_search_bar_on_verizon_and_type_on_it(String string) {
        getInitElements();
        homepage.setSearchButton(string);

    }

    @Then("I get \"\"Wireless\"\"")
    public void i_get_Wireless() {

    }

    @Then("I get \"\"Modem\"\"")
    public void i_get_Modem() {

    }

    @Then("I get \"\"Router\"\"")
    public void i_get_Router() {
    }













}
