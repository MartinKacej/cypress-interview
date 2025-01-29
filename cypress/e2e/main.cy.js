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
  it('Drag test',()=>{
      cy.get('.drag-items').contains('Item 1').should('have.attr','draggable')
      cy.get('.drag-items').contains('Item 1').invoke('attr','draggable').should('eq','true')
      cy.get('.drag-items').get('.drag-item').eq(0).should('have.text','Item 1')
      cy.get('.drag-items').contains('Item 1').trigger('dragstart')
      cy.get('.drag-items').contains('Item 3').trigger('drop')
      cy.get('.drag-items').get('.drag-item').eq(0).should('have.text','Item 2')
      cy.get('.drag-items').get('.drag-item').eq(1).should('have.text','Item 3')
      cy.get('.drag-items').get('.drag-item').eq(2).should('have.text','Item 1')
  })
  it('Drag to invalid area',()=>{
      cy.get('.drag-items').contains('Item 3').trigger('dragstart')
      cy.get('.drag-items').get('h3').trigger('drop')
      cy.get('.drag-items').get('.drag-item').eq(2).should('have.text','Item 3')
      
      cy.get('.drag-items').contains('Item 1').trigger('dragstart')
      cy.get('button').contains('Contact').trigger('drop')
      cy.get('.drag-items').get('.drag-item').eq(0).should('have.text','Item 1')
  })
})

