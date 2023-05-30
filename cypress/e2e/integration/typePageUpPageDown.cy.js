describe('testing PageDown PageUp types', () => {
  it('PageUp and PageDown', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
      .title()
      .should('eq', 'Datos Personales | TestingQaRvn')
      .get('#wsf-1-field-21')
      .type('{pageup}')
      .type('{pagedown}');
  });
});
