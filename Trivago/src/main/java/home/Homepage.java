package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(how = How.CSS,using = trivagoSearchBoxWebElement) public WebElement tSearchBox;
    @FindBy(how = How.XPATH,using = trivagoSearchSubmitWebElement) public WebElement tSearchSubmit;
    @FindBy(how = How.CSS,using = LosAngelesTextWebElement) public WebElement LAHotelText;
    @FindBy(how = How.CSS,using = trivagoMenuWebElement) public WebElement tMenu;
    @FindBy(how = How.CSS,using = trivagoCurrencyWebElement) public WebElement tCurrency;
    @FindBy(how = How.CSS,using = trivagoLoginWebElement) public WebElement tLogin;
    @FindBy(how = How.CSS,using = emailWebElement) public WebElement email;
    @FindBy(how = How.CSS,using = emailNextWebElement) public WebElement emailNext;
    @FindBy(how = How.CSS,using = trivagoLoginWithGWebElement) public WebElement tLoginWithG;
    @FindBy(how = How.XPATH,using = trivagoCheckInWebElement) public WebElement tCheckIn;
    @FindBy(how = How.XPATH,using = trivagoCheckInDateWebElement) public WebElement tCheckInDate;
    @FindBy(how = How.XPATH,using = CheckInDateTextWebElement) public WebElement tCheckInDateText;
    @FindBy(how = How.XPATH,using = trivagoCheckOutDateWebElement) public WebElement tCheckOutDate;
    @FindBy(how = How.XPATH,using = CheckOutDateTextWebElement) public WebElement tCheckOutDateText;
    @FindBy(how = How.XPATH,using = hotelSearchTextWebElement) public WebElement hotelSearchText;
    @FindBy(how = How.XPATH,using = scrollDownSearchTextWebElement) public WebElement scrollDownSearchText;

    //    @FindBy(how = How.CSS,using = trivagoSearchSortWebElement) public WebElement tSearchSort;
    @FindBy(how = How.XPATH,using = trivagoSearchSortWebElement) public WebElement tSearchSort;
    @FindBy(how = How.XPATH,using = trivagoSearchMoreFiltertWebElement) public WebElement tSearchMoreFilter;
    @FindBy(how = How.XPATH,using = moreFiltertCarParkWebElement) public WebElement tFilterCarpark;
    @FindBy(how = How.XPATH,using = moreFiltertCarParkTextWebElement) public WebElement tFilterCarparkText;
    @FindBy(how = How.XPATH,using = moreFiltertHotelfacilityWebElement) public WebElement tFilterHotelFacility;
    @FindBy(how = How.XPATH,using = UKHotelViewDealWebElement) public WebElement UKViewDeal;
    @FindBy(how = How.XPATH,using = UKHotelAccoWebElement) public WebElement UKHotelAcco;
    @FindBy(how = How.CSS,using = UKHotelAccoHotelWebElement) public WebElement UKHotelAccoHotel;
    @FindBy(how = How.XPATH,using = guestRatingWebElement) public WebElement guestRating;
    @FindBy(how = How.XPATH,using = guestRatingVGoodWebElement) public WebElement guestRatingVGood;
    @FindBy(how = How.XPATH,using = UKHotelMapViewWebElement) public WebElement UKHotelMapView;
    @FindBy(how = How.XPATH,using = UKHotelMapViewTextWebElement) public WebElement UKHotelMapViewText;




    public void enterKeyword(){ tSearchBox.sendKeys("Los Angeles, CA");}
    public void clickOnSearch(){  tSearchSubmit.click();  }
    public void validateHotelSearch(String expectedResult){
        String actualResult=LAHotelText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void trivagoSearchMoreFilter() throws InterruptedException{
        tSearchBox.sendKeys("Los Angeles, CA");
        tSearchSubmit.click();
        mouseHoverByXpath("//*[@id=\"page_wrapper\"]/section/div/div/ul/li[5]/button/span");
    }
    public void trivagoMenu() throws InterruptedException{ mouseHoverByCSS("#user-text"); }
    public void validateTrivagoMenu(){ validateTestCase(tMenu,"Menu"); }

    public void trivagoCurrency() throws InterruptedException{
        Select select=new Select(tCurrency);
        select.selectByVisibleText("GBP - British Pound");
        sleepFor(5);
    }
    public void validateCurrencyChange(){ validateTestCase(tCurrency,"GBP");}

    public void trivagoLogin(){ tLogin.click();}
    public void trivagoemail(){ email.click();}
    public void trivagoemailNext(){ emailNext.click();}
    public void trivagoCheckIn() { tCheckIn.click(); }
    public void checkinDate(){ tCheckInDate.click();  }
    public void validateCheckIn(){ validateTestCase(tCheckInDateText,"Check in"); }
    public void trivagoCheckInOut(){ tCheckInDate.click();}
    public void checkoutDate(){ tCheckOutDate.click(); }
    public void validateCheckout(){ validateTestCase(tCheckOutDateText,"Check out");}
    public void validateHotelSearch(){ validateTestCase(hotelSearchText,"City center");}
    public void trivagoSearchScroll(){ scrollDownVertically(); }
    public void validateSearchScrollDown(){validateTestCase(scrollDownSearchText,"Want to receive exclusive hotel offers? Subscribe to our newsletter!\nEmail address");}
    public void trivagosearchMoreFilter() throws InterruptedException { tSearchMoreFilter.click();}
    public void filterCarpark() throws InterruptedException { tFilterCarpark.click(); }
    public void validateSearchMoreFilters(){validateTestCase(tFilterCarpark,"Car park");}
    public void londonHotels(){tSearchBox.sendKeys("London, UK");}
    public void trivagosearchHotelFacility() throws InterruptedException { tFilterHotelFacility.click(); }
    public void validateHotelFacilities(){validateTestCase(tFilterHotelFacility,"Hotel Facilities");}
    public void londonSearchAccommodation() throws InterruptedException { UKHotelAcco.click();}
    public void accommodationOption(){ UKHotelAccoHotel.click(); }
    public void validateSearchAccommodation(){ validateTestCase(UKHotelAcco,"Accommodation \nHotel");}
    public void UKHotelGuestRating(){guestRating.click();}
    public void UKGuestRatingVGood(){guestRatingVGood.click();}
    public void validateUKHotelGuestRating(){ validateTestCase(guestRatingVGood,"Guest rating \nAll");}
}
