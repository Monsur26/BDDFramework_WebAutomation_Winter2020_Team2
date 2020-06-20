package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(xpath = menuHoverWebElement) public WebElement menuHover;
    @FindBy(xpath = bookingOverviewWebElement) public WebElement bookingOverview;
    @FindBy(xpath = nationsDropdownWebElement) public WebElement countryDropDown;
    @FindBy(xpath = USDDropDownWebElement) public WebElement USDDropDown;
    @FindBy(xpath = rightArrowSlideWebElement) public WebElement rightArrowSlide;
    @FindBy(xpath = leftArrowSlideWebElement) public WebElement leftArrowSlide;
    @FindBy(xpath = hotelsInNyWebElement) public WebElement hotelInNY;
    @FindBy(id = emailBoxWebElement) public WebElement emailBox;
    @FindBy(xpath = subscribeButtonWebElement) public WebElement subscribeButton;
    @FindBy(xpath = nycDestinationBoxWebElement) public WebElement destinationBox;
    @FindBy(xpath = checkINBoxWebElement) public WebElement checkinBox;
    @FindBy(xpath = checkinDateWebElement) public WebElement checkinDate;
    @FindBy(xpath = checkoutWebElement) public WebElement checkoutBox;
    @FindBy(xpath = checkoutDateWebElement) public WebElement checkoutDate;
    @FindBy(xpath = roomBoxWebElement) public WebElement roomBox;
    @FindBy(xpath = adultsIncreaseButtonWebElement) public WebElement adultsIncreaseButton;
    @FindBy(xpath = roomIncreaseButtonWebElement) public WebElement roomIncreaseButton;
    @FindBy(xpath = applyButtonWebElement) public WebElement applyButton;
    @FindBy(xpath = RoomBoxValidationWebElement) public WebElement roomValidation;
    @FindBy(xpath = searchButtonWebElement) public WebElement searchButton;
    @FindBy(xpath = sortByTextWebElement) public WebElement sortBy;
    @FindBy(xpath = trivagoInstagramWebElement) public WebElement trivagoInsta;
    @FindBy(xpath = trivagoInstavalidateWebElement) public WebElement trivagoInstaval;


    public void setMenuHover(){
        Actions actions=new Actions(driver);
        actions.moveToElement(menuHover).perform();
    }
    public void setBookingOverview(){ bookingOverview.click();}
    public void setUSDDropDown(){
        Select select=new Select(driver.findElement(By.xpath(USDDropDownWebElement)));
        select.selectByIndex(0);
    }
    public void nationsDropDown(){
        Select select=new Select(driver.findElement(By.xpath(nationsDropdownWebElement)));
        select.selectByIndex(4);
    }
    public void rightArrowSlide(){rightArrowSlide.click();}
    public void leftArrowSlide(){leftArrowSlide.click();}
    public void setEmailBox(String email){emailBox.sendKeys(email);}
    public void setSubscribeButton(){subscribeButton.click();}
    public void setDestinationBox(String destination){
        destinationBox.sendKeys(destination);
        destinationBox.sendKeys(Keys.ARROW_DOWN);
        destinationBox.sendKeys(Keys.ENTER);
    }
    public void checkInBox(){checkinBox.click();}
    public void checkInDate(){checkinDate.click();}
    public void checkoutBox(){checkoutBox.click();}
    public void checkOutDate(){checkoutDate.click();}
    public void roomBox(){roomBox.click();}
    public void adultsIncreaseButton(){adultsIncreaseButton.click();}
    public void roomsIncreaseButton(){roomIncreaseButton.click();}
    public void applyButton(){applyButton.click();}
    public void searchButton(){searchButton.click();}
    public void trivagoInsta(){
        trivagoInsta.click();
        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }

    }
    public void validationMenuHoverAndSelect(){
        String actual=bookingOverview.getText();
        Assert.assertEquals("not successful","Booking overview",actual);
    }
    public void validateUSDDropdown(){
        String actual="Euro";
        Assert.assertEquals("Not successful","Euro",actual);
    }
    public void validateDropdownBottom(){
        String actual= "Belgie";
        Assert.assertEquals("not successful","Belgie",actual);
    }
    public void validateArrowSlide(){
        String actual=hotelInNY.getText();
        Assert.assertEquals("Not successful","Hotels In New York ",actual);
    }
    public void validateEmailSubscription(){
        String actual=emailBox.getText();
        Assert.assertEquals("not successful","",actual);
    }
    public void validateDestinationBox(){
        String actual=destinationBox.getText();
        Assert.assertEquals("Not successful","",actual);
    }
    public void validateCheckin(){
        String actual=checkinBox.getText();
        Assert.assertEquals("not successful","Check in",actual);
    }
    public void validateCheckout(){
        String actual=checkoutBox.getText();
        Assert.assertEquals("not successful","Check out",actual);
    }
    public void validateRoomDetail(){
        String actual=roomValidation.getText();
        Assert.assertEquals("not successful","3 Guest",actual);
    }
    public void validateTrivagoInstagramPage(){
        String actual=trivagoInstaval.getText();
        Assert.assertEquals("not successful","trivago",actual);
    }

}
