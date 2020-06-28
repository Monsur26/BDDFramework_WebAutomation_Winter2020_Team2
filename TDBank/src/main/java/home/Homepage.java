package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(xpath = regionSelectWebElement) public WebElement regionSelect;
    @FindBy(xpath = selectCanadaRegionWebElement) public WebElement canadaSelect;
    @FindBy(xpath = loginDropDownWebElement) public WebElement loginDropDown;
    @FindBy(xpath = onlineBankingWebElement) public WebElement onlineBankingLInk;
    @FindBy(xpath = productsDropDownWebElement) public WebElement productsDropDown;
    @FindBy(xpath = CDsWebElement) public WebElement CDs;
    @FindBy(xpath = commercialLinkWebElement) public WebElement commercialLInk;
    @FindBy(css = industriesDropDownWebElement) public WebElement industriesDD;
    @FindBy(id = questionSearchBoxWebElement) public WebElement questionsSB;
    @FindBy(xpath = askNowButtonWebElement) public WebElement askNowButton;
    @FindBy(xpath = popularQuestionWebElement) public WebElement popularQuestionsMenu;
    @FindBy(xpath = openBankAccWebElement) public WebElement openingBankAcc;
    @FindBy(xpath = rightArrowSlideWebElements) public WebElement rightArrowSlide;
    @FindBy(xpath = leftArrowSlideWebElements) public WebElement leftArrowSlide;
    @FindBy(xpath = userNameWebElement) public WebElement userName;
    @FindBy(xpath = passwordWebElement) public WebElement password;
    @FindBy(xpath = rememberCheckBoxWebElement) public WebElement rememberMECHkBox;
    @FindBy(xpath = loginButtonWebElement) public WebElement loginButton;
    @FindBy(xpath = tdLogoWebElement) public WebElement tdLogo;

    public void region(){
        regionSelect.click();
    }
    public void regionCanada(){canadaSelect.click();}
    public void loginDD(){
        mouseHover(loginDropDown);
    }
    public void onlineBankingLink(){ onlineBankingLInk.click();
    }
    public void proDD(){
        mouseHover(productsDropDown);}
    public void CDs(){CDs.click();}
    public void commercialLInk(){commercialLInk.click();}
    public void industriesDD(){
        mouseHover(industriesDD);}
    public void questionsSearchBox(String query){questionsSB.sendKeys(query);}
    public void askButton(){askNowButton.click();}
    public void popularQA(){popularQuestionsMenu.click();}
    public void openingBankAccQuestion(){openingBankAcc.click();}
    public void setRightArrowSlide(){rightArrowSlide.click();}
    public void setLeftArrowSlide(){leftArrowSlide.click();}
    public void userName(String name){userName.sendKeys(name);}
    public void password(String pass){password.sendKeys(pass);}
    public void rememberChkBox(){rememberMECHkBox.click();}
    public void loginButton(){loginButton.click();}

    public void validateRegion(){
        String actual=regionSelect.getText();
        Assert.assertEquals("not successful","Select country",actual);
    }
    public void validateLoginDD(){
        String actual=loginDropDown.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateTDLogo(){
        String actual=tdLogo.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateIndustriesDD(){
        String actual=industriesDD.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateAskNOw(){
        String actual=askNowButton.getText();
        Assert.assertEquals("not successful","Ask now",actual);
    }

}
