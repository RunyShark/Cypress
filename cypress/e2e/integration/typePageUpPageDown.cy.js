describe('PageDownPageUp', () => {
  it('PageUp', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
      .title()
      .should('eq', 'Datos Personales | TestingQaRvn')
      .get('#wsf-1-field-21')
      .type('{pageup}')
      .type('{pagedown}');
  });
});
