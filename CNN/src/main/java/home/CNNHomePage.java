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
       public  void enterKeyWord(String keyword){
           search.sendKeys(keyword);
       }


       public  void clickhealth(){ health.click(); }
       public void clickwellness(){
           wellness.click();
       }
       public void clickedition(){
           edition.click();
       }

       public void clickinternational(){ international.click(); }
       public void clickhamburger(){ hamburger.click(); }
       public void clickpolitics(){ politics.click(); }
       public void clickmagnify(){ magnify.click(); }
       public void clicksearch(){ search.click(); }
       public void clickbutton(){ button.click(); }
       public void clickstories(){ stories.click(); }
       public void clickuser(){ user.click(); }
       public void clickemail(){ email.click(); }
       public void password(){ password.click(); }
       public void login(){ login.click(); }
       public void entertainment(){ entertainment.click(); }
        public void validateSearchProduct(String expectedResult) {
            String actualResult = searchValidText.getText();
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

        }
        public void validateSearchProduct(List<String> expectedResult) {
            String actualResult = searchValidText.getText();
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }}
