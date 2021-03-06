package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(xpath = menuBoxWebElement)public WebElement menuBox;
    @FindBy(xpath = headerSearchBarWebElement)public WebElement headerSearch;
    @FindBy(className = buttonSearchBarWebElement)public WebElement searchButton;
    @FindBy(xpath = USNewsLinkBarWebElement)public WebElement USNewsLink;
    @FindBy(xpath = USNewsLinkTopNewsBarWebElement)public WebElement USNewsLinkTopNews;
    @FindBy(xpath = videosLinkWebElements)public WebElement videosLink;
    @FindBy(xpath = videosLinkSelectedWebElements)public WebElement selectedvideoLink;
    @FindBy(css = userAccountButtonWebElement)public WebElement userAcc;
    @FindBy(xpath = emailWebElement)public WebElement email;
    @FindBy(xpath = passwordWebElement)public WebElement password;
    @FindBy(xpath = CNNlogoWebElement)public WebElement CNNLogo;

    public void menuBoxGenerating(){
        menuBox.click();
    }
    public void heeadersearchbox(String searchitem){
        headerSearch.sendKeys(searchitem);
    }
    public void clicksearchbutton(){ headerSearch.sendKeys(Keys.ENTER); }
    public void USNewsLink(){
        USNewsLink.click();
    }
    public void USTopNews(){
        USNewsLinkTopNews.click();
    }
    public void videoLink(){
        videosLink.click();
    }
    public void videoSelectedLink(){
        selectedvideoLink.click();
    }
    public void hoverToUserAcc(){
        Actions actions=new Actions(driver);
        actions.moveToElement(userAcc).perform();
    }
    public void userACC(){userAcc.click();}
    public void emaillogin(String emaillog){email.sendKeys(emaillog);}
    public void passwordadd(String pass){ password.sendKeys(pass);}
    public void windowScroll(){ scrollUpDownByHeight(); }

    public void validatingCNNLogo(){
        String actual=CNNLogo.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateMenu(){
        String actual=menuBox.getText();
        Assert.assertEquals("not successful","",actual);
    }
}
