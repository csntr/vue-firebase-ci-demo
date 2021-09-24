describe('Increment test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('starts from zero', () => {
    cy.get('pre').should('have.text', 0)
  })

  it('increments by 1', () => {
    cy.get('button').click()
    cy.get('pre').should('have.text', 1)
  })
})
