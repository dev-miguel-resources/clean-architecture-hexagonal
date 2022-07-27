import { AchiviementMother } from './../../src/tests/achievement-mother'

describe('Achievement Form', () => {
  it('should visit home and submit form', () => {
    cy.visit('http://localhost:3000/')
    cy.get('form').submit()
    cy.get('label')
    cy.get('input[name=name]').type('Miguel')
    cy.get('button[type=submit]').click()
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/achievements',
      body: AchiviementMother.learnArchitectureDto(),
    }).then(response => {
      expect(response.status).to.be.eq(200)
    })
    cy.screenshot().end()
  })
})
