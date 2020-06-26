package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.Iterator;
import java.util.Set;
import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {
    @FindBy(how = How.XPATH,using = insuranceWebElement) public WebElement insurance;
    @FindBy(how = How.LINK_TEXT,using = idvisNfamilyWebElement) public WebElement idvisNFamily;
    @FindBy(how = How.CSS,using = idvisNfamilyTextWebElement) public WebElement idvisNFamilyText;
    @FindBy(how = How.LINK_TEXT,using = shopAllPlansWebElement) public WebElement shopAllPlans;
    @FindBy(how = How.XPATH,using = memberResourcesWebElement) public WebElement memberResource;
    @FindBy(how = How.XPATH,using = understandInWebElement) public WebElement understandInsu;
    @FindBy(how = How.CSS,using = understandInTextWebElement) public WebElement understandInsuText;
    @FindBy(how = How.CSS,using = searchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.CSS,using = searchButtonWebElement) public WebElement searchButton;
    @FindBy(how = How.CSS,using = searchvalueWebElement) public WebElement searchvalue;
    @FindBy(how = How.LINK_TEXT,using = searchResultTextWebElement) public WebElement searchResultText;
    @FindBy(how = How.LINK_TEXT,using = findADoctorWebElement) public WebElement findADoctor;
    @FindBy(how = How.LINK_TEXT,using = findOnlineDoctorWebElement) public WebElement findOnlineDoctor;
    @FindBy(how = How.CSS,using = findOnlineDoctorTextWebElement) public WebElement findOnlineDoctorText;
    @FindBy(how = How.XPATH,using = signInWebElement) public WebElement signIn;
    @FindBy(how = How.LINK_TEXT,using = singInMyuhcWebElement) public WebElement signInMyuhc;
    @FindBy(how = How.CSS,using = singInMyuhcTextWebElement) public WebElement signInMyuhcText;
    @FindBy(how = How.XPATH,using = findVProviderWebElement) public WebElement findVProvider;
    @FindBy(how = How.XPATH,using = healthNWellnessrWebElement) public WebElement healthNWellness;
    @FindBy(how = How.LINK_TEXT,using = healthNWellnessrPreventiveCareWebElement) public WebElement healthNWellnessPreventiveCare;
    @FindBy(how = How.LINK_TEXT,using = HNWPreventiveCareTipsWebElement) public WebElement HNWPreventiveCareTips;
    @FindBy(how = How.XPATH,using = HNWPreventiveCareTipsTextWebElement) public WebElement HNWPreventiveCareTipsText;
    @FindBy(how = How.LINK_TEXT,using = ForProdiversWebElement) public WebElement forProviders;
    @FindBy(how = How.XPATH,using = ForProdiversNewUserWebElement) public WebElement forProvidersNewUser;
    @FindBy(how = How.XPATH,using = ForProdiversNewUserTextWebElement) public WebElement forProvidersNewUserText;

    public void UHCHomePage(){
        String title= driver.getTitle();
        System.out.println("Title : "+driver.getTitle()); }
    public void UHCInsurance() { insurance.click(); }
    public void UHCInIndividualFamily(){ idvisNFamily.click();}
    public void validateIndividualNFamily(String expectedResult){
        String actualResult=idvisNFamilyText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
 //    public void UHCInsuranceShopAllPlans() {
//        UHCInsurance();
//        shopAllPlans.click();
//    }
    public void UHCMemberResources(){memberResource.click(); }
    public void UHVMReUnderstandIn(){ understandInsu.click(); }
    public void validateUHCMemberResources(String expectedResult){
        String actualResult=understandInsuText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void UHCSearch(){ searchBox.sendKeys("Dental Plan"); }
    public void clickSearch(){ searchButton.click();}
    public void clickValue(){ searchvalue.click();}
    public void validateUHCSearch(String expectedResult){
        String actualResult=searchResultText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void UHCFindADoctor(){ findADoctor.click(); }
    public void UHCFindAOnlineDoctor(){ findOnlineDoctor.click(); }
    public void validateUHCFindDoctor(String expectedResult){
        String actualResult=findOnlineDoctorText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void windowHandle(){
        Set<String> windowIds =driver.getWindowHandles();
        Iterator<String> iter=windowIds.iterator();
        String mainWindow=iter.next();
        String childWindow=iter.next();
        driver.switchTo().window(childWindow);
    }
    public void UHCSignIn(){ signIn.click(); }
    public void UHCSignInMyUHC(){  signInMyuhc.click(); }
    public void MYUHCSignin(){ windowHandle();}
    public void validateMYUHC(String expectedResult){
        String actualResult=signInMyuhcText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void UHCHealthNWellness(){ healthNWellness.click();}
    public void UHCHealthNWellnessPreventiveCare(){ healthNWellnessPreventiveCare.click();}
    public void UHCHealthNWellnessPreventiveCareTips(){ HNWPreventiveCareTips.click();}
    public void validateUHCHealthNWellness(String expectedResult){
        String actualResult=HNWPreventiveCareTipsText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void UHCForProviders(){ forProviders.click();}
    public void UHCForProvidersNewWindow(){ windowHandle(); }
    public void UHCForProvidersNewUsers(){ forProvidersNewUser.click(); }
    public void validateProvidersNewUser(String expectedResult){
        String actualResult=forProvidersNewUserText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
}
