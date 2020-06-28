package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {

    @FindBy(xpath = topMenuWebElement) public WebElement topMenu;
    @FindBy(xpath = navigationMenuWebElement) public WebElement navigationMenu;
    @FindBy(xpath = serviceMenuWebElement) public WebElement serviceMenu;
    @FindBy(xpath = transportServiceWebElement) public WebElement transportService;
    @FindBy(xpath = quickServiceWebElement) public WebElement quickService;
    @FindBy(xpath = userAccessLinkWebElement) public WebElement userAccessLink;
    @FindBy(xpath = oneWayRadioButtonWebElement) public WebElement oneWayRadio;
    @FindBy(xpath = checkBoxWebElement) public WebElement checkBox;
    @FindBy(xpath = trueBlueWebElement) public WebElement trueBlue;
    @FindBy(xpath = myTripWebElement) public WebElement myTrip;
    @FindBy(xpath = travelInfoWebElement) public WebElement travelInfo;

    //Setup Method
    public void topMenuSet() {
        topMenu.click();
    }
    public void navigationMenuSet() {
        navigationMenu.click();
    }
    public void serviceMenuSet() {
        serviceMenu.click();
    }
    public void transportServiceSet() {
        transportService.click();
    }
    public void quickServiceSet() {
        quickService.click();
    }
    public void userAccessLInkSet() {
        userAccessLink.click();
    }
    public void  radioButtonClick(){
        oneWayRadio.click();
    }
    public void  checkBoxClick(){
        checkBox.click();
    }
    public void  setTrueBlue(){
        trueBlue.click();
    }
    public void setMyTrip() {
        myTrip.click();
    }
    public void setTravelInfo() {
        travelInfo.click();
    }


    //Test Cases
    public void menuTop() throws InterruptedException {
        topMenuSet();
    }
    public void validationTopMenu(){
        String actual=topMenu.getText();
        Assert.assertEquals("","Flight Tracker",actual);
    }
    public void menuNavigation() {
        navigationMenuSet();
    }
    public void validationNavigationMenu(){
        String actual=navigationMenu.getText();
        Assert.assertEquals("","Book",actual);
    }
    public void menuService() throws InterruptedException {
        serviceMenuSet();
    }
    public void validationServiceMenu(){
        String actual=serviceMenu.getText();
        Assert.assertEquals("","Explore",actual);
    }
    public void transportService() throws InterruptedException {
        transportServiceSet();
    }
    public void validationTransportService(){
        String actual=transportService.getText();
        Assert.assertEquals("","",actual);
    }
    public void serviceQuick() throws InterruptedException {
        quickServiceSet();
    }
    public void validationQuickService(){
        String actual=quickService.getText();
        Assert.assertEquals("","Safety from the ground up.",actual);
    }
    public void accessUser() throws InterruptedException {
        userAccessLInkSet();
    }
    public void validationUserAccessLink(){
        String actual="";
        Assert.assertEquals("","",actual);
    }
    public void radioButtonSelectOneWay(){
        radioButtonClick();
    }
    public void validationOneWayRadio(){
        String actual=oneWayRadio.getText();
        Assert.assertEquals("","One-way",actual);
    }
    public void checkBoxSelect(){
        checkBoxClick();
    }
    public void validationCheckBox(){
        String actual=checkBox.getText();
        Assert.assertEquals("","Use TrueBlue points",actual);
    }
    public void blueTrue() throws InterruptedException {
        setTrueBlue();
    }
    public void validationTrueBlue(){
        String actual=trueBlue.getText();
        Assert.assertEquals("","TrueBlue",actual);
    }

    public void tripMy() throws InterruptedException {
        setMyTrip();
    }
    public void validationMyTrip(){
        String actual=myTrip.getText();
        Assert.assertEquals("","My Trips",actual);
    }

    public void infoTravel() throws InterruptedException {
        setTravelInfo();
    }
    public void validationTravelInfo(){
        String actual=travelInfo.getText();
        Assert.assertEquals("","Travel Info",actual);
    }


}
