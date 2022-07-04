/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I open Home page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')


})

When('the search phrase Online is entered', () => {

        cy.get('[id= searchTerm]').type('online{enter}')
    

})

Then('results for Online are shown', () => {

  
        cy.get('h2').contains('Search Results:')
       
    



})  