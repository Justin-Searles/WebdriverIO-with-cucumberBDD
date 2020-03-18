import { Given} from 'cucumber';
import loginPage from '../pageobjects/login.page.js';
import purchasePage from '../pageobjects/purchase.page.js';

Given ('I am on the login page', function () {
  loginPage.open(); //navigating to login page
  browser.getTitle().should.equal('Your store. Login');
});

Given ('I am on the search page', function () {
  purchasePage.open();
  browser.getTitle().should.equal('Your store. Search');
});
