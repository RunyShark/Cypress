describe('asserts', () => {
  it('asserts', () =>
    cy
      .visit('https://testingqarvn.com.es/datos-personales/')
      .get('#wsf-1-field-21')
      .should('be.visible')
      .type('{pageup}')
      .type('Dario'));
});
