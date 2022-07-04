/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import searchpage from "./searchpage";

Given('I open Home page', () => {
    searchpage.visit()


})

When('the search phrase Online is entered', () => {

       searchpage.searchterm('online{enter}')
    

})

Then('results for Online are shown', () => {

  
        cy.get('h2').contains('Search Results:')
       
    

})  