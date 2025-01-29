/// <reference types="Cypress"/>
export default class FormPage {
    visit(){
        cy.visit('http://localhost:3000/form')
    }
    submitButton(){
       return cy.get('button').contains("Save")
    }
    nameField(){
        return cy.get('#name')
    }
    emailField(){
        return cy.get('#email')
    }
    messageField(){
        return cy.get('#message')
    }
    savedMessages(){
        return cy.get('.saved-data')
    }
    getMessage(id){
        return cy.get('.saved-data > .saved-item').eq(id)
    }
}
