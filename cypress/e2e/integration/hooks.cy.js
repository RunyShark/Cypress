describe('hooke', () => {
  before(() =>
    cy
      .visit('https://the-internet.herokuapp.com/checkboxes')
      .title()
      .should('eq', 'The Internet')
      .get('[type="checkbox"]')
      .should('be.visible')
      .as('check')
  );
  it('test', () => cy.get('@check').check().should('be.checked'));

  after(() => cy.get('@check').uncheck().should('not.be.checked'));
});
