require('cypress-plugin-tab');

describe('testing form with tabs', () => {
  it('Tab', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
      .title()
      .should('eq', 'Datos Personales | TestingQaRvn')
      .get('#wsf-1-field-21')
      .type('Dario')
      .tab()
      .type('Moreno')
      .tab()
      .type('correo@correo')
      .tab()
      .type('Mexico')
      .tab()
      .type('Mexico')
      .tab()
      .click();
  });



});
