package org.Next.co.uk.pagespackage;

import org.Next.co.uk.common.DriverFactory;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;



public class Homepage  extends DriverFactory {
    //WebDriverWait wait = new WebDriverWait(driver, 5);

    public void baseurl() throws InterruptedException {
        driver.getCurrentUrl();
        //List<WebElement>options=driver.findElements(By.cssSelector("span[class='PrimarynavlinksText']"));
        //options.contains("GIRLS");
        Actions act=new Actions(driver);
        act.moveToElement(driver.findElement(By.id("NI4"))).build().perform();
        act.moveToElement(driver.findElement(By.id("NI16"))).click().perform();

        JavascriptExecutor js=(JavascriptExecutor)driver;
        js.executeScript("window.scrollBy(0,100)");
        driver.findElement(By.linkText("10-16yrs")).click();
        Thread.sleep(3000);
        JavascriptExecutor jp=(JavascriptExecutor)driver;
        jp.executeScript("window.scrollBy(0,200)");
        //driver.findElement(By.cssSelector("a[data-label='Pink Palm Print Sports Leggings (3-16yrs)']")).click();
    //List<WebElement> products=driver.findElements(By.cssSelector("span[class='Desc ']"));
    // wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.linkText("The Summer Shop")))).click();
    //driver.findElement(By.xpath("//*[@id=\"Three-Teaser-Stack69-edv0bargvu8b2r8n4uzb21biw_slide_0\"]/div/a[1]/div[2]/h3")).click();
    //System.out.println(products.size());
    //for (WebElement product:products) {
        // System.out.println(product.getText());
        //if (product.getText().contains("Pink Palm Print Sports Leggings (3-16yrs)")) {
           // product.click();
           // break;
        //}
    //}

    }
}