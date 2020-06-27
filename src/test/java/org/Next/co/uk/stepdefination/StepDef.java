package org.Next.co.uk.stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.Next.co.uk.pagespackage.Homepage;
import org.Next.co.uk.pagespackage.Resultpage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class StepDef {

    Homepage page=new Homepage();
    Resultpage resultpage=new Resultpage();
    @Given("^User is on homepage$")
    public void user_is_on_homepage() throws Throwable {
    page.baseurl();
    }

    @When("^User go to Girls option and select age$")
    public void user_go_to_Girls_option_and_select_age() throws Throwable {
    resultpage.selectproduct();
    }

    @When("^User search product with \"([^\"]*)\"$")
    public void user_search_product_with(String Brand) throws Throwable {

    resultpage.brand(Brand);
    }

    @Then("^User should found all the required product$")
    public void user_should_found_all_the_required_product() throws Throwable {

    }

    @Then("^User should select the required product$")
    public void user_should_select_the_required_product() throws Throwable {

    }
}
