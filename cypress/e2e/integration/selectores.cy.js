<reference type="Cypress" />;

describe('Web TestingQaRvn', () => {
  it('select by id', () =>
    cy
      .visit('https://testingqarvn.com.es/datos-personales/')
      .get('#wsf-1-field-21')
      .should('be.visible')
      .type('{pageup}')
      .type('test'));

  it('Selector by class ', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
      .get('#wsf-1-field-22')
      .type('wenas');
  });
});
