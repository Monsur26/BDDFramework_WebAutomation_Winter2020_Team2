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
//    @FindBy(how = How.CSS, using = VerizonWirelessWebElement) public WebElement verizonWireless;
    @FindBy(how = How.LINK_TEXT,using = wirelessWebElement) public WebElement wireless;
    @FindBy(how = How.CSS, using = VerizonWirelessTextWebElement) public WebElement verizonWirelessText;
    @FindBy(how = How.CSS, using = WirelessSearchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.CSS, using = iPhone11ProTextWebElement) public WebElement iPhone11ProText;
    @FindBy(how = How.CSS, using = tabletTextWebElement) public WebElement tabletText;
    @FindBy(how = How.XPATH,using = shopWebElement) public WebElement shop;
    @FindBy(how = How.XPATH,using = shopTextWebElement) public WebElement shopText;
    @FindBy(how = How.LINK_TEXT,using = inHomeWebElement) public WebElement inHome;
    @FindBy(how = How.XPATH,using = inHomeShopWebElement) public WebElement inHomeShop;
    @FindBy(how = How.CSS,using = shopDealWebElement) public WebElement shopDeal;
    @FindBy(how = How.XPATH,using = shopDealTextWebElement) public WebElement shopDealText;
    @FindBy(how = How.XPATH,using = inHomeInternetWebElement) public WebElement inHomeInternet;
    @FindBy(how = How.XPATH,using = inHomeInternetTextWebElement) public WebElement inHomeInternetText;
    @FindBy(how = How.CSS,using = wirelessPhonesWebElement) public WebElement wirelessPhones;
    @FindBy(how = How.CSS,using = wirelessPhonesTextWebElement) public WebElement wirelessPhonesText;
    @FindBy(how = How.CSS,using = wirelessPhonesFilterBrandsWebElement) public WebElement wirelessPhonesFilterBrands;
    @FindBy(how = How.CSS,using = wirelessPhonesfilterBrandnameWebElement) public WebElement wirelessPhonesfilterBrandname;
    @FindBy(how = How.CSS,using = inHomewatchTVWebElement) public WebElement inHomeWatchTV;
    @FindBy(how = How.LINK_TEXT,using = inHomewatchTVGuideWebElement) public WebElement inHomeWatchTVGuide;
    @FindBy(how = How.XPATH,using = inHomewatchTVGuideTextWebElement) public WebElement inHomeWatchTVGuideText;
    @FindBy(how = How.CSS,using = signInWebElement) public WebElement signIn;
    @FindBy(how = How.LINK_TEXT,using = myAccountWebElement) public WebElement myAccount;
    @FindBy(how = How.CSS,using = userIdWebElement) public WebElement userId;
    @FindBy(how = How.CSS,using = passwordWebElement) public WebElement password;
    @FindBy(how = How.CSS,using = checkBoxWebElement) public WebElement checkBox;
    @FindBy(how = How.CSS,using = submitWebElement) public WebElement submit;

    public void verizonWireless(){ wireless.click();}
    public void validateverizonwireless(String expectedResult){
        String actualResult=verizonWirelessText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void wirelessShop(){ shop.click();}
    public void validatewirelessShop(String expectedResult){
        String actualResult=shopText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void wirelessShopScrollDown(){ scrollDownVertically(); }
    public void wirelessShopScrollUp(){ scrollUpVertically(); }
    public void validatewirelessShopPageTop(String expectedResult){
        String actualResult=shopText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void VerizonInHomeShopDeals(){
        inHome.click();
//        mouseHoverUseWebelement(inHomeShop);
        implicitWait(5);
        shopDeal.click();
    }
    public void verizonInHome(){ inHome.click();}
    public void inHomeShopMouseHover() throws InterruptedException {
        mouseHoverByXpath("//*[@id=\"vcm_menu1\"]/a");
        sleepFor(5);
    }
    public void inHomeShopDeals(){ shopDeal.click();}
    public void validateInHomeShopDeals(String expectedResult){
        String actualResult=shopDealText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void inHomeInternet(){ inHomeInternet.click();}
    public void inHomeInternetScrollDown(){ scrollDownVertically();}
    public void validateInHomeInternet(String expectedResult){
        String actualResult=inHomeInternetText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void VerizonShop(){
        wireless.click();
//        mouseHoverUseWebelement(shop);
    }
    public void scrollDownVertically(){
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("scrollBy(0,4500)");
    }
    public void scrollUpVertically(){
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("scrollBy(0,-5550)");
    }
    public void enterKeyWord(String keyword) {  searchBox.sendKeys(keyword); }
    public void PressENTERKey() {
        Actions action=new Actions(driver);
        action.sendKeys(Keys.ENTER).build().perform();
    }
    public void validateiPhone11Pro(String expectedResult){
        String actualResult=iPhone11ProText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void wirelessPhones(){ wirelessPhones.click(); }
    public void validateWirelessPhones(String expectedResult){
        String actualResult=wirelessPhonesText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void searchTablet(){ enterKeyWord("Tablet");}
    public void validateTablet(String expectedResult){
        String actualResult=tabletText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void inHomeWatchTVMouseHover() throws InterruptedException {
        mouseHoverByCSS("#vcm_menu4 > a");
        sleepFor(5);
    }
    public void inHomeWatchTVGuide(){ inHomeWatchTVGuide.click(); }
    public void validateInHomeWatchTVGuide(String expectedResult){
        String actualResult=inHomeWatchTVGuideText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void navigateBackToInHome(){ navigateBack(); }
    public void validateNavigateBack(String expectedResult){
        String actualResult=getCurrentPageUrl();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

//    public void VerizoninHomeWatchTVGuide() throws InterruptedException {
//
//        inHome.click();
//        sleepFor(5);
//        mouseHoverByCSS("#vcm_menu4 > a");
//        sleepFor(5);
//        inHomeWatchTVGuide.click();
//    }
    public void VerizonSignIn() throws InterruptedException {

        wireless.click();
        mouseHoverByCSS("#gnavAccountMenu");
        sleepFor(2);
        myAccount.click();
        userId.sendKeys("7576687300");
        password.sendKeys("abcd1234");
//         if(!checkBox.isSelected()){
//             checkBox.click();
//             System.out.println("CheckBox selected");
//         }
        submit.click();
    }





}
