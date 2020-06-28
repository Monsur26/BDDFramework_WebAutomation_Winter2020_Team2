package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {


    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.td.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at the TDBank Home Page")
    public void i_am_at_the_TDBank_Home_Page() {
        getInitElements();
        homepage.services();
        homepage.student();
        cleanUp();
    }
    @Given("I hover to Services")
    public void i_hover_to_Services() {

    }
    @When("I Click Student Banking")
    public void i_Click_Student_Banking() {
    }

    @Then("I am on student banking page")
    public void i_am_on_student_banking_page() {

    }
//////////////////////////////////////////
@Given("I am at the TDBank Home Page2")
public void i_am_at_the_TDBank_Home_Page2() {
        getInitElements();
    homepage.services();
    cleanUp();
}

    @Given("I hover to Services2")
    public void i_hover_to_Services2() {

    }

    @When("I Click on services")
    public void i_Click_on_services() {

    }

    @Then("I see the service options")
    public void i_see_the_service_options() {

    }
///////////////////////////////
@Given("I am at the TDBank Home Page3")
public void i_am_at_the_TDBank_Home_Page3() {
    homepage.products();
}

    @Given("I hover to products")
    public void i_hover_to_products() {

    }

    @When("I click on the drop down")
    public void i_click_on_the_drop_down() {

    }

    @Then("I read the products options")
    public void i_read_the_products_options() {
    }
/////////////////////////
@Given("I am at the TDBank Home Page4")
public void i_am_at_the_TDBank_Home_Page4() {
    Actions a = new Actions(driver);
    homepage.country();
    homepage.canada();
    homepage.help();
    cleanUp();
}

    @Given("I click on country")
    public void i_click_on_country() {

    }

    @When("I click on Canada")
    public void i_click_on_Canada() {

    }

    @When("I Click help")
    public void i_Click_help() {

    }


    @Then("I read the help options")
    public void i_read_the_help_options() {

    }
////////////////////////////////////////////
@Given("I am at the TDBank Home Page5")
public void i_am_at_the_TDBank_Home_Page5() {
    homepage.search();
    homepage.enterKeyWord("debit card");
homepage.enter();
    cleanUp();
}

    @Given("I click the searchbar")
    public void i_click_the_searchbar() {

    }

    @When("I enter debit card")
    public void i_enter_debit_card() {

    }

    @When("I Click enter2")
    public void i_Click_enter2() {

    }

    @Then("I see the debit card options")
    public void i_see_the_debit_card_options() {

    }
    //////////////////////////////////////////////
    @Given("I am at the TDBank Home Page6")
    public void i_am_at_the_TDBank_Home_Page6() {
        Actions a = new Actions(driver);
        homepage.mouseHoverByXpath("country");
        homepage.country();
        homepage.canada();
        cleanUp();
    }

    @Given("I click on the region")
    public void i_click_on_the_region() {
    }
    @When("I click Canada")
    public void i_click_Canada() {
    }

    @Then("I see Canada")
    public void i_see_Canada() {
    }
////////////////////////////////////////////////
@Given("I am at the TDBank Home Page7")
public void i_am_at_the_TDBank_Home_Page7() {
    homepage.login();
    cleanUp();
}
    @Given("I hover to login12")
    public void i_hover_to_login12() {
    }

    @When("I click on login")
    public void i_click_on_login() {
    }


    @Then("I should see login")
    public void i_should_see_login() {
    }
////////////////////////////////////////////////
@Given("I am at the TDBank Home Page8")
public void i_am_at_the_TDBank_Home_Page8() {
    homepage.login();
    cleanUp();
}

    @Given("I hover to sign in")
    public void i_hover_to_sign_in() {

    }

    @When("I click signin")
    public void i_click_signin() {

    }

    @Then("I should see signin")
    public void i_should_see_signin() {

    }
/////////////////////////////////////////
@Given("I am at the TDBank Home Page9")
public void i_am_at_the_TDBank_Home_Page9() {
   homepage.mouseHoverByXpath("giftcard");
    homepage.giftcard();
    cleanUp();
}

    @Given("I hover to login2")
    public void i_hover_to_login2() {

    }

    @When("I click login2")
    public void i_click_login2() {

    }

    @When("I hover to giftcard")
    public void i_hover_to_giftcard() {
    }


    @Then("I click giftcard")
    public void i_click_giftcard() {
    }
///////////////////////////////
    @Given("I am at the TDBank Home Page10")
    public void i_am_at_the_TDBank_Home_Page10() {

        homepage.mouseHoverByXpath("giftcard");
        homepage.giftcard();
        homepage.register();
        cleanUp();
    }

    @Given("I hover to login3")
    public void i_hover_to_login3() {
    }

    @When("I click login")
    public void i_click_login3() {
    }

    @When("I hover to giftcard2")
    public void i_hover_to_giftcard2() {
    }

    @Then("I click giftcard2")
    public void i_click_giftcard2() {
    }


    @Then("I click register")
    public void i_click_register() {
    }





}
