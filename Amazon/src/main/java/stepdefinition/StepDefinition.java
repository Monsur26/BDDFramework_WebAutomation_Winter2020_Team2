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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.amazon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homepage;
    public static void getInitElements(){homepage=PageFactory.initElements(driver,Homepage.class);}

    @Given("I am at Amazon Home Page")
    public void i_am_at_Amazon_Home_Page() {
        getInitElements();
    }
    @When("I clicked on Today's Deals")
    public void i_clicked_on_Today_s_Deals() {
       getInitElements();
       homepage.AmazonTodaysDeal();
    }
    @Then("I see all products on Today's Deals")
    public void i_see_all_products_on_Today_s_Deals() {
       getInitElements();
       homepage.validateTodaysDeals("Today's Deals");
    }
    @Given("I Enter Hand Gloves in search input field")
    public void i_Enter_Hand_Gloves_in_search_input_field() {
        getInitElements();
        homepage.enterKeyWord("Hand Gloves");
    }
    @When("I Click on search button")
    public void i_Click_on_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }
    @Then("I should see Hand Gloves")
    public void i_should_see_Hand_Gloves() {
        getInitElements();
        homepage.validateSearchProduct("\"Hand Gloves\"");
    }
    @Given("I am on Amazon Home Page")
    public void i_am_on_Amazon_Home_Page() { getInitElements(); }
    @When("I click on New Releases Link")
    public void i_click_on_New_Releases_Link() {
        getInitElements();
        homepage.AmazonNewReleases();
    }
    @Then("I should see all products on New Releases Product")
    public void i_should_see_all_products_on_New_Releases_Product() {
        getInitElements();
        homepage.validateNewReleasesProduct("Amazon Hot New Releases");
    }
    @When("I click on Electronics")
    public void i_click_on_Electronics() {
        getInitElements();
        homepage.AmazonNewReleasedElectronics();
    }

    @Then("I should see all New Released Electronics")
    public void i_should_see_all_New_Released_Electronics() {
        getInitElements();
        homepage.validateNewReleasesElectronics("New Releases in Electronics");
    }
//
//    @Given("I am on Amazon Home Page")
//    public void i_am_on_Amazon_Home_Page() {
//        getInitElements();
//    }

    @When("I click on Find a Gift Link")
    public void i_click_on_Find_a_Gift_Link() {
        getInitElements();
        homepage.AmazonFindaGift();
    }
    @Then("I should see all products on Find a Gift")
    public void i_should_see_all_products_on_Find_a_Gift() {
        getInitElements();
        homepage.validateFindaGift("Gifts for Everyone");
    }
    @When("I click on Best Sellers Link")
    public void i_click_on_Best_Sellers_Link() {
      getInitElements();
      homepage.AmazonBestSellers();
    }
    @Then("I should see all Best Sellers Products")
    public void i_should_see_all_Best_Sellers_Products() {
       getInitElements();
       homepage.validateBestSellers("Amazon Best Sellers");
    }
    @When("I click on Books")
    public void i_click_on_Books() {
        getInitElements();
       homepage.AmazonBestSellerBooks();
    }
    @Then("I should see all Best Sellers Books")
    public void i_should_see_all_Best_Sellers_Books() {
        getInitElements();
        homepage.validateBestSellersBooks("Best Sellers in Books");
    }
    @Given("I Enter Disposable Face Mask in search input field")
    public void i_Enter_Disposable_Face_Mask_in_search_input_field() {
    getInitElements();
    homepage.enterKeyWord("Disposable Face Mask");
    }
    @Then("I select Modenna Face mask")
    public void i_select_Modenna_Face_mask() {
        getInitElements();
        homepage.clickProduct();
    }
    @When("I add in cart")
    public void i_add_in_cart() {
        getInitElements();
        homepage.clickAddToCart();
    }
    @Then("I should see Face mask in cart")
    public void i_should_see_Face_mask_in_cart() {
      getInitElements();
      homepage.validateMaskinCart("Added to Cart");
    }
    @When("I bring mouse on Accounts $ Lists")
    public void i_bring_mouse_on_Accounts_$_Lists() {
        getInitElements();
        homepage.AmazonAccList();
    }

    @When("I click on Sign in button")
    public void i_click_on_Sign_in_button() throws InterruptedException {
      getInitElements();
      homepage.AmazonSignIn();
    }
    @Then("I should see Sign-in page")
    public void i_should_see_Sign_in_page() {
        getInitElements();
        homepage.validateAmazonSignIn("Sign-In");
    }
    @Then("I should see all lists")
    public void i_should_see_all_lists() {
        getInitElements();
        homepage.validateAccountlists("Your Lists");
    }
    @Given("I click on All Departments Dropdown and click on Appliances")
    public void i_click_on_All_Departments_Dropdown_and_click_on_Appliances() throws InterruptedException {
        getInitElements();
        homepage.AmazonAlldeptDropDown();
    }
    @Then("I should see all Appliances")
    public void i_should_see_all_Appliances() {
        getInitElements();
        homepage.validateAppliancesfromDropdown("Appliances");
    }
    @When("I click on Gift Cards")
    public void i_click_on_Gift_Cards() {
        getInitElements();
        homepage.AmazonGiftCards();
    }
    @Then("I should see all kind of Gift Cards")
    public void i_should_see_all_kind_of_Gift_Cards() {
        getInitElements();
        homepage.validateAmazonGiftCards("Gift Cards");
    }
    @When("I click on Amazon Main Menu")
    public void i_click_on_Amazon_Main_Menu() {
        getInitElements();
        homepage.AmazonMainMenu();
    }
    @Then("I should see all Category")
    public void i_should_see_all_Category() {
        getInitElements();
        homepage.validateAmazonMainMenu("SHOP BY CATEGORY");
    }
//    @Given("I Enter Items in search input field")
//    public void i_Enter_Items_in_search_input_field(String string) {
//        getInitElements();
//        homepage.enterKeyWord(string);
//    }


    @Given("I Enter {string} in search input field")
    public void i_Enter_in_search_input_field(String string) {
        getInitElements();
        homepage.enterKeyWord(string);
    }
    @When("I Click search button")
    public void i_Click_search_button() {
        getInitElements();
        homepage.clickSearchButton();
    }



    @Then("I should see \"\"Face Mask\"\"")
    public void i_should_see_Face_Mask() {
        getInitElements();
        homepage.validateSearchItems("\"Face Mask\"");
    }

    @Then("I should see \"\"Tablet\"\"")
    public void i_should_see_Tablet() {
        getInitElements();
        homepage.validateSearchItems("\"Tablet\"");
    }

    @Then("I should see \"\"Hand soap\"\"")
    public void i_should_see_Hand_soap() {
        getInitElements();
        homepage.validateSearchItems("\"Hand soap\"");
    }

    @Then("I should see \"\"I Phone {int} Pro\"\"")
    public void i_should_see_I_Phone_Pro(Integer int1) {
        getInitElements();
        homepage.validateSearchItems("\"iphone 11 pro\"");
    }

}
