package home;

import common.WebAPI;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;

import java.util.List;

import static webelements.Progressive_HomepageWebElements.*;

public class Progressive_Homepage extends WebAPI {

    @FindBy(xpath = quoteWebElement)
    public WebElement quote;
    @FindBy(xpath = zipcodeWebElement)
    public WebElement zip;
    @FindBy(xpath = autoWebElement)
    public WebElement auto;
    @FindBy(xpath = exploreWebElement)
    public WebElement exp;
    @FindBy(xpath = saveWebElement)
    public WebElement save;
    @FindBy(xpath = popWebElement)
    public WebElement pop;
    @FindBy(xpath = loginWebElement)
    public WebElement log;
    @FindBy(xpath = userWebElement)
    public WebElement user;
    @FindBy(xpath = passWebElement)
    public WebElement pass;
    @FindBy(xpath = checkboxWebElement)
    public WebElement check;
    @FindBy(xpath = submitWebElement)
    public WebElement submit;
    @FindBy(xpath = callWebElement)
    public WebElement call;
    @FindBy(css = boatWebElement)
    public WebElement boat;
    @FindBy(xpath = boatzipWebElement)
    public WebElement zb;


    public void clickquote() {
        quote.click();
    }

    public void clickzip() {
        zip.click();
    }

    public void clickauto() {
        auto.click();
    }

    public void clickexplore() {
        exp.click();
    }

    public void clicksave() {
        save.click();
    }

    public void clickpop() {
        pop.click();
    }

    public void clicklog() {
        log.click();
    }

    public void clickcheck() {
        check.click();
    }

    public void clicksubmit() {
        submit.click();
    }

    public void clickcall() {
        call.click();
    }

    public void clickboat() {
        boat.click();
    }

    public void clickzb() {
        zb.click();
    }

    public void pass() {
        pass.click();
    }

    public void user() {
        user.click();
    }

}

















