import Page from './page';
import utl   from '../../utilities/common-utilities';

class fullPurchasePage extends Page {

    /**
    * define elements
    */
    get searchInput() {return $('//input[@id="small-searchterms"]'); }
    get searchButton() {return $('//input[@class="button-1 search-box-button"]'); }
    get shoppingBagInput() {return $('//span[@class="cart-label"]'); }
    get termsOfService() {return $('//input[@id="termsofservice"]'); }
    get checkoutButton() {return $('//button[@id="checkout"]'); }
    get addressButton() {return $('//div[@id="billing-buttons-container"]//input[@class="button-1 new-address-next-step-button"]'); }
    get nextDayAir() {return $('//input[@id="shippingoption_1"]'); }
    get mailingButton() {return $('//input[@class="button-1 shipping-method-next-step-button"]'); }
    get creditCard() {return $('//input[@id="paymentmethod_1"]'); }
    get creditCardButton1() {return $('//input[@class="button-1 payment-method-next-step-button"]');}
    get creditCardTypeInput() {return $('//select[@id="CreditCardType"]'); }
    get creditCardNameInput() {return $('//input[@id="CardholderName"]'); }
    get creditCardNumberInput()   {return $('//input[@id="CardNumber"]'); }
    get creditCardMonthInput() {return $('//select[@id="ExpireMonth"]'); }
    get creditCardYearInput()   {return $('//select[@id="ExpireYear"]'); }
    get creditCardCodeInput() {return $('//input[@id="CardCode"]'); }
    get creditCardButton2() {return $('//input[@class="button-1 payment-info-next-step-button"]');}
    get purchaseButton() {return $('//input[@class="button-1 confirm-order-next-step-button"]'); }
    get purchaseConfirm() {return $('//h1[contains(text(),"Thank you")]');}


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

    firstSearch(game) {
        browser.pause(2000);
        this.searchInput.setValue(game);
        this.searchButton.click();
    }

    shoppingBag() {
        this.shoppingBagInput.waitForClickable(3000);
        this.shoppingBagInput.click();
    }

    startPurchaseFlow() {
        this.checkoutButton.waitForDisplayed(2000);
        this.termsOfService.click();
        this.checkoutButton.click();
    }
 
    purchaseAddress(){
        this.addressButton.waitForDisplayed(1000);
        this.addressButton.click();
    }


    shippingMethod() {
        this.nextDayAir.waitForDisplayed(1000);
        this.nextDayAir.click();
        this.mailingButton.click();
    }

    purchaseMethod() {
        console.log(this.creditCard);
        this.creditCard.waitForDisplayed(1000);
        this.creditCard.click();
        this.creditCardButton1.click();
    }
    
    creditCardDetails(cardType, cardName, cardNumber, cardMonth, cardYear, CCV) {
        this.creditCardTypeInput.waitForDisplayed(1000);
        this.creditCardTypeInput.selectByVisibleText(cardType);
        this.creditCardNameInput.setValue(cardName);
        this.creditCardNumberInput.setValue(cardNumber);
        this.creditCardMonthInput.selectByVisibleText(cardMonth);
        this.creditCardYearInput.selectByVisibleText(cardYear);
        this.creditCardCodeInput.setValue(CCV);
        this.creditCardButton2.click();

    }

    finalPurchase() {
        this.purchaseButton.waitForDisplayed(1000);
        this.purchaseButton.click();
    }

    confirmPurchase() {
        this.purchaseConfirm.waitForDisplayed(5000);
        return this.purchaseConfirm.isDisplayed();
    }

}

export default new fullPurchasePage()