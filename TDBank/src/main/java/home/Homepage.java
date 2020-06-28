package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(how = How.CSS, using = productlinkWebElement) public WebElement productlink;
    @FindBy(how = How.CSS, using = servicesWebElement) public WebElement services;
    @FindBy(how = How.LINK_TEXT, using = learningWebElement) public WebElement learning;
    @FindBy(how = How.CSS, using = learningCenterTextWebElement) public WebElement learningCenterText;
    @FindBy(how = How.LINK_TEXT, using = findUsWebElement) public WebElement findUs;
    @FindBy(how = How.CSS, using = searchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.CSS, using = submitButtonWebelement) public WebElement submitButton;
    @FindBy(how = How.CSS, using = searchResultTextWebElement) public WebElement searchResultText;
    @FindBy(how = How.CSS, using = loginWebelement) public WebElement login;
    @FindBy(how = How.CSS, using = loginAccWebelement) public WebElement loginAcc;
    @FindBy(how = How.CSS, using = userWebelement) public WebElement user;
    @FindBy(how = How.CSS, using = passwordWebelement) public WebElement password;
    @FindBy(how = How.CSS, using = loginsubmitWebelement) public WebElement loginsubmit;
    @FindBy(how = How.XPATH, using = accountLogInTextWebelement) public WebElement accountLogInText;
    @FindBy(how = How.XPATH, using = creditcardsWebelement) public WebElement creditcards;
    @FindBy(how = How.CSS, using = homeEquityWebelement) public WebElement homeEquity;
    @FindBy(how = How.CSS, using = setMylocationWebelement) public WebElement setMylocation;
    @FindBy(how = How.XPATH, using = countryWebelement) public WebElement country;
    @FindBy(how = How.XPATH, using = countryNameWebelement) public WebElement countryName;
    @FindBy(how = How.XPATH, using = countryFlagWebelement) public WebElement countryFlag;
    @FindBy(how = How.XPATH, using = helpsearchWebelement) public WebElement helpsearch;
    @FindBy(how = How.XPATH, using = helpsearchBoxWebelement) public WebElement helpsearchBox;
    @FindBy(how = How.XPATH, using = helpsearchSubmitWebelement) public WebElement helpsearchSubmit;
    @FindBy(how = How.XPATH, using = helpsearchResultTextWebelement) public WebElement helpsearchResultText;
    @FindBy(how = How.LINK_TEXT, using = investingWebelement) public WebElement investing;
    @FindBy(how = How.XPATH, using = individualsWebelement) public WebElement individual;
    @FindBy(how = How.XPATH, using = individualsTextWebelement) public WebElement individualText;


    public void Scrolldown() {        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("scrollBy(0, 4500)");
    }
    public void MouseHoverOnProducts() throws InterruptedException {
        mouseHoverByCSS("#td-desktop-nav-dropdown-link-2");
        sleepFor(10);
//        productlink.click();
    }

    public void MouseHoverOnProductsToServices() throws InterruptedException {
        mouseHoverByCSS("#td-desktop-nav-dropdown-link-2");
        sleepFor(3);
        mouseHoverByCSS("#td-desktop-nav-dropdown-link-3");
        sleepFor(10);

    }
    public void ClickOnProducts(){ clickOnElement("#td-desktop-nav-dropdown-link-2");}
    public void creditCardsProducts(){
//        productlink.click();
        creditcards.click();
    }
    public void validateTDBankProductsmenu(String expectedResult){
        String actualResult=productlink.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void MouseHoverOnServices() throws InterruptedException {
        mouseHoverByCSS("#td-desktop-nav-dropdown-link-3");
        sleepFor(1);
    }
    public void TDBankServicesMenu(){ services.click();}
    public void validateTDBankServicesmenu(String expectedResult){
        String actualResult=services.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void TDBankLearning(){ learning.click();}
    public void validateTDBankLearning(String expectedResult){
        String actualResult=learningCenterText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void MouseHoverOnLogIn() throws InterruptedException {
        mouseHoverByCSS("#td-desktop-nav-dropdown-link-4");
//     sleepFor(1);
    }
    public void validateTDBankLogIn(String expectedResult){
        String actualResult=login.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void TDBankFindUs(){ findUs.click();}
    public void LocationSearch(String keyword) { searchBox.sendKeys(keyword); }
    public void SubmitSearch(){ submitButton.click();}
    public void validateBranchSearch(String expectedResult) {
        String actualResult = searchResultText.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void TDBankLogIn(){ loginAcc.click();}
    public void TDBankUserName(String username){ user.sendKeys(username);}
    public void TDBankPassword(String pass){ password.sendKeys(pass);}
    public void AccountLogInSubmit(){ loginsubmit.click();}
    public void validateAccountLogIn(String expectedResult) {
        String actualResult = accountLogInText.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void TDBankCountryFlag(){ country.click();}
    public void TDBankCountrySelect(){ countryName.click();}
    public void validateTDBankCountry(String expectedResult) {
        String actualResult =countryFlag.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void TDBankHelpSearch(){ helpsearch.click();}
    public void TDBankHelpSearchBox(String keyword){ helpsearchBox.sendKeys(keyword);}
    public void TDBankHelpSearchSubmit(){
        Actions action=new Actions(driver);
        action.sendKeys(Keys.ENTER).build().perform();
    }
    public void validateTDBankHelpSearch(String expectedResult) {
        String actualResult =helpsearchResultText.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void TDBankInvestingAndWealth(){ investing.click();}
    public void TDBankInvestingIndividual(){ individual.click();}
    public void validateTDBankInvestingAndWealth(String expectedResult) {
        String actualResult =individualText.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }

    }
