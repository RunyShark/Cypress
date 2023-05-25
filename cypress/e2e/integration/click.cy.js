describe('asserts', () => {
  it('bassic', () =>
    cy
      .visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
      .get('#wsf-1-field-29')
      .should('be.visible')
      .type('{pageup}')
      .type('Test Nombre')
      .get('#wsf-1-label-36-row-1')
      .click()
      .get('#wsf-1-field-34')
      .click());

  it('forzado', () =>
    cy
      .visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
      .get('#wsf-1-field-29')
      .should('be.visible')
      .type('{pageup}')
      .type('Test Nombre')
      .get('#wsf-1-label-36-row-1')
      .click()
      .get('#wsf-1-field-34')
      .click({ force: true }));

  it('cordenadoas', () =>
    cy
      .visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
      .get('#wsf-1-field-29')
      .should('be.visible')
      .type('{pageup}')
      .type('Test Nombre')
      .get('#wsf-1-label-36-row-1')
      .click()
      .get('#wsf-1-field-34')
      .click());
});
