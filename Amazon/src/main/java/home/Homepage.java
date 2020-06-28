package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {

    @FindBy(how = How.CSS, using = shopLinksWebElements)
    public List<WebElement> shopLinks;

    // Page Objects Design Pattern/Page object Model(POM)
    @FindBy(how = How.CSS, using = searchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.CSS, using = searchButtonWebElement) public WebElement searchButton;
    //@FindBy(how = How.XPATH,using = artNaturalWebElement) public WebElement artNatural;
    @FindBy(xpath = artNaturalWebElement) public WebElement artNatural;
    @FindBy(how = How.ID, using = qtyWebElement) public WebElement qty;
    @FindBy(how = How.ID, using = selectQtyWebElement) public WebElement selectQty;
    @FindBy(how = How.ID, using = addToCartWebElement) public WebElement addToCart;
    @FindBy(how = How.ID, using = checkoutWebElement) public WebElement checkout;
    @FindBy(xpath = searchItemValidationWebElements) public WebElement searchValidation;


    //All the setup methods
    public void enterKeyWord(String keyword) {
        // Enter keyword in search box
        searchBox.sendKeys(keyword);
    }
    public void clickSearchButton() {
        // Click searchButton
        searchButton.click();
    }



    public void clickProduct() {
        // Click Product
        artNatural.click();
    }
    public void clickQty() {
        // Click Quantity
        qty.click();
    }
    public void doSelectQty() {
        // Select Quantity
        selectQty.click();
    }



    public void clickAddToCart() {
        // Click Add to Cart
        addToCart.click();
    }
    public void clickCheckout() {
        // Click Checkout
        checkout.click();
    }


    public void searchProduct() throws InterruptedException {
        // setUp("windows","chrome","https://www.amazon.com/");
        enterKeyWord("smart phone");
        sleepFor(3);
        clickSearchButton();
        sleepFor(3);
        cleanUp();
    }
    public void validateSearch(){
        String actual=searchValidation.getText();
        Assert.assertEquals("not successful","",actual);
    }

    public void validateSearchProduct() {

    }

    public void selectProduct() throws InterruptedException {
        enterKeyWord("smart phone");
        sleepFor(3);
        clickSearchButton();
        sleepFor(3);
        clickProduct();

    }

    public void clickqty() throws InterruptedException {
        enterKeyWord("smart phone");
        sleepFor(3);
        clickSearchButton();
        sleepFor(3);
        clickProduct();
        clickQty();
    }
    public void validateQuantityProduct(){
        String actual=qty.getText();
        Assert.assertEquals("not successful","",actual);
    }


    public void AddToCart() throws InterruptedException {
        enterKeyWord("smart phone");
        sleepFor(3);
        clickSearchButton();
        sleepFor(3);
        clickProduct();
    }

    public void setCheckout() throws InterruptedException {
        enterKeyWord("smart phone");
        sleepFor(3);
        clickSearchButton();
        sleepFor(3);
        clickProduct();


    }
}
