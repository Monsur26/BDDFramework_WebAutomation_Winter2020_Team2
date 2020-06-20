package stepdefinition;

import common.WebAPI;
import home.CNNHomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

import static webelements.HomepageWebElements.*;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.cnn.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static CNNHomePage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,CNNHomePage.class);}

    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() throws InterruptedException {
    getInitElements();
        mouseHoverByXpath(healthWebElement);
        health.click();
        sleepFor(3);
        cleanUp(); }


    @Given("I hover to Health")
    public void i_hover_to_Health1() throws InterruptedException {

    }


    @When("I Click Health")
    public void i_Click_Health1() {
        getInitElements();

    }

    @Then("I read the Health news")
    public void i_read_the_Health_news() {
        getInitElements();

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page2() {
        mouseHoverByXpath(healthWebElement);
        health.click();
        sleepFor(5);
        wellness.click();
        sleepFor(3);
        cleanUp(); }



    @Given("I hover to Health")
    public void i_hover_to_Health() {

    }

    @When("I Click Health")
    public void i_Click_Health() {

    }

    @When("I click Wellness")
    public void i_click_Wellness() {

    }

    @Then("I read the wellness news")
    public void i_read_the_wellness_news() {

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() {
        getInitElements();
        mouseHoverByXpath(editionWebElement);
        edition.click();
        sleepFor(1);
        international.click();
        sleepFor(4);
        cleanUp();
    }

    @Given("I hover to edition")
    public void i_hover_to_edition() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("I Click edition")
    public void i_Click_edition() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("I Click international")
    public void i_Click_international() {

    }

    @Then("I read the international news")
    public void i_read_the_international_news() {

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page4() throws InterruptedException {
        mouseHoverByXpath(hamburgerWebElement);
        hamburger.click();
        sleepFor(1);
        politics.click();
        sleepFor(3);
        cleanUp();
    }

    @Given("I hover to the hamburger icon")
    public void i_hover_to_the_hamburger_icon() {

    }

    @When("I Click the icon")
    public void i_Click_the_icon() {

    }

    @When("I Click politics")
    public void i_Click_politics() {

    }

    @Then("I read the politics news")
    public void i_read_the_politics_news() {

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() throws InterruptedException {
        magnify.click();
        search.sendKeys("COVID");
        button.click();
        sleepFor(3);
        cleanUp();
    }

    @Given("I click the magnify")
    public void i_click_the_magnify1() {

    }
    @When("I enter COVID")
    public void i_enter_COVID() {

    }

    @When("I Click enter")
    public void i_Click_enter1() {

    }

    @Then("I read the COVID news")
    public void i_read_the_COVID_news() {

    }

    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() {
        magnify.click();
        search.sendKeys("Bangladesh");
        button.click();
        sleepFor(1);
        stories.click();
        sleepFor(3);
        cleanUp();
    }

    @Given("I click the magnify")
    public void i_click_the_magnify() {

    }

    @When("I enter Bangladesh")
    public void i_enter_Bangladesh() {

    }

    @When("I Click enter")
    public void i_Click_enter() {

    }

    @Then("I read the Bangladesh news")
    public void i_read_the_Bangladesh_news() {

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() {
        user.click();
        email.sendKeys("anikaislam11@gmail.com");
        sleepFor(2);
        cleanUp();
    }


    @Given("I click on user")
    public void i_click_on_user1() {

    }

    @When("I enter my email")
    public void i_enter_my_email1() {

    }

    @Then("I should see my email")
    public void i_should_see_my_email() {

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() throws InterruptedException {
        user.click();
        email.sendKeys("anikaislam11@gmail.com");
        password.sendKeys("pnt123");
        sleepFor(2);
        cleanUp();
    }

    @Given("I click on user")
    public void i_click_on_user2() {

    }

    @When("I enter my email")
    public void i_enter_my_email2() {

    }

    @Then("I enter my password")
    public void i_enter_my_password2() {

    }
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() throws InterruptedException {
        user.click();
        email.sendKeys("anikaislam11@gmail.com");
        password.sendKeys("pnt123");
        login.click();
        sleepFor(2);
        cleanUp();
    }

    @Given("I click on user")
    public void i_click_on_user() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("I enter my email")
    public void i_enter_my_email() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("I enter my password")
    public void i_enter_my_password() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("I click login")
    public void i_click_login() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() {
        mouseHoverByCSS(entertainmentWebElement);
        entertainment.click();
        sleepFor(2);
        cleanUp();
    }

    @Given("I hover over entertainment")
    public void i_hover_over_entertainment() {

    }

    @When("I click entertainment")
    public void i_click_entertainment() {

    }

    @Then("I should see entertainment")
    public void i_should_see_entertainment() {

    }







}
