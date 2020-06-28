package home;

import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.HomepageWebElements.*;
public class Homepage extends WebAPI {


    @FindBy(how= How.XPATH,using =  wirelessWebElement) public WebElement wireless;
    @FindBy(xpath = shopWebElement) public WebElement shop;
    @FindBy(xpath = searchWebElement) public WebElement search;
    @FindBy(xpath = plansWebElement) public WebElement plans;
    @FindBy(xpath = minusWebElement) public WebElement minus;
    @FindBy(css = dealsWebElement) public WebElement deals;
    @FindBy(xpath = teachersWebElement) public WebElement teach;
    @FindBy(xpath = signWebElement) public WebElement sign;
    @FindBy(xpath = compassWebElement) public WebElement com;
    @FindBy(xpath = storeWebElement) public WebElement store;
    @FindBy(xpath = sbarWebElement) public WebElement sbar;
    @FindBy(xpath = iphoneWebElement) public WebElement iphone;
    @FindBy(xpath = radiobutton1WebElement) public WebElement radio1;
    @FindBy(xpath = radiobutton2WebElement) public WebElement radio2;
    @FindBy(css = mobileappsWebElement) public WebElement mob;

    public void wireless() {
        wireless.click();
        Actions a = new Actions(driver);
        a.moveToElement(shop).click().build().perform();
    }

    public void search() {
        Actions a = new Actions(driver);
        a.moveToElement(search).click().build().perform();
        search.sendKeys("galaxy phone");
    }

    public void plans() {
        minus.click();
        Actions a = new Actions(driver);
        a.moveToElement(plans).click().build().perform();
    }

    public void teacher() throws InterruptedException {
        teach.click();
        mouseHoverByXpath(dealsWebElement);

    }

    public void signin()  {
        sign.click();
    }

    public void locate() {
        com.click();
    }

    public void stores() {
        store.click();
        sbar.click();
        sbar.sendKeys("9999");
    }

    public void iphone() {
        Actions a = new Actions(driver);
        a.moveToElement(shop).click().build().perform();
    }

    public void radiobuttons() {
        Actions a = new Actions(driver);
        a.moveToElement(shop).click().build().perform();
        radio1.click();
        radio2.click();
    }

    public void refresh()  {
        sign.click();
        navigateRefresh();
    }

}
