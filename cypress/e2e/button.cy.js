/// <reference types="Cypress"/>

describe('Test 3: Button Interaction', () => {
  it('Test Case 3.1: Button Text Changes After Click',()=>{
    cy.visit('/button-interaction') 
    cy.contains('Press Me').click()
    cy.get('p').contains('Button has been pressed')
    cy.contains('Press Me').invoke('attr','style').should('contain','green')
  })
})

