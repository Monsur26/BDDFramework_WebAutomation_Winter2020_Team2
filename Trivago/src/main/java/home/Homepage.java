package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(xpath = logButtonWebElements) public WebElement logButton;
    @FindBy(xpath = menuButtonWebElement) public WebElement menuButton;
    @FindBy(xpath = paymentMethodWebElement) public WebElement paymentMethod;
    @FindBy(id = currencyButtonWebElement) public WebElement currencyButton;
    @FindBy(xpath = languageButtonWSebElement) public WebElement languageButton;
    @FindBy(xpath = searchBarWebElement) public WebElement searchBar;
    @FindBy(xpath = searchButtonWebElement) public WebElement searchButton;
    @FindBy(xpath = bottomBarWebElement) public WebElement bottomBar;
    //Setup Methods
    public void logButtonSet() {
        logButton.click();
    }
    public void menuButtonSet() {
        Actions actions=new Actions(driver);
        actions.moveToElement(menuButton).perform();
    }
    public void paymentMethodSet() {
        paymentMethod.click();
    }
    public void currencyButtonSet() {
        Select select = new Select(driver.findElement(By.id(currencyButtonWebElement)));
        select.selectByValue("OMR");
    }
    public void languageButtonSet() {
        languageButton.click();
    }
    public void searchBarSet(String keyword) {
        searchBar.sendKeys(keyword);
    }
    public void searchButtonSet() {
        searchButton.click();
    }
    public void bottomBarSet() {
        Select select = new Select(driver.findElement(By.xpath(bottomBarWebElement)));
        select.selectByIndex(0);
    }
    //Test Cases
    public void buttonLog() throws InterruptedException {
        logButtonSet();
    }
    public void validationLogButton(){
        String actual=logButton.getText();
        Assert.assertEquals("","",actual);
    }

    public void buttonMenu() throws InterruptedException {
        menuButtonSet();
    }
    public void validationMenuButton(){
        String actual=menuButton.getText();
        Assert.assertEquals("","",actual);
    }
    public void methodPayment() throws InterruptedException{
        menuButtonSet();
        paymentMethodSet();
    }
    public void validationMethodPayment(){
        String actual=paymentMethod.getText();
        Assert.assertEquals("","",actual);
    }
    public void buttonCurrency() throws InterruptedException {
        currencyButtonSet();
        sleepFor(5);
    }
    public void validationCurrencyButton(){
        String actual=currencyButton.getText();
        Assert.assertEquals("","",actual);
    }
    public void buttonLanguage() throws InterruptedException {
        languageButtonSet();
    }
    public void validationLanguageButton(){
        String actual=languageButton.getText();
        Assert.assertEquals("","",actual);
    }
    public void barSearch() throws InterruptedException {
        searchBarSet("Fun trip-Summer scent");
    }
    public void validationSearchBar(){
        String actual=searchBar.getText();
        Assert.assertEquals("","",actual);
    }
    public void buttonSearch() throws InterruptedException {
        searchBarSet("");
        searchButtonSet();
    }
    public void validationSearchButton(){
        String actual=searchButton.getText();
        Assert.assertEquals("","",actual);
    }
    public void barBottom() throws InterruptedException {
        bottomBarSet();
        sleepFor(5);
    }
    public void validationBottomBarLink(){
        String actual=bottomBar.getText();
        Assert.assertEquals("","",actual);
    }

}
