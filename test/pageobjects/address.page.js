import Page from './page';
import utl   from '../../utilities/common-utilities';

class AddressPage extends Page {

    /**
    * define elements
    */
    get addressLink() {return $('//div[@class="footer-block my-account"]//a[contains(text(),"Addresses")]'); }
    get addressAdd() {return $('//input[@class="button-1 add-address-button"]'); }
    get firstNameInput() {return $('//input[@id="Address_FirstName"]'); }
    get lastNameInput() {return $('//input[@id="Address_LastName"]'); }
    get emailInput() {return $('//input[@id="Address_Email"]'); }
    get companyInput() {return $('//input[@id="Address_Company"]'); }
    get countryInput() {return $('//select[@id="Address_CountryId"]'); }
    get stateInput() {return $('//select[@id="Address_StateProvinceId"]'); }
    get cityInput()   {return $('//input[@id="Address_City"]'); }
    get addressOneInput() {return $('//input[@id="Address_Address1"]'); }
    get addressTwoInput()   { return $('//input[@id="Address_Address2"]'); }
    get zipCodeInput() {return $('//input[@id="Address_ZipPostalCode"]'); }
    get phoneNumberInput() {return $('//input[@id="Address_PhoneNumber"]'); }
    get addressButton()     { return $('//input[@type="submit" and @value="Save"]'); }
    get addressFinish()     { return $('//li[text()="Herman Munster"]'); }
    get deleteButton() {return $('//div[@class="title" and .="Herman Munster"]//following-sibling::div[@class="buttons"]//input[@type="button" and @value="Delete"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login');      //this will append `login` to the baseUrl to form complete URL
        browser.waitUntil(() => {
            return browser.getTitle() === 'Your store. Login'
          }, 5000, 'expected text to be different after 5s');
    }
    /**
     * your page specific methods
     */

    addressFirst() {
        this.addressLink.isClickable();
        browser.pause(1000);
        this.addressLink.click();
    }

    addressSecond() {
        this.addressAdd.click();
        this.firstNameInput.waitForDisplayed(5000);
    }
 
    addressName(FirstName, LastName, EmailReg, Company){
        this.firstNameInput.setValue(FirstName);
        this.lastNameInput.setValue(LastName);
        this.emailInput.setValue(EmailReg);
        this.companyInput.setValue(Company);
    }


    addressLocation(Country, State) {
        this.countryInput.selectByVisibleText(Country);
        browser.pause(500);
        this.stateInput.selectByVisibleText(State);
    }
    
    addressAddress(City, AddressOne, AddressTwo, ZipCode, PhoneNumber) {
        this.cityInput.setValue(City);
        this.addressOneInput.setValue(AddressOne);
        this.addressTwoInput.setValue(AddressTwo);
        this.zipCodeInput.setValue(ZipCode);
        this.phoneNumberInput.setValue(PhoneNumber);
    }

    addressSave() {
        this.addressButton.click();
    }

    isAddressCompleted() {
        //this.addressFinish.waitForDisplayed(30000);
        return this.addressFinish.isDisplayed();
    }

    removeAddress() {
        this.deleteButton.click();
        browser.acceptAlert();
        browser.pause(500);
    }

}

export default new AddressPage()