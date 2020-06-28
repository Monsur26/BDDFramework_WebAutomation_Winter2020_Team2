package home;
import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI{
    @FindBy(xpath = TopbannerWebElement) public WebElement topBanner;
    @FindBy (xpath = LogoButtonWebElement) public WebElement LogoButton;
    @FindBy(how= How.XPATH,using = USWebElement) public WebElement US;
    @FindBy(how=How.XPATH,using = editionWebElement) public WebElement edition;
    @FindBy(how=How.XPATH,using = videoWebElement) public WebElement video;
    @FindBy(how=How.XPATH,using = travelWebElement) public WebElement travel;
    @FindBy(how=How.XPATH,using = entertainmentWebElement) public WebElement entertainment;
    @FindBy(how=How.XPATH,using = healthWebElement) public WebElement health;
    @FindBy(how=How.XPATH,using = politicsWebElement) public WebElement politics;
    @FindBy(how=How.XPATH,using = opinionWebElement) public WebElement opinion;
    @FindBy(how=How.XPATH,using = stylesWebElement) public WebElement styles;
    @FindBy(how=How.XPATH,using = accountWebElement) public WebElement account;


    public void TopbannerSelecting() { topBanner.click();}
    public void logobuttonselecting() { LogoButton.click();}
    public void LogoSelection() throws InterruptedException {
        logobuttonselecting();
        sleepFor(4);}

    public void bannerSelect() throws InterruptedException {
        TopbannerSelecting();
        sleepFor(2);}

    public void clickUS() throws InterruptedException {
        US.click();
        sleepFor(2);
    }
    public void clickEdition() throws InterruptedException {
        edition.click();
        sleepFor(2);
    }
    public void clickVideo() throws InterruptedException {
        video.click();
        sleepFor(2);
    }
    public void clickTravel() throws InterruptedException {
        travel.click();
        sleepFor(2);
    }
    public void clickEntertainment() throws InterruptedException {
        entertainment.click();
        sleepFor(2);
    }
    public void clickHealth() throws InterruptedException {
        health.click();
        sleepFor(2);
    }
    public void clickPolitics() throws InterruptedException {
        politics.click();
        sleepFor(2);
    }
    public void clickOpinion() throws InterruptedException {
        opinion.click();
        sleepFor(2);
    }
    public void clickStyles() throws InterruptedException {
        styles.click();
        sleepFor(2);
    }
    public void clickAccount() throws InterruptedException {
        account.click();
        sleepFor(2);
    }



}
