package home;

import org.openqa.selenium.interactions.Actions;

public class Homepage {

    public void student() throws InterruptedException {
        Actions ac = new Actions(driver);
        ac.moveToElement(services).perform();
        student.click();
        sleepFor(3);
        cleanUp();
    }

    public void servicedropdown() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(services).perform();
        sleepFor(3);
        cleanUp();
    }

    public void productsdropdown() {
        Actions a = new Actions(driver);
        a.moveToElement(products).perform();
    }
    public void help() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(country).perform();
        country.click();
        canada.click();
        help.click();
        cleanUp();
    }
    public void search() throws InterruptedException {
        search.click();
        searchbar.sendKeys("debit card");
        enter.click();
        sleepFor(2);
        cleanUp();
    }
    public void country() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(country).perform();
        country.click();
        canada.click();
        cleanUp();
    }
    public void logging() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(login).perform();
        login.click();
        cleanUp();
    }
    public void signin() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(login).perform();
        login.click();
        cleanUp();
    }
    public void giftcard() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(login).perform();
        mouseHoverByXpath(giftcardWebElement);
        giftcard.click();
        cleanUp();
    }
    public void register() throws InterruptedException {
        Actions a = new Actions(driver);
        a.moveToElement(login).perform();
        mouseHoverByXpath(giftcardWebElement);
        giftcard.click();
        register.click();
        cleanUp();
    }







}
