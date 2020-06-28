package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {

    @FindBy(linkText = topMenuBusinessWebElement) public WebElement topMenuBusiness;
    @FindBy(xpath = myVerizonWebElement) public WebElement myVerizon;
    @FindBy(xpath = movingButtonWebElement) public WebElement movingButton;
    @FindBy(name = searchButtonWebElement) public WebElement searchButton;
    @FindBy(xpath = searchingInputWebElement) public WebElement searchingInput;
    @FindBy(xpath = radioButtonYesWebElement) public WebElement radioButtonYes;
    @FindBy(xpath = radioButtonNoWebElement) public WebElement radioButtonNo;
    @FindBy(id = selectedOptDropDownWebElement) public WebElement selectedOptDropDown;
    @FindBy(id = signInButtonWebElement) public WebElement signInButton;
    @FindBy(xpath = registerButtonWebElement) public WebElement registerButton;
    @FindBy(xpath = locateButtonWebElement) public WebElement locateButton;
    @FindBy(xpath = locateSignInWebElement) public WebElement locateSignIn;
    @FindBy(id = dropDownChangeServiceWebElement) public WebElement dropDownChangeService;
    @FindBy(xpath = checkBoxButtonWebElement) public WebElement checkBoxButton;
    //Setup Method
    public void setTopMenuBusiness(){
        topMenuBusiness.click();
    }
    public void setMyVerizon(){
        mouseHover(myVerizon);
    }
    public void setMovingButton(){
        movingButton.click();
    }
    public void setSearchButton(String keyword){
        searchButton.click();
        searchingInput.sendKeys(keyword);
        searchingInput.sendKeys(Keys.ENTER);
    }
    public void setRadioButtonYes(){
        radioButtonYes.click();
    }
    public void setRadioButtonNo(){
        radioButtonNo.click();
    }
    public void setSelectedOptDropDown(){
        dropDownByValue(selectedOptDropDown,"Business");
    }
    public void setSignInButton(){
        mouseHover(signInButton);
    }
    public void setRegisterButton(){
        registerButton.click();
    }
    public void setLocateButton(){
        locateButton.click();
    }
    public void setLocateSignIn(){
        locateSignIn.click();
    }
    public void setDropDownChangeService(){
        dropDownByValue(dropDownChangeService,"Move service to new address");
    }
    public void setCheckBoxButton(){
        checkBoxButton.click();
    }
    //Test Case
    public void businessTopMenu() throws InterruptedException{
        setTopMenuBusiness();
    }
    public void validationTopMenu(){
        String actual=topMenuBusiness.getText();
        Assert.assertEquals("not successful","Business",actual);
    }
    public void myVerizonSelect() throws InterruptedException{
        setMyVerizon();
    }
    public void validationMyVerizon(){
        String actual=myVerizon.getText();
        Assert.assertEquals("not successful","My Verizon",actual);
    }


    public void movingButtonSelect() throws InterruptedException{
        setMyVerizon();
        setMovingButton();
    }
    public void validationMovingButton(){
        String actual=movingButton.getText();
        Assert.assertEquals("not successful","",actual);
    }

    public void searchButtonSelect(){
        setSearchButton("Fast Internet");
        implicitWaitTime(20);
    }
    public void validationSearchButton(){
        String actual=searchButton.getText();
        Assert.assertEquals("not successful","",actual);
    }

    public void radioButtonYesSelect() throws InterruptedException{
        setSearchButton("Fast Internet");
        implicitWaitTime(20);
        setRadioButtonYes();
        setRadioButtonNo();
    }
    public void validationRadioButton(){
        String actual=radioButtonYes.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void dropDownSelectedOpt() throws InterruptedException{
        setSearchButton("Fastest Internet");
        implicitWaitTime(5);
        setSelectedOptDropDown();
    }
    public void validationDropDown(){
        String actual=selectedOptDropDown.getText();
        Assert.assertEquals("not successful","",actual);
    }

    public void signInButtonSelect() throws InterruptedException{
        setSignInButton();
    }
    public void validationSignIn(){
        String actual=signInButton.getText();
        Assert.assertEquals("not successful","Sign In",actual);
    }
    public void registerButtonSelect() throws InterruptedException{
        setSignInButton();
        setRegisterButton();
    }
    public void validationRegisterButton(){
        String actual="";
        Assert.assertEquals("not successful","",actual);
    }
    public void locateButtonSelect() throws InterruptedException{
        setLocateButton();
    }
    public void validationLocateButton(){
        String actual="";
        Assert.assertEquals("not successful","",actual);
    }
    public void locateSignInSelect()throws InterruptedException{
        setLocateButton();
        setLocateSignIn();
    }
    public void validationLocateSignIn(){
        String actual=locateSignIn.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void dropDownChangeSelect()throws InterruptedException{
        setLocateButton();
        setLocateSignIn();
        setDropDownChangeService();
    }
    public void validationDropDownChange(){
        String actual=dropDownChangeService.getText();
        Assert.assertEquals("not successful","",actual);
    }






    public void checkBoxButtonSelect()throws InterruptedException{
        setCheckBoxButton();
    }

}
