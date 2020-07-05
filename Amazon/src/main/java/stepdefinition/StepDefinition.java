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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.amazon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage=PageFactory.initElements(driver,Homepage.class);}


    @Given("I Am At Amazon Homepage")
    public void i_Am_At_Amazon_Homepage() {
        getInitElements();
    }



    @Given("i enter Iphone {int} Pro in the search box")
    public void i_enter_Iphone_Pro_in_the_search_box(Integer int1) {
        getInitElements();
        homepage.enterKeyWord("Iphone 11 Pro");
    }



    @Then("i able to see the result")
    public void i_able_to_see_the_result() {
        getInitElements();
        homepage.validateSearchProduct();
    }
//    @Given("I Am At Amazon Homepage")
//    public void i_Am_At_Amazon_Homepage() {
//    getInitElements();
//}

    @Given("i enter  bowflex Dumbbell Pro in the search box")
    public void i_enter_bowflex_Dumbbell_Pro_in_the_search_box() {
        getInitElements();
        homepage.enterKeyWord("Bowflex Dumbbell");

    }

    @When("when i click the search box")
    public void when_i_Click_the_search_box() {
        getInitElements();
        homepage.clickSearchButton();

    }

    @When("i click the product")
    public void i_click_the_product() {
        getInitElements();
        homepage.clickProduct1();

    }

    @Then("i can see the product")
    public void i_can_see_The_product() {
        getInitElements();
        homepage.validateSearchProduct();
    }
    @When("i click bestseller")
    public void i_click_bestseller() {
        getInitElements();
        homepage.clickbestSeller();
}

    @Then("i should see the result")
    public void i_should_see_the_result() {
        getInitElements();
    homepage.validateSearchProduct();
    }
//    @Given("I Am At Amazon Homepage")
//    public void i_Am_At_Amazon_Homepage() {
//    getInitElements();
//    }



    @When("i enter  Samsung Galaxy S20 Ultra in the search box")
    public void i_enter_Samsung_Galaxy_S20_Ultra_in_the_search_box() {
        getInitElements();
        homepage.enterKeyWord("Samsung Galaxy S20 Ultra");

    }



    @When("when i click the search box")
    public void when_I_click_the_search_box() {
        getInitElements();
                homepage.clickSearchButton();

    }



    @When("i click the product")
    public void i_click_the_Product() {
        getInitElements();
        homepage.SamsungS20();

    }



    @Then("i can see the product")
    public void i_Can_see_the_product() {
        getInitElements();
        homepage.validateSearchProduct();
    }

    @When("i click ride electric bicycle")
    public void i_click_ride_electric_bicycle() {
        getInitElements();
        homepage.rideElectricBicycle();

    }



    @Then("i see the bicycle")
    public void i_see_the_bicycle() {
        getInitElements();
        homepage.validateSearchProduct();
    }

    @When("i enter  lg Oled in the search box")
    public void i_enter_lg_Oled_in_the_search_box() {
        getInitElements();
        homepage.enterKeyWord("Lg Oled");

    }



    @When("when i click the search box")
    public void when_i_click_the_search_Box() {
        getInitElements();
        homepage.clickSearchButton();

    }



    @When("i click the product")
    public void i_click_The_product() {
        getInitElements();
        homepage.lgOled();

    }



    @Then("i can see the product")
    public void i_can_see_the_product() {
        getInitElements();
    homepage.validateSearchProduct();
    }

    @When("i click customer service")
    public void i_click_customer_service() {
        getInitElements();
        homepage.customerService();

    }



    @When("when i click return and refunds")
    public void when_i_click_return_and_refunds() {
        getInitElements();
        homepage.returnAndRefunds();

    }



    @Then("i can see the result")
    public void i_can_see_The_result() {
        getInitElements();
        homepage.validateSearchProduct();
    }

    @When("i click new releases")
    public void i_click_new_releases() {
        getInitElements();
        homepage.newReleases();

    }



    @When("when i click the last of us")
    public void when_i_click_the_last_of_us() {
        getInitElements();
        homepage.theLastOfUs();

    }



    @Then("i can see the result")
    public void i_can_See_the_result() {
        getInitElements();
        homepage.validateSearchProduct();
    }
    @When("i click whole foods")
    public void i_click_whole_foods() {
        getInitElements();
        homepage.wholeFoods();

}



    @When("when i click blackberries")
    public void when_i_click_blackberries() {
        getInitElements();
        homepage.blackBerries();

    }



    @Then("i can see the result")
    public void i_can_see_the_result() {
        getInitElements();
        homepage.validateSearchProduct();
    }

//    @When("i drag and drop the logo")
//    public void i_drag_and_drop_the_logo() throws InterruptedException {
//
//
//    }
//
//
//
//    @Then("i see the result")
//    public void i_see_the_result() throws InterruptedException {
//    homepage.validateSearchProduct();
//    }

}
