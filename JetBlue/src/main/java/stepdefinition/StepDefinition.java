package stepdefinition;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.io.IOException;

public class StepDefinition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.jetblue.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage;
    public static void getInitElements(){homePage= PageFactory.initElements(driver,HomePage.class);}


    @Given("I am at JetBlue Home Page")
    public void i_am_at_cnn_Home_Page() throws IOException {
        getInitElements();
    }

    @And("make it fullscreen")
    public void make_it_full_screen() throws IOException, InterruptedException {
        sleepFor(1);
        driver.manage().window().maximize();
        sleepFor(1);
    }

    @When("I Browse from Africa")
    public void i_browse_from_Africa() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromAfrica();
    }

    @Then("I should see same URL")
    public void i_should_see_lists() {
        homePage.validate("https://www.jetblue.com/");
    }

    @When("I Browse from Asia")
    public void i_browse_from_Asia() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromAsia();
    }

    @When("I Browse from CA")
    public void i_browse_from_CA() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromCA();
    }

    @When("I Browse from Europe")
    public void i_browse_from_EU() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromEurope();
    }

    @When("I Browse from ARAB")
    public void i_browse_from_ARAB() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromArab();
    }

    @When("I Browse from SA")
    public void i_browse_from_SA() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromSA();
    }

    @When("I Browse from NA")
    public void i_browse_from_NA() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromAfrica();
        sleepFor(1);
        homePage.setJBFromNA();
    }

    @When("I Browse from NABuffalo")
    public void i_browse_from_NABuffalo() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromNABuffaloNY();
    }

    @When("I Browse from NADetroit")
    public void i_browse_from_NADetroit() throws IOException, InterruptedException {
        homePage.jbFrom();
        sleepFor(1);
        homePage.JbFromBrowseByRegion();
        sleepFor(1);
        homePage.setJBFromNADetroitMI();
    }

    @When("I browse items from ascending order")
    public void i_browse_from_ascending() throws IOException, InterruptedException {
        getInitElements();
        setUp(true, "", "windows", "", "chrome", "", "http://automationpractice.com/index.php?id_category=5&controller=category");
        driver.manage().window().maximize();
        sleepFor(2);
        Select dropdown = new Select(driver.findElement(By.xpath("//select[@id='selectProductSort']")));
        dropdown.selectByValue("name:asc");
    }

    @Then("I see items from ascending ord")
    public void i_see_from_ascending() throws IOException, InterruptedException {
            homePage.validate("http://automationpractice.com/index.php?id_category=5&controller=category");
        }
    }






