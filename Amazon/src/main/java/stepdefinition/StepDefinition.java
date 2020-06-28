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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.amazon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage=PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at amazon homepage")
    public void i_am_at_amazon_homepage() {
        getInitElements();

    }

    @Given("I put some input on amazon search box")
    public void i_put_some_input_on_amazon_search_box() {
        getInitElements();
        homepage.enterKeyWord("soap");
    }

    @When("I click amazon search button")
    public void i_click_amazon_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }

    @Then("search result shows up")
    public void search_result_shows_up() {
        getInitElements();
        homepage.validateSearch();
    }
    @Given("write the desire product's name in search bar")
    public void write_the_desire_product_s_name_in_search_bar() throws InterruptedException {
        getInitElements();
        homepage.selectProduct();
    }

    @When("click the amazon search button")
    public void click_the_amazon_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }
    @When("click on desired product")
    public void click_on_desired_product() {
       getInitElements();
       homepage.clickProduct();
    }

    @Then("desired product appears")
    public void desired_product_appears() {
        getInitElements();
        homepage.validateSearch();
    }
    @Given("write input in search bar")
    public void write_input_in_search_bar() throws InterruptedException {
        getInitElements();
        homepage.clickQty();
    }

    @When("click on the amazon search button")
    public void click_on_the_amazon_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }

    @When("click on the product")
    public void click_on_the_product() {
        getInitElements();
        homepage.clickProduct();
    }
    @When("select desire quantity")
    public void select_desire_quantity() throws InterruptedException {
        getInitElements();
        homepage.clickqty();
    }


        @Then("selected result shows up")
    public void selected_result_shows_up() {
        getInitElements();
        homepage.validateQuantityProduct();

    }


}
