package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import java.util.List;
import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {

    @FindBy(how = How.CSS, using = shopLinksWebElements) public List<WebElement> shopLinks;
    @FindBy(how = How.CSS, using = searchBoxWebElement)    public WebElement searchBox;
    @FindBy(how = How.CSS, using = searchButtonWebElement)    public WebElement searchButton;
    @FindBy(css = artNaturalWebElement)    public WebElement artNatural;
    @FindBy(how = How.CSS, using = qtyWebElement)    public WebElement qty;
    @FindBy(how = How.XPATH, using = selectQtyWebElement) public WebElement selectQty;
    @FindBy(how = How.ID, using = addToCartWebElement)   public WebElement addToCart;
    @FindBy(how = How.ID, using = checkoutWebElement) public WebElement checkout;
    @FindBy(how = How.XPATH, using = searchValidTextWebElements)    public WebElement searchValidText;
    @FindBy(how = How.XPATH, using = searchTodaysDealsWebelement) public WebElement todaysDeal;
    @FindBy(how = How.XPATH, using = searchTodaysDealsTextWebelement) public WebElement todaysDealsText;
    @FindBy(how = How.LINK_TEXT, using = searchNewReleasesWebelement) public WebElement newReleases;
    @FindBy(how = How.CSS, using = searchNewReleasesTextWebelement) public WebElement newReleasesText;
    @FindBy(how = How.LINK_TEXT, using = searchFindaGiftWebelement) public WebElement findaGift;
    @FindBy(how = How.CSS, using = searchFindaGiftTextWebelement) public WebElement findaGiftText;
    @FindBy(how = How.LINK_TEXT, using = searchBestSellersWebElement) public WebElement bestSellers;
    @FindBy(how = How.CSS, using = searchBestSellersTextWebElement) public WebElement bestSellersText;
    @FindBy(how = How.XPATH, using = modenafacemaskWebElement) public WebElement modennafacemask;
    @FindBy(how = How.CSS, using = maskaddedincartTextWebelement) public WebElement maskaddedincartText;
    @FindBy(how = How.CSS, using = accountListWebelement) public WebElement accountList;
    @FindBy(how = How.CSS, using = accountListTextWebelement) public WebElement accountListText;
    @FindBy(how = How.CSS, using = accountSignInWebelement) public WebElement accountSignIn;
    @FindBy(how = How.CSS, using = accountSignInTextWebelement) public WebElement accountSignInText;
    @FindBy(how = How.CSS, using=allDeptdropdownWebelement) public WebElement allDept;
    @FindBy(how = How.CSS, using=appliancesTextWebelement) public WebElement appliancesText;
    @FindBy(how = How.LINK_TEXT, using=booksinBestSellerWebelement) public WebElement booksinBestSeller;
    @FindBy(how = How.CSS, using=booksinBestSellerTextWebelement) public WebElement booksinBestSellerText;
    @FindBy(how = How.LINK_TEXT, using=searchNewReleasesElectronicsWebelement) public WebElement newReleasedElectronics;
    @FindBy(how = How.CSS, using=searchNewReleasesElectronicsTextWebelement) public WebElement newReleasedElectronicsText;
    @FindBy(how = How.CSS, using=giftCardsWebelement) public WebElement giftCards;
    @FindBy(how = How.CSS, using=giftCardsTextWebelement) public WebElement giftCardsText;
    @FindBy(how = How.CSS, using=mainmenuWebelement) public WebElement mainmenu;
    @FindBy(how = How.CSS, using=mainmenuTextWebelement) public WebElement mainmenuText;
    @FindBy(how = How.XPATH, using=searchResultTextWebelement) public WebElement searchResultText;

    public void enterKeyWord(String keyword) {  searchBox.sendKeys(keyword);   }
    public void clickSearchButton() { searchButton.click(); }
    public void clickProduct() {modennafacemask.click(); }
    public void clickQty() { qty.click(); }
    public void doSelectQty() { selectQty.click(); }
    public void clickAddToCart() { addToCart.click(); }
    public void clickCheckout() { checkout.click(); }
    public void validateSearchProduct(String expectedResult) {
        String actualResult = searchValidText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void validateSearchProduct(List<String> expectedResult) {
        String actualResult = searchValidText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonTodaysDeal(){ todaysDeal.click();}
    public void validateTodaysDeals(String expectedResult){
        String actualResult = todaysDealsText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonNewReleases(){ newReleases.click(); }
    public void validateNewReleasesProduct(String expectedResult) {
        String actualResult = newReleasesText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonNewReleasedElectronics(){
        newReleases.click();
        newReleasedElectronics.click();
    }
    public void validateNewReleasesElectronics(String expectedResult) {
        String actualResult = newReleasedElectronicsText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonFindaGift(){ findaGift.click();   }
    public void validateFindaGift(String expectedResult){
        String actualResult = findaGiftText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonBestSellers(){
        bestSellers.click();
    }
    public void validateBestSellers(String expectedResult){
        String actualResult=bestSellersText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonBestSellerBooks(){
        bestSellers.click();
        booksinBestSeller.click();
    }
    public void validateBestSellersBooks(String expectedResult){
        String actualResult=booksinBestSellerText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void validateMaskinCart(String expectedResult){
        String actualResult=maskaddedincartText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonAccList(){ mouseHoverByCSS("#nav-link-accountList");}
//    public void ClickOnAccList(){ clickOnElement("#nav-link-accountList");}
    public void validateAccountlists(String expectedResult){
        String actualResult=accountListText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonSignIn() throws InterruptedException {
        AmazonAccList();
        accountList.click();
    }
    public void validateAmazonSignIn(String expectedResult){
        String actualResult=accountSignInText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void dropDownByCSS(String locator, String value) {
        WebElement element = driver.findElement(By.cssSelector(locator));
        Select select = new Select(element);
        select.selectByVisibleText(value);
    }
    public void dropdown(String locator, String value){
        WebElement element=driver.findElement(By.cssSelector(locator));
        Select select=new Select(element);
        select.selectByVisibleText(value);
    }
    public void AmazonAlldeptDropDown() throws InterruptedException {
        dropDownByCSS(allDeptdropdownWebelement,"Appliances");
    }
    public void validateAppliancesfromDropdown(String expectedResult){
        String actualResult=appliancesText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonGiftCards(){ giftCards.click(); }
    public void validateAmazonGiftCards(String expectedResult){
        String actualResult=giftCardsText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void AmazonMainMenu(){ mainmenu.click();}
    public void validateAmazonMainMenu(String expectedResult){
        String actualResult=mainmenuText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void validateSearchItems(String expectedResult){
        String actualResult=searchResultText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
}
