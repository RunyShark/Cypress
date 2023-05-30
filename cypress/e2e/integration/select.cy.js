require('cypress-plugin-tab');

describe('Web TestingQaRvn', () => {
  it('select by id1', () =>
    cy
      .visit('https://testingqarvn.com.es/calendarios/')
      .title()
      .should('eq', 'Calendarios | TestingQaRvn')
      .get('#wsf-1-field-73')
      .should('be.visible')
      .type('{pageup}')
      .select('Mac')
      .should('have.value', 'Mac')
      .tab()
      .select('Yosemite')
      .should('have.value', 'Yosemite')
      .log('Ok'));

  it('select by id2', () => {
    cy.visit('https://www.google.com/')
      .title()
      .should('eq', 'Google')
      .get('#APjFqb')
      .should('be.visible')
      .type('{pageup} peso pluma {enter}');
  });

  it.only('multi select', () => {
    cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
      .title()
      .should('eq', 'Google')
      .get('#APjFqb')
      .should('be.visible')
      .type('{pageup} peso pluma {enter}');
    // ['opcciones','opcciones','opcciones']
  });
});
