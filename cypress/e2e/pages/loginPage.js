/// <reference types="Cypress"/>
export default class LoginPage {
    visit(){
        cy.visit('http://localhost:3000/')
    }
    userField(){
       return cy.get('[data-cy="username-input"]')
    }
    passField(){
        return cy.get('[data-cy="password-input"]')
    }
    submitButton(){
        return cy.get('[data-cy="login-button"]')
    }
    userWarning(){
        return cy.get('[data-cy="error-message"]')
    }
    signIn(user,pass){
        this.userField().type(user)
        this.passField().type(pass)
        this.submitButton().click()
    }
}

