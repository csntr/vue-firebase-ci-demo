describe('Increment test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('starts from zero', () => {
    cy.get('pre').should('have.text', 0)
  })
})
