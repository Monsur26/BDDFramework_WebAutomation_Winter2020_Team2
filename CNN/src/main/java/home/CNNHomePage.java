package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;
import static webelements.HomepageWebElements.*;

   public class CNNHomePage extends WebAPI {

        @FindBy(how = How.XPATH, using = healthWebElement) public WebElement health;
        @FindBy(how = How.XPATH, using = wellnessWebElement) public WebElement wellness;
        @FindBy(how = How.XPATH, using = editionWebElement) public WebElement edition;
        @FindBy(how = How.XPATH, using = internationalWebElement) public WebElement international;
        @FindBy(how = How.XPATH, using = hamburgerWebElement) public WebElement hamburger;
        @FindBy(how = How.XPATH, using = politicsWebElement) public WebElement politics;
        @FindBy(how = How.CSS, using = magnifyWebElement) public WebElement magnify;
        @FindBy(how = How.XPATH, using = searchBarWebElement) public WebElement search;
        @FindBy(how = How.CSS, using = buttonSearchWebElement) public WebElement button;
        @FindBy(how = How.XPATH, using = storiesWebElement) public WebElement stories;
        @FindBy(how = How.CSS, using = userWebElement) public WebElement user;
        @FindBy(how = How.XPATH, using = emailWebElement) public WebElement email;
        @FindBy(how = How.XPATH, using = passwordWebElement) public WebElement password;
        @FindBy(how = How.CSS, using = loginWebElement) public WebElement login;
        @FindBy(how = How.CSS, using = entertainmentWebElement) public WebElement entertainment;
        @FindBy(how = How.XPATH, using = searchValidTextWebElements) public WebElement searchValidText;

        public void validateSearchProduct(String expectedResult) {
            String actualResult = searchValidText.getText();
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

        }
        public void validateSearchProduct(List<String> expectedResult) {
            String actualResult = searchValidText.getText();
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }}
