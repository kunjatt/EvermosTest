import {allElement} from '../fixtures/element'
const baseUrl = 'https://evermos.com/home/'
const phoneNumber = 6281223334444
const password = 'password'

Cypress.on('uncaught:exception', () => {
  return false
})
describe('Success go to Toko Saya', () => {
  it('Success go to Toko HUHUHUH', () => {
    cy.visit(baseUrl)
    cy.wait(2000)
    cy.get(allElement.btnPageLogin).click()
    cy.get(allElement.inputPhoneNumber).type(phoneNumber)
    cy.get(allElement.inputPassword).type(password)
    cy.get(allElement.btnLogin).click().wait(5000)
    cy.wait(5000)
    cy.get(allElement.btnMyStore).click().wait(5000)
    cy.contains('Toko HUHUHUH')
  })
})