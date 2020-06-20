package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.uhc.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}
    @Given("I am at UHC Home Page")
    public void i_am_at_UHC_Home_Page() {
        getInitElements();
    }
    @Given("I click on Insurance")
    public void i_click_on_Insurance() {
        getInitElements();
        homepage.UHCInsurance();
    }
    @When("I click on Individual and Family Plans")
    public void i_click_on_Individual_and_Family_Plans() {
        getInitElements();
        homepage.UHCInIndividualFamily();
    }
    @Then("I should see All Health Insurance for Individuals and Family")
    public void i_should_see_All_Health_Insurance_for_Individuals_and_Family() {
        getInitElements();
        homepage.validateIndividualNFamily("Health insurance for individuals & families");
    }
    @Given("I click on Member Resources")
    public void i_click_on_Member_Resources() {
        getInitElements();
        homepage.UHCMemberResources();
    }
    @When("I click on Understanding Coverage")
    public void i_click_on_Understanding_Coverage() {
        getInitElements();
        homepage.UHVMReUnderstandIn();
    }
    @Then("I should see coverage of the plan")
    public void i_should_see_coverage_of_the_plan() {
        getInitElements();
        homepage.validateUHCMemberResources("Understand what's covered by your health plan");
    }
    @Given("I enter dental plan in search box")
    public void i_enter_dental_plan_in_search_box() {
       getInitElements();
       homepage.UHCSearch();
    }

    @When("I click on search button")
    public void i_click_on_search_button() {
       getInitElements();
       homepage.clickSearch();
    }
    @When("I click on Value")
    public void i_click_on_Value() {
        getInitElements();
        homepage.validateUHCSearch("Value group dental Insurance plans");
    }

    @Then("I should see all dental plans")
    public void i_should_see_all_dental_plans() {
        getInitElements();
        homepage.validateUHCSearch("Value");
    }
    @Given("I click on Find a Doctor")
    public void i_click_on_Find_a_Doctor() {
        getInitElements();
        homepage.UHCFindADoctor();
    }

    @When("I click on online Doctor")
    public void i_click_on_online_Doctor() {
        getInitElements();
        homepage.UHCFindAOnlineDoctor();
    }
    @Then("I should see all Virtual Doctors")
    public void i_should_see_all_Virtual_Doctors() {
        getInitElements();
        homepage.validateUHCFindDoctor("Virtual Visits");
    }
    @Given("I click on Sign In")
    public void i_click_on_Sign_In() {
        getInitElements();
        homepage.UHCSignIn();
    }
    @And("I click on sign in to myuhc")
    public void i_click_on_sign_in_to_myuhc() {
        getInitElements();
        homepage.UHCSignInMyUHC();
    }
    @When("I am at myuhc home page")
    public void i_am_at_myuhc_home_page() {
       getInitElements();
       homepage.MYUHCSignin();
    }
    @Then("I should see myuhc sign in")
    public void i_should_see_myuhc_sign_in() {
        getInitElements();
        homepage.validateMYUHC("Sign in for a personalized view of your benefits.");
    }
    @Given("I click on Health and Wellness")
    public void i_click_on_Health_and_Wellness() {
        getInitElements();
        homepage.UHCHealthNWellness();
    }
    @Given("I click on Preventive Care")
    public void i_click_on_Preventive_Care() {
        getInitElements();
        homepage.UHCHealthNWellnessPreventiveCare();
    }
    @When("I click on Preventive Care tips")
    public void i_click_on_Preventive_Care_tips() {
       getInitElements();
       homepage.UHCHealthNWellnessPreventiveCareTips();
    }
    @Then("I should see all kind of Tips")
    public void i_should_see_all_kind_of_Tips() {
       getInitElements();
       homepage.validateUHCHealthNWellness("Preventive care tips");
    }
    @Given("I click on For Providers")
    public void i_click_on_For_Providers() {
        getInitElements();
        homepage.UHCForProviders();
    }

    @Given("I am on UHC Providers Page")
    public void i_am_on_UHC_Providers_Page() {
        getInitElements();
        homepage.UHCForProvidersNewWindow();
    }

    @When("I click on New User")
    public void i_click_on_New_User() {
        getInitElements();
        homepage.UHCForProvidersNewUsers();
    }

    @Then("I should see New User Registration")
    public void i_should_see_New_User_Registration() {
        getInitElements();
        homepage.validateProvidersNewUser("New User Registration");
    }
}
