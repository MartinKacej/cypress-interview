/// <reference types="Cypress"/>

describe('Test: Additional tests', () => {
  it('Open modal window',()=>{
      cy.visit('/home') 
      cy.contains('Open Modal').click()
      cy.get('.modal').should('be.visible')
      cy.contains('Close Modal').click()
      cy.get('.modal').should('not.exist')
  })
  it('Open Select page',()=>{
      cy.visit('/select-interaction') 
      cy.get('select').select('Option 2')
      cy.get('p').contains('You selected').should('be.visible').and('contain','option2')
      cy.get('select').select('Option 1')
      cy.get('p').contains('You selected').should('be.visible').and('contain','option1')
  })
})

describe('Testing Drag and Drop Functionality', () => {

  beforeEach('',()=>{
    cy.visit('/home') 
  })

  it('Add/Delete',()=>{
      cy.get('.drag-items').children().should('have.length', 3)
      cy.get('button').contains('Add').click()
      cy.get('.drag-items').children().should('have.length', 4)
      cy.get('.delete-all-button').click()
      cy.get('.drag-items').children().should('have.length', 0)
      cy.get('button').contains('Add').click()
      cy.get('.drag-items').children().should('have.length', 1)
  })
  it('',()=>{
  })
})

