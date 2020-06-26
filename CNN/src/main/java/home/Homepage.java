package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.ArrayList;
import java.util.List;

import static webelements.HomepageWebElements.*;

public class Homepage extends WebAPI {

    @FindBy(how = How.CSS,using = cnnUSWebElement) public WebElement cnnUS;
    @FindBy(how = How.CSS,using = cnnUSTextWebElement) public WebElement cnnUSText;
    @FindBy(how = How.CSS,using = cnnEditionWebElement) public WebElement cnnEdition;
    @FindBy(how = How.LINK_TEXT,using = editionInterWebElement) public WebElement editionInter;
    @FindBy(how = How.CSS,using = editionInterTextWebElement) public WebElement editionInterText;
    @FindBy(how = How.CSS,using = menuBarWebElement) public WebElement menuBar;
    @FindBy(how = How.CSS,using = menuSearchWebElement) public WebElement menuSearch;
    @FindBy(how = How.CSS,using = searchSubmitWebElement) public WebElement searchSubmit;
    @FindBy(how = How.CSS,using = searchEconomyTextWebElement) public WebElement searchEconomyText;
    @FindBy(how = How.CSS,using = cnnBusinessWebElement) public WebElement cnnBusiness;
    @FindBy(how = How.CSS,using = cnnBusinessTextWebElement) public WebElement cnnBusinessText;
    @FindBy(how = How.CSS,using = cnnBusinessPerspWebElement) public WebElement cnnBusinessPers;
    @FindBy(how = How.CSS,using = cnnBusinessPerspTextWebElement) public WebElement cnnBusinessPersText;
    @FindBy(how = How.CSS,using = entertainmentWebElement) public WebElement entertainment;
    @FindBy(how = How.XPATH,using = topstoryWebElement) public WebElement topstory;
    @FindBy(how = How.CSS,using = topstoryTextWebElement) public WebElement topstoryText;
    @FindBy(how = How.CSS,using = cnnsubheaderlistWebElement) public WebElement cnnsubheader ;
    @FindBy(how = How.XPATH,using = cnnPoliticsWebElement) public WebElement cnnPolitics ;
    @FindBy(how = How.XPATH,using = cnnPoliticsElection2020WebElement) public WebElement cnnPoliticsElection ;
    @FindBy(how = How.XPATH,using = cnnPoliticsElectionTextWebElement) public WebElement cnnPoliticsElectionText ;
    @FindBy(how = How.XPATH,using = cnnPElecStatesWebElement) public WebElement cnnPoliticsElectionStates ;
    @FindBy(how = How.XPATH,using = cnnStateVAWebElement) public WebElement stateVA;
    @FindBy(how = How.XPATH,using = cnnStateVATextWebElement) public WebElement cnnStateVAText;
    @FindBy(how = How.CSS,using = cnnHPScrollDownTextWebElement) public WebElement cnnHPScrollDownText;


    public void cnnUS(){ cnnUS.click(); }
    public void validateCNNUS(String expectedResult){
        String actualResult=cnnUSText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void cnnEditionPicker(){ cnnEdition.click();}
    public void cnnEditionInternational(){ editionInter.click(); }
    public void validateCNNEditionINT(String expectedResult){
        String actualResult=editionInterText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void ClickonSearchMenu(){ menuBar.click(); }
    public void enterKeywordInSearchBox(){ typeByCss("#header-search-bar","Economy");}
    public void submitSearch(){ searchSubmit.click();  }
    public void validateSearchMenu(String expectedResult){
        String actualResult=searchEconomyText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void cnnBusiness(){ cnnBusiness.click();}
    public void cnnBusinessScrolldown(){ scrollDownVertically(); }
    public void validateBusinessPage(String expectedResult){
        String actualResult=cnnBusinessText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void cnnEntertainment(){ entertainment.click(); }
    public void cnnEntertainmentTopStory(){ topstory.click(); }
    public void validateEntertainment(String expectedResult){
//        String actualResult=topstoryText.getText();
        String actualResult=getCurrentUrl();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void cnnBusinessPerspectives(){ cnnBusinessPers.click();; }
    public void validateBusinessPers(String expectedResult){
        String actualResult=cnnBusinessPersText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }

    public void cnnGoBackBusiness(){
        System.out.println(getCurrentPageUrl());
        navigateBack();
        System.out.println(getCurrentPageUrl());}
    public void validateGoBackBusiness(String expectedResult){
        String actualResult=getCurrentUrl();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void CNNHomePageScrollDown(){ scrollDownVertically(); }
    public void validateCNNHPScrollDown(String expectedResult){
        String actualResult=cnnHPScrollDownText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void cnnSubHeaders(){
//        List<WebElement> elements = driver.findElements(By.name("name"));
        List<WebElement> list = new ArrayList<WebElement>();
        list = driver.findElements(By.cssSelector("li[class='sc-chPdSV jUoWJl']"));
        System.out.println("Number of elements:" +list.size());

        for (int i=0; i<list.size();i++){
            System.out.println( list.get(i).getAttribute("data-section"));
        }

    }
    public void cnnPolitics() {  cnnPolitics.click(); }
    public void cnnPoliticsElection() {  cnnPoliticsElection.click(); }
    public void cnnPoliticsElectionRefresh() {  navigateRefresh(); }
    public void validateCNN2020Election(String expectedResult){
        String actualResult=cnnPoliticsElectionText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void cnnElectionStatesMouseHover(){
        mouseHoverByXpath("//body/div/div/div/div/div/div/div[5]");
        implicitWait(10);
        cnnPoliticsElectionStates.click();

    }
    public void electionStateVA(){ stateVA.click(); }
    public void validateCNN2020ElectionVA(String expectedResult){
        String actualResult=cnnStateVAText.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }


}
