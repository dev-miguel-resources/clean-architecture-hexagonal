import { AchiviementMother } from "../../../src/tests/achievement-mother"

describe("App Test e2e", () => {
  it("should visit home and submit form", () => {
    cy.visit("http://localhost:3000/")
    cy.get("form").submit()
    cy.get("label")
    cy.get("input[name=name]").type("Mig")
    cy.get("button[type=submit]").click()
    cy.end()
  })

  it("should api call fake for listAll Achievements", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/achievements",
      body: AchiviementMother.learnArchitectureDto(),
    }).then(response => {
      expect(response.status).to.be.eq(200)
    })
    cy.screenshot().end()
  })
})
