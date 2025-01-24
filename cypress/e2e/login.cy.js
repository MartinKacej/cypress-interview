/// <reference types="Cypress"/>
import LoginPage from '../e2e/pages/loginPage.js'

describe('Test 1: Login Functionality', () => {
  const login = new LoginPage()

  beforeEach('',()=>{
    cy.visit('/') 
  })

  it('Test Case 1.1: Login with Valid Credentials', () => {
      cy.fixture('example.json').as('creds').then((creds)=>{
          login.signIn(creds.username, creds.password)
      })
      cy.url().should('contain','home')
  })

  it('Test Case 1.2: Login with Invalid Credentials', () => {
      login.signIn('invalid', 'invalid')
      login.userWarning().should('be.visible')
      cy.url().should('eq',Cypress.config().baseUrl)
  })

  it('Test Case 1.3: Login with Missing Credentials', () => {
      login.userField().clear()
      login.passField().type('invalid')
      login.submitButton().click()
      cy.on('window:alert',(txt)=>{
          expect(txt).to.contains('Please fill in this field');
      })
      cy.url().should('eq',Cypress.config().baseUrl) 

      login.userField().type('test')
      login.passField().clear()
      login.submitButton().click()
      cy.on('window:alert',(txt)=>{
          expect(txt).to.contains('Please fill in this field');
      })
      cy.url().should('eq',Cypress.config().baseUrl) 
  })

  it('Test Case 1.4: Login with Valid Credentials API',() => {
    
      cy.fixture('example.json').as('creds').then((creds)=>{
        cy.request({
            method:'POST',
            url:Cypress.env('apiUrl')+'/login',
            body:creds}).as('req')
      }).then((response)=>{
        expect(response.status).eq(200)
        expect(response.body.token).to.not.empty
        cy.log('TOKEN: '+response.body.token)
      })

     cy.request({method:'GET', url:Cypress.env('apiUrl')+'/home'}).as('req').then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.message).to.not.empty
     })
  })
    //TODO test for invalid API Credentials
})
