const { Given, When, Then } = require('cucumber');
const ClientFunction = require('testcafe').ClientFunction;
const { Selector } = require('testcafe');
const homePageElements = require('../pages/home_page.js');

var i;

Given('I am browsing the google.com URL', async function () {
    await testController
        .navigateTo(homePageElements.url)
});

When('I enter the keyword IE DIGITAL in the search textbox and click search button', async function () {
    await testController
        .typeText(homePageElements.GoogleSearch.searchTextbox(),'ie digital')
        .wait(500)
        .click(homePageElements.GoogleSearch.searchButton())
        .wait(500)
});

Then('I will see the i.e. as the first link', async function () {
    await testController
        .expect(homePageElements.GoogleSearch.ieLinkIsPresent().innerText).eql('(i.e.,)')
        .wait(500)
        var result = await homePageElements.GoogleSearch.ieLinkIsPresent().innerText
        console.log('Search Result: '+result)
});
