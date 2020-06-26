package stepdefinition;

import common.WebAPI;
import home.Homepage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.amazon.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static Homepage homePage;
    public static void getInitElements(){
        homePage=PageFactory.initElements(driver,Homepage.class);
    }



}
