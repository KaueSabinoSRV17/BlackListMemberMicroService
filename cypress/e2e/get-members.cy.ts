/// <reference types="cypress" />

describe('Members', () => {

  it('Gets Members', () => {
    cy.request('http://localhost:3000/members')
  })

})