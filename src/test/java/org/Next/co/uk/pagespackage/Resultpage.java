package org.Next.co.uk.pagespackage;

import com.google.gson.internal.bind.util.ISO8601Utils;
import org.Next.co.uk.common.DriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.Random;

public class Resultpage extends DriverFactory {

    public void selectproduct() {
        List<WebElement> brands = driver.findElements(By.cssSelector("div[class='Arrow']"));
        System.out.println(brands.size());
        brands.get(3).click();
      // driver.findElement(By.cssSelector("label[for='brand-nike']")).click();
    }

    public void brand(String Brand){

        driver.findElement(By.id("sli_search_1")).sendKeys(Brand);
        driver.findElement(By.id("sli_search_1")).sendKeys(Keys.ENTER);

        JavascriptExecutor jj=(JavascriptExecutor)driver;
        jj.executeScript("window.scrollBy(0,400)");
        List<WebElement>Products=driver.findElements(By.cssSelector("div[class='Info']"));
        Products.size();
        Random random=new Random();
        WebElement randomno=Products.get(random.nextInt(Products.size()-1));
        randomno.click();
    }
    

}


