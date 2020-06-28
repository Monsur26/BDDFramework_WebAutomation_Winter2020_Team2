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
        setUp(false, "browserstack", "OS X", "High Sierra", "chrome", "83", "https://www.jetblue.com/");
        //setup("https://www.jetblue.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I put my cursor on book select button")
    public void i_put_my_cursor_on_book_select_button() throws InterruptedException {
        getInitElements();
        homepage.bookSelection();
    }

    @When("I click book select button")
    public void i_click_book_select_button() throws InterruptedException {
        getInitElements();
        homepage.bookSelection();
    }

    @Then("it shows me different option")
    public void it_shows_me_different_option() throws InterruptedException {
        getInitElements();
        homepage.bookSelection();
    }
    @Given("I select logIn button")
    public void i_select_logIn_button() throws InterruptedException {
        getInitElements();
        homepage.clickLogIn();
    }

    @When("I click on logIn")
    public void i_click_on_logIn() throws InterruptedException {
        getInitElements();
        homepage.clickLogIn();
    }

    @Then("I redirected to login page")
    public void i_redirected_to_login_page() throws InterruptedException {
       getInitElements();
       homepage.clickLogIn();
    }


}
