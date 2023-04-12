package bss.train.week5;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.annotations.Listeners;

@Listeners(org.testng.reporters.EmailableReporter.class)
public class testUI {
	private WebDriver driver;
	String URL_form = "http://localhost:3000";
	String URL_display = "http://localhost:3000/display/display";
	String email_user = "email";
	String first_name = "firstName";
	String last_name = "lastName";
	String bussiness_field = "business";
	

	
	public String signIn(String email, String firstName, String lastName, String business) {	
		driver.findElement(By.name(email_user)).sendKeys(email);
		driver.findElement(By.name(first_name)).sendKeys(firstName);
	    driver.findElement(By.name(last_name)).sendKeys(lastName);
	    WebElement dropDown = driver.findElement(By.id(bussiness_field));
	    Select select = new Select(dropDown);
		select.selectByVisibleText(business);
		driver.findElement((By.xpath("//button[text()='Save']"))).click();
		return business;
	}

  @BeforeMethod
	  public void beforeMethod() {
	  System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
      ChromeOptions ops = new ChromeOptions();
      ops.addArguments("--remote-allow-origins=*");
	  driver = new ChromeDriver(ops);
      driver.get("http://localhost:3000/");
	  }
  @Test(priority = 1)
  public void invalidEmail() {
	  signIn("invalidEmail", "lan", "nguyen", "Pet Shops");
	  

      String error = driver.findElement(By.id("error-email")).getText();
      Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
      Assert.assertEquals(error, "Please enter a valid email!");

  }
  
  @Test(priority = 2) 
  public void blankEmail() {
	  signIn("", "hoa", "nguyen", "Food & Beverage");
      String error = driver.findElement(By.id("error-email")).getText();
      Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
      Assert.assertEquals(error, "Please enter a valid email!");
  }
  
  @Test(priority = 3)
  public void blankFirstName() {
	  signIn("hoa@gmail.com", "", "giang", "Food & Beverage");
      String error = driver.findElement(By.id("error-firstName")).getText();
      Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
      Assert.assertEquals(error, "Please enter your first name!");
	
  }
  
  @Test(priority = 4)
  public void blankLastName() {
	  signIn("hoa@gmail.com", "hoa", "", "Food & Beverage");
      String error = driver.findElement(By.id("error-lastName")).getText();
      Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
      Assert.assertEquals(error, "Please enter your last name!");
      
	
  }
  
  @Test(priority = 5)
  public void blankBussinessDropDown() {
	 signIn("hoa@gmail.com", "hoa", "nguyen", "[choose yours]");
	 WebElement dropDown = driver.findElement(By.id(bussiness_field));
	 String error = driver.findElement(By.id("error-business")).getText();
	 Select select = new Select(dropDown);
	   // Check if the selected value is the default one
	Assert.assertEquals("[choose yours]", select.getFirstSelectedOption().getText());
	Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
    Assert.assertEquals(error, "Please choose your business!");
	  
  }
  
  @Test(priority = 6)
  public void testSaveButton() throws InterruptedException {
	  signIn("hoa@gmail.com", "hoa", "nguyen", "Pet Shops");
	  Thread.sleep(3000);
		
	  WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
	  wait.until(ExpectedConditions.urlToBe(URL_display));
      Assert.assertEquals(driver.getCurrentUrl(), URL_display);
      
      
	
  }

  @Test(priority = 7)
  public void testCancelButton() {
	  driver.findElement((By.xpath("//button[text()='Cancel']"))).click();
	  WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
	  wait.until(ExpectedConditions.urlToBe(URL_display));
      Assert.assertEquals(driver.getCurrentUrl(), URL_display);
      
      
	
  }
  @AfterMethod
  public void afterMethod() {
	  try {
		    // Wait for 5 seconds
		    Thread.sleep(3000);
		} catch (InterruptedException e) {
		    e.printStackTrace();
		}

	driver.quit();
	
  }

}
