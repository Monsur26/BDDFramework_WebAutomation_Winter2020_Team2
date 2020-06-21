package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;
import static webelements.HomepageWebElements.*;


public class Homepage extends WebAPI {
    @FindBy(xpath = servicesdropdownWebElement) public WebElement services;
    @FindBy(xpath = studentbankingWebElement) public WebElement student;
    @FindBy(xpath = productsDropDownWebElement) public WebElement products;
    @FindBy(xpath = searchWebElement) public WebElement search;
    @FindBy(xpath = searchbarWebElement) public WebElement searchbar;
    @FindBy(xpath = enterWebElement) public WebElement enter;
    @FindBy(xpath = countryWebElement) public WebElement country;
    @FindBy(xpath = canadaWebElement) public WebElement canada;
    @FindBy(xpath = helpWebElement) public WebElement help;
    @FindBy(css = loginWebElement) public WebElement login;
    @FindBy(xpath = giftcardWebElement) public WebElement giftcard;
    @FindBy(css = registerWebElement) public WebElement register;
    public  void enterKeyWord(String keyword){
        search.sendKeys(keyword);
    }

    public void services(){
    services.click();
}
    public void student(){
        student.click();
    }
    public void products(){
        products.click();
    }
    public void searchbar(){
        searchbar.click();
    }
    public void search(){
        search.click();
    }
    public void enter(){
        enter.click();
    }
    public void country(){
        country.click();
    }
    public void canada(){
        canada.click();
    }
    public void help(){ help.click();}
    public void login(){
        login.click();
    }
    public void giftcard(){
        giftcard.click();
    }
    public void register(){
        register.click();
    }













}