package home;
import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static webelements.HomepageWebElements.LogoButtonWebElement;
import static webelements.HomepageWebElements.TopbannerWebElement;
public class Homepage extends WebAPI{
    @FindBy(xpath = TopbannerWebElement) public WebElement topBanner;
    @FindBy (xpath = LogoButtonWebElement) public WebElement LogoButton;

    public void TopbannerSelecting() { topBanner.click();}
    public void logobuttonselecting() { LogoButton.click();}

    public void bannerSelect() throws InterruptedException {
        TopbannerSelecting();
        sleepFor(4);}


        public void LogoSelection() throws InterruptedException {
        logobuttonselecting();
        sleepFor(4);}

}
