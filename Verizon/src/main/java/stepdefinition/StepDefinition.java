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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.verizon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at Verizon Home Page")
    public void i_am_at_Verizon_Home_Page() {
        getInitElements();
    }

    @When("I click on Wireless")
    public void i_click_on_Wireless() {
        getInitElements();
        homepage.verizonWireless();
    }

    @Then("I should see Verizon Wireless Products and Services")
    public void i_should_see_Verizon_Wireless_Products_and_Services() {
        getInitElements();
        homepage.validateverizonwireless("Do it all online.");
    }
    @When("I click on Shop")
    public void i_click_on_Shop() {
        getInitElements();
        homepage.wirelessShop();
    }

    @Then("I should see Wireless Products and Services")
    public void i_should_see_Wireless_Products_and_Services() {
       getInitElements();
       homepage.validatewirelessShop("Phones & Devices");
    }
    @Given("I scroll down to the page")
    public void i_scroll_down_to_the_page() {
       getInitElements();
       homepage.wirelessShopScrollDown();
    }

    @When("I scroll up")
    public void i_scroll_up() {
        getInitElements();
        homepage.wirelessShopScrollUp();
    }

    @Then("I am at top of the page")
    public void i_am_at_top_of_the_page() {
        getInitElements();
        homepage.validatewirelessShopPageTop("Phones & Devices");
    }

    @Given("I click on In Home")
    public void i_click_on_In_Home() {
        getInitElements();
        homepage.verizonInHome();
    }

    @Given("I bring Hover mouse on Shop")
    public void i_bring_Hover_mouse_on_Shop() throws InterruptedException {
        getInitElements();
        homepage.inHomeShopMouseHover();
    }

    @When("I click on Deals")
    public void i_click_on_Deals() {
        getInitElements();
        homepage.inHomeShopDeals();
    }

    @Then("I am should see all In Home Deals")
    public void i_am_should_see_all_In_Home_Deals() {
        getInitElements();
        homepage.validateInHomeShopDeals("Your deals");
    }
    @Given("I click on Internet")
    public void i_click_on_Internet() {
       getInitElements();
       homepage.inHomeInternet();
    }

    @When("I scroll down")
    public void i_scroll_down() {
       getInitElements();
       homepage.inHomeInternetScrollDown();
    }

    @Then("I am should see Internet Order link")
    public void i_am_should_see_Internet_Order_link() {
       getInitElements();
       homepage.validateInHomeInternet("Ready to order?");
    }

    @Given("I enter iPhone {int} Pro in search box")
    public void i_enter_iPhone_Pro_in_search_box(Integer int1) {
       getInitElements();
       homepage.enterKeyWord("iPhone 11 Pro");
    }

    @When("I press ENTER")
    public void i_press_ENTER() {
        getInitElements();
        homepage.PressENTERKey();
    }

    @Then("I should see iPhone {int} Pro")
    public void i_should_see_iPhone_Pro(Integer int1) {
       getInitElements();
       homepage.validateiPhone11Pro("iPhone 11 Pro");
    }
    @When("I click on Phones")
    public void i_click_on_Phones() {
        getInitElements();
        homepage.wirelessPhones();
    }

    @Then("I should see all SmartPhones")
    public void i_should_see_all_SmartPhones() {
        getInitElements();
        homepage.validateWirelessPhones("All Smartphones");
    }

    @Given("I enter Tablet in search box")
    public void i_enter_Tablet_in_search_box() {
        getInitElements();
        homepage.searchTablet();
    }

    @Then("I should see all Tablets")
    public void i_should_see_all_Tablets() {
        getInitElements();
        homepage.validateTablet("");
    }
    @Given("I Hover mouse on Watch TV")
    public void i_Hover_mouse_on_Watch_TV() throws InterruptedException {
        getInitElements();
        homepage.inHomeWatchTVMouseHover();
    }

    @When("I click on Guide")
    public void i_click_on_Guide() {
       getInitElements();
       homepage.inHomeWatchTVGuide();
    }

    @Then("I am should see Watch TV Guide")
    public void i_am_should_see_Watch_TV_Guide() {

        getInitElements();
        homepage.validateInHomeWatchTVGuide("Guide");
    }
    @When("I navigate back")
    public void i_navigate_back() {
      getInitElements();
      homepage.navigateBackToInHome();
    }

    @Then("I am at In Home page")
    public void i_am_at_In_Home_page() {
      getInitElements();
      homepage.validateNavigateBack("https://www.verizon.com/?lid=//global//residential");
    }

}
