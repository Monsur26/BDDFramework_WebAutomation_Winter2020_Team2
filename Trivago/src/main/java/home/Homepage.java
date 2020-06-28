package home;

import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(how= How.XPATH, using = searchPLWebElement) public WebElement searchPL;




    public void searchMiami(){
        searchPL.sendKeys("Miami");
    }
    public void clickSearch(){
        searchMiami();
        searchPL.click();
    }
}
