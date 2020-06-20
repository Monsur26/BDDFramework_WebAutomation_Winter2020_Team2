package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import java.security.Key;
import java.util.List;
import java.util.concurrent.TimeUnit;
import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(xpath=uhcLogoWebElement) public WebElement uhcLogo;
    @FindBy(xpath=covidNoticeCloseWebElement) public WebElement covidNoticeClose;
    @FindBy(xpath=searchBoxWebElement) public WebElement searchBox;
    @FindBy(xpath=insuranceButtonWebElement) public WebElement insuranceButton;
    @FindBy(xpath=medicareButtonWebElement) public WebElement medicareButton;
    @FindBy(xpath=medicareZipCodeWebElement) public WebElement medicareZip;
    @FindBy(xpath=shopForAPlanWebElement) public WebElement shopFor;
    @FindBy(xpath=signInMenuWebElement) public WebElement signInMenu;
    @FindBy(xpath=myuhcSignInWebElement) public WebElement myuhc;
    @FindBy(xpath=espaniolWeElement) public WebElement espaniolLng;
    @FindBy(xpath=englishWebElement) public WebElement englishLng;
    @FindBy(xpath=upperMenuLInksWebElement) public List<WebElement> upperMenuLinks;
    @FindBy(linkText=welcomeMemberSignInWebElement) public WebElement welcomeMember;
    @FindBy(xpath=newPageSigninWebElement) public WebElement newPageSignInButton;
    @FindBy(xpath=exploreMedicareWebElement) public WebElement exploreMedicareButton;


    public void setCovidNoticeClose(){covidNoticeClose.click();}
    public void searchBox(String key){
        searchBox.sendKeys(key);
        searchBox.sendKeys(Keys.ENTER);
    }
    public void insuranceButton(){insuranceButton.click();}
    public void medicareButton(){medicareButton.click();}
    public void medicareZip(String digits){
        medicareZip.sendKeys(digits);
        medicareZip.sendKeys(Keys.ENTER);
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    }
    public void setSignInMenu(){
        signInMenu.click();
    }
    public void setMyuhc(){
        String winHandleBefore = driver.getWindowHandle();
        myuhc.click();
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }
        driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
        driver.switchTo().window(winHandleBefore);
    }
    public void setEspaniolLng() throws InterruptedException {espaniolLng.click(); }
    public void setEnglishLng(){englishLng.click();}
    public void upperLinks(){upperMenuLinks.size();
        for (WebElement ul:upperMenuLinks) {
            System.out.println(ul.getText());
        }
    }
    public void welcomeMemberSignIn(){
        welcomeMember.click();
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }

    }
    public void dragUHCLogo(){
        Actions actions=new Actions(driver);
        actions.dragAndDrop(uhcLogo,searchBox).build().perform();
    }
    public void dragExploreMedicare(){
        Actions a=new Actions(driver);
        a.dragAndDrop(exploreMedicareButton,searchBox).build().perform();
    }



    public void validateCovidNotice(){
        String actual=uhcLogo.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateSearchBox(){
        String actual=searchBox.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateInsuranceButtonSearch(){
        String actual=insuranceButton.getText();
        Assert.assertEquals("not successful","Insurance",actual);
    }
    public void validateMedicareZipSearch(){
        String actual=shopFor.getText();
        Assert.assertEquals("not successful","Shop For a Plan",actual);
    }
    public void validateSignIn(){
        String actual=signInMenu.getText();
        Assert.assertEquals("not sucessful","Sign In",actual);
    }
    public void validateLanguage(){
        String actual="Individuals and Families";
        Assert.assertEquals("not successful","Individuals and Families",actual);
    }
    public void validateMemberSignIn(){
        String actual="Sign In";
        Assert.assertEquals("not successful","Sign In",actual);
    }
    public void validateExploreMedicare(){
        String actual=exploreMedicareButton.getText();
        Assert.assertEquals("not successful","Explore Medicare Plans",actual);
    }
}
