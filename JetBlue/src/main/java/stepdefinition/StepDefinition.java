package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.support.PageFactory;

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
    static Homepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at JetBlue Homepage")
    public void i_am_at_JetBlue_Homepage() {
        getInitElements();
    }

    @Given("Select Top Menu of the JetBlue Homepage")
    public void select_Top_Menu_of_the_JetBlue_Homepage() {
        getInitElements();
        homepage.topMenuSet();
    }

    @Then("Selected Link apaeared")
    public void selected_Link_apaeared() {
        getInitElements();
        homepage.validationTopMenu();
    }

    @Given("Select Navigation Menu on JetBlue")
    public void select_Navigation_Menu_on_JetBlue() {
        getInitElements();
        homepage.navigationMenuSet();
    }

    @Then("Selected link from navigation menu showed up")
    public void selected_link_from_navigation_menu_showed_up() {
        getInitElements();
        homepage.validationNavigationMenu();
    }

    @Given("Select Service menu on JetBlue Homepage")
    public void select_Service_menu_on_JetBlue_Homepage() {
        getInitElements();
        homepage.serviceMenuSet();
   }

    @Then("Selected link showed up")
    public void selected_link_showed_up() {
        getInitElements();
        homepage.validationServiceMenu();
    }

    @Given("Select Transport link on JetBlue")
    public void select_Transport_link_on_JetBlue() {
        getInitElements();
        homepage.transportServiceSet();
    }

    @Then("selected transport link showed up")
    public void selected_transport_link_showed_up() {
        getInitElements();
        homepage.validationTransportService();
    }

    @Given("click Quick Service  link on JetBlue")
    public void click_Quick_Service_link_on_JetBlue() {
       getInitElements();
       homepage.quickServiceSet();
    }

    @Then("selected link from Quick Service showed uo")
    public void selected_link_from_Quick_Service_showed_uo() {
        getInitElements();
        homepage.validationQuickService();
    }

    @Given("Click User Access link")
    public void click_User_Access_link() {
        getInitElements();
        homepage.userAccessLInkSet();

    }

    @Then("The selected link page opened")
    public void the_selected_link_page_opened() {
        getInitElements();
        homepage.validationUserAccessLink();

    }

    @Given("click the Radio Button option")
    public void click_the_Radio_Button_option() {
        getInitElements();
        homepage.radioButtonClick();

    }

    @Then("The selected Radio Button showed up")
    public void the_selected_Radio_Button_showed_up() {
        getInitElements();
        homepage.validationOneWayRadio();
    }

    @Given("click the Check Box menu on JetBlue")
    public void click_the_Check_Box_menu_on_JetBlue() {
        getInitElements();
        homepage.checkBoxClick();

    }

    @Then("The check box appeared")
    public void the_check_box_appeared() {
        getInitElements();
        homepage.validationCheckBox();

    }

    @Given("click the link True Blue  on JetBlue Homepage")
    public void click_the_link_True_Blue_on_JetBlue_Homepage() {
        getInitElements();
        homepage.setTrueBlue();

    }

    @Then("The selected link opened")
    public void the_selected_link_opened() {
        getInitElements();
        homepage.validationTrueBlue();

    }

    @Given("Click the link My Trip on Homepage")
    public void click_the_link_My_Trip_on_Homepage() {
        getInitElements();
        homepage.setMyTrip();
    }

    @Then("The selected link showed up")
    public void the_selected_link_showed_up() {
        getInitElements();
        homepage.validationMyTrip();

    }

    @Given("Click the link travel info on Homepage")
    public void click_the_link_travel_info_on_Homepage() {
       getInitElements();
       homepage.setTravelInfo();
    }

    @Then("The selected Travel Info link opened")
    public void the_selected_Travel_Info_link_opened() {
        getInitElements();
        homepage.validationTravelInfo();

    }















}
