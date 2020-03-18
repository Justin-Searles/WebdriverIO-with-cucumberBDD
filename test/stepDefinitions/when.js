import { Given, When, Then } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import addressPage from '../pageobjects/address.page';
import purchasePage from '../pageobjects/purchase.page';
import fullPurchasePage from '../pageobjects/fullpurchase.page';

// *** the login flow
When (/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);
});

When (/^I click on the address link$/,function() {
    addressPage.addressFirst();
});

When (/^I click on the add address button$/,function() {
    addressPage.addressSecond();
});

// *** belongs to ta-address  feature
When (/^I add my personal information "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function (arg1, arg2, arg3, arg4) {
    addressPage.addressName(arg1, arg2, arg3, arg4);
});

When (/^I select my country information "([^"]*)" "([^"]*)"$/, function(arg1, arg2) {
    addressPage.addressLocation(arg1, arg2);
});

When (/^I add my address information "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function (arg1, arg2, arg3, arg4, arg5) {
    addressPage.addressAddress(arg1, arg2, arg3, arg4, arg5);    // entering user name, password and and submiting the page
});

When (/^I click save$/, function() {
    addressPage.addressSave();
});

When (/^the delete button is present and is clicked and confirmed$/, function() {
    addressPage.removeAddress();
});

When (/^I input game title "([^"]*)" into the text box and click the search button$/, function(arg1) {
    purchasePage.search(arg1);
});

When (/^I confirm the game is present$/, function() {
    purchasePage.results();
});

When (/^I click Add to Cart$/, function() {
    purchasePage.purchasePlus();
});

When (/^I input game title "([^"]*)" into the search box and click the search button$/, function(arg1) {
    fullPurchasePage.firstSearch(arg1);
});

When (/^I close the confirmation message$/, function() {
    purchasePage.bannerClose();
})

When (/^I click on the shopping cart$/, function() {
    fullPurchasePage.shoppingBag();
});

When (/^I start the purchase flow$/, function() {
    fullPurchasePage.startPurchaseFlow();
});

When (/^I select my purchase address$/, function() {
    fullPurchasePage.purchaseAddress();
});

When (/^I select my shipping method$/, function() {
    fullPurchasePage.shippingMethod();
});

When (/^I select my purchase method$/, function() {
    fullPurchasePage.purchaseMethod();
});

When (/^I input my card info "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and click confirmation$/, function(arg1, arg2, arg3, arg4, arg5, arg6) {
    fullPurchasePage.creditCardDetails(arg1, arg2, arg3, arg4, arg5, arg6);
});

When (/^I confirm my purchase$$/, function() {
    fullPurchasePage.finalPurchase();
})