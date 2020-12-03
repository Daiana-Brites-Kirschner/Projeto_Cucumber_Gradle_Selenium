package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/",
        glue = "steps",
        tags = {"@funcionais"},
        plugin = {"pretty","html:target/report-html","json:target/report.json"},
        monochrome = false,
        snippets = SnippetType.CAMELCASE,
        dryRun = false,
        strict = false
)
public class RunnerFuncionalTest {
    @BeforeClass
    public static void reset() {

        WebDriver driver = new ChromeDriver();
        System.setProperty("webdriver.chrome.driver", "chromedriver_linux64/drivers/chromedriver86l");
        driver.get("https://srbarriga.herokuapp.com/login");
        driver.findElement(By.id("email")).sendKeys("daia.brites@gmail.com");
        driver.findElement(By.id("senha")).sendKeys("flor");
        driver.findElement(By.tagName("button")).click();
        driver.findElement(By.linkText("reset")).click();
        driver.quit();
    }
}
