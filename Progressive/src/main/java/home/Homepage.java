package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import static webelements.HomepageWebElements.*;

    public class Homepage extends WebAPI {
        @FindBy(css = exploreProductWebElement) public WebElement exploreProduct;
        @FindBy(css = autoProductWebElement) public WebElement autoProduct;
        @FindBy(css = claimWebElement) public WebElement claimbutton;
        @FindBy(css = claimOverviewWebElement) public WebElement claimOverview;
        @FindBy(css = answersWebElement) public WebElement answersbutton;
        @FindBy(css = seeAllTopicWebElement) public WebElement seeAllProductButton;
        @FindBy(xpath = popUpWebElement) public WebElement popUp;
        @FindBy(xpath = closePopUpWebElement) public WebElement closePopUp;
        @FindBy(xpath = searchBoxWebElement) public WebElement searchBox;
        @FindBy(xpath = searchButtonWebElement) public WebElement searchButton;
        @FindBy(xpath = LogoWebElement) public WebElement logo;
        @FindBy(id = LoginWebElement) public WebElement login;
        @FindBy(xpath = UserWebElement) public WebElement username;
        @FindBy(xpath = PasswordWebElement) public WebElement password;
        @FindBy(id = searchItemWebElement) public WebElement searchItem;

        public void exploreButton(){exploreProduct.click();}
        public void autoProduct(){autoProduct.click();}
        public void claimButton(){claimbutton.click();}
        public void claimOverview(){claimOverview.click();}
        public void answerButton(){answersbutton.click();}
        public void AllProductAnswer(){seeAllProductButton.click();}
        public void setPopUp(){ popUp.click();}
        public void setClosePopUp(){closePopUp.click();}
        public void setSearchBox(String keyword){
            searchBox.sendKeys(keyword);
            searchBox.sendKeys(Keys.ENTER);}
        public void setSearchButton(){searchButton.click();}
        public void login(){login.click();}
        public void username(String user){username.sendKeys(user);}
        public void password(String pass){password.sendKeys(pass);}
        public void searchingItem(String pass){
            searchItem.sendKeys(pass);
            searchItem.sendKeys(Keys.ENTER);
        }

        public void clickExploreButton() throws InterruptedException {
            exploreButton();
            implicitWait(5);
            autoProduct();
        }
        public void validateExploreButton(){
            String actual=exploreProduct.getText();
            Assert.assertEquals("not successful","Explore Products",actual);
        }
        public void clickClaimButton() throws InterruptedException {
            claimButton();
            implicitWait(2);
            claimOverview();
        }
        public void validateClaimButton(){
            String actual=claimbutton.getText();
            Assert.assertEquals("not successful","Claims",actual);
        }
        public void clickAnswersButton() throws InterruptedException {
            answerButton();
            implicitWait(2);
            AllProductAnswer();
        }
        public void validateAnswersButton(){
            String actual=answersbutton.getText();
            Assert.assertEquals("not successful","Answers",actual);
        }
        public void popUpClose(){
            setPopUp();
            setClosePopUp();
        }
        public void validatePopUp(){
            String actual=logo.getText();
            Assert.assertEquals("not successful","",actual);
        }
        public void searchingItem(){
            setSearchBox("Claim");
        }
        public void validateSearching(){
            String actual=searchBox.getText();
            Assert.assertEquals("not successful","",actual);
        }
        public void enterLoginPage(){
            login();
        }
        public void validatelogin(){
            String actual=login.getText();
            Assert.assertEquals("not successful","Log In",actual);
        }
        public void LoginInfo(){
            login();
            username("DJT");
            password("Password");
        }
        public void validateLoginCredential(){
            String actual=password.getText();
            Assert.assertEquals("not successful","",actual);
        }
        public void itemsSearch(){
            searchingItem("Auto");
        }
        public void validateItemSearch(){
            String actual=searchItem.getText();
            Assert.assertEquals("not successful","",actual);
        }
        public void scrollingDownHomePage(){
            scrollUpDownByHeight();
        }
        public void validateScrollingDown(){
            String actual=logo.getText();
            Assert.assertEquals("not successful","",actual);
        }
        public void dragAndDropLogo(){
            dragAndDrop(logo,exploreProduct);
        }
        public void validateDragnDrop(){
            String actual=logo.getText();
            Assert.assertEquals("not successful","",actual);
        }

    }

