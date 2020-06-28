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
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.td.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at TDBank Home page")
    public void i_am_at_TDBank_Home_page() {
        getInitElements();
    }



    @Given("I Click on Login Button")
    public void i_Click_on_Login_Button() throws InterruptedException {
        getInitElements();
        homepage.clickLoginButton();
    }

    @Then("I should see Login Button")
    public void i_should_see_Login_Button() {
        getInitElements();
    }

    @Given("I Click on Small Business")
    public void i_Click_on_Small_Business() throws InterruptedException {
        getInitElements();
        homepage.clickSmallBusiness();
    }

    @Then("I should see Small Business")
    public void i_should_see_Small_Business() {
        getInitElements();
    }

    @Given("I Click on Investing")
    public void i_Click_on_Investing() {
        getInitElements();
        homepage.clickInvesting();
    }

    @Then("I should see Investing")
    public void i_should_see_Investing() {
        getInitElements();
    }

    @Given("I Click on Find Us")
    public void i_Click_on_Find_Us() throws InterruptedException {
        getInitElements();
        homepage.clickFindUs();
    }

    @Then("I should see Find Us")
    public void i_should_see_Find_Us() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("I Click on Search")
    public void i_Click_on_Search() {
        getInitElements();
        homepage.clickSearch();
    }

    @Then("I should see Search")
    public void i_should_see_Search() {
        getInitElements();
    }

    @Given("I Click on searchBox")
    public void i_Click_on_searchBox() {
       getInitElements();
       homepage.eneterKeyWords("Statement");
    }

    @Then("I should see searchBox")
    public void i_should_see_searchBox() {
        getInitElements();
    }

    @Given("I Click on Flag")
    public void i_Click_on_Flag() {
        getInitElements();
        homepage.clickFlag();
    }

    @Then("I should see Flag")
    public void i_should_see_Flag() {
       getInitElements();
    }

    @Given("I Click on Help")
    public void i_Click_on_Help() throws InterruptedException {
        getInitElements();
        homepage.clickHelp();
    }

    @Then("I should see Help")
    public void i_should_see_Help() {
        getInitElements();
    }

    @Given("I Click on searchBox  Element")
    public void i_Click_on_searchBox_Element() throws InterruptedException {
        getInitElements();
        homepage.searchBoxElement();
    }

    @Then("I should see searchBox Element")
    public void i_should_see_searchBox_Element() {
        getInitElements();
    }
    @Given("I am at TDBank Home Page")
    public void i_am_at_TDBank_Home_Page() {
        getInitElements();
    }

    @Given("I mouseHover on Services in Menu Bar")
    public void i_mouseHover_on_Services_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Services")
    public void i_mouseHover_on_Services() throws InterruptedException {
       getInitElements();
       homepage.mouseHoverServices();
    }

    @Then("I should see mouseHover on Services")
    public void i_should_see_mouseHover_on_Services() {
        getInitElements();
    }

    @Given("I mouseHover on Product in Menu Bar")
    public void i_mouseHover_on_Product_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Product")
    public void i_mouseHover_on_Product() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverProduct();
    }

    @Then("I should see mouseHover on Product")
    public void i_should_see_mouseHover_on_Product() {
        getInitElements();
    }

    @Given("I mouseHover on LogIn in Menu Bar")
    public void i_mouseHover_on_LogIn_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on LogIn")
    public void i_mouseHover_on_LogIn() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverLogIn();
    }

    @Then("I should see mouseHover on LogIn")
    public void i_should_see_mouseHover_on_LogIn() {
        getInitElements();
    }




    @Given("I mouseHover on Search in Menu Bar")
    public void i_mouseHover_on_Search_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Search")
    public void i_mouseHover_on_Search() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverSearch();
    }

    @Then("I should see mouseHover on Search")
    public void i_should_see_mouseHover_on_Search() {
        getInitElements();
    }




    @Given("I mouseHover on Learn More in Menu Bar")
    public void i_mouseHover_on_Learn_More_in_Menu_Bar() {
        getInitElements();
    }

    @When("I mouseHover on Learn More")
    public void i_mouseHover_on_Learn_More() throws InterruptedException {
        getInitElements();
        homepage.mouseHoverLearnMore();
    }

    @Then("I should see mouseHover on Learn More")
    public void i_should_see_mouseHover_on_Learn_More() {
       getInitElements();
    }





}
