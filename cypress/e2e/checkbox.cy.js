/// <reference types="Cypress"/>

describe('Test 4: Checkbox Interaction', () => {
  it('Test Case 4.1: Checkbox Toggling',()=>{
    cy.visit('/switch-interaction')
    cy.get('p').contains('The switch is OFF!')
    cy.get('input').check()
    cy.get('p').contains('The switch is ON!')
    cy.get('input').uncheck()
    cy.get('p').contains('The switch is OFF!')
  })
})

