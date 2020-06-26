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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.cnn.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}


    @Given("I am at CNN Home Page")
    public void i_am_at_CNN_Home_Page() {
        getInitElements();
    }

    @When("I Click on US on CNN submenu")
    public void i_Click_on_US_on_CNN_submenu() {
        getInitElements();
        homepage.cnnUS();
    }

    @Then("I should see CNN US page")
    public void i_should_see_CNN_US_page() {
        getInitElements();
        homepage.validateCNNUS("US");
    }

    @Given("I Click on Edition submenu")
    public void i_Click_on_Edition_submenu() {
        getInitElements();
        homepage.cnnEditionPicker();
    }

    @When("I Click on International")
    public void i_Click_on_International() {
        getInitElements();
        homepage.cnnEditionInternational();
    }

    @Then("I should see CNN World page")
    public void i_should_see_CNN_World_page() {
        getInitElements();
        homepage.validateCNNEditionINT("World");
    }
    @Given("I Click on Menu Button")
    public void i_Click_on_Menu_Button() {
        getInitElements();
        homepage.ClickonSearchMenu();
    }

    @Given("I enter Economy in search box")
    public void i_enter_Economy_in_search_box() {
        getInitElements();
        homepage.enterKeywordInSearchBox();
    }

    @When("I Click on SearchSubmit")
    public void i_Click_on_SearchSubmit() {
       getInitElements();
       homepage.submitSearch();
    }

    @Then("I should see Everything about economy")
    public void i_should_see_Everything_about_economy() {
        getInitElements();
        homepage.validateSearchMenu("Economy");
    }
    @Given("I Click on Business")
    public void i_Click_on_Business() {
        getInitElements();
        homepage.cnnBusiness();
    }

    @When("I scroll down in the page")
    public void i_scroll_down_in_the_page() {
        getInitElements();
        homepage.cnnBusinessScrolldown();
    }

    @Then("I should see bottom of the page")
    public void i_should_see_bottom_of_the_page() {
        getInitElements();
        homepage.validateBusinessPage("FOLLOW CNN BUSINESS");
    }
    @Given("I Click on CNN Entertainment")
    public void i_Click_on_CNN_Entertainment() {
        getInitElements();
        homepage.cnnEntertainment();
    }

    @When("I Click on Top Story")
    public void i_Click_on_Top_Story() {
        getInitElements();
        homepage.cnnEntertainmentTopStory();
    }

    @Then("I am at CNN Entertainment Top Story page")
    public void i_am_at_CNN_Entertainment_Top_Story_page() {
       getInitElements();
       homepage.validateEntertainment("https://www.cnn.com/entertainment/celebrities");
    }
    @When("I Click on Perspectives")
    public void i_Click_on_Perspectives() {
        getInitElements();
        homepage.cnnBusinessPerspectives();
    }

    @Then("I am at CNN Business Perspectives page")
    public void i_am_at_CNN_Business_Perspectives_page() {
       getInitElements();
       homepage.validateBusinessPers("MORE FROM PERSPECTIVES ");
    }
    @Given("I navigate back to Business Page")
    public void i_navigate_back_to_Business_Page() {
        getInitElements();
        homepage.cnnGoBackBusiness();
    }

    @Then("I am at CNN Business Page")
    public void i_am_at_CNN_Business_Page() {
        getInitElements();
        homepage.validateGoBackBusiness("https://www.cnn.com/business");
    }

    @When("I scroll down to the bottom of CNN home page")
    public void i_scroll_down_to_the_bottom_of_CNN_home_page() {
       getInitElements();
       homepage.CNNHomePageScrollDown();
    }

    @Then("I am able to see all topics at the bottom")
    public void i_am_able_to_see_all_topics_at_the_bottom() {
        getInitElements();
        homepage.validateCNNHPScrollDown("FOLLOW CNN");
    }
    @Given("I Click on Politics")
    public void i_Click_on_Politics() {
       getInitElements();
       homepage.cnnPolitics();
    }

    @Given("I Click on {int} Election")
    public void i_Click_on_Election(Integer int1) {
        getInitElements();
        homepage.cnnPoliticsElection();
    }

    @When("I refresh the page")
    public void i_refresh_the_page() {
       getInitElements();
       homepage.cnnPoliticsElectionRefresh();
    }

    @Then("I can see CNN {int} Election page clearly")
    public void i_can_see_CNN_Election_page_clearly(Integer int1) {
        getInitElements();
        homepage.validateCNN2020Election("Election Day is Tuesday, November 3, 2020");
    }
    @Given("I hover mouse on States & Territories")
    public void i_hover_mouse_on_States_Territories() {
       getInitElements();
       homepage.cnnElectionStatesMouseHover();
    }

    @When("I click on Virginia")
    public void i_click_on_Virginia() {
       getInitElements();
       homepage.electionStateVA();
    }

    @Then("I am at CNN {int} Election Virginia state page")
    public void i_am_at_CNN_Election_Virginia_state_page(Integer int1) {
        getInitElements();
        homepage.validateCNN2020ElectionVA("Virginia");
    }



}
