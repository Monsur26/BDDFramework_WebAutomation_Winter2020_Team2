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
    @FindBy(how = How.XPATH, using = progressiveAutoWebElement) public WebElement progressiveAuto;
    @FindBy(how = How.XPATH, using = AutoLearnMoreWebElement) public WebElement AutoLearnMore;
    @FindBy(how = How.XPATH, using = AutoLearnMoreTextWebElement) public WebElement AutoLearnMoreText;
    @FindBy(how = How.CSS, using = ExploreProductWebElement) public WebElement exploreProduct;
    @FindBy(how = How.CSS, using = ExploreProductsTextWebElement) public WebElement exploreProductsText;
    @FindBy(how = How.XPATH, using = ExploreAutoWebElement) public WebElement exploreAuto;
    @FindBy(how = How.CSS,using = progressiveExploreWebElement) public WebElement progressiveExplore;
    @FindBy(how = How.XPATH,using = exploreHomeownerWebElement) public WebElement exploreHomeowner;
    @FindBy(how = How.XPATH,using = exploreHomeownerTextWebElement) public WebElement exploreHomeownerText;
    @FindBy(how = How.XPATH,using = exploreHomeownersMouseHWebElement) public WebElement exploreHomeownerMouseH;
    @FindBy(how = How.CSS,using = exploreHomeownersCoverageWebElement) public WebElement exploreHomeownersCoverage;
    @FindBy(how = How.XPATH,using = exploreHomeownersCoverageTextWebElement) public WebElement exploreHomeownersCoverageText;
    @FindBy(how = How.CSS,using = moreChoiceWebElement) public WebElement moreChoice;
    @FindBy(how = How.XPATH,using = moreChoiceCarShoppingWebElement) public WebElement moreChoiceCarShopping;
    @FindBy(how = How.XPATH,using = navigateHomePageTextWebElement) public WebElement HomePageText;
    @FindBy(how = How.CSS,using = moreChoiceCarShoppingFindWebElement) public WebElement moreChoiceCarShoppingFind;
    @FindBy(how = How.CSS,using = moreChoiceCarShoppingTextWebElement) public WebElement moreChoiceCarShoppingText;
    @FindBy(how = How.CSS,using = autoWebElement) public WebElement auto;
    @FindBy(how = How.CSS,using = enterZipWebElement) public WebElement enterZip;
    @FindBy(how = How.XPATH,using = learnMoreWebElement) public WebElement learnMore;
    @FindBy(how = How.CSS,using = allProductsWebElement) public WebElement allProducts;
    @FindBy(how = How.XPATH,using = allProductsTextWebElement) public WebElement allProductsText;
    @FindBy(how = How.XPATH,using = allProductsScrollDownTextWebElement) public WebElement allProductsScrollDownText;
//    @FindBy(how = How.XPATH,using = exploreOurProductsWebElement) public WebElement exploreOurProducts;
//    @FindBy(how = How.XPATH,using = exploreOurProductsAutoWebElement) public WebElement exploreOurProductsAuto;
//    @FindBy(how = How.CSS,using = exploreAutoMouseHoWebElement) public WebElement exploreAutoMouseHo;
//    @FindBy(how = How.CSS,using = exploreAutoMouseHoTextWebElement) public WebElement exploreAutoMouseHoText;
    @FindBy(how = How.CSS,using = aboutUSWebElement) public WebElement aboutUs;
    @FindBy(how = How.CSS,using = aboutUSWhoweareWebElement) public WebElement aboutUsWhoweare;
    @FindBy(how = How.XPATH,using = aboutUSWhoweareTextWebElement) public WebElement aboutUsWhoweareText;
    @FindBy(how = How.XPATH,using = aboutUsLocalagentWebElement) public WebElement aboutUsLocalagent;
    @FindBy(how = How.CSS,using = aboutUsLocalagentTextWebElement) public WebElement aboutUsLocalagentText;
    @FindBy(how = How.CSS,using = autoNHomeWebElement) public WebElement autoNHome;
    @FindBy(how = How.XPATH,using = autoNHomeLearnMoreWebElement) public WebElement autoNHomeLearnMore;

    public void windowHandle(){
        Set<String> windowIds =driver.getWindowHandles();
        Iterator<String> iter=windowIds.iterator();
        String mainWindow=iter.next();
        String childWindow=iter.next();
        driver.switchTo().window(childWindow);
    }
//    public void PROExploreProducts(){ exploreProduct.click();}
//    public void validateExploreProducts(String expectedResult){
//        String actualResult=exploreProductsText.getText();
//        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
//    }
//    public void ProgressiveAuto(){ progressiveAuto.click();}
//    public void AutoLearnMore(){ AutoLearnMore.click();}
//    public void validateAuto(String expectedResult){
//        String actualResult=AutoLearnMoreText.getText();
//        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
//    }
//    public void ProgressiveExploreProducts(){ progressiveExplore.click();}
//    public void multiWindowsHandling(){
//        Set<String> windowIds =driver.getWindowHandles();
//        Iterator<String> iter=windowIds.iterator();
//        String mainWindow=iter.next();
//        String childWindow=iter.next();
//        driver.switchTo().window(childWindow);
//    }
    public void ProgressiveExplore() {   progressiveExplore.click();}
    public void ProgressiveExploreAuto() {  exploreAuto.click();}
    public void validateExploreAuto(String expectedResult){
        String actualResult=AutoLearnMoreText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void exploreHomeowner(){ exploreHomeowner.click(); }
    public void validateExploreHomeowner(String expectedResult){
        String actualResult=exploreHomeownerText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void addProperty(){
//        getWindowsMaximize();
        progressiveExplore.click();
        exploreAuto.click();
        implicitWait(5);
        mouseHoverByCSS("#LocalnavTrigger");
        implicitWait(5);
    }

    public void exploreHomeownersMouseHover(){
        cancelAlert();
        mouseHoverByXpath("//*[@id=\"main\"]/div[2]/div[1]/div/nav");
//        mouseHoverByCSS("#LocalnavTrigger");
        implicitWait(10);
        exploreHomeownerMouseH.click();
    }
    public void exploreHomeownerCoverage() { exploreHomeownersCoverage.click(); }
    public void validateHomeownerCoverage(String expectedResult){
        String actualResult=exploreHomeownersCoverageText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void moreChoices(){ moreChoice.click(); }
    public void moreChoicesCarShopping(){  moreChoiceCarShopping.click(); }
    public void moreChoicesCarShoppingFind(){  moreChoiceCarShoppingFind.click(); }
    public void validateMoreChoiceCarShopping(String expectedResult){
        String actualResult=moreChoiceCarShoppingText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void navigateBacktoProgressiveHomePage(){
               navigateBack();}
    public void validateNavigateBackToHomePage(String expectedResult){
        String actualResult=HomePageText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }


    public void exploreAllProducts(){ allProducts.click(); }
    public void validateExploreAllProducts(String expectedResult){
        String actualResult=allProductsText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void exploreAllProductsScrollDown(){ scrollDownVertically();}
    public void validateAllProductsScrollDown(String expectedResult){
        String actualResult=allProductsScrollDownText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void exploreAllProductsScrollUp() { scrollUpVertically(); }
    public void validateExploreAllProductsScrollDownNUp(String expectedResult){
        String actualResult=allProductsText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void aboutUs(){ aboutUs.click(); }
    public void aboutUsWhoWeAre(){ aboutUsWhoweare.click(); }
    public void validateAboutUswhoweare(String expectedResult){
        String actualResult=aboutUsWhoweareText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void aboutUsLocalAgent(){ aboutUsLocalagent.click(); }
    public void validateLocalAgents(String expectedResult){
        String actualResult=aboutUsLocalagentText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void autoNHome(){ autoNHome.click();}
    public void autoNHomeLearnMore(){ autoNHomeLearnMore.click();}
    public void autoQuote(){
        auto.click();
        implicitWait(10);
    }
}
