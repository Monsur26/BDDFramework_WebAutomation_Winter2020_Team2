package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;
import static webelements.HomepageWebElements.*;


public class Homepage extends WebAPI {

    @FindBy(how = How.CSS,using = shopLinksWebElements) public List<WebElement> shopLinks;
    @FindBy(how = How.CSS,using = searchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.CSS,using = searchButtonWebElement) public WebElement searchButton;
    @FindBy(css =artNaturalWebElement ) public WebElement artNatural;
    @FindBy(how = How.CSS,using = qtyWebElement) public WebElement qty;
    @FindBy(how = How.XPATH,using = selectQtyWebElement) public WebElement selectQty;
    @FindBy(how = How.ID,using = addToCartWebElement) public WebElement addToCart;
    @FindBy(how = How.ID,using = checkoutWebElement) public WebElement checkout;

    @FindBy(how = How.XPATH,using = stickersWebElement ) public WebElement stickers;
    @FindBy(how = How.XPATH,using = sandalsWebElements) public WebElement sandals;
    @FindBy(how = How.XPATH,using = flowersWebElements) public WebElement flowers;
    @FindBy(how = How.XPATH,using = penWebElements) public WebElement pen;
    @FindBy(how = How.XPATH,using = mirrorWebElements) public WebElement mirror;
    @FindBy(how = How.XPATH,using = pillowWebElements) public WebElement pillow;
    @FindBy(how = How.XPATH,using = popcornWebElements) public WebElement popcorn;
    @FindBy(how = How.XPATH,using = headphonesWebElements) public WebElement headphones;
    @FindBy(how = How.XPATH, using = searchValidTextWebElements) public WebElement searchValidText;

    public  void enterKeyWord(String keyword){
        searchBox.sendKeys(keyword);
    }
    public void clickSearchButton(){
        searchButton.click();
    }
    public void clickProduct(){
        artNatural.click();
    }
    public void clickQty(){
        qty.click();
    }
    public void doSelectQty(){
        selectQty.click();
    }
    public void clickAddToCart(){
        addToCart.click();
    }
    public void clickCheckout(){
        checkout.click();
    }
    public void clickStickers(){
        stickers.click();
    }
    public void clickSandals(){
        sandals.click();
    }
    public void clickFlowers(){
        flowers.click();
    }
    public void clickPen(){
        pen.click();
    }
    public void clickMirror(){
        mirror.click();
    }
    public void clickPillow(){ pillow.click(); }
    public void clickPopcorn(){ popcorn.click(); }
    public void clickHeadphones(){ headphones.click(); }

    public void validateSearchProduct(String expectedResult) {
        String actualResult = searchValidText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }
    public void validateSearchProduct(List<String> expectedResult) {
        String actualResult = searchValidText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }
}
