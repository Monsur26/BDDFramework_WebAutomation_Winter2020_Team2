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
        setUp(false, "browserstack", "OS X", "High Sierra", "chrome", "83", "https://www.amazon.com/");
        // setup("https://www.amazon.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }

    static Homepage homepage;

    public static void getInitElements() {
        homepage = PageFactory.initElements(driver, Homepage.class);
    }

    @Given("I am at amazon homepage")
    public void i_am_at_amazon_homepage() {
        getInitElements();
    }

    @Given("I search for Ball in the search box")
    public void i_search_for_Ball_in_the_search_box() {
        getInitElements();
        homepage.enterKeyWord("Hand Sanitizer");
    }

    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }

    @Then("I should see ball search result")
    public void i_should_see_ball_search_result() {
        getInitElements();
        homepage.validateSearchProduct();
    }

    @When("I Click search button")
    public void i_Click_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }

//    @Given("I Enter Items in search input field")
//    public void i_Enter_Items_in_search_input_field(List<String> items) {
//        getInitElements();
//        homepage.validateSearchProduct(items);
//    }

    @Then("I should see Expected Items")
    public void i_should_see_Expected_Items(io.cucumber.datatable.DataTable dataTable) {
        getInitElements();
    }

    @Given("I search for {string} in the search box")
    public void i_search_for_in_the_search_box(String string) {
        getInitElements();
        homepage.enterKeyWord(string);
    }

    @Then("I should see \"\"ball\"\"")
    public void i_should_see_ball() {

    }

    @Then("I should see \"\"bat\"\"")
    public void i_should_see_bat() {

    }

    @Then("I should see \"\"Cup\"\"")
    public void i_should_see_Cup() {

    }

    @Then("I should see \"\"Mug\"\"")
    public void i_should_see_Mug() {

    }

    @When("then I click on desired search Product")
    public void then_I_click_on_desired_search_Product() {
        getInitElements();
        homepage.clickProduct();
    }

    @Then("desired search product shows up")
    public void desired_search_product_shows_up() {
        getInitElements();
        homepage.validateSearchProductSelect();
    }

    @When("I click quantity and select desired quantity")
    public void i_click_quantity_and_select_desired_quantity() {
        getInitElements();
        homepage.clickQty();
        homepage.doSelectQty();
    }

    @Then("Desired quantity shows up")
    public void desired_quantity_shows_up() {
        getInitElements();
        homepage.validateSearchProductSelectandqty();
    }

    @When("I click on cehckout box")
    public void i_click_on_cehckout_box() {
        getInitElements();
        homepage.clickCheckout();
    }

    @Then("checkout page appears")
    public void checkout_page_appears() {
        getInitElements();
        homepage.validateCheckout();
    }

    @Given("I try to get all the links from homepage top bar on my console")
    public void i_try_to_get_all_the_links_from_homepage_top_bar_on_my_console() {
        getInitElements();
        homepage.findingLinksHomePage();
    }

    @Then("the links names appears on console.")
    public void the_links_names_appears_on_console() {
        getInitElements();
        homepage.validateFindingLinks();
    }

    @Given("I hover mouse over accounts button")
    public void i_hover_mouse_over_accounts_button() {
        getInitElements();
        homepage.accountsMenuHover();
    }

    @Then("the hover menu shows up")
    public void the_hover_menu_shows_up() {
        getInitElements();
        homepage.validateMenuHover();
    }

    @Given("select Drop the menu and select value by index")
    public void select_Drop_the_menu_and_select_value_by_index() {
        getInitElements();
        homepage.dropdownMenu(0);
    }

    @Then("the desired result shows up on menu")
    public void the_desired_result_shows_up_on_menu() {
        getInitElements();
        homepage.validateDropdownItemSelect();
    }

    @Given("I hover mouse over language and select espaniol radio button")
    public void i_hover_mouse_over_language_and_select_espaniol_radio_button() {
        getInitElements();
        implicitWait(5);
        homepage.languageMouseHover();
        homepage.espaniolRadioButton();
    }

    @Then("the language changes")
    public void the_language_changes() {
        getInitElements();
        homepage.validateLanguageSelect();
    }

    @Given("I click menu options")
    public void i_click_menu_options() {
        getInitElements();
        homepage.menuOptions();
    }

    @Then("menu options shows up")
    public void menu_options_shows_up() {
        getInitElements();
        homepage.validateMenuOptionsButton();
    }


}

