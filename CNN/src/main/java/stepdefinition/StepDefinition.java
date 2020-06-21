package stepdefinition;

import common.WebAPI;
import home.CNNHomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.interactions.Actions;
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
    public void i_am_at_CNN_Home_Page1() throws InterruptedException {
        getInitElements();

    }

    @Given("I hover to Health1")
    public void i_hover_to_Health1() throws InterruptedException {
        mouseHoverByXpath(healthWebElement);
    }



    @When("I Click Health1")
    public void i_Click_Health1() {
        getInitElements();
        homepage.clickhealth();
    }

    @Then ("I read the Health news")
    public void i_read_the_Health_news() throws InterruptedException {
        getInitElements();
            sleepFor(3);
            cleanUp(); }

    ////////////////////////////////////////////////////////////////
    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page2() throws InterruptedException {
        getInitElements();
    }

        @Given("I hover to Health")
        public void i_hover_to_Health () {
            getInitElements();
            mouseHoverByXpath(healthWebElement);
        }

        @When("I Click Health")
        public void i_Click_Health () {
            getInitElements();
            homepage.clickhealth();
        }

        @When("I click Wellness")
        public void i_click_Wellness () {
            getInitElements();
            homepage.clickwellness();
        }

        @Then("I read the wellness news")
        public void i_read_the_wellness_news () {

        }
        /////////////////////////////////////////////////////////////////////
        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page3 () throws InterruptedException {
            getInitElements();

        }

        @Given("I hover to edition")
        public void i_hover_to_edition () {
            mouseHoverByXpath(editionWebElement);
        }

        @When("I Click edition")
        public void i_Click_edition () {
            homepage.clickedition();
        }

        @When("I Click international")
        public void i_Click_international () {
            homepage.clickinternational();
        }

        @Then("I read the international news")
        public void i_read_the_international_news () {

        }
        ///////////////////////////////////////////////
        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page4 () throws InterruptedException {

        }

        @Given("I hover to the hamburger icon")
        public void i_hover_to_the_hamburger_icon () {
            mouseHoverByXpath(hamburgerWebElement);
        }

        @When("I Click the icon")
        public void i_Click_the_icon () {
            homepage.clickhamburger();
        }

        @When("I Click politics")
        public void i_Click_politics () {
            homepage.clickpolitics();
        }

        @Then("I read the politics news")
        public void i_read_the_politics_news () {
        }

        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page5 () throws InterruptedException {
            getInitElements();
        }

        @Given("I click the magnify")
        public void i_click_the_magnify1 () {
            homepage.clickmagnify();
        }
        @When("I enter COVID")
        public void i_enter_COVID () {
            homepage.enterKeyWord("COVID");
        }

        @When("I Click enter")
        public void i_Click_enter1 () {
            homepage.clicksearch();
        }

        @Then("I read the COVID news")
        public void i_read_the_COVID_news () {

        }
//////////////////////////////////////////////////
        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page6 () {

        }

        @Given("I click the magnify")
        public void i_click_the_magnify () {
            homepage.clickmagnify();
        }

        @When("I enter Bangladesh")
        public void i_enter_Bangladesh () {
            homepage.enterKeyWord("Bangladesh");
        }

        @When("I Click enter")
        public void i_Click_enter () {
            homepage.clickbutton();
        }

        @Then("I read the Bangladesh news")
        public void i_read_the_Bangladesh_news () {

        }
        //////////////////////////////////////////////////////////
        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page7 () throws InterruptedException {
            getInitElements();

        }


        @Given("I click on user")
        public void i_click_on_user1 () {
            homepage.clickuser();
        }

        @When("I enter my email1")
        public void i_enter_my_email1 () {
            homepage.clickemail();
            homepage.enterKeyWord("anikaislam11@gmail.com");
        }

        @Then("I should see my email")
        public void i_should_see_my_email () {

        }
        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page8 () throws InterruptedException {
            getInitElements();
        }

        @Given("I click on user")
        public void i_click_on_user2 () {
            homepage.clickuser();
        }

        @When("I enter my email2")
        public void i_enter_my_email2 () {
            homepage.clickemail();
            homepage.enterKeyWord("anikaislam11@gmail.com");
        }

        @Then("I enter my password")
        public void i_enter_my_password2 () {
            homepage.password();
            homepage.enterKeyWord("pnt123");
        }
        ///////////////////////////////////////////
        @Given("I am at CNN Home Page9")
        public void i_am_at_CNN_Home_Page9 () throws InterruptedException {
            getInitElements();
        }

        @Given("I click on user")
        public void i_click_on_user () {
            homepage.clickuser();
        }

        @When("I enter my email")
        public void i_enter_my_email () {
            homepage.clickemail();
            homepage.enterKeyWord("anikaislam11@gmail.com");
        }

        @When("I enter my password")
        public void i_enter_my_password () {
            homepage.password();
            homepage.enterKeyWord("pnt123");
        }

        @Then("I click login")
        public void i_click_login () {
            homepage.login();
        }
////////////////////////////////////////////////
        @Given("I am at CNN Home Page")
        public void i_am_at_CNN_Home_Page () {
            getInitElements();
        }

        @Given("I hover over entertainment")
        public void i_hover_over_entertainment () {
            homepage.mouseHoverByCSS(entertainmentWebElement);
        }

        @When("I click entertainment")
        public void i_click_entertainment () {
            homepage.entertainment();
        }

        @Then("I should see entertainment")
        public void i_should_see_entertainment () {

        }


    }
