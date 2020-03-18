import Page from './page';
import utl   from '../../utilities/common-utilities';

class RegisterPage extends Page {

    /**
    * define elements
    */

   get maleRadio() {return $('//input[@id="gender-male"]'); }
   get femaleRadio() {return $('//input[@id="gender-female"]'); }
   get firstNameInput() {return $('//input[@id="FirstName"]'); }
   get lastNameInput() {return $('//input[@id="LastName"]'); }
   get bDayInput() {return $('//select[@name="DateOfBirthDay"]'); }
   get bMonthInput() {return $('//select[@name="DateOfBirthMonth"]'); }
   get bYearInput() {return $('//select[@name="DateOfBirthYear"]'); }
   get emailInput()   {return $('//input[@id="Email"]'); }
   get companyInput() {return $('//input[@id="Company"]'); }
   get passwordInput()   { return $('//input[@id="Password"]'); }
   get confirmPasswordInput() {return $('//input[@id="ConfirmPassword"]'); }
   get registerButton()     { return $('//input[@id="register-button"]'); }
   get registerFinish()     { return $('//div[@class="result" and text()="Your registration completed"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('register');      //this will append `login` to the baseUrl to form complete URL
        browser.waitUntil(() => {
            return browser.getTitle() === 'Your store. Register'
          }, 5000, 'expected text to be different after 5s');
    }
    /**
     * your page specific methods
     */

    registerGender(){
        this.maleRadio.click();
    }


    registerDate(DateOfBirthDay, DateOfBirthMonth, DateOfBirthYear) {
        this.bDayInput.selectByVisibleText(DateOfBirthDay);
        this.bMonthInput.selectByVisibleText(DateOfBirthMonth);
        this.bYearInput.selectByVisibleText(DateOfBirthYear);
    }
    
    registerName(FirstName, LastName, EmailReg, Company, PasswordReg) {
        this.firstNameInput.setValue(FirstName);
        this.lastNameInput.setValue(LastName);
        this.emailInput.setValue(EmailReg);
        this.companyInput.setValue(Company);
        this.passwordInput.setValue(PasswordReg);
        this.confirmPasswordInput.setValue(PasswordReg);
        this.registerButton.click();
    }

    isRegistrationCompleted() {
        this.registerFinish.waitForDisplayed(30000);
        return this.registerFinish.isDisplayed();
    }
}

export default new RegisterPage()
