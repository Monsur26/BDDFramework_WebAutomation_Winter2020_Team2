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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.progressive.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at Progressive Home Page")
    public void i_am_at_Progressive_Home_Page() {
        getInitElements();
    }
    @Given("I click on Explore")
    public void i_click_on_Explore() {
        getInitElements();
        homepage.ProgressiveExplore();
    }

    @When("I click on Auto")
    public void i_click_on_Auto() {
       getInitElements();
       homepage.ProgressiveExploreAuto();
    }

    @Then("I am at Car Insurance page")
    public void i_am_at_Car_Insurance_page() {
        getInitElements();
        homepage.validateExploreAuto("Car Insurance");
    }
    @Given("I click on Explore Products")
    public void i_click_on_Explore_Products() {
        getInitElements();
        homepage.ProgressiveExplore();
    }

    @When("I click on Homeowners")
    public void i_click_on_Homeowners() {
        getInitElements();
        homepage.exploreHomeowner();
    }

    @Then("I am at Homeowners Insurance page")
    public void i_am_at_Homeowners_Insurance_page() {
        getInitElements();
        homepage.validateExploreHomeowner("Homeowners Insurance");
    }
    @Given("I hover mouse on EXPLORE HOMEOWNERS")
    public void i_hover_mouse_on_EXPLORE_HOMEOWNERS() {
        getInitElements();
        homepage.exploreHomeownersMouseHover();
    }

    @When("I click on Coverages")
    public void i_click_on_Coverages() {
        getInitElements();
        homepage.exploreHomeownerCoverage();
    }

    @Then("I am at Homeowners Insurance Coverages page")
    public void i_am_at_Homeowners_Insurance_Coverages_page() {
       getInitElements();
       homepage.validateHomeownerCoverage("Homeowners Insurance Coverages");
    }

    @Given("I click on more choices")
    public void i_click_on_more_choices() {
       getInitElements();
       homepage.moreChoices();
    }

    @When("I click on Car Shopping")
    public void i_click_on_Car_Shopping() {
        getInitElements();
        homepage.moreChoicesCarShopping();
    }

    @When("I click on find car")
    public void i_click_on_find_car() {
        getInitElements();
        homepage.moreChoicesCarShoppingFind();
    }

    @Then("I am at Car Shopping page")
    public void i_am_at_Car_Shopping_page() {
        getInitElements();
        homepage.validateMoreChoiceCarShopping("Benefits of the Progressive Car Shopping Service");

    }
    @When("I navigate to home page")
    public void i_navigate_to_home_page() {
        getInitElements();
        homepage.navigateBacktoProgressiveHomePage();
    }

    @Then("I am at Progressive HomePage")
    public void i_am_at_Progressive_HomePage() {

        getInitElements();
        homepage.validateNavigateBackToHomePage("The right protection to keep you moving forward");
    }
    @When("I click on all products")
    public void i_click_on_all_products() {
        getInitElements();
        homepage.exploreAllProducts();
    }

    @Then("I am at Explore All Products page")
    public void i_am_at_Explore_All_Products_page() {
        getInitElements();
        homepage.validateExploreAllProducts("Explore all products");
    }
    @When("I scroll down")
    public void i_scroll_down() {
        getInitElements();
        homepage.exploreAllProductsScrollDown();
    }

    @Then("I am at the bottom of Explore All Products page")
    public void i_am_at_the_bottom_of_Explore_All_Products_page() {
        getInitElements();
        homepage.validateAllProductsScrollDown("THE #1 INSURANCE WEBSITE");
    }
    @Given("I scroll down to the page")
    public void i_scroll_down_to_the_page() {
        getInitElements();
        homepage.exploreAllProductsScrollDown();
    }

    @When("I scroll up to the page")
    public void i_scroll_up_to_the_page() {
        getInitElements();
        homepage.exploreAllProductsScrollUp();
    }

    @Then("I am at the top of Explore All Products page")
    public void i_am_at_the_top_of_Explore_All_Products_page() {
      getInitElements();
      homepage.validateExploreAllProductsScrollDownNUp("Explore all products");
    }
    @When("I click on about us")
    public void i_click_on_about_us() {
      getInitElements();
      homepage.aboutUs();
    }
    @When("I click on Who we are")
    public void i_click_on_Who_we_are() {
        getInitElements();
        homepage.aboutUsWhoWeAre();
    }
    @Then("I am at about us page")
    public void i_am_at_about_us_page() {
        getInitElements();
       homepage.validateAboutUswhoweare("Who we are is who we’ve always been");
    }
    @When("I click on Local Agents")
    public void i_click_on_Local_Agents() {
        getInitElements();
        homepage.aboutUsLocalAgent();
    }

    @Then("I am at Local Agents page")
    public void i_am_at_Local_Agents_page() {
        getInitElements();
        homepage.validateLocalAgents("Local Insurance Agents");
    }
    @Given("I click on Auto and Home")
    public void i_click_on_Auto_and_Home() {
       getInitElements();
       homepage.autoNHome();
    }
    @When("I click on Learn more about bundle")
    public void i_click_on_Learn_more_about_bundle() {
        getInitElements();
        homepage.autoNHomeLearnMore();
    }

}
