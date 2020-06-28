package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(xpath = topMenuWebElement) public WebElement topMenu;
    @FindBy(id = navigationMenuWebElement) public WebElement navigationMenu;
    @FindBy(id = logInMenuWebElement) public WebElement logInMenu;
    @FindBy(xpath = searchButtonWebElement) public WebElement searchButton;
    @FindBy(xpath = userAccessWebElement) public WebElement userAccess;
    @FindBy(xpath = quickServiceWebElement) public WebElement quickService;
    @FindBy(xpath = serviceMenuWebElement) public WebElement serviceMenu;
    @FindBy(xpath = creditCardNewWindowWebElement) public WebElement creditCard;
    @FindBy(className = tdBankLogowWebElement) public WebElement tdBankLogo;
    //Setup Method
    public void topMenuSet()
    {
        topMenu.click();
    }
    public void navigationMenuSet()
    {
        navigationMenu.click();
    }
    public void logInMenuSet() {

        mouseHover(logInMenu);
    }
    public void searchButtonSet(String keyword) {
        searchButton.sendKeys(keyword);
        searchButton.sendKeys(Keys.ENTER);
    }
    public void userAccessSet() {
        userAccess.click();
    }

    public void quickServiceSet() {
        quickService.click();
    }
    public void serviceMenuSet() {
        serviceMenu.click();
    }
    public void setCreditCard() {
        creditCard.click();
    }

    //Test Cases
    public void menuTop() throws InterruptedException {
        topMenuSet();
    }
    public void validateMenuTop(){
        String actual=topMenu.getText();
        Assert.assertEquals("not successful","Personal",actual);
    }
    public void menuNavigation() throws InterruptedException {
        navigationMenuSet();
    }
    public void validateNavigation(){
        String actual=navigationMenu.getText();
        Assert.assertEquals("not successful","Services",actual);
    }
    public void menuLogIn() throws InterruptedException {
        logInMenuSet();
    }
    public void validationLogIn(){
        String actual=logInMenu.getText();
        Assert.assertEquals("","Log In",actual);
    }
    public void switchingToNewWindowLogin(){
        logInMenuSet();
        setCreditCard();
        switchToNewWindow();
    }
    public void validationNewWindow(){
        String actual=tdBankLogo.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void buttonSearch() throws InterruptedException {
        searchButtonSet("Apply for a credit card online");
    }
    public void validationSearchButton(){
        String actual=searchButton.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void accessUser() throws InterruptedException {
        userAccessSet();
    }
    public void validationUserAccess(){
        String actual=userAccess.getText();
        Assert.assertEquals("not successful","Log In",actual);
    }
    public void serviceQuick() throws InterruptedException {
        quickServiceSet();
    }
    public void validationQuickService(){
        String actual="";
        Assert.assertEquals("not successful","",actual);
    }
    public void menuService() throws InterruptedException {
        serviceMenuSet();
    }
    public void validationServiceMenu(){
        String actual="";
        Assert.assertEquals("not successful","",actual);
    }

}

