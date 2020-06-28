package home;

import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.HomepageWebElements.*;


public class Homepage extends WebAPI {
    @FindBy(how = How.CSS, using = bookWebElement) public WebElement book;
    @FindBy(how = How.CSS, using = logInWebElement) public WebElement logIn;
    public void bookSelection() throws InterruptedException {
        book.click();
        sleepFor(3);
    }
    public void clickLogIn() throws InterruptedException {
        logIn.click();
        sleepFor(3);
    }

}
