/// <reference types="Cypress"/>
import LoginPage from '../e2e/pages/loginPage.js'
import FormPage from './pages/formPage.js'
describe('Test 2: Form Submission', () => {
  const form = new FormPage()

  beforeEach('',()=>{
    form.visit() 
  })

  it('Test Case 2.1: Submit Form with Missing Data', ()=>{
      form.nameField().clear()
      form.emailField().type('test')
      form.submitButton().click()
      form.savedMessages().contains('No data saved yet.')
      form.nameField().checkValidity("Please fill in this field.")

    
      form.nameField().type('test')
      form.messageField().type('test')
     
      form.emailField().clear()
      form.submitButton().click()
      form.savedMessages().contains('No data saved yet.')
      form.emailField().checkValidity('Please fill in this field')
     
      const mails = {
          'test': "Please include an '@'",
          'test@': "Please enter a part following '@'",
          '@test.com':"Please enter a part followed by '@'"
      }
      cy.wrap(Object.keys(mails)).each((key)=>{
         form.emailField().clear()
         form.emailField().type(key)
         form.submitButton().click()
         form.savedMessages().contains('No data saved yet.')
         form.emailField().checkValidity(mails[key])
      })
      
      form.emailField().clear()
      form.emailField().type('test@mail')
      form.submitButton().click()
      form.savedMessages().contains('No data saved yet.')
      //form.emailField().checkValidity('')
      cy.get('.error').should('be.visible')
  })

  it(' Test Case 2.2: Submit Form with Valid Data', ()=>{
      const name = 'test'
      const mail = 'test@test.com'
      const message = 'Test message'

      const name2 = 'diff'
      const mail2 = 'other@test.com'
      const message2 = 'Different text'
      
      form.nameField().type(name)
      form.emailField().type(mail)
      form.messageField().type(message)
      form.submitButton().click()

      form.nameField().type(name2)
      form.emailField().type(mail2)
      form.messageField().type(message2)
      form.submitButton().click()

      form.savedMessages().children().should('have.length',3)

      form.getMessage(0).should('contain',name)
      form.getMessage(0).should('contain', mail)
      form.getMessage(0).should('contain', message)
      
      form.getMessage(1).should('contain',name2)
      form.getMessage(1).should('contain', mail2)
      form.getMessage(1).should('contain', message2)
  })
})


