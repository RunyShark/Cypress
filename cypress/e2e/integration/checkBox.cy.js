require('cypress-plugin-tab');

describe('asserts', () => {
  it('bassic', () =>
    cy
      .visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
      .get('#wsf-1-field-29')
      .should('be.visible')
      .type('{pageup}')
      .type('Test Nombre')
      .get('#wsf-1-label-36-row-1')
      .click());
});
