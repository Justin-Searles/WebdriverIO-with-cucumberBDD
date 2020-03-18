import Page from './page';
import utl from '../../utilities/common-utilities';

class purchasePage extends Page {

    /**
    * define elements
    */

    //get usernameInput()   { return $('div.form-group:nth-child(1) > input:nth-child(3)'); }
    get searchInput()     { return $('//input[@class="search-text" and @type="text"]'); }
    get searchButton()    { return $('//div[@class="buttons"]//input[@type="submit" and @value="Search"]'); }
    get avengersResult()   { return $('//h2[@class="product-title"]//a[contains(text(),"Marvel\'s Avengers - Xbox One")]'); }
    get avengersGame()     { return $('//input[@value="Add to cart" and @class="button-2 product-box-add-to-cart-button"]'); }
    get confirmationBanner()     { return $('//div[@class="bar-notification success"]'); }
    get bannerX() {return $('//div[@class="bar-notification success"]//span[@class="close"]');}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('search')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    search (game) {
      //this.waitForloginPageToLoad();
        this.searchInput.setValue(game);
        browser.pause(3000);
        this.searchButton.click();
        browser.pause(5000);
    }

    results(){
        this.avengersResult.waitForDisplayed(5000);
        return this.avengersResult.isDisplayed();
    }

    purchasePlus(){
        this.avengersGame.click();
    }

    purchaseConfirm(){
        this.confirmationBanner.waitForDisplayed(1000);
        return this.confirmationBanner.isDisplayed();
    }

    bannerClose() {
        this.bannerX.click();
    }
}

export default new purchasePage()