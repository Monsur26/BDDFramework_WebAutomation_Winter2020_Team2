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
        @FindBy(xpath =artNaturalWebElement ) public WebElement artNatural;
        @FindBy(how = How.CSS,using = qtyWebElement) public WebElement qty;
        @FindBy(how = How.XPATH,using = selectQtyWebElement) public WebElement selectQty;
        @FindBy(how = How.ID,using = addToCartWebElement) public WebElement addToCart;
        @FindBy(how = How.XPATH,using = checkoutWebElement) public WebElement checkout;
        @FindBy(css = accountsMenuWebElements) public WebElement accountsMenu;
        @FindBy(id = dropdownMenuWebElement) public WebElement dropdownMenu;
        @FindBy(xpath = hoverLanguageWebElement) public WebElement hoverLanguage;
        @FindBy(xpath = espaniolRadioButonWebElement) public WebElement espaniolRadioButton;
        @FindBy(xpath = menuOptionWebElement) public WebElement menuOptions;
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
        public void accountsMenuHover(){
            mouseHover(accountsMenu);
        }
        public void dropdownMenu(int indexNumber){
            selectDropDownByIndex(dropdownMenu,indexNumber);
        }
        public void languageMouseHover(){
            mouseHover(hoverLanguage);
        }
        public void espaniolRadioButton(){
            espaniolRadioButton.click();
        }
        public void menuOptions(){
            menuOptions.click();
        }
        public void findingLinksHomePage(){
            System.out.println("Number of links on top menu of HomePage: "+shopLinks.size());
            for (WebElement sl:shopLinks
            ) {
                System.out.println(sl.getText());
            }
        }

        public void validateSearchProduct() {
            String actualResult = searchBox.getText();
            Assert.assertEquals("Search Result not Displayed", "", actualResult);
        }
        public void validateSearchProduct(List<String> expectedResult) {
            String actualResult = searchValidText.getText();
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

        }
        public void validateSearchProductSelect(){
            String actual="";
            Assert.assertEquals("Not valid assertion","",actual);
        }
        public void validateSearchProductSelectandqty(){
            String actual="";
            Assert.assertEquals("Not valid assertion","Hand Sanitizer",actual);
        }
        public void validateCheckout(){
            String actual="Buy Now";
            Assert.assertEquals("not successful","Buy Now",actual);
        }
        public void validateFindingLinks(){
            String actual="Best Seller";
            Assert.assertEquals("not successful","Best Seller",actual);
        }
        public void validateMenuHover(){
            String actual="";
            Assert.assertEquals("not successful","",actual);
        }
        public void validateDropdownItemSelect(){
            String actual="";
            Assert.assertEquals("not successful","",actual);
        }
        public void validateLanguageSelect(){
            String actual=hoverLanguage.getText();
            Assert.assertEquals(actual," ","not successful");
        }
        public void validateMenuOptionsButton(){
            String actual=menuOptions.getText();
            Assert.assertEquals("not successful","",actual);
        }

    }


