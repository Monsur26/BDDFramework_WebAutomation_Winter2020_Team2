package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.Iterator;
import java.util.Set;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(how = How.LINK_TEXT, using = bookWebElement) public WebElement book;
    @FindBy(how = How.LINK_TEXT, using = bookFlightWebElement) public WebElement bookFlight;
    @FindBy(how = How.CSS, using = bookFlightTextWebElement) public WebElement bookFlightText;
    @FindBy(how = How.LINK_TEXT, using=exploreWebElement) public WebElement explore;
    @FindBy(how = How.LINK_TEXT, using=newYorkWebElement) public WebElement newYork;
    @FindBy(how = How.CSS, using=newYorkTextWebElement) public WebElement newYorkText;
    @FindBy(how = How.LINK_TEXT, using=losAngelesWebElement) public WebElement losAngeles;
    @FindBy(how = How.CSS, using=NYtoLAWebElement) public WebElement NYtoLA;
    @FindBy(how = How.CSS, using=NYtoLATextWebElement) public WebElement NYtoLAText;
    @FindBy(how = How.LINK_TEXT, using=signInWebElement) public WebElement signIn;
    @FindBy(how = How.CSS, using=emailWebElement) public WebElement email;
    @FindBy(how = How.CSS, using=passwordWebElement) public WebElement password;
    @FindBy(how = How.CSS, using=submitWebElement) public WebElement submit;
    @FindBy(how = How.XPATH, using=signInTextWebElement) public WebElement signInText;
    @FindBy(how = How.LINK_TEXT, using=travelAlertWebElement) public WebElement travelAlert;
    @FindBy(how = How.XPATH, using=airportAlertWebElement) public WebElement airportAlert;
    @FindBy(how = How.XPATH, using=airportAlertTextWebElement) public WebElement airportAlertText;
    @FindBy(how = How.XPATH, using=fromWhereWebElement) public WebElement fromWhere;
    @FindBy(how = How.XPATH, using=whereToWebElement) public WebElement whereTo;


    public void jetBlueBook(){book.click();}
    public void jetBlueBookFlight(){ bookFlight.click(); }
    public void validateJetBlueBookFlight(String expectedResult){
        String actualResult=bookFlightText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void jetBlueExplore(){ explore.click(); }
    public void jetBlueExploreNewYork(){ newYork.click(); }
    public void validateJetBlueExploreNewYork(String expectedResult){
        String actualResult=newYorkText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void jetBlueExploreLA(){ losAngeles.click();}
    public void jetBlueNYtoLAFlights(){ NYtoLA.click();}
    public void validateJetBlueExploreNYtoLA(String expectedResult){
        String actualResult=NYtoLAText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void jetBlueSignin(){ signIn.click();}
    public void enteredEmail(){ email.sendKeys("marufabm@gmail.com");}
    public void enterPassword(){ password.sendKeys("abcd1234");}
    public void validateJetBlueSignIn(String expectedResult){
        String actualResult=signInText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void jetBlueTravelAlert(){ travelAlert.click();}
    public void jetBlueAirportAlert(){ airportAlert.click();}
    public void validateJetBlueAirportAlerts(String expectedResult){
        String actualResult=airportAlertText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void windowHandle() {
        Set<String> windowIds = driver.getWindowHandles();
        Iterator<String> iter = windowIds.iterator();
        String mainWindow = iter.next();
        String childWindow = iter.next();
        driver.switchTo().window(childWindow);
    }
    public void flightFromWhere(){ fromWhere.click();}
    public void fromWhereRegion(){}
    public void selectCity() throws InterruptedException {
        windowHandle();
        sleepFor(10);
    }

}
