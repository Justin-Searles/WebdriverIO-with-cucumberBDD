import { Then } from 'cucumber';
import addressPage from '../pageobjects/address.page';
import loginPage from '../pageobjects/login.page';
import purchasePage from '../pageobjects/purchase.page';
import fullPurchasePage from '../pageobjects/fullpurchase.page';

Then ('I should see the logout link', function() {
  loginPage.isLogoutShowing().should.be.true;
});

Then('I should see my address info on the address page', function () {
  addressPage.isAddressCompleted().should.be.true;
});

Then('I should not see my address info on the address page', function () {
  addressPage.isAddressCompleted().should.be.false;
});

Then('I should receive a confirmation message', function () {
  purchasePage.purchaseConfirm().should.be.true;
});

Then ('I should receive a confirmation message for my purchase', function() {
  fullPurchasePage.confirmPurchase().should.be.true;
});